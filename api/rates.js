module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

  try {
    const https = require('https');

    const fetchJSON = (url) => new Promise((resolve, reject) => {
      const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resp) => {
        let raw = '';
        resp.on('data', chunk => raw += chunk);
        resp.on('end', () => { try { resolve(JSON.parse(raw)); } catch(e) { reject(e); } });
      });
      req.on('error', reject);
      req.setTimeout(5000, () => { req.destroy(); reject(new Error('timeout')); });
    });

    // USD/TRY ve EUR/TRY
    const fx = await fetchJSON('https://open.er-api.com/v6/latest/USD');
    const tryRate = fx.rates && fx.rates.TRY ? fx.rates.TRY : 42.8;
    const eurTry  = fx.rates && fx.rates.EUR ? (fx.rates.TRY / fx.rates.EUR) : 50.2;

    // ONS altin USD - fawazahmed0 currency API (ucretsiz, kayit yok)
    let onsUSD = 3020;
    try {
      const gold = await fetchJSON('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json');
      if (gold.xau && gold.xau.usd) {
        onsUSD = gold.xau.usd; // 1 XAU = kac USD
      }
    } catch(e) {
      // fallback: open.er-api XAU dene
      try {
        const gold2 = await fetchJSON('https://open.er-api.com/v6/latest/XAU');
        if (gold2.rates && gold2.rates.USD) onsUSD = 1 / gold2.rates.USD;
      } catch(e2) {}
    }

    // Gram altin TL = (ONS USD / 31.1035) * USD/TRY
    const gramAltinTL = (onsUSD / 31.1035) * tryRate;

    res.status(200).json({
      usd:   parseFloat(tryRate.toFixed(2)),
      eur:   parseFloat(eurTry.toFixed(2)),
      altin: parseFloat(gramAltinTL.toFixed(2)),
      ons:   parseFloat(onsUSD.toFixed(2)),
      kaynak: 'open.er-api + fawazahmed0',
      zaman: new Date().toISOString()
    });

  } catch (e) {
    res.status(200).json({
      usd: 42.8, eur: 50.2, altin: 7100, ons: 3020,
      kaynak: 'fallback', zaman: new Date().toISOString()
    });
  }
};
