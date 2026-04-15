const https = require('https');

// BU KISIM EKSİKTİ: Veriyi internetten çeken yardımcı araç
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

// ANA FONKSİYON
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  try {
    // URL'yi daha stabil olan 'finance' (e harfi ile) yaptık
    const data = await fetchJSON('https://finance.truncgil.com/v4/today.json');

    const usdVal = parseFloat(data['USD']?.Buying || data['USDTRY']?.Buying || 44.75);
    const eurVal = parseFloat(data['EUR']?.Buying || data['EURTRY']?.Buying || 52.75);
    const altinData = data['gram-altin'] || data['GA'] || data['Gram Altın'];
    const altinVal = parseFloat(altinData?.Buying || 7100);
    const onsVal = parseFloat(((altinVal * 31.1035) / usdVal).toFixed(2));

    // Burası Mangır'ın anlayacağı dil
    return res.status(200).json({
      usd: usdVal,
      USD: usdVal,
      eur: eurVal,
      EUR: eurVal,
      altin: altinVal,
      ALTIN: altinVal,
      ons: onsVal,
      kaynak: 'truncgil-canli',
      zaman: new Date().toISOString(),
    });

  } catch (e) {
    // Bir hata olursa Mangır yine de çalışmaya devam etsin diye "yedek" veriler
    return res.status(200).json({
      usd: 44.75, 
      eur: 52.75, 
      altin: 7100, 
      ons: 4935,
      kaynak: 'hata-yedek-modu',
      hata_detayi: e.message
    });
  }
};
