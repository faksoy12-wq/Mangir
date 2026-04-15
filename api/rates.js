const https = require('https');

const fetchJSON = (url) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resp) => {
      let raw = '';
      resp.on('data', (chunk) => (raw += chunk));
      resp.on('end', () => { try { resolve(JSON.parse(raw)); } catch (e) { reject(e); } });
    });
    request.on('error', reject);
    request.setTimeout(5000, () => { request.destroy(); reject(new Error('timeout')); });
  });

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const data = await fetchJSON('https://finans.truncgil.com/v3/today.json');

    const usdVal = parseFloat(data.USD?.Selling || 44);
    const eurVal = parseFloat(data.EUR?.Selling || 52);
    
    // BURASI KRİTİK: Altını bulana kadar her yere bakıyoruz
    const altinObj = data["Gram Altın"] || data["gram-altin"] || data["GA"] || data["altin"];
    const altinVal = altinObj ? parseFloat(altinObj.Selling) : 7100;
    
    const onsVal = parseFloat(((altinVal * 31.1035) / usdVal).toFixed(2));

    return res.status(200).json({
      usd: usdVal,
      eur: eurVal,
      altin: altinVal,
      ons: onsVal,
      kaynak: 'truncgil-v3-canli',
      zaman: new Date().toISOString()
    });
  } catch (e) {
    return res.status(200).json({ usd: 44, eur: 52, altin: 7100, kaynak: 'hata-yedek' });
  }
};
