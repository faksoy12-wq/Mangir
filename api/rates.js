export default async function handler(req, res) {
  // CORS ve Önbellek ayarları
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  try {
    // SADECE VE SADECE TRUNCGIL API'YE GİDİYORUZ
    const response = await fetch('https://finance.truncgil.com/v3/today.json', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    const data = await response.json();

    // Rakamları temizleme fonksiyonu ("7.500,50" -> 7500.50)
    const temizle = (str) => {
      if (!str) return 0;
      return parseFloat(str.replace(/\./g, '').replace(',', '.'));
    };

    // Doğrudan Truncgil'in verilerini alıyoruz
    const usd = temizle(data.USD?.Selling);
    const eur = temizle(data.EUR?.Selling);
    const altin = temizle(data["Gram Altın"]?.Selling || data["GA"]?.Selling);

    // Ekranda direkt bu veriler görünecek
    return res.status(200).json({
      usd: usd,
      eur: eur,
      altin: altin,
      kaynak: 'sadece-truncgil'
    });

  } catch (error) {
    // Truncgil yanıt vermezse sadece hata döner
    return res.status(500).json({ 
      hata: "Truncgil API'ye bağlanılamadı veya yanıt alınamadı." 
    });
  }
}
