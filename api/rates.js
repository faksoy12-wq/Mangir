// Sayı temizleme fonksiyonu: "7.100,50" -> 7100.50 yapar
const cleanNum = (str) => {
  if (!str) return 0;
  // Önce binlik ayırıcı olan noktayı kaldır, sonra virgülü noktaya çevir
  let cleaned = str.toString().replace(/\./g, '').replace(',', '.');
  return parseFloat(cleaned);
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const data = await fetchJSON('https://finance.truncgil.com/v3/today.json');

    const usdVal = cleanNum(data.USD?.Selling || "44.75");
    const eurVal = cleanNum(data.EUR?.Selling || "52.75");
    
    const altinObj = data["Gram Altın"] || data["gram-altin"] || data["GA"];
    const altinVal = altinObj ? cleanNum(altinObj.Selling) : 7100;
    
    const onsVal = cleanNum(data.ONS?.Selling || "4935");

    return res.status(200).json({
      usd: usdVal,
      eur: eurVal,
      altin: altinVal,
      ons: onsVal,
      kaynak: 'truncgil-v3-temiz',
      zaman: new Date().toISOString()
    });
  } catch (e) {
    return res.status(200).json({ usd: 44.75, eur: 52.75, altin: 7100, ons: 4935 });
  }
};
