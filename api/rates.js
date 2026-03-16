module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  try {
    const https = require('https');
    const data = await new Promise((resolve, reject) => {
      https.get('https://finans.truncgil.com/v4/today.json', (resp) => {
        let raw = '';
        resp.on('data', chunk => raw += chunk);
        resp.on('end', () => {
          try { resolve(JSON.parse(raw)); }
          catch(e) { reject(e); }
        });
      }).on('error', reject);
    });
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Kur verisi alinamadi: ' + e.message });
  }
};
