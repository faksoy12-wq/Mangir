const https = require('https');

const fetchJSON = (url) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    }, (resp) => {
      let raw = '';
      resp.on('data', (chunk) => (raw += chunk));
      resp.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(e); }
      });
    });
    request.on('error', reject);
    request.setTimeout(8000, () => { request.destroy(); reject(new Error('timeout')); });
  });

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  try {
    const data = await fetchJSON('https://finans.truncgil.com/v4/today.json');

    const usd       = parseFloat(data['USD']?.Buying || 42.8);
    const eur       = parseFloat(data['EUR']?.Buying || 50.2);
    const gramAltin = parseFloat(data['gram-altin']?.Buying || data['Gram Altın']?.Buying || 7100);
    const onsUSD    = parseFloat(((gramAltin * 31.1035) / usd).toFixed(2));

    return res.status(200).json({
      usd:    parseFloat(usd.toFixed(2)),
      eur:    parseFloat(eur.toFixed(2)),
      altin:  parseFloat(gramAltin.toFixed(2)),
      ons:    onsUSD,
      kaynak: 'truncgil',
      zaman:  new Date().toISOString(),
    });

  } catch (e) {
    return res.status(200).json({
      usd: 42.8, eur: 50.2, altin: 7100, ons: 3020,
      kaynak: 'fallback',
      zaman:  new Date().toISOString(),
    });
  }
};
