// Sayfa yüklenince hemen yönlendir - tek sayfalık uygulama
window.MANGIR_VERSION = '2.0';
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div id="splash">
  <div class="l-coin l-coin-lg"></div>
  <div class="splash-logo">Mangır</div>
  <div class="splash-tagline">Finansal özgürlüğe giden yol</div>
  <div class="splash-loader"></div>
</div>
<div id="auth-screen">
  <div class="auth-header"><div class="auth-logo" style="display:flex;align-items:center;justify-content:center;"><div class="l-coin l-coin-sm"></div>Mangır</div><div class="auth-sub">Finansal özgürlüğe giden yol</div></div>
  <div class="auth-body">
    <div id="profile-select-mode" style="display:none;">
      <div style="font-size:18px;font-weight:700;margin-bottom:6px;">Hoşgeldin 👋</div>
      <div style="font-size:13px;color:var(--ink3);margin-bottom:20px;">Hangi profille devam etmek istiyorsun?</div>
      <div class="profile-list" id="profile-list"></div>
      <button class="new-profile-btn" onclick="showNewProfile()">+ Yeni Profil Oluştur</button>
    </div>
    <div id="auth-form-mode">
      <div id="no-profile-msg" style="display:none;font-size:14px;color:var(--gold);margin-bottom:16px;background:var(--gold-bg);padding:10px;border-radius:8px;border:1px solid var(--gold-bd);">Kayıtlı profil bulunamadı, lütfen yeni bir profil oluştur.</div>
      <div id="auth-kayit" class="auth-form active">
        <div style="font-size:18px;font-weight:700;margin-bottom:6px;">Yeni profil oluştur</div>
        <div style="font-size:13px;color:var(--ink3);margin-bottom:20px;">Sana özel plan hazırlayalım.</div>
        <input class="auth-input" type="text" id="kayit-ad" placeholder="Adın" autocomplete="given-name">
        <div id="kayit-hata" style="font-size:12px;color:var(--red);margin-bottom:8px;display:none;"></div>
        <button class="auth-btn" onclick="kayitOl()">Profil Oluştur & Başla →</button>
      </div>
      <button class="ob-btn-back" onclick="iptalYeniProfil()" id="btn-iptal-profil" style="display:none;margin-top:8px;">← Geri Dön</button>
    </div>
  </div>
</div>

<!-- ONBOARDING -->
<div id="onboarding">
  <div class="ob-header">
    <div class="ob-logo"><div class="l-coin l-coin-sm"></div>Mangır</div>
    <div class="ob-progress-wrap">
      <div class="ob-progress-bar"><div class="ob-progress-fill" id="ob-prog" style="width:11%"></div></div>
      <div class="ob-progress-text" id="ob-prog-text">Adım 1 / 9</div>
    </div>
  </div>
  <!-- ADIM 1: Yaş -->
  <div class="ob-step active" id="step-1">
    <div class="ob-step-content">
      <span class="ob-emoji">🎂</span>
      <div class="ob-title">Kaç yaşındasın?</div>
      <div class="ob-sub">Sana özel emeklilik ve yatırım planı hazırlayalım.</div>
      <div class="ob-slider-wrap">
        <div class="ob-slider-val" id="yas-val">27 yaş</div>
        <div class="ob-slider-sub">Yaşını ayarla</div>
        <input type="range" class="ob-range" id="ob-yas" min="18" max="65" step="1" value="27" oninput="updateSlider('yas')">
        <div class="ob-range-labels"><span>18 yaş</span><span>65 yaş</span></div>
        <input type="number" class="ob-manual-input" id="ob-yas-txt" placeholder="Tam yaşınızı yazın" inputmode="numeric" oninput="syncManual('yas',this.value)" style="margin-top:10px;">
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button></div>
  </div>
  <!-- ADIM 2: Meslek -->
  <div class="ob-step" id="step-2">
    <div class="ob-step-content">
      <span class="ob-emoji">💼</span>
      <div class="ob-title">Mesleğin ne?</div>
      <div class="ob-sub">Bordro yapına göre sana özel öneriler sunacağız.</div>
      <div class="ob-cards">
        <div class="ob-card" onclick="selectCard(this,'meslek','doktor')"><span class="ob-card-icon">👨‍⚕️</span><div class="ob-card-title">Doktor/Hekim</div><div class="ob-card-sub">Kamu veya özel</div></div>
        <div class="ob-card" onclick="selectCard(this,'meslek','ogretmen')"><span class="ob-card-icon">👨‍🏫</span><div class="ob-card-title">Öğretmen</div><div class="ob-card-sub">Devlet memuru</div></div>
        <div class="ob-card" onclick="selectCard(this,'meslek','muhendis')"><span class="ob-card-icon">👨‍💻</span><div class="ob-card-title">Mühendis</div><div class="ob-card-sub">Özel sektör</div></div>
        <div class="ob-card" onclick="selectCard(this,'meslek','memur')"><span class="ob-card-icon">🏛️</span><div class="ob-card-title">Devlet Memuru</div><div class="ob-card-sub">Kamu sektörü</div></div>
        <div class="ob-card" onclick="selectCard(this,'meslek','ozel')"><span class="ob-card-icon">🏢</span><div class="ob-card-title">Özel Sektör</div><div class="ob-card-sub">Şirket çalışanı</div></div>
        <div class="ob-card" onclick="selectCard(this,'meslek','serbest')"><span class="ob-card-icon">🚀</span><div class="ob-card-title">Serbest/Girişimci</div><div class="ob-card-sub">Değişken gelir</div></div>
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 3: Gelir -->
  <div class="ob-step" id="step-3">
    <div class="ob-step-content">
      <span class="ob-emoji">💰</span>
      <div class="ob-title">Aylık net gelirin ne kadar?</div>
      <div class="ob-sub">Tüm gelirlerin toplamı. Yaklaşık olabilir.</div>
      <div class="ob-slider-wrap">
        <div class="ob-slider-val" id="gelir-val">75.000 ₺</div>
        <div class="ob-slider-sub">veya aşağıya yazın</div>
        <input type="range" class="ob-range" id="ob-gelir" min="20000" max="500000" step="5000" value="75000" oninput="updateSlider('gelir')">
        <div class="ob-range-labels"><span>20K ₺</span><span>500K ₺</span></div>
        <input type="number" class="ob-manual-input" id="ob-gelir-txt" placeholder="Tam tutarı yazın" inputmode="numeric" oninput="syncManual('gelir',this.value)">
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 4: Yatırım -->
  <div class="ob-step" id="step-4">
    <div class="ob-step-content">
      <span class="ob-emoji">📈</span>
      <div class="ob-title">Her ay ne kadar yatırım yapabilirsin?</div>
      <div class="ob-sub">Masraflar düştükten sonra kalan tutar.</div>
      <div class="ob-slider-wrap">
        <div class="ob-slider-val" id="yatirim-val">30.000 ₺</div>
        <div class="ob-slider-sub" id="yatirim-pct-sub">Gelirinizin %40'ı</div>
        <input type="range" class="ob-range" id="ob-yatirim" min="500" max="300000" step="500" value="30000" oninput="updateSlider('yatirim')">
        <div class="ob-range-labels"><span>500 ₺</span><span>300K ₺</span></div>
        <input type="number" class="ob-manual-input" id="ob-yatirim-txt" placeholder="Tam tutarı yazın" inputmode="numeric" oninput="syncManual('yatirim',this.value)">
      </div>
      <div class="ob-hint" id="yatirim-hint">Uzmanlar minimum %20 yatırım öneriyor.</div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 5: Risk -->
  <div class="ob-step" id="step-5">
    <div class="ob-step-content">
      <span class="ob-emoji">⚖️</span>
      <div class="ob-title">Risk toleransın nasıl?</div>
      <div class="ob-sub">Bu, yatırım dağılımını belirleyecek.</div>
      <div class="ob-card-list">
        <div class="ob-card-row" onclick="selectCard(this,'risk','konser')"><span class="ob-card-row-icon">🛡️</span><div><div class="ob-card-row-title">Muhafazakâr</div><div class="ob-card-row-sub">Kaybetmek istemiyorum, düşük getiri olsa da olur</div></div></div>
        <div class="ob-card-row" onclick="selectCard(this,'risk','dengeli')"><span class="ob-card-row-icon">⚖️</span><div><div class="ob-card-row-title">Dengeli</div><div class="ob-card-row-sub">Biraz risk alabilirim, uzun vadede büyümek istiyorum</div></div></div>
        <div class="ob-card-row" onclick="selectCard(this,'risk','agresif')"><span class="ob-card-row-icon">🚀</span><div><div class="ob-card-row-title">Agresif</div><div class="ob-card-row-sub">Yüksek getiri için yüksek risk alabilirim</div></div></div>
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 6: Hedef Yaş -->
  <div class="ob-step" id="step-6">
    <div class="ob-step-content">
      <span class="ob-emoji">🎯</span>
      <div class="ob-title">Kaç yaşında finansal özgürlüğe ulaşmak istiyorsun?</div>
      <div class="ob-sub">Çalışmak zorunda olmadığın yaş.</div>
      <div class="ob-slider-wrap">
        <div class="ob-slider-val" id="emek-val">55 yaş</div>
        <div class="ob-slider-sub" id="emek-kalan-sub">— yıl sonra</div>
        <input type="range" class="ob-range" id="ob-emek" min="40" max="70" step="1" value="55" oninput="updateSlider('emek')">
        <div class="ob-range-labels"><span>40 yaş</span><span>70 yaş</span></div>
        <input type="number" class="ob-manual-input" id="ob-emek-txt" placeholder="Hedef yaşı yazın" inputmode="numeric" oninput="syncManual('emek',this.value)" style="margin-top:10px;">
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 7: Artış -->
  <div class="ob-step" id="step-7">
    <div class="ob-step-content">
      <span class="ob-emoji">📊</span>
      <div class="ob-title">6 ayda bir yatırımını ne kadar artırabilirsin?</div>
      <div class="ob-sub">0 seçersen sabit kalır.</div>
      <div class="ob-slider-wrap">
        <div class="ob-slider-val" id="artis-val">%0</div>
        <div class="ob-slider-sub" id="artis-sub">Sabit yatırımla devam</div>
        <input type="range" class="ob-range" id="ob-artis" min="0" max="20" step="1" value="0" oninput="updateSlider('artis')">
        <div class="ob-range-labels"><span>%0 (sabit)</span><span>%20</span></div>
        <input type="number" class="ob-manual-input" id="ob-artis-txt" placeholder="Yüzdelik oran yazın (örn: 5)" inputmode="numeric" oninput="syncManual('artis',this.value)" style="margin-top:10px;">
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 8: Sigorta -->
  <div class="ob-step" id="step-8">
    <div class="ob-step-content">
      <span class="ob-emoji">🛡️</span>
      <div class="ob-title">Hayat sigortanız var mı?</div>
      <div class="ob-sub">Prim üzerinden yıllık vergi iadesi alabilirsiniz.</div>
      <div class="ob-card-list" style="margin-bottom:16px;">
        <div class="ob-card-row" id="sig-yok-card" onclick="selectSigorta('yok')"><span class="ob-card-row-icon">❌</span><div><div class="ob-card-row-title">Hayır, sigortam yok</div><div class="ob-card-row-sub">Şimdilik geç</div></div></div>
        <div class="ob-card-row" id="sig-var-card" onclick="selectSigorta('var')"><span class="ob-card-row-icon">✅</span><div><div class="ob-card-row-title">Evet, hayat sigortam var</div><div class="ob-card-row-sub">Prim detaylarını gir</div></div></div>
      </div>
      <div id="sig-detay" style="display:none;">
        <label class="ob-label">Aylık Prim</label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
          <select id="sig-pb" class="ob-select" style="margin-bottom:0;" onchange="updateSigortaHint()">
            <option value="tl">₺ Türk Lirası</option>
            <option value="usd">$ Amerikan Doları</option>
            <option value="eur">€ Euro</option>
          </select>
          <input type="number" id="sig-prim" class="ob-input" style="margin-bottom:0;" placeholder="örn: 300" inputmode="decimal" oninput="updateSigortaHint()">
        </div>
        <div class="ob-hint" id="sig-hint" style="display:none;"></div>
      </div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="nextStep()">Devam Et →</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
  <!-- ADIM 9: Özet -->
  <div class="ob-step" id="step-9">
    <div class="ob-step-content">
      <span class="ob-emoji">✨</span>
      <div class="ob-title">Planın hazır!</div>
      <div class="ob-sub">Girdiğin bilgilere göre kişisel yatırım planın oluşturuldu.</div>
      <div class="ob-summary" id="ob-ozet"></div>
      <div class="ob-projeksiyon" id="ob-projeksiyon"></div>
    </div>
    <div class="ob-step-footer"><button class="ob-btn" onclick="finalizeOnboarding()">🚀 Ana Ekrana Git</button><button class="ob-btn-back" onclick="prevStep()">← Geri</button></div>
  </div>
</div>

<!-- DASHBOARD -->
<div id="dashboard">
  <div class="header">
    <div class="h-left">
      <div class="h-name" id="d-isim">—</div>
      <div class="h-sub" id="d-meslek">Finansal Özgürlük Planı</div>
    </div>
    <div class="h-right">
      <span class="pill pill-gold h-pill" id="d-yas-pill">—</span>
      <span class="pill pill-green h-pill" id="d-tasarruf-pill">—</span>
      <span class="h-live" id="upd-time">Yükleniyor...</span>
      <button class="h-icon-btn" id="gizlilik-btn" onclick="toggleGizlilik()" title="Rakamları maskele">👁️</button>
      <button class="h-icon-btn" onclick="showAuthScreen()" title="Profil değiştir">👤</button>
      <button class="export-btn" onclick="exportData()">📥 Yedekle</button>
      <label class="export-btn" style="cursor:pointer;">📤 Yükle<input type="file" id="import-file" accept=".json" onchange="importData(event)" style="display:none;"></label>
      <button class="h-icon-btn" id="theme-btn" onclick="toggleTheme()" title="Tema değiştir">🌙</button>
    </div>
  </div>
  <div class="ticker">
    <span style="font-size:10px;font-weight:700;color:var(--ink3);flex-shrink:0;">CANLI</span>
    <div class="tk-div"></div>
    <div class="tk-item" style="flex-shrink:0;"><span class="tk-lbl">Gram Altın</span><span class="tk-val" id="t-altin">—</span><span class="tk-chg chg-n" id="t-ac">—</span></div>
    <div class="tk-div"></div>
    <div class="tk-item" style="flex-shrink:0;"><span class="tk-lbl">USD/TL</span><span class="tk-val" id="t-usd">—</span><span class="tk-chg chg-n" id="t-uc">—</span></div>
    <div class="tk-div tk-hide-mobile"></div>
    <div class="tk-item tk-hide-mobile" style="flex-shrink:0;"><span class="tk-lbl">EUR/TL</span><span class="tk-val" id="t-eur">—</span><span class="tk-chg chg-n" id="t-ec">—</span></div>
    <div class="tk-div tk-hide-mobile"></div>
    <div class="tk-item tk-hide-mobile" style="flex-shrink:0;"><span class="tk-lbl">ONS/$</span><span class="tk-val" id="t-ons">—</span><span class="tk-chg chg-n" id="t-oc">—</span></div>
    <div class="tk-div"></div>
    <div class="tk-item" style="flex-shrink:0;"><span class="tk-lbl" id="t-gram-lbl">Altın=</span><span class="tk-val" id="t-gram" style="color:#C9A84C;">—</span></div>
  </div>
  <div class="nav-wrapper">
    <div class="nav-container" id="nav-container">
      <div class="nav" id="top-nav">
        <button class="nb active" onclick="goTab('portfolio',this)">📊 Portföy</button>
        <button class="nb" onclick="goTab('bakiye',this)">💼 Bakiyem</button>
        <button class="nb" onclick="goTab('hedef',this)">🎯 Hedef</button>
        <button class="nb" onclick="goTab('yolharitasi',this)">🗺️ Yol Haritası</button>
        <button class="nb" onclick="goTab('aksiyon',this)">✅ Aksiyon</button>
        <button class="nb" onclick="goTab('calculator',this)">🧮 Hesap Makinesi</button>
        <button class="nb" onclick="goTab('alarmlar',this)">🔔 Alarmlar</button>
        <button class="nb" onclick="goTab('bordro',this)">📋 Bordro</button>
        <button class="nb" onclick="goTab('vergi',this)">💸 Vergi</button>
        <button class="nb" onclick="goTab('gider',this)">🧾 Giderler</button>
      </div>
      <div class="scroll-hint-arrow" id="nav-scroll-hint"><span></span><span></span><span></span></div>
    </div>
  </div>
  <div class="content">
    <!-- PORTFÖY -->
    <div class="tab active" id="tab-portfolio">
      <div class="g21" style="margin-bottom:14px;">
        <div class="card health-card" style="margin-bottom:0;">
          <div class="ct">💪 Finansal Sağlık Skoru</div>
          <div class="health-ring">
            <svg viewBox="0 0 140 140">
              <circle class="ring-bg" cx="70" cy="70" r="60"/>
              <circle class="ring-fg" id="health-ring-fg" cx="70" cy="70" r="60" stroke="var(--green)" stroke-dasharray="377" stroke-dashoffset="377"/>
            </svg>
            <div class="health-score-val" id="health-score">—</div>
          </div>
          <div class="health-score-label" id="health-label">Hesaplanıyor...</div>
          <div class="health-grade" id="health-grade" style="background:var(--cream);color:var(--ink3);">—</div>
          <div class="health-factors" id="health-factors"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div class="stat"><div class="sl">💰 Aylık Gelir</div><div class="sv" id="s-maas" style="font-size:16px;">—</div><div class="ss" id="s-maas-sub">Net gelir</div></div>
          <div class="stat" style="cursor:pointer;border:1px solid var(--green-bd);background:var(--green-bg);" onclick="toggleYatirimEdit()">
            <div class="sl" style="color:var(--green);">📈 Aylık Yatırım <button class="settings-icon" style="margin-left:auto;" onclick="event.stopPropagation();toggleYatirimEdit()">⚙️</button></div>
            <div id="yatirim-display"><div class="sv" id="s-yatirim" style="font-size:16px;color:var(--green);">—</div><div class="ss" id="s-oran">—</div></div>
            <div id="yatirim-edit" style="display:none;" onclick="event.stopPropagation()">
              <input type="number" id="yatirim-input" inputmode="numeric" autocomplete="off" style="width:100%;padding:6px 10px;border:1.5px solid var(--green-bd);border-radius:8px;font-size:16px;font-weight:700;color:var(--green);background:var(--white);outline:none;margin-top:4px;font-family:var(--sans);">
              <div style="display:flex;gap:5px;margin-top:6px;">
                <button onclick="saveYatirim()" style="flex:1;padding:6px;background:var(--green);color:white;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:var(--sans);">✓ Kaydet</button>
                <button onclick="cancelYatirim()" style="flex:1;padding:6px;background:var(--white);color:var(--ink3);border:1px solid var(--border);border-radius:6px;font-size:11px;cursor:pointer;font-family:var(--sans);">İptal</button>
              </div>
            </div>
          </div>
          <div class="stat" style="cursor:pointer;border:1px solid var(--gold-bd);background:var(--gold-bg);" onclick="toggleRiskEdit()">
            <div class="sl" style="color:var(--gold);">⚖️ Risk Profili <button class="settings-icon" style="margin-left:auto;" onclick="event.stopPropagation();toggleRiskEdit()">⚙️</button></div>
            <div id="risk-display"><div class="sv" id="s-risk" style="font-size:14px;color:var(--gold);margin-top:4px;font-weight:700;">—</div><div class="ss" id="s-risk-sub" style="color:var(--ink3);">—</div></div>
            <div id="risk-edit" style="display:none;" onclick="event.stopPropagation()">
              <select id="risk-input" style="width:100%;padding:6px 10px;border:1.5px solid var(--gold-bd);border-radius:8px;font-size:13px;font-weight:700;color:var(--gold);background:var(--white);outline:none;margin-top:4px;font-family:var(--sans);">
                <option value="konser">🛡️ Muhafazakâr</option>
                <option value="dengeli">⚖️ Dengeli</option>
                <option value="agresif">🚀 Agresif</option>
              </select>
              <div style="display:flex;gap:5px;margin-top:6px;">
                <button onclick="saveRisk()" style="flex:1;padding:6px;background:var(--gold);color:white;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:var(--sans);">✓ Kaydet</button>
                <button onclick="cancelRisk()" style="flex:1;padding:6px;background:var(--white);color:var(--ink3);border:1px solid var(--border);border-radius:6px;font-size:11px;cursor:pointer;font-family:var(--sans);">İptal</button>
              </div>
            </div>
          </div>
          <div class="stat"><div class="sl">💸 Yıllık Vergi Avantajı</div><div class="sv" id="s-vergi" style="font-size:16px;color:var(--green);">—</div><div class="ss">Hesaplanıyor</div></div>
        </div>
      </div>
      <div class="g21">
        <div class="card" style="margin-bottom:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div class="ct" style="margin-bottom:0;">📊 Aylık <span id="yatirim-baslik">—</span> Dağılımı</div>
            <button onclick="toggleAracDuzenle()" id="arac-btn" class="edit-pill">⚙️ Düzenle</button>
          </div>
          <div id="dagılım-normal"><div id="dagılım-satirlar"></div><div class="arow" style="opacity:.4;"><div class="adot" style="background:#aaa;"></div><div class="an"><div class="an-m">Zorunlu BES</div><div class="an-s">Bordrodan otomatik</div></div><div class="abw"></div><div class="ap">—</div><div class="aa" style="color:#aaa;">Otomatik</div></div></div>
          <div id="dagılım-duzenle" style="display:none;">
            <div style="font-size:11px;color:var(--ink3);margin-bottom:10px;background:var(--gold-bg);border-radius:6px;padding:8px 10px;">Oranları değiştir. Toplam %100 olmalı.</div>
            <div id="arac-liste"></div>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
              <button onclick="aracEkle('🥈 Gümüş','#9E9E9E','5')" style="font-size:11px;padding:5px 10px;border:1px solid var(--border);background:var(--cream);border-radius:6px;cursor:pointer;font-family:var(--sans);">+ Gümüş</button>
              <button onclick="aracEkle('📈 BIST 50','#1A5FAA','5')" style="font-size:11px;padding:5px 10px;border:1px solid var(--border);background:var(--cream);border-radius:6px;cursor:pointer;font-family:var(--sans);">+ BIST 50</button>
              <button onclick="aracEkle('🌍 Eurobond','#E8A020','5')" style="font-size:11px;padding:5px 10px;border:1px solid var(--border);background:var(--cream);border-radius:6px;cursor:pointer;font-family:var(--sans);">+ Eurobond</button>
              <button onclick="aracEkle('⭐ Özel','#888','5')" style="font-size:11px;padding:5px 10px;border:1px solid var(--border);background:var(--cream);border-radius:6px;cursor:pointer;font-family:var(--sans);">+ Özel</button>
            </div>
            <div id="toplam-oran-uyari" style="font-size:11px;font-weight:600;margin-top:8px;padding:6px 10px;border-radius:6px;display:none;"></div>
            <div style="display:flex;gap:6px;margin-top:10px;">
              <button onclick="dagılımKaydet()" style="flex:1;padding:8px;background:var(--green);color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--sans);">✓ Kaydet</button>
              <button onclick="dagılımIptal()" style="flex:1;padding:8px;background:var(--white);color:var(--ink3);border:1px solid var(--border);border-radius:8px;font-size:12px;cursor:pointer;font-family:var(--sans);">İptal</button>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="margin-bottom:0;">
            <div class="ct">⚡ Anlık Hesaplamalar</div>
            <div style="font-size:12px;">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);"><span style="color:var(--ink3);">🥇 Bu ay altın alımı</span><span id="c-gram" style="font-weight:700;color:#C9A84C;">—</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);"><span style="color:var(--ink3);">💵 Bu ay dolar alımı</span><span id="c-usd" style="font-weight:700;color:#7B3FBE;">—</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);"><span style="color:var(--ink3);">🛡️ Sigorta toplam birikim</span><span id="c-sig-toplam" style="font-weight:700;color:var(--green);">—</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);"><span style="color:var(--ink3);">🛡️ Bu ay sigorta biriktirilen</span><span id="c-sig-bu-ay" style="font-weight:700;color:var(--green);">—</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;"><span style="color:var(--ink3);">🎯 Hedefe kalan</span><span id="c-sure" style="font-weight:700;color:var(--gold);">—</span></div>
            </div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct" style="justify-content:space-between; margin-bottom:16px;">
              <span>📅 Yaşa Göre Strateji</span>
              <div style="display:flex; align-items:baseline; gap:8px;">
                <span style="font-size:12px; font-weight:500; color:var(--ink3);">Mevcut Yaş</span>
                <span id="yas-edit-val" style="font-family:var(--serif); font-size:20px; font-weight:700; color:var(--ink);">27</span>
                <button class="settings-icon" style="margin-left:2px; font-size:16px;" onclick="toggleStepperPanel('yas-panel')" title="Yaş ayarla">⚙️</button>
              </div>
            </div>
            <div class="inline-stepper-panel" id="yas-panel">
              <div class="stepper-label">Yaşı ayarla</div>
              <div class="stepper-controls">
                <button class="stepper-btn" onclick="changeMevcutYas(-1)">−</button>
                <span class="stepper-val" id="yas-edit-val2">27</span>
                <button class="stepper-btn" onclick="changeMevcutYas(1)">+</button>
              </div>
            </div>
            <div id="yas-strateji"></div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct" style="justify-content:space-between; margin-bottom:16px;">
              <span>📉 Senaryo Analizi</span>
              <div style="display:flex; align-items:baseline; gap:8px;">
                <span style="font-size:12px; font-weight:500; color:var(--ink3);">Hedef Yaş</span>
                <span id="emek-edit-val" style="font-family:var(--serif); font-size:20px; font-weight:700; color:var(--ink);">55</span>
                <button class="settings-icon" style="margin-left:2px; font-size:16px;" onclick="toggleStepperPanel('emek-panel')" title="Hedef ayarla">⚙️</button>
              </div>
            </div>
            <div class="inline-stepper-panel" id="emek-panel">
              <div class="stepper-label">Yaşı ayarla</div>
              <div class="stepper-controls">
                <button class="stepper-btn" onclick="changeEmekYas(-1)">−</button>
                <span class="stepper-val" id="emek-edit-val2">55</span>
                <button class="stepper-btn" onclick="changeEmekYas(1)">+</button>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;" id="senaryo-cards"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- BAKİYEM -->
    <div class="tab" id="tab-bakiye">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">➕ Pozisyon Ekle</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Araç</label><select id="bk-arac" class="month-select" style="font-size:14px;padding:8px 10px;"><option value="altin">🥇 Gram Altın</option><option value="ppf">📊 Para Piy. Fonu</option><option value="bist">📈 BİST 30</option><option value="usd">💵 Döviz (USD)</option><option value="diger">⭐ Diğer</option></select></div>
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Miktar</label><input type="number" id="bk-miktar" class="form-input" placeholder="örn: 8.5" inputmode="decimal" autocomplete="off" style="padding:8px 10px;"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Alış Fiyatı (₺)</label><input type="number" id="bk-alis" class="form-input" placeholder="örn: 6800" inputmode="decimal" autocomplete="off" style="padding:8px 10px;"></div>
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Toplam Maliyet</label><input type="number" id="bk-maliyet" class="form-input" placeholder="Otomatik" style="padding:8px 10px;background:var(--cream);color:var(--ink3);" tabindex="-1"></div>
          </div>
          <button onclick="bakiyeEkle()" style="width:100%;padding:10px;background:var(--green);color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans);">+ Pozisyon Ekle</button>
          <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:14px;"><div class="ct">📋 Pozisyonlarım</div><div id="bakiye-liste"><div style="font-size:12px;color:var(--ink3);text-align:center;padding:16px 0;">Henüz pozisyon eklenmedi.</div></div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="margin-bottom:0;background:var(--green-bg);border-color:var(--green-bd);"><div class="ct" style="color:var(--green);">💰 Toplam Portföy Değeri</div><div id="bk-toplam-deger" style="font-family:var(--serif);font-size:28px;color:var(--green);">—</div><div id="bk-toplam-maliyet" style="font-size:11px;color:var(--green);margin-top:3px;">—</div></div>
          <div class="card" style="margin-bottom:0;"><div class="ct">📊 Kar / Zarar</div><div id="bk-karzarar" style="font-size:22px;font-weight:700;">—</div><div id="bk-karzarar-pct" style="font-size:12px;color:var(--ink3);margin-top:3px;">—</div></div>
          <div class="card" style="margin-bottom:0;"><div class="ct">📈 Araç Bazlı Özet</div><div id="bk-ozet"></div></div>
        </div>
      </div>
    </div>
    <!-- HEDEF -->
    <div class="tab" id="tab-hedef">
      <div class="g4">
        <div class="stat" style="background:var(--gold-bg);border-color:var(--gold-bd);"><div class="sl" style="color:var(--gold);">🎯 Hedef Portföy</div><div class="sv" id="hd-hedef" style="font-size:15px;color:var(--gold);">—</div><div class="ss" id="hd-hedef-sub">—</div></div>
        <div class="stat"><div class="sl">💰 Gerçek Birikim</div><div class="sv" id="hd-gercek" style="font-size:15px;color:var(--green);">—</div><div class="ss">Bakiyem sekmesinden</div></div>
        <div class="stat"><div class="sl">📊 Hedefe Ulaşma</div><div class="sv" id="hd-pct" style="font-size:15px;">—</div><div class="ss" id="hd-pct-sub">—</div></div>
        <div class="stat"><div class="sl">⏳ Kalan Süre</div><div class="sv" id="hd-kalan" style="font-size:15px;color:var(--blue);">—</div><div class="ss" id="hd-kalan-sub">—</div></div>
      </div>
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><div class="ct" style="margin-bottom:0;">📊 İlerleme</div><div id="hd-rozet" style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:var(--cream);color:var(--ink3);border:1px solid var(--border);">—</div></div>
        <div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--ink3);margin-bottom:4px;"><span id="hd-baslangic-lbl">—</span><span id="hd-simdi-label">Şimdi</span><span id="hd-hedef-yas-lbl">—</span></div>
          <div style="height:10px;background:#F2F2F7;border-radius:5px;overflow:hidden;"><div id="hd-zaman-bar" style="height:100%;background:var(--gold);border-radius:5px;transition:width .5s;width:0%;"></div></div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--ink3);margin-top:4px;"><span>Başlangıç</span><span id="hd-gecen">—</span><span>Hedef</span></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--ink3);margin-bottom:4px;"><span>Birikim İlerlemesi</span><span id="hd-birikim-pct-lbl">%0</span></div>
          <div style="height:14px;background:#F2F2F7;border-radius:7px;overflow:hidden;"><div id="hd-birikim-bar" style="height:100%;background:linear-gradient(90deg,var(--green),#4CAF50);border-radius:7px;transition:width .5s;width:0%;"></div></div>
        </div>
      </div>
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">📊 Beklenen vs Gerçek</div>
          <div class="tx-r"><span style="color:var(--ink3);">Bu aşamada olmalıydın</span><span id="hd-beklenen" style="font-weight:700;color:var(--gold);">—</span></div>
          <div class="tx-r"><span style="color:var(--ink3);">Gerçek birikimin</span><span id="hd-gercek2" style="font-weight:700;color:var(--green);">—</span></div>
          <div class="tx-r"><span style="font-weight:600;">Fark</span><span id="hd-fark" style="font-size:14px;font-weight:700;">—</span></div>
          <div id="hd-yorum" style="font-size:11px;padding:8px 10px;border-radius:8px;line-height:1.6;margin-top:8px;"></div>
        </div>
        <div class="card" style="margin-bottom:0;"><div class="ct">🏁 Kilometre Taşları</div><div id="hd-taslar"></div></div>
      </div>
    </div>
    <!-- YOL HARİTASI -->
    <div class="tab" id="tab-yolharitasi">
      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:14px;">
        <div class="card" style="text-align:center;margin-bottom:0;padding:14px 8px;"><div class="ct">Şu anki yaşın</div><div id="yh-simdi-yas" style="font-family:var(--serif);font-size:36px;color:var(--gold);margin:4px 0 2px;line-height:1;">—</div><div id="yh-simdi-sub" style="font-size:10px;color:var(--ink3);">— yıl var</div></div>
        <div class="card" style="text-align:center;margin-bottom:0;padding:14px 8px;"><div class="ct">Hedef yaş</div><div id="yh-hedef-yas" style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:4px 0 2px;line-height:1;">—</div><div style="font-size:10px;color:var(--ink3);">Özgürlük</div></div>
        <div class="card" style="text-align:center;background:var(--green-bg);border-color:var(--green-bd);margin-bottom:0;padding:14px 8px;"><div class="ct" style="color:var(--green);">Aylık</div><div id="yh-aylik" style="font-size:18px;font-weight:700;color:var(--green);margin:4px 0 2px;line-height:1.2;">—</div><div style="font-size:10px;color:var(--green);">Her ay</div></div>
      </div>
      <div class="card"><div class="ct">🗺️ Yol Haritası — %18 Gerçekçi Senaryo</div><div id="tl-list"></div></div>
    </div>
    <!-- AKSİYON -->
    <div class="tab" id="tab-aksiyon">
      <div class="g2">
        <div class="card" style="margin-bottom:0;"><div class="ct">📋 Bu Hafta Yapılacaklar</div><div id="act-list"></div></div>
        <div class="card" style="margin-bottom:0;">
          <div class="ct">🔄 Her Ay Tekrar Et</div>
          <div id="act-aylik"></div>
          <div class="warn" style="margin-top:10px;">Her ay fiyata bakmadan aynı miktarı al. Ortalama maliyet stratejisi.</div>
          <div style="margin-top:10px;"><a style="display:inline-flex;align-items:center;gap:5px;background:#C8102E;color:white;font-size:11px;font-weight:600;padding:6px 13px;border-radius:20px;text-decoration:none;" href="https://bireysel.ziraatbank.com.tr" target="_blank">🏦 Ziraat Mobil</a></div>
        </div>
      </div>
    </div>
    <!-- HESAP MAKİNESİ -->
    <div class="tab" id="tab-calculator">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">🧮 Parametreler</div>
          <div class="srow"><span class="slbl">💰 Başlangıç yatırım</span><input type="range" id="c-m" min="1000" max="400000" step="1000" value="30000" oninput="cu()"><span class="sval" id="c-m-o">30K ₺</span></div>
          <div class="srow"><span class="slbl">📈 Yıllık getiri</span><input type="range" id="c-r" min="10" max="40" step="1" value="18" oninput="cu()"><span class="sval" id="c-r-o">%18</span></div>
          <div class="srow"><span class="slbl">⏳ Süre</span><input type="range" id="c-y" min="5" max="40" step="1" value="25" oninput="cu()"><span class="sval" id="c-y-o">25 yıl</span></div>
          <div class="srow" style="background:var(--gold-bg);border-radius:8px;padding:8px 10px;border:1px solid var(--gold-bd);margin-top:4px;"><span class="slbl" style="color:var(--gold);font-weight:600;">📊 6 ayda artış</span><input type="range" id="c-inc" min="0" max="20" step="1" value="0" oninput="cu()" style="accent-color:var(--gold);"><span class="sval" id="c-inc-o" style="color:var(--gold);">%0</span></div>
          <div class="res-box"><div class="res-lbl">Dönem Sonu Portföy</div><div class="res-val" id="c-res">—</div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
            <div style="background:var(--cream);border-radius:8px;padding:10px;border:1px solid var(--border);"><div style="font-size:10px;color:var(--ink3);margin-bottom:2px;">💸 Toplam yatırdığın</div><div id="c-inv" style="font-size:14px;font-weight:700;">—</div></div>
            <div style="background:var(--green-bg);border-radius:8px;padding:10px;border:1px solid var(--green-bd);"><div style="font-size:10px;color:var(--green);margin-bottom:2px;">🤑 Faizden kazancın</div><div id="c-gain" style="font-size:14px;font-weight:700;color:var(--green);">—</div></div>
          </div>
          <div style="background:var(--gold-bg);border-radius:8px;padding:10px;margin-top:8px;border:1px solid var(--gold-bd);"><div style="font-size:10px;color:var(--gold);font-weight:700;margin-bottom:2px;">💎 Aylık güvenli çekim</div><div id="c-income" style="font-size:18px;font-weight:700;color:var(--gold);">—</div></div>
        </div>
        <div class="card" style="margin-bottom:0;"><div class="ct">📈 Büyüme Grafiği</div><div class="chart-wrap"><canvas id="cc"></canvas></div><div style="margin-top:14px;"><div class="ct">🏁 Kilometre Taşları</div><div id="ms"></div></div></div>
      </div>
    </div>
    <!-- ALARMLAR -->
    <div class="tab" id="tab-alarmlar">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">🔔 Fiyat Alarmı Ekle</div>
          <div id="bildirim-banner" style="background:var(--blue-bg);border:1px solid var(--blue-bd);border-radius:8px;padding:10px 12px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <div style="font-size:11px;color:var(--blue);line-height:1.5;">📲 Anlık bildirim almak için izin ver.</div>
            <button onclick="bildirimIzniIste()" style="flex-shrink:0;padding:6px 12px;background:var(--blue);color:white;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:var(--sans);">İzin Ver</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Araç</label><select id="al-arac" class="month-select" style="font-size:14px;padding:8px 10px;" onchange="updateAlarmHint()"><option value="altin">🥇 Gram Altın (₺)</option><option value="usd">💵 USD/TL</option><option value="eur">💶 EUR/TL</option><option value="ons">⭐ ONS ($)</option></select></div>
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Yön</label><select id="al-yon" class="month-select" style="font-size:14px;padding:8px 10px;"><option value="yukari">↑ Yukarı geçince</option><option value="asagi">↓ Aşağı düşünce</option></select></div>
          </div>
          <div style="margin-bottom:12px;"><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Hedef Fiyat</label><div style="display:flex;align-items:center;gap:8px;"><input type="number" id="al-fiyat" class="form-input" placeholder="örn: 7500" inputmode="decimal" autocomplete="off" style="flex:1;"><div id="al-simdi" style="font-size:11px;color:var(--ink3);white-space:nowrap;flex-shrink:0;">Şu an: —</div></div></div>
          <button onclick="alarmEkle()" style="width:100%;padding:9px;background:var(--gold);color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans);">+ Alarm Ekle</button>
          <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:14px;"><div class="ct">🔔 Aktif Alarmlar</div><div id="alarm-liste"><div style="font-size:12px;color:var(--ink3);text-align:center;padding:16px 0;">Henüz alarm yok.</div></div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="margin-bottom:0;">
            <div class="ct">📅 Maaş Günü Hatırlatıcısı</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
              <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Her ayın kaçı?</label><input type="number" id="maas-gun" value="15" min="1" max="31" inputmode="numeric" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:16px;font-weight:600;font-family:var(--sans);"></div>
              <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Hatırlatıcı</label><select id="maas-hatir" class="month-select" style="font-size:14px;padding:8px 10px;"><option value="0">Aynı gün</option><option value="1">1 gün önce</option><option value="2">2 gün önce</option></select></div>
            </div>
            <button onclick="maasHatirlaticiKaydet()" style="width:100%;padding:9px;background:var(--green);color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans);">Kaydet</button>
            <div id="maas-durum" style="font-size:11px;margin-top:8px;text-align:center;color:var(--ink3);"></div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><div class="ct" style="margin-bottom:0;">📜 Son Bildirimler</div><button onclick="gecmisiTemizle()" style="font-size:10px;color:var(--red);background:none;border:none;cursor:pointer;font-family:var(--sans);">Temizle</button></div>
            <div id="alarm-gecmis"><div style="font-size:12px;color:var(--ink3);text-align:center;padding:12px 0;">Henüz bildirim yok.</div></div>
          </div>
          <div class="info">📱 <strong>iOS Notu:</strong> iPhone'da bildirimler uygulama açıkken çalışır.</div>
        </div>
      </div>
    </div>
    <!-- BORDRO -->
    <div class="tab" id="tab-bordro">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">📋 Her Ay Bordrodan Gir</div>
          <p style="font-size:12px;color:var(--ink3);margin-bottom:16px;line-height:1.7;">3 rakam gir — vergi dilimi otomatik hesaplanır.</p>
          <div style="margin-bottom:12px;"><label style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:6px;">Hangi Ay?</label><select class="month-select" id="f-ay"></select></div>
          <div style="margin-bottom:12px;"><label style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:6px;">ÖDEME TOPLAMI (Net) ₺</label><input class="form-input" type="number" id="f-net" placeholder="örn: 85000" oninput="calcPreview()" inputmode="numeric" autocomplete="off"><div class="form-hint">Bordrodaki ÖDEME TOPLAMI satırı</div></div>
          <div style="margin-bottom:12px;"><label style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:6px;">BRÜT ÜCRET ₺</label><input class="form-input" type="number" id="f-brut" placeholder="örn: 110000" oninput="calcPreview()" inputmode="numeric" autocomplete="off"></div>
          <div style="margin-bottom:12px;"><label style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:6px;">GELİR VERGİSİ ₺</label><input class="form-input" type="number" id="f-vergi" placeholder="örn: 18000" inputmode="numeric" autocomplete="off"></div>
          <div id="preview-box" style="display:none;background:var(--cream);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:14px;">
            <div style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;margin-bottom:10px;">Önizleme</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
              <div style="background:var(--white);border-radius:8px;padding:10px;border:1px solid var(--border);"><div style="color:var(--ink3);margin-bottom:3px;">Net maaşın</div><div id="prev-net" style="font-size:16px;font-weight:700;">—</div></div>
              <div style="background:var(--white);border-radius:8px;padding:10px;border:1px solid var(--border);"><div style="color:var(--ink3);margin-bottom:3px;">Vergi dilimi</div><div id="prev-dilim" style="font-size:16px;font-weight:700;color:var(--gold);">—</div></div>
              <div style="background:var(--white);border-radius:8px;padding:10px;border:1px solid var(--border);"><div style="color:var(--ink3);margin-bottom:3px;">Aylık sig. iadesi</div><div id="prev-iade" style="font-size:16px;font-weight:700;color:var(--green);">—</div></div>
              <div style="background:var(--white);border-radius:8px;padding:10px;border:1px solid var(--border);"><div style="color:var(--ink3);margin-bottom:3px;">Yıllık sig. iadesi</div><div id="prev-yiade" style="font-size:16px;font-weight:700;color:var(--green);">—</div></div>
            </div>
          </div>
          <button class="save-btn" onclick="saveBordro()">💾 Kaydet ve Güncelle</button>
          <div id="success-box" class="success-box"><div style="font-size:13px;font-weight:700;color:var(--green);margin-bottom:4px;">✓ Güncellendi!</div><div id="success-msg" style="font-size:12px;color:var(--ink3);"></div></div>
        </div>
        <div class="card" style="margin-bottom:0;">
          <div class="ct">📊 Bordro Geçmişi</div>
          <div id="bordro-history"><div style="font-size:12px;color:var(--ink3);text-align:center;padding:24px 0;">Henüz bordro girilmedi.</div></div>
          <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:14px;"><div class="ct">📈 Ortalama Net Maaş</div><div style="font-family:var(--serif);font-size:26px;color:var(--gold);" id="avg-maas">—</div><div style="font-size:11px;color:var(--ink3);margin-top:3px;" id="avg-sub">Bordro girildikçe hesaplanacak</div></div>
        </div>
      </div>
    </div>
    <!-- VERGİ -->
    <div class="tab" id="tab-vergi">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">💸 Yıllık Vergi Avantajı</div>
          <div class="tx-r"><span style="color:var(--ink2);">🛡️ Hayat sigortası vergi iadesi</span><span class="tx-v" id="v-yillik">—</span></div>
          <div class="tx-r"><span style="color:var(--ink2);">📊 PPF stopaj avantajı</span><span class="tx-v">+~4.500 ₺</span></div>
          <div class="tx-r"><span style="color:var(--ink2);">🏛️ Zorunlu BES devlet katkısı</span><span class="tx-v">Otomatik ✓</span></div>
          <div class="tx-r" style="border-top:2px solid var(--border);margin-top:4px;padding-top:12px;"><span style="font-weight:700;">🎯 Toplam yıllık avantaj</span><span style="font-size:18px;font-weight:700;color:var(--green);" id="v-toplam">—</span></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="margin-bottom:0;">
            <div class="ct">📊 Vergi Dilimin</div>
            <div style="font-family:var(--serif);font-size:44px;text-align:center;margin:10px 0;" id="v-dilim-big">—</div>
            <div class="info" id="v-dilim-acikla">Bordro girince hesaplanacak.</div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct">🛡️ Hayat Sigortası Vergi Detayı</div>
            <div id="v-sigorta-detay"><div style="font-size:12px;color:var(--ink3);padding:10px 0;text-align:center;">Sigorta bilgisi girilmedi.</div></div>
            <button onclick="toggleSigortaForm()" style="width:100%;margin-top:10px;padding:9px;background:var(--cream);border:1px solid var(--border);border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--sans);color:var(--ink3);">✏️ Sigorta Bilgisini Güncelle</button>
            <div id="sig-form-vergi" style="display:none;margin-top:12px;background:var(--cream);border-radius:10px;padding:14px;border:1px solid var(--border);">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
                <select id="v-sig-pb" class="month-select" style="font-size:14px;padding:8px 10px;"><option value="tl">₺ TL</option><option value="usd">$ USD</option><option value="eur">€ EUR</option></select>
                <input type="number" id="v-sig-prim" class="form-input" placeholder="Aylık prim" inputmode="decimal" style="padding:8px 10px;">
              </div>
              <div style="display:flex;gap:6px;">
                <button onclick="sigortaKaydet()" style="flex:1;padding:8px;background:var(--gold);color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--sans);">Kaydet</button>
                <button onclick="document.getElementById('sig-form-vergi').style.display='none'" style="flex:1;padding:8px;background:var(--white);color:var(--ink3);border:1px solid var(--border);border-radius:8px;font-size:12px;cursor:pointer;font-family:var(--sans);">İptal</button>
              </div>
            </div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct">📋 2026 Gelir Vergisi Dilimleri</div>
            <div style="font-size:11px;line-height:2.2;color:var(--ink3);">
              <div>%15 → Yıllık 0 – 96.000 ₺</div><div>%20 → 96.001 – 230.000 ₺</div>
              <div>%27 → 230.001 – 870.000 ₺</div><div>%35 → 870.001 – 3.000.000 ₺</div>
              <div>%40 → 3.000.000 ₺ üzeri</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- GİDERLER -->
    <div class="tab" id="tab-gider">
      <div class="g2">
        <div class="card" style="margin-bottom:0;">
          <div class="ct">🧾 Gider Ekle</div>
          <div class="gider-cat-grid" id="gider-cats">
            <div class="gider-cat" onclick="selectGiderCat(this,'market')" data-cat="market"><span class="gider-cat-icon">🛒</span><span class="gider-cat-name">Market</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'kira')" data-cat="kira"><span class="gider-cat-icon">🏠</span><span class="gider-cat-name">Kira</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'fatura')" data-cat="fatura"><span class="gider-cat-icon">💡</span><span class="gider-cat-name">Faturalar</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'ulasim')" data-cat="ulasim"><span class="gider-cat-icon">🚗</span><span class="gider-cat-name">Ulaşım</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'yemek')" data-cat="yemek"><span class="gider-cat-icon">🍽️</span><span class="gider-cat-name">Yemek</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'saglik')" data-cat="saglik"><span class="gider-cat-icon">🏥</span><span class="gider-cat-name">Sağlık</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'giyim')" data-cat="giyim"><span class="gider-cat-icon">👕</span><span class="gider-cat-name">Giyim</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'eglence')" data-cat="eglence"><span class="gider-cat-icon">🎬</span><span class="gider-cat-name">Eğlence</span></div>
            <div class="gider-cat" onclick="selectGiderCat(this,'diger')" data-cat="diger"><span class="gider-cat-icon">📦</span><span class="gider-cat-name">Diğer</span></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:10px;">
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Açıklama</label><input type="text" id="gider-aciklama" class="form-input" placeholder="örn: Migros alışveriş" autocomplete="off" style="padding:8px 10px;"></div>
            <div><label style="font-size:10px;font-weight:700;color:var(--ink3);text-transform:uppercase;display:block;margin-bottom:4px;">Tutar (₺)</label><input type="number" id="gider-tutar" class="form-input" placeholder="örn: 850" inputmode="decimal" autocomplete="off" style="padding:8px 10px;"></div>
          </div>
          <button onclick="giderEkle()" style="width:100%;padding:10px;background:var(--red);color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans);transition:transform .15s;">− Gider Ekle</button>
          <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div class="ct" style="margin-bottom:0;">📋 Bu Ayki Giderler</div><select id="gider-ay-filtre" class="month-select" style="font-size:12px;padding:4px 8px;width:auto;" onchange="renderGiderler()"></select></div>
            <div id="gider-liste"><div style="font-size:12px;color:var(--ink3);text-align:center;padding:16px 0;">Henüz gider eklenmedi.</div></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="margin-bottom:0;background:var(--red-bg);border-color:var(--red-bd);">
            <div class="ct" style="color:var(--red);">💸 Bu Ay Toplam Gider</div>
            <div id="gider-toplam" style="font-family:var(--serif);font-size:28px;color:var(--red);">0 ₺</div>
            <div id="gider-kalan" style="font-size:11px;color:var(--ink3);margin-top:3px;">—</div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct">📊 Kategori Dağılımı</div>
            <div class="pie-wrap"><canvas id="gider-pie"></canvas></div>
            <div id="gider-cats-ozet"></div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct">📈 Aylık Gider Trendi</div>
            <div class="chart-wrap"><canvas id="gider-trend"></canvas></div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div class="ct">🔄 Tekrarlayan Giderler</div>
            <div style="font-size:11px;color:var(--ink3);margin-bottom:10px;">Her ay otomatik eklenen sabit giderler.</div>
            <div id="recur-liste"></div>
            <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;margin-top:8px;">
              <select id="recur-kat" class="month-select" style="font-size:12px;padding:6px 8px;">
                <option value="kira">🏠 Kira</option>
                <option value="fatura">💡 Fatura</option>
                <option value="ulasim">🚗 Ulaşım</option>
                <option value="saglik">🏥 Sağlık</option>
                <option value="diger">📦 Diğer</option>
              </select>
              <input type="number" id="recur-tutar" class="form-input" placeholder="Tutar ₺" inputmode="decimal" style="padding:6px 8px;font-size:12px;">
              <button onclick="recurEkle()" style="padding:6px 12px;background:var(--gold);color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--sans);">+</button>
            </div>
          </div>
          <div class="card" style="margin-bottom:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><div class="ct" style="margin-bottom:0;">🎯 Bütçe Planı</div><button onclick="toggleBudgetEdit()" class="edit-pill" id="budget-edit-btn">⚙️ Düzenle</button></div>
            <div id="budget-display"></div>
            <div id="budget-edit" style="display:none;margin-top:10px;background:var(--cream);border-radius:10px;padding:14px;border:1px solid var(--border);">
              <div style="font-size:11px;color:var(--ink3);margin-bottom:10px;">Kategori bazlı aylık limit belirle.</div>
              <div id="budget-limits"></div>
              <div style="display:flex;gap:6px;margin-top:10px;">
                <button onclick="budgetKaydet()" style="flex:1;padding:8px;background:var(--green);color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--sans);">✓ Kaydet</button>
                <button onclick="toggleBudgetEdit()" style="flex:1;padding:8px;background:var(--white);color:var(--ink3);border:1px solid var(--border);border-radius:8px;font-size:12px;cursor:pointer;font-family:var(--sans);">İptal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="bottom-nav" id="bottom-nav">
  <div class="bottom-nav-inner" id="bottom-nav-inner">
    <button class="bnav-item active" onclick="goTabBottom('portfolio',this)"><span>📊</span><span>Portföy</span></button>
    <button class="bnav-item" onclick="goTabBottom('bakiye',this)"><span>💼</span><span>Bakiyem</span></button>
    <button class="bnav-item" onclick="goTabBottom('hedef',this)"><span>🎯</span><span>Hedef</span></button>
    <button class="bnav-item" onclick="goTabBottom('calculator',this)"><span>🧮</span><span>Hesap</span></button>
    <button class="bnav-item" onclick="goTabBottom('gider',this)"><span>🧾</span><span>Giderler</span></button>
    <button class="bnav-item" onclick="goTabBottom('yolharitasi',this)"><span>🗺️</span><span>Harita</span></button>
    <button class="bnav-item" onclick="goTabBottom('aksiyon',this)"><span>✅</span><span>Aksiyon</span></button>
    <button class="bnav-item" onclick="goTabBottom('alarmlar',this)"><span>🔔</span><span>Alarmlar</span></button>
    <button class="bnav-item" onclick="goTabBottom('bordro',this)"><span>📋</span><span>Bordro</span></button>
    <button class="bnav-item" onclick="goTabBottom('vergi',this)"><span>💸</span><span>Vergi</span></button>
  </div>
  <div class="bnav-scroll-hint" id="bnav-scroll-hint"><span></span><span></span><span></span></div>
  <div class="swipe-hint-tooltip" id="swipe-hint-tooltip">← Kaydır →</div>
</div>

</div>


<div class="toast-container" id="toast-container"></div>
<div class="ptr-wrap" id="ptr-wrap"><div class="ptr-indicator" id="ptr-indicator">↻</div></div>
<script>
// ── STATE ─────────────────────────────────────────────────────────────────
var P = {};
var S = { yatirim:30000, maas:75000, brut:0, vergiBrut:0,
  rates:{altin:null,usd:null,eur:null,ons:null}, prev:{altin:null,usd:null,eur:null,ons:null},
  bordrolar:[], bakiye:[], araclar:[], alarmlar:[], alarmGecmis:[], sigortaBaslangic:null, giderler:[], tekrarlayan:[], butce:{} };
var rateInterval = null; // Memory leak fix: tek global interval
var TAB_ORDER=['portfolio','bakiye','hedef','yolharitasi','aksiyon','calculator','alarmlar','bordro','vergi','gider'];
var currentTabIdx=0;

function haptic(){try{if(navigator.vibrate)navigator.vibrate(50);}catch(e){}}
function scrollToEl(id){var el=document.getElementById(id);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){el.focus();},300);}}
function emptyState(icon,title,desc,btnText,btnAction){
  return '<div class="empty-state">'+
    '<div class="empty-state-icon">'+icon+'</div>'+
    '<div class="empty-state-title">'+title+'</div>'+
    '<div class="empty-state-desc">'+desc+'</div>'+
    (btnText?'<button class="empty-state-btn" onclick="'+btnAction+'">'+btnText+'</button>':'')+
    '</div>';
}

// ── GİZLİLİK (Privacy Mask) ───────────────────────────────────────────────
var GIZLI = false; try{ GIZLI = localStorage.getItem('mn-gizli')==='1'; }catch(e){}
function maskVal(v) { return GIZLI ? '••••••' : v; }
function toggleGizlilik() {
  GIZLI = !GIZLI;
  try{ localStorage.setItem('mn-gizli', GIZLI ? '1' : '0'); }catch(e){}
  var btn = document.getElementById('gizlilik-btn');
  if (btn) btn.textContent = GIZLI ? '🙈' : '👁️';
  updateAll();
  renderBakiye();
  renderHedef();
  renderHistory();
}

function toggleStepperPanel(panelId) {
  var panel = document.getElementById(panelId);
  if (panel) panel.classList.toggle('open');
}

// ── XSS PROTECTION ───────────────────────────────────────────────────────
function esc(str) {
  if (str === null || str === undefined) return '';
  var div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

// ── TOAST NOTIFICATIONS ──────────────────────────────────────────────────
function showToast(message, type, duration) {
  type = type || 'info';
  duration = duration || 3500;
  var container = document.getElementById('toast-container');
  if (!container) return;
  var icons = {success:'✓',error:'✕',warning:'⚠',info:'ℹ'};
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.innerHTML = '<span class="toast-icon">' + (icons[type]||'ℹ') + '</span><span class="toast-msg">' + esc(message) + '</span><button class="toast-close" onclick="this.parentElement.classList.add(\'toast-out\');setTimeout(function(){this.parentElement.remove();}.bind(this),300);">×</button>';
  container.appendChild(toast);
  // Auto remove
  setTimeout(function() {
    if (toast.parentNode) {
      toast.classList.add('toast-out');
      setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
    }
  }, duration);
  // Max 4 toasts
  while (container.children.length > 4) { container.removeChild(container.firstChild); }
}

// ── FORMAT ────────────────────────────────────────────────────────────────
var fmtN = function(n){ return maskVal(Math.round(n).toLocaleString('tr-TR')); };
var fmt  = function(n){ if (GIZLI) return '••••••'; return n>=1e9?(n/1e9).toFixed(2)+' Milyar ₺':n>=1e6?(n/1e6).toFixed(1)+' Milyon ₺':n>=1e3?(n/1e3).toFixed(0)+'K ₺':Math.round(n).toLocaleString('tr-TR')+' ₺'; };
var fmtR = function(n){ return Math.round(n).toLocaleString('tr-TR'); }; // Raw (maskelenmez)
var fs   = function(n){ return n>=1e9?(n/1e9).toFixed(1)+'Mr':n>=1e6?(n/1e6).toFixed(0)+'M':n>=1e3?(n/1e3).toFixed(0)+'K':Math.round(n); };

// ── AUTH ──────────────────────────────────────────────────────────────────
// Profiller: [{id, ad, yas, meslek, ...}] — id benzersiz, ad tekrar edebilir
var TUM_PROFILLER = JSON.parse((function(){ try{ return localStorage.getItem('mn-profiller')||'[]' }catch(e){ return '[]' } })());

function showAuthScreen() {
  // Her zaman portföy sekmesine sıfırla
  resetTabToPortfolio();
  document.getElementById('dashboard').classList.remove('visible');
  document.getElementById('onboarding').classList.remove('visible');
  document.getElementById('auth-screen').classList.add('visible');
  TUM_PROFILLER = JSON.parse((function(){ try{ return localStorage.getItem('mn-profiller')||'[]' }catch(e){ return '[]' } })());
  if (TUM_PROFILLER.length > 0) showProfileSelect();
  else { document.getElementById('profile-select-mode').style.display='none'; document.getElementById('auth-form-mode').style.display='block'; switchAuthTab('kayit'); }
}

function resetTabToPortfolio() {
  // Aktif tab'ı portföye döndür (profil değişiminde)
  document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
  document.querySelectorAll('.nb').forEach(function(b){ b.classList.remove('active'); });
  var pt = document.getElementById('tab-portfolio');
  if (pt) pt.classList.add('active');
  var nbs = document.querySelectorAll('.nb');
  if (nbs.length > 0) nbs[0].classList.add('active');
}

function showProfileSelect() {
  document.getElementById('profile-select-mode').style.display='block';
  document.getElementById('auth-form-mode').style.display='none';
  var listEl = document.getElementById('profile-list');
  var meslekEmoji = {doktor:'👨‍⚕️',ogretmen:'👨‍🏫',muhendis:'👨‍💻',memur:'🏛️',ozel:'🏢',serbest:'🚀'};
  listEl.innerHTML = TUM_PROFILLER.map(function(p,i){
    var initial = p.ad ? esc(p.ad.charAt(0).toUpperCase()) : '?';
    var pct = p.gelir > 0 ? Math.round((p.yatirim/p.gelir)*100) : 0;
    return '<div class="profile-item" onclick="profilSec('+i+')">' +
      '<div class="profile-avatar">'+initial+'</div>' +
      '<div class="profile-info"><div class="profile-name">'+(meslekEmoji[p.meslek]||'👤')+' '+esc(p.ad)+'</div>' +
      '<div class="profile-meta">'+p.yas+' yaş · '+p.emekYas+' hedef · %'+pct+' tasarruf</div></div>' +
      '<div style="display:flex;align-items:center;gap:6px;">' +
      '<button onclick="profilSil(event,'+i+')" style="font-size:10px;padding:3px 8px;border-radius:10px;border:1px solid var(--red-bd);background:var(--red-bg);color:var(--red);cursor:pointer;font-family:var(--sans);">Sil</button>' +
      '<div style="color:var(--ink3);font-size:18px;">›</div></div></div>';
  }).join('');
}

function profilSil(evt, i) {
  evt.stopPropagation();
  if (!confirm(TUM_PROFILLER[i].ad + ' profilini silmek istiyor musun?')) return;
  // Profil state'ini de sil
  try { localStorage.removeItem('mn-state-' + TUM_PROFILLER[i].id); } catch(e) {}
  TUM_PROFILLER.splice(i, 1);
  try { localStorage.setItem('mn-profiller', JSON.stringify(TUM_PROFILLER)); } catch(e) {}
  showProfileSelect();
}

function showNewProfile() {
  document.getElementById('profile-select-mode').style.display='none';
  document.getElementById('auth-form-mode').style.display='block';
  switchAuthTab('kayit');
}

function switchAuthTab(tab) {
  document.getElementById('tab-giris-btn').classList.toggle('active', tab==='giris');
  document.getElementById('tab-kayit-btn').classList.toggle('active', tab==='kayit');
  document.getElementById('auth-giris').classList.toggle('active', tab==='giris');
  document.getElementById('auth-kayit').classList.toggle('active', tab==='kayit');
}

function girisYap() {
  var ad = document.getElementById('giris-ad').value.trim();
  if (!ad) { showHata('giris','Lütfen adını gir.'); return; }
  // Ada göre profilleri bul
  var eslesme = TUM_PROFILLER.filter(function(p){ return p.ad.toLowerCase() === ad.toLowerCase(); });
  if (!eslesme.length) { showHata('giris','"'+ad+'" adında profil bulunamadı.'); return; }
  if (eslesme.length === 1) {
    // Tek eşleşme — direkt giriş
    var idx = TUM_PROFILLER.indexOf(eslesme[0]);
    profilSec(idx);
  } else {
    // Birden fazla aynı isimli profil — seçim sun
    document.getElementById('profile-select-mode').style.display='block';
    document.getElementById('auth-form-mode').style.display='none';
    var listEl = document.getElementById('profile-list');
    listEl.innerHTML = '<div style="font-size:13px;font-weight:700;margin-bottom:10px;color:var(--gold);">Hangi "'+esc(ad)+'" profili?</div>' +
      eslesme.map(function(p){
        var idx = TUM_PROFILLER.indexOf(p);
        return '<div class="profile-item" onclick="profilSec('+idx+')">' +
          '<div class="profile-avatar">'+esc(p.ad.charAt(0).toUpperCase())+'</div>' +
          '<div class="profile-info"><div class="profile-name">'+esc(p.ad)+'</div>' +
          '<div class="profile-meta">'+p.yas+' yaş · Oluşturulma: '+(p.olusturulma||'—')+'</div></div>' +
          '<div style="color:var(--ink3);font-size:18px;">›</div></div>';
      }).join('');
  }
}

function kayitOl() {
  var ad = document.getElementById('kayit-ad').value.trim();
  if (!ad) { showHata('kayit','Lütfen adını gir.'); return; }
  // Aynı isimli kayıt ARTIK ENGELLENMEZ — benzersiz ID ile ayrılır
  obData.ad = ad;
  document.getElementById('auth-screen').classList.remove('visible');
  document.getElementById('onboarding').classList.add('visible');
  obStep = 1;
  document.querySelectorAll('.ob-step').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById('step-1').classList.add('active');
  updateObProgress();
}

function profilSec(i) {
  P = JSON.parse(JSON.stringify(TUM_PROFILLER[i]));
  loadProfileState();
  try{ GIZLI = localStorage.getItem('mn-gizli')==='1'; }catch(e){ GIZLI=false; }
  document.getElementById('auth-screen').classList.remove('visible');
  document.getElementById('dashboard').classList.add('visible');
  resetTabToPortfolio();
  // Skeleton loader: stat kartlarına shimmer ekle
  document.querySelectorAll('.stat').forEach(function(s){s.classList.add('skeleton-active');});
  initDashboard();
  fetchRates().finally(function(){
    document.querySelectorAll('.stat.skeleton-active').forEach(function(s){s.classList.remove('skeleton-active');});
  });
  if(rateInterval)clearInterval(rateInterval);
  rateInterval=setInterval(fetchRates,30000);
  setTimeout(initScrollHints, 300);
  setTimeout(initPullToRefresh, 500);
  showToast('Hoşgeldin, '+esc(P.ad)+'! 👋','success',2500);
}

function showHata(form, msg) {
  var el = document.getElementById(form+'-hata');
  el.textContent = msg; el.style.display = 'block';
  setTimeout(function(){ el.style.display='none'; }, 4000);
}

function loadProfileState() {
  var key = 'mn-state-' + (P.id || P.ad);
  try {
    var st = JSON.parse(localStorage.getItem(key)||'{}');
    S.yatirim       = st.yatirim  || P.yatirim;
    S.maas          = st.maas     || P.gelir;
    S.bordrolar     = st.bordro   || [];
    S.bakiye        = st.bakiye   || [];
    S.araclar       = st.araclar  || getDefaultAraclar(P.risk||'dengeli');
    S.alarmlar      = st.alarmlar || [];
    S.alarmGecmis   = st.alarmGecmis || [];
    S.sigortaBaslangic = st.sigortaBaslangic || (P.sigorta==='var' ? new Date().toISOString() : null);
    S.brut          = st.brut     || 0;
    S.vergiBrut     = st.vergiBrut|| 0;
    S.giderler      = st.giderler || [];
    S.tekrarlayan   = st.tekrarlayan || [];
    S.butce         = st.butce || {};
  } catch(e) {
    S.yatirim = P.yatirim; S.maas = P.gelir;
    S.araclar = getDefaultAraclar(P.risk||'dengeli');
  }
}

function saveState() {
  if (!P.id) return;
  var key = 'mn-state-' + P.id;
  try {
    localStorage.setItem(key, JSON.stringify({
      yatirim:S.yatirim, maas:S.maas, brut:S.brut, vergiBrut:S.vergiBrut,
      bordro:S.bordrolar, bakiye:S.bakiye, araclar:S.araclar,
      alarmlar:S.alarmlar, alarmGecmis:S.alarmGecmis, sigortaBaslangic:S.sigortaBaslangic,
      giderler:S.giderler||[], tekrarlayan:S.tekrarlayan||[], butce:S.butce||{}
    }));
  } catch(e) {
    showToast('Veri kaydedilemedi — depolama alanı dolu olabilir','error',5000);
  }
}

// ── ONBOARDING ────────────────────────────────────────────────────────────
var obStep = 1, obTotal = 9;
var obData = {ad:'',yas:27,meslek:'',gelir:75000,yatirim:30000,risk:'dengeli',emekYas:55,artis:0,sigorta:'yok',sigortaPrim:0,sigortaPB:'tl'};

function updateObProgress() {
  document.getElementById('ob-prog').style.width=(obStep/obTotal*100)+'%';
  document.getElementById('ob-prog-text').textContent='Adım '+obStep+' / '+obTotal;
}

function nextStep() { if (!validateStep(obStep)) return; document.getElementById('step-'+obStep).classList.remove('active'); obStep++; document.getElementById('step-'+obStep).classList.add('active'); updateObProgress(); if (obStep===9) buildSummary(); window.scrollTo(0,0); }
function prevStep() { if (obStep<=1) return; document.getElementById('step-'+obStep).classList.remove('active'); obStep--; document.getElementById('step-'+obStep).classList.add('active'); updateObProgress(); }

function validateStep(step) {
  if (step===1)  { obData.yas=parseInt(document.getElementById('ob-yas').value)||27; }
  if (step===2)  { if(!obData.meslek){alert('Mesleğini seç.');return false;} }
  if (step===3)  { var g=parseInt(document.getElementById('ob-gelir').value);if(!g||g<1000){alert('Geçerli bir gelir gir.');return false;}obData.gelir=g; }
  if (step===4)  { var y=parseInt(document.getElementById('ob-yatirim').value);if(!y||y<100){alert('Geçerli bir yatırım tutarı gir.');return false;}obData.yatirim=y; }
  if (step===5)  { if(!obData.risk){alert('Risk toleransını seç.');return false;} }
  if (step===6)  { var e=parseInt(document.getElementById('ob-emek').value);if(!e||e<=obData.yas){alert('Hedef yaş şu anki yaşından büyük olmalı.');return false;}obData.emekYas=e; }
  if (step===7)  { obData.artis=parseInt(document.getElementById('ob-artis').value)||0; }
  if (step===8)  { if(obData.sigorta==='var'){var p=parseFloat(document.getElementById('sig-prim').value);if(!p||p<=0){alert('Prim tutarını gir.');return false;}obData.sigortaPrim=p;obData.sigortaPB=document.getElementById('sig-pb').value;} }
  return true;
}

function selectCard(el, group, val) {
  var parent=el.closest('.ob-card-list,.ob-cards');
  if(parent)parent.querySelectorAll('.ob-card,.ob-card-row').forEach(function(c){c.classList.remove('selected');});
  el.classList.add('selected');
  if(group==='meslek')obData.meslek=val;
  if(group==='risk')obData.risk=val;
}

function selectSigorta(val) {
  document.getElementById('sig-yok-card').classList.toggle('selected',val==='yok');
  document.getElementById('sig-var-card').classList.toggle('selected',val==='var');
  obData.sigorta=val;
  document.getElementById('sig-detay').style.display=val==='var'?'block':'none';
}

function updateSlider(type) {
  if(type==='yas'){var v=parseInt(document.getElementById('ob-yas').value);document.getElementById('yas-val').textContent=v+' yaş';var t=document.getElementById('ob-yas-txt');if(t)t.value=v;obData.yas=v;}
  if(type==='gelir'){var v=parseInt(document.getElementById('ob-gelir').value);document.getElementById('gelir-val').textContent=fmtR(v)+' ₺';document.getElementById('ob-gelir-txt').value=v;obData.gelir=v;}
  if(type==='yatirim'){var v=parseInt(document.getElementById('ob-yatirim').value);document.getElementById('yatirim-val').textContent=fmtR(v)+' ₺';document.getElementById('ob-yatirim-txt').value=v;obData.yatirim=v;var pct=obData.gelir>0?Math.round(v/obData.gelir*100):0;document.getElementById('yatirim-pct-sub').textContent='Gelirinizin %'+pct+"'i";var h=document.getElementById('yatirim-hint');if(pct>=30){h.style.background='var(--green-bg)';h.style.color='var(--green)';h.textContent='🎉 Harika! %'+pct+' tasarruf oranı.';}else if(pct>=20){h.style.background='var(--gold-bg)';h.style.color='var(--gold)';h.textContent='👍 İyi! Minimum %20 hedefliyorsun.';}else{h.style.background='var(--red-bg)';h.style.color='var(--red)';h.textContent='⚠️ Uzmanlar minimum %20 öneriyor.';}}
  if(type==='emek'){var v=parseInt(document.getElementById('ob-emek').value);document.getElementById('emek-val').textContent=v+' yaş';var t=document.getElementById('ob-emek-txt');if(t)t.value=v;obData.emekYas=v;document.getElementById('emek-kalan-sub').textContent=(v-obData.yas)+' yıl sonra';}
  if(type==='artis'){var v=parseInt(document.getElementById('ob-artis').value);document.getElementById('artis-val').textContent=v>0?'%'+v:'%0';var t=document.getElementById('ob-artis-txt');if(t)t.value=v;obData.artis=v;var s=document.getElementById('artis-sub');if(v===0){s.textContent='Sabit yatırımla devam';}else{var artisli=calcPortfoy(obData.yatirim,18,obData.emekYas-obData.yas,v),sabit=calcPortfoy(obData.yatirim,18,obData.emekYas-obData.yas,0);s.textContent='%'+v+' artışla +'+fmtR(artisli-sabit)+' ₺ fazla';}}
}

function syncManual(type,v) {
  var prevN=parseInt(v)||0;
  if(type==='yas'){
    document.getElementById('ob-yas').value=Math.max(18,Math.min(65,prevN));
    document.getElementById('yas-val').textContent=prevN+' yaş';
    obData.yas=prevN;
  }
  if(type==='gelir'){
    document.getElementById('ob-gelir').value=Math.max(20000,Math.min(500000,prevN));
    document.getElementById('gelir-val').textContent=fmtR(prevN)+' ₺';
    obData.gelir=prevN;
  }
  if(type==='yatirim'){
    document.getElementById('ob-yatirim').value=Math.max(500,Math.min(300000,prevN));
    document.getElementById('yatirim-val').textContent=fmtR(prevN)+' ₺';
    obData.yatirim=prevN;
    var pct=obData.gelir>0?Math.round(prevN/obData.gelir*100):0;
    var sub=document.getElementById('yatirim-pct-sub');
    if(sub)sub.textContent='Gelirinizin %'+pct+"'i";
    var h=document.getElementById('yatirim-hint');
    if(h){
      if(pct>=30){h.style.background='var(--green-bg)';h.style.color='var(--green)';h.textContent='🎉 Harika! %'+pct+' tasarruf oranı.';}
      else if(pct>=20){h.style.background='var(--gold-bg)';h.style.color='var(--gold)';h.textContent='👍 İyi! Minimum %20 hedefliyorsun.';}
      else{h.style.background='var(--red-bg)';h.style.color='var(--red)';h.textContent='⚠️ Uzmanlar minimum %20 öneriyor.';}
    }
  }
  if(type==='emek'){
    document.getElementById('ob-emek').value=Math.max(40,Math.min(70,prevN));
    document.getElementById('emek-val').textContent=prevN+' yaş';
    obData.emekYas=prevN;
    document.getElementById('emek-kalan-sub').textContent=(prevN-obData.yas)+' yıl sonra';
  }
  if(type==='artis'){
    document.getElementById('ob-artis').value=Math.max(0,Math.min(20,prevN));
    document.getElementById('artis-val').textContent=prevN>0?'%'+prevN:'%0';
    obData.artis=prevN;
    var s=document.getElementById('artis-sub');
    if(prevN===0){s.textContent='Sabit yatırımla devam';}
    else{var artisli=calcPortfoy(obData.yatirim,18,obData.emekYas-obData.yas,prevN),sabit=calcPortfoy(obData.yatirim,18,obData.emekYas-obData.yas,0);s.textContent='%'+prevN+' artışla +'+fmtR(artisli-sabit)+' ₺ fazla';}
  }
}

function updateSigortaHint() {
  var pb=document.getElementById('sig-pb').value;
  var prim=parseFloat(document.getElementById('sig-prim').value)||0;
  if(!prim){document.getElementById('sig-hint').style.display='none';return;}
  var primTL=pb==='usd'?prim*(S.rates.usd||44):pb==='eur'?prim*(S.rates.eur||50):prim;
  var iade=primTL*0.5*0.27;
  document.getElementById('sig-hint').style.display='block';
  document.getElementById('sig-hint').textContent='Tahmini yıllık vergi iadesi: ~'+fmtR(iade*12)+' ₺';
}

function buildSummary() {
  var kalan=obData.emekYas-obData.yas;
  var hedef=calcPortfoy(obData.yatirim,18,kalan,obData.artis);
  var aylik=Math.round(hedef*0.18/12);
  var rA={konser:'Muhafazakâr 🛡️',dengeli:'Dengeli ⚖️',agresif:'Agresif 🚀'};
  var mA={doktor:'Doktor/Hekim',ogretmen:'Öğretmen',muhendis:'Mühendis',memur:'Devlet Memuru',ozel:'Özel Sektör',serbest:'Serbest/Girişimci'};
  var sigStr=obData.sigorta==='var'?obData.sigortaPrim+' '+obData.sigortaPB.toUpperCase()+'/ay':'Yok';
  document.getElementById('ob-ozet').innerHTML=
    '<div class="ob-sum-row"><span class="ob-sum-lbl">👤 Profil</span><span class="ob-sum-val">'+obData.ad+', '+obData.yas+' yaş</span></div>'+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">💼 Meslek</span><span class="ob-sum-val">'+(mA[obData.meslek]||obData.meslek)+'</span></div>'+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">💰 Aylık gelir</span><span class="ob-sum-val">'+fmtR(obData.gelir)+' ₺</span></div>'+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">📈 Yatırım</span><span class="ob-sum-val" style="color:var(--green);">'+fmtR(obData.yatirim)+' ₺ (%'+Math.round(obData.yatirim/obData.gelir*100)+')</span></div>'+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">⚖️ Risk</span><span class="ob-sum-val">'+(rA[obData.risk])+'</span></div>'+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">🎯 Hedef</span><span class="ob-sum-val">'+obData.emekYas+' yaş ('+kalan+' yıl)</span></div>'+
    (obData.artis>0?'<div class="ob-sum-row"><span class="ob-sum-lbl">📊 Artış</span><span class="ob-sum-val" style="color:var(--gold);">%'+obData.artis+'</span></div>':'')+
    '<div class="ob-sum-row"><span class="ob-sum-lbl">🛡️ Sigorta</span><span class="ob-sum-val">'+sigStr+'</span></div>';
  document.getElementById('ob-projeksiyon').innerHTML=
    '<div style="font-size:12px;font-weight:700;color:var(--gold);margin-bottom:6px;">🎯 Tahminî Hedef Portföy</div>'+
    '<div style="font-family:var(--serif);font-size:28px;font-weight:700;color:var(--gold);margin-bottom:8px;">'+fmtR(hedef)+' ₺</div>'+
    '<div style="font-size:12px;color:var(--ink2);">Bu portföyle aylık <strong>'+fmtR(aylik)+' ₺</strong> pasif gelir (anapara korunarak, %18 getiri).</div>';
}

function finalizeOnboarding() {
  // Benzersiz ID ile kayıt — aynı isimli profiller ayrı kalır
  var yeniId = 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2,6);
  P = { id:yeniId, ad:obData.ad, yas:obData.yas, meslek:obData.meslek,
    gelir:obData.gelir, yatirim:obData.yatirim, risk:obData.risk,
    emekYas:obData.emekYas, artis:obData.artis,
    sigorta:obData.sigorta, sigortaPrim:obData.sigortaPrim, sigortaPB:obData.sigortaPB,
    olusturulma: new Date().toLocaleDateString('tr-TR') };
  TUM_PROFILLER.push(P);
  try{ localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER)); }catch(e){}
  S.yatirim=P.yatirim; S.maas=P.gelir; S.araclar=getDefaultAraclar(P.risk);
  S.bordrolar=[]; S.bakiye=[]; S.alarmlar=[]; S.alarmGecmis=[];
  S.giderler=[]; S.tekrarlayan=[]; S.butce={};
  if(P.sigorta==='var')S.sigortaBaslangic=new Date().toISOString();
  saveState();
  GIZLI=false;
  document.getElementById('onboarding').classList.remove('visible');
  document.getElementById('dashboard').classList.add('visible');
  resetTabToPortfolio();
  document.querySelectorAll('.stat').forEach(function(s){s.classList.add('skeleton-active');});
  initDashboard();
  fetchRates().finally(function(){
    document.querySelectorAll('.stat.skeleton-active').forEach(function(s){s.classList.remove('skeleton-active');});
  });
  if(rateInterval)clearInterval(rateInterval);
  rateInterval=setInterval(fetchRates,30000);
  setTimeout(initScrollHints, 300);
  setTimeout(initPullToRefresh, 500);
  showToast('Profilin oluşturuldu! 🎉','success',3000);
}

// ── DASHBOARD INIT ────────────────────────────────────────────────────────
function getDefaultAraclar(risk) {
  if(risk==='konser')return[{id:'ppf',ad:'📊 Para Piyasası Fonu',renk:'#1A7A4A',oran:50,platform:'Ziraat → ZPP',aciklama:'faiz'},{id:'altin',ad:'🥇 Gram Altın',renk:'#C9A84C',oran:30,platform:'Ziraat → Altın',aciklama:'gram'},{id:'usd',ad:'💵 Döviz (USD)',renk:'#7B3FBE',oran:20,platform:'Ziraat → Döviz',aciklama:'usd'}];
  if(risk==='agresif')return[{id:'bist',ad:'📈 BİST 30',renk:'#1A5FAA',oran:40,platform:'Ziraat → Endeks',aciklama:''},{id:'altin',ad:'🥇 Gram Altın',renk:'#C9A84C',oran:35,platform:'Ziraat → Altın',aciklama:'gram'},{id:'ppf',ad:'📊 Para Piy. Fonu',renk:'#1A7A4A',oran:15,platform:'Ziraat → ZPP',aciklama:'faiz'},{id:'usd',ad:'💵 Döviz (USD)',renk:'#7B3FBE',oran:10,platform:'Ziraat → Döviz',aciklama:'usd'}];
  return[{id:'altin',ad:'🥇 Gram Altın',renk:'#C9A84C',oran:45,platform:'Ziraat → Altın',aciklama:'gram'},{id:'ppf',ad:'📊 Para Piy. Fonu',renk:'#1A7A4A',oran:30,platform:'Ziraat → ZPP',aciklama:'faiz'},{id:'bist',ad:'📈 BİST 30',renk:'#1A5FAA',oran:15,platform:'Ziraat → Endeks',aciklama:''},{id:'usd',ad:'💵 Döviz (USD)',renk:'#7B3FBE',oran:10,platform:'Ziraat → Döviz',aciklama:'usd'}];
}

function initDashboard() {
  var mA={doktor:'Doktor/Hekim',ogretmen:'Öğretmen',muhendis:'Mühendis',memur:'Devlet Memuru',ozel:'Özel Sektör Çalışanı',serbest:'Girişimci'};
  var kalan=P.emekYas-P.yas, pct=Math.round(P.yatirim/P.gelir*100);
  document.getElementById('d-isim').textContent=P.ad;
  document.getElementById('d-meslek').textContent=(mA[P.meslek]||P.meslek)+' · Finansal Özgürlük Planı';
  document.getElementById('d-yas-pill').textContent=P.yas+' yaş · '+P.emekYas+"'a "+kalan+' yıl';
  document.getElementById('d-tasarruf-pill').textContent='%'+pct+' tasarruf';

  // Gizlilik butonu ikonunu güncelle
  var gbtn=document.getElementById('gizlilik-btn');
  if(gbtn) gbtn.textContent=GIZLI ? '🙈' : '👁️';

  document.getElementById('s-maas').textContent=fmtN(P.gelir)+' ₺';
  document.getElementById('s-yatirim').textContent=fmtN(S.yatirim)+' ₺';
  document.getElementById('s-oran').textContent="Gelirin %"+pct+"'i yatırıma";
  var rA={konser:'Muhafazakâr 🛡️',dengeli:'Dengeli ⚖️',agresif:'Agresif 🚀'};
  document.getElementById('s-risk').textContent=rA[P.risk]||P.risk;
  document.getElementById('s-risk-sub').textContent=kalan+' yıl planlama';
  document.getElementById('c-m').value=S.yatirim;
  document.getElementById('c-y').value=kalan;
  document.getElementById('c-inc').value=P.artis||0;
  buildYasStrateji(); buildSenaryolar(); buildTimeline(); buildAksiyon();
  var aylar=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  var opts=[]; var now=new Date();
  for(var y=2024;y<=2060;y++){for(var m=0;m<12;m++){var sel=(y===now.getFullYear()&&m===now.getMonth())?' selected':'';opts.push('<option value="'+aylar[m]+' '+y+'"'+sel+'>'+aylar[m]+' '+y+'</option>');}}
  document.getElementById('f-ay').innerHTML=opts.join('');
  renderAlarmListe(); renderAlarmGecmis(); bildirimBannerKontrol();
  try{var mg=JSON.parse(localStorage.getItem('mn-maas-'+(P.id||P.ad))||'null');if(mg){document.getElementById('maas-gun').value=mg.gun;document.getElementById('maas-hatir').value=mg.hatirlatma||0;}}catch(e){}
  updateSigortaDetay(); renderDagılım(); renderBakiye(); renderHistory(); cu();
  setTimeout(function(){ applyRecurring(); renderRecur(); renderBudget(); calculateHealthScore(); }, 150);
}

function buildYasStrateji() {
  var d=document.getElementById('yas-edit-val');if(d)d.textContent=P.yas||27;
  var d2=document.getElementById('yas-edit-val2');if(d2)d2.textContent=P.yas||27;
  var yas=P.yas||27, emek=P.emekYas||55;
  var h=emek-18;if(h<0)h=0;
  var p1=18+Math.floor(h*0.4), p2=p1+Math.floor(h*0.3), p3=p2+Math.floor(h*0.2);
  var strats=[
    {range:'18–'+p1,desc:'Altın/Hisse ağır, agresif büyüme',c:yas>=18&&yas<p1},
    {range:p1+'–'+p2,desc:'BİST artır, fonlara geçiş',c:yas>=p1&&yas<p2},
    {range:p2+'–'+p3,desc:'BES başlat, denge kur',c:yas>=p2&&yas<p3},
    {range:p3+'–'+emek,desc:'BES maksimize, korumaya geç',c:yas>=p3&&yas<emek},
    {range:emek+'+',desc:'Finansal özgürlük, pasif gelir',c:yas>=emek}
  ];
  document.getElementById('yas-strateji').innerHTML=strats.map(function(s){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);">'+
      '<div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:'+(s.c?'var(--green)':'#DDD')+';flex-shrink:0;"></div>'+
      '<span style="font-size:12px;'+(s.c?'font-weight:700;color:var(--green);':'color:var(--ink3);')+'">'+s.range+' yaş</span></div>'+
      '<span style="font-size:11px;color:'+(s.c?'var(--green)':'var(--ink3)')+';">'+s.desc+'</span></div>';
  }).join('');
}

function changeMevcutYas(dif){
  var y=P.yas||27; y+=dif;
  if(y<18||y>=(P.emekYas||55))return;
  P.yas=y; S.yas=y;
  var idx=TUM_PROFILLER.findIndex(function(x){return x.id===P.id;});
  if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}
  var v1=document.getElementById('yas-edit-val');if(v1)v1.textContent=y;
  var v2=document.getElementById('yas-edit-val2');if(v2)v2.textContent=y;
  saveState(); updateAll(); buildYasStrateji(); buildSenaryolar(); buildTimeline(); renderHedef(); buildAksiyon(); if(typeof cu==='function')cu();
}

function changeEmekYas(dif){
  var y=P.emekYas||55; y+=dif;
  if(y<=(P.yas||27)||y>80)return;
  P.emekYas=y; S.emekYas=y;
  var idx=TUM_PROFILLER.findIndex(function(x){return x.id===P.id;});
  if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}
  var v1=document.getElementById('emek-edit-val');if(v1)v1.textContent=y;
  var v2=document.getElementById('emek-edit-val2');if(v2)v2.textContent=y;
  saveState(); updateAll(); buildYasStrateji(); buildSenaryolar(); buildTimeline(); renderHedef(); buildAksiyon(); if(typeof cu==='function')cu();
}

function buildSenaryolar() {
  var d=document.getElementById('emek-edit-val');if(d)d.textContent=P.emekYas||55;
  var d2=document.getElementById('emek-edit-val2');if(d2)d2.textContent=P.emekYas||55;
  var kalan=(P.emekYas||55)-(P.yas||27);
  var p=document.getElementById('d-yas-pill');if(p)p.textContent=(P.yas||27)+' yaş · '+(P.emekYas||55)+"'a "+kalan+' yıl';
  document.getElementById('senaryo-cards').innerHTML=[{lbl:'Kötümser',g:12,rk:'var(--red)',bg:'var(--red-bg)',bd:'var(--red-bd)'},{lbl:'Gerçekçi ✓',g:18,rk:'var(--green)',bg:'var(--green-bg)',bd:'var(--green-bd)',b:true},{lbl:'İyimser',g:25,rk:'var(--blue)',bg:'var(--blue-bg)',bd:'var(--blue-bd)'}].map(function(s){var v=calcPortfoy(S.yatirim,s.g,kalan,P.artis||0);return'<div style="background:'+s.bg+';border:1px solid '+s.bd+';border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:10px;font-weight:700;color:'+s.rk+';margin-bottom:2px;">'+s.lbl+'</div><div style="font-size:10px;color:var(--ink3);">%'+s.g+' yıllık</div></div><div style="font-size:'+(s.b?'15':'13')+'px;font-weight:700;color:'+s.rk+';">'+fmt(v)+'</div></div>';}).join('');
}

function buildTimeline() {
  if(!P.yas)return;
  var yas=P.yas,hYas=P.emekYas||55,yil=hYas-yas,aylik=S.yatirim,artis=P.artis||0;
  document.getElementById('yh-simdi-yas').textContent=yas;
  document.getElementById('yh-simdi-sub').textContent=yil+' yıl var';
  document.getElementById('yh-hedef-yas').textContent=hYas;
  document.getElementById('yh-aylik').textContent=fmtN(aylik)+' ₺';
  var tlData=[
    {age:'Şimdi',t:'Başlangıç — Bu Hafta',d:'Ziraat altın hesabı aç · ZPP ve BİST 30 Endeks Fonu al · Sigorta makbuzunu İK\'ya ilet',v:fmtN(aylik)+' ₺/ay'},
    {age:(yas+3)+' yaş',t:'İlk Milestone',d:'Portföy büyüdü. Aylık yatırımı artırmayı değerlendir.',v:fmt(calcPortfoy(aylik,18,3,artis))},
    {age:(yas+8)+' yaş',t:'Strateji Gözden Geçir',d:'BİST ağırlığını artır · Gönüllü BES başlat.',v:fmt(calcPortfoy(aylik,18,8,artis))},
    {age:Math.round(yas+yil*0.5)+' yaş',t:'Yarı Yol',d:'Bileşik getiri hızlanıyor. Gelir artışını yatırıma yansıt.',v:fmt(calcPortfoy(aylik,18,Math.round(yil*0.5),artis))},
    {age:(hYas-5)+' yaş',t:'Koruma Modu',d:'Riskli varlıkları azalt · BES\'i maksimize et.',v:fmt(calcPortfoy(aylik,18,yil-5,artis))},
    {age:hYas+' yaş',fin:true,t:'Finansal Özgürlük 🎉',d:'Çalışmak zorunluluk değil tercih. Portföy her ay gelir üretir.',v:fmt(calcPortfoy(aylik,18,yil,artis))},
  ];
  document.getElementById('tl-list').innerHTML=tlData.map(function(t){
    var bg=t.fin?'var(--gold-bg)':'#F2F2F7',cl=t.fin?'var(--gold)':'var(--ink3)';
    return '<div class="tl"><div class="tl-b" style="background:'+bg+';color:'+cl+';">'+t.age+'</div><div><div class="tl-t">'+t.t+'</div><div class="tl-d">'+t.d+'</div><div class="tl-a">'+t.v+'</div></div></div>';
  }).join('');
}

var DONE_STATE={};
function buildAksiyon() {
  if(!P.id)return;
  try{DONE_STATE=JSON.parse(localStorage.getItem('mn-done-'+P.id)||'{}');}catch(e){}
  var actions=[{id:'a1',emoji:'🥇',t:'Ziraat → Altın Hesabı Aç',d:'2 dakika. Miktar gir, satın al.'},{id:'a2',emoji:'📊',t:'Ziraat → Fon → ZPP',d:'Para Piyasası Fonu. Günlük faiz.'},{id:'a3',emoji:'📈',t:'Ziraat → Fon → BİST 30',d:'Al, unut. Takip etmen gerekmiyor.'},{id:'a4',emoji:'💵',t:'Ziraat → Fon → Döviz',d:'Kur koruması + faiz.'},{id:'a5',emoji:'🛡️',t:'Sigorta makbuzunu İK\'ya ilet',d:'Her ay tekrar et.'}];
  document.getElementById('act-list').innerHTML=actions.map(function(a){var done=DONE_STATE[a.id];return'<div class="act"><div style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:var(--gold-bg);border:1px solid var(--gold-bd);">'+a.emoji+'</div><div style="flex:1;"><div style="font-size:13px;font-weight:600;margin-bottom:2px;'+(done?'text-decoration:line-through;opacity:.5;':'')+'">'+a.t+'</div><div style="font-size:11px;color:var(--ink3);line-height:1.5;">'+a.d+'</div><button class="done-btn '+(done?'done':'')+'" onclick="toggleDone(\''+a.id+'\')"> '+(done?'✓ Tamamlandı':'İşaretle')+'</button></div></div>';}).join('');
  var aylikHtml='';
  S.araclar.forEach(function(a){aylikHtml+='<div class="arow"><div class="adot" style="background:'+a.renk+';"></div><div class="an"><div class="an-m">'+a.ad+'</div></div><div class="aa" style="color:'+a.renk+';">'+fmtN(Math.round(S.yatirim*a.oran/100))+' ₺</div></div>';});
  document.getElementById('act-aylik').innerHTML=aylikHtml;
}

function toggleDone(id) {
  DONE_STATE[id]=!DONE_STATE[id];
  try{localStorage.setItem('mn-done-'+P.id,JSON.stringify(DONE_STATE));}catch(e){}
  buildAksiyon();
}

// ── SİGORTA ───────────────────────────────────────────────────────────────
function getSigortaPrimTL(){if(!P||P.sigorta!=='var')return 0;var p=P.sigortaPrim||0,pb=P.sigortaPB||'tl';if(pb==='usd')return p*(S.rates.usd||44);if(pb==='eur')return p*(S.rates.eur||50);return p;}
function getSigortaAylikIade(){var primTL=getSigortaPrimTL(),oran=vergiBelirleGercek(S.brut,S.vergiBrut);return Math.round(primTL*0.5*oran);}
function getSigortaToplamBirikim(){if(!P||P.sigorta!=='var'||!S.sigortaBaslangic)return 0;var b=new Date(S.sigortaBaslangic),s=new Date();var ay=Math.max(0,(s.getFullYear()-b.getFullYear())*12+(s.getMonth()-b.getMonth()));return Math.round(getSigortaPrimTL()*ay);}

function updateSigortaDetay() {
  var el=document.getElementById('v-sigorta-detay');if(!el)return;
  if(!P||P.sigorta!=='var'){el.innerHTML='<div style="font-size:12px;color:var(--ink3);padding:10px 0;text-align:center;">Sigortanız yok. Aşağıdan ekleyin.</div>';document.getElementById('v-yillik').textContent='—';document.getElementById('v-toplam').textContent='~4.500 ₺';return;}
  var primTL=getSigortaPrimTL(),oran=vergiBelirleGercek(S.brut,S.vergiBrut),aiade=getSigortaAylikIade(),yiade=aiade*12,pb=P.sigortaPB==='usd'?'$':P.sigortaPB==='eur'?'€':'₺';
  el.innerHTML='<div class="tx-r"><span style="color:var(--ink2);">Aylık prim (orijinal)</span><span style="font-weight:600;">'+fmtN(P.sigortaPrim)+' '+pb+'</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">TL karşılığı</span><span style="font-weight:600;">'+fmtN(primTL)+' ₺</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">İndirim (%50)</span><span style="font-weight:600;">'+fmtN(primTL*0.5)+' ₺/ay</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">Vergi dilimi</span><span style="font-weight:700;color:var(--red);">%'+Math.round(oran*100)+'</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">Aylık iade</span><span class="tx-v">~'+fmtN(aiade)+' ₺</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">Yıllık iade</span><span class="tx-v">~'+fmtN(yiade)+' ₺</span></div>'+
    '<div class="tx-r"><span style="color:var(--ink2);">Toplam prim birikimi</span><span class="tx-v">~'+fmtN(getSigortaToplamBirikim())+' ₺</span></div>';
  document.getElementById('v-yillik').textContent='~'+fmtN(yiade)+' ₺';
  document.getElementById('v-toplam').textContent='~'+fmtN(yiade+4500)+' ₺';
  document.getElementById('s-vergi').textContent='~'+fmtN(yiade+4500)+' ₺';
}

function toggleSigortaForm(){var f=document.getElementById('sig-form-vergi');f.style.display=f.style.display==='none'?'block':'none';if(P.sigorta==='var'){document.getElementById('v-sig-pb').value=P.sigortaPB||'tl';document.getElementById('v-sig-prim').value=P.sigortaPrim||'';}}

function sigortaKaydet(){
  var pb=document.getElementById('v-sig-pb').value,prim=parseFloat(document.getElementById('v-sig-prim').value)||0;
  if(prim<=0){alert('Geçerli bir prim tutarı gir.');return;}
  P.sigorta='var';P.sigortaPrim=prim;P.sigortaPB=pb;
  if(!S.sigortaBaslangic)S.sigortaBaslangic=new Date().toISOString();
  var idx=TUM_PROFILLER.findIndex(function(p){return p.id===P.id;});
  if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}
  saveState();document.getElementById('sig-form-vergi').style.display='none';updateAll();updateSigortaDetay();renderHedef();buildAksiyon();
}

// ── KURLAR ────────────────────────────────────────────────────────────────
var _lastRateFetchOk=false;
async function fetchRates(){
  var updEl=document.getElementById('upd-time');
  if(updEl){updEl.textContent='Güncelleniyor...';updEl.classList.add('tk-loading');}
  try{
    var u='https://banker-furkan.vercel.app/api/rates';
    var r=await fetch(u),d=await r.json();
    S.prev=Object.assign({},S.rates);S.rates.usd=d.usd||42.8;S.rates.eur=d.eur||50.2;S.rates.altin=d.altin||7100;S.rates.ons=d.ons||3000;
    var n=new Date();
    if(updEl){updEl.textContent='Canlı · '+n.toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'});updEl.classList.remove('tk-loading');}
    if(!_lastRateFetchOk){showToast('Kurlar güncellendi','success',2000);}
    _lastRateFetchOk=true;
  }catch(e){
    if(!S.rates.altin)S.rates={altin:7100,usd:42.8,eur:50.2,ons:3000};
    if(updEl){updEl.textContent='Çevrimdışı';updEl.classList.remove('tk-loading');}
    if(_lastRateFetchOk!==false)showToast('Kurlar güncellenemedi — çevrimdışı veriler kullanılıyor','warning',4000);
    _lastRateFetchOk=false;
  }
  updateAll();if(typeof alarmlariKontrolEt==='function')alarmlariKontrolEt();
}

function updateChg(id,c,p){var el=document.getElementById(id);if(!el)return;if(!p||!c){el.textContent='—';el.className='tk-chg chg-n';return;}var pct=((c-p)/p*100).toFixed(2);el.textContent=(c>p?'+':'')+pct+'%';el.className='tk-chg '+(c>p?'chg-u':c<p?'chg-d':'chg-n');}
function vergiBelirle(b){if(!b)return 0.27;if(b>150000)return 0.40;if(b>60000)return 0.35;if(b>22000)return 0.27;if(b>8000)return 0.20;return 0.15;}
function vergiBelirleGercek(brut,vergi){if(vergi&&vergi>0&&brut>0){var ef=vergi/brut;if(ef>=0.36)return 0.40;if(ef>=0.30)return 0.35;if(ef>=0.22)return 0.27;if(ef>=0.16)return 0.20;return 0.15;}return vergiBelirle(brut);}

function updateAll(){
  var altin=S.rates.altin,usd=S.rates.usd,eur=S.rates.eur,ons=S.rates.ons;
  if(!altin)return;
  document.getElementById('t-altin').textContent=fmtR(altin)+' ₺';
  document.getElementById('t-usd').textContent=usd.toFixed(2)+' ₺';
  document.getElementById('t-eur').textContent=eur.toFixed(2)+' ₺';
  document.getElementById('t-ons').textContent=Math.round(ons).toLocaleString('tr-TR')+' $';
  updateChg('t-ac',altin,S.prev.altin);updateChg('t-uc',usd,S.prev.usd);updateChg('t-ec',eur,S.prev.eur);updateChg('t-oc',ons,S.prev.ons);
  var aA=S.araclar.find(function(a){return a.id==='altin';});var aO=aA?aA.oran/100:0.45;var aTutar=S.yatirim*aO;
  document.getElementById('t-gram-lbl').textContent=fmtR(aTutar)+'₺=';
  document.getElementById('t-gram').textContent=(aTutar/altin).toFixed(2)+' gram';
  renderDagılım();
  document.getElementById('yatirim-baslik').textContent=fmtN(S.yatirim)+' ₺';
  document.getElementById('s-yatirim').textContent=fmtN(S.yatirim)+' ₺';
  var pct=P.gelir>0?Math.round(S.yatirim/P.gelir*100):0;
  document.getElementById('s-oran').textContent="Gelinin %"+pct+"'i yatırıma";
  document.getElementById('d-tasarruf-pill').textContent='%'+pct+' tasarruf';
  document.getElementById('s-maas').textContent=fmtN(S.maas)+' ₺';
  // Anlık hesaplamalar
  var uA=S.araclar.find(function(a){return a.id==='usd';});var uO=uA?uA.oran/100:0.10;
  document.getElementById('c-gram').textContent=GIZLI?'••••••':(S.yatirim*aO/altin).toFixed(2)+' gram';
  document.getElementById('c-usd').textContent=GIZLI?'••••••':Math.round(S.yatirim*uO/usd).toLocaleString('tr-TR')+' $';
  document.getElementById('c-sig-toplam').textContent=P&&P.sigorta==='var'?fmtN(getSigortaToplamBirikim())+' ₺':'Sigorta yok';
  document.getElementById('c-sig-bu-ay').textContent=P&&P.sigorta==='var'?fmtN(getSigortaPrimTL())+' ₺':'—';
  document.getElementById('c-sure').textContent=P&&P.emekYas?(P.emekYas-P.yas)+' yıl · '+P.emekYas+' yaş':'—';
  var oran=vergiBelirleGercek(S.brut,S.vergiBrut),aiade=getSigortaAylikIade(),yiade=aiade*12;
  document.getElementById('s-vergi').textContent='~'+fmtN(yiade+4500)+' ₺';
  document.getElementById('v-yillik').textContent='~'+fmtN(yiade)+' ₺';
  document.getElementById('v-toplam').textContent='~'+fmtN(yiade+4500)+' ₺';
  var dPct=Math.round(oran*100);
  document.getElementById('v-dilim-big').textContent='%'+dPct;
  document.getElementById('v-dilim-big').style.color=dPct>=35?'var(--red)':dPct>=27?'var(--gold)':'var(--green)';
  document.getElementById('v-dilim-acikla').textContent='Tahmini vergi dilimi: %'+dPct;
  // Kalan süre pill güncelle
  var kalan=(P.emekYas||55)-(P.yas||27);
  var yasP=document.getElementById('d-yas-pill');if(yasP)yasP.textContent=(P.yas||27)+' yaş · '+(P.emekYas||55)+"'a "+kalan+' yıl';
  // Risk profili
  var rA={konser:'Muhafazakâr 🛡️',dengeli:'Dengeli ⚖️',agresif:'Agresif 🚀'};
  document.getElementById('s-risk').textContent=rA[P.risk]||P.risk;
  document.getElementById('s-risk-sub').textContent=kalan+' yıl planlama';
  buildSenaryolar();
  // Aktif sekmeleri güncelle
  var hTab=document.getElementById('tab-hedef');if(hTab&&hTab.classList.contains('active'))renderHedef();
  var yTab=document.getElementById('tab-yolharitasi');if(yTab&&yTab.classList.contains('active'))buildTimeline();
  var aTab=document.getElementById('tab-aksiyon');if(aTab&&aTab.classList.contains('active'))buildAksiyon();
  var gTab=document.getElementById('tab-gider');if(gTab&&gTab.classList.contains('active')){renderGiderler();renderGiderCharts();}
  var bkTab=document.getElementById('tab-bakiye');if(bkTab&&bkTab.classList.contains('active'))renderBakiye();
  var alTab=document.getElementById('tab-alarmlar');if(alTab&&alTab.classList.contains('active'))renderAlarmListe();
  updateSigortaDetay();
  var alEl=document.getElementById('al-arac');if(alEl){var f={altin:altin,usd:usd,eur:eur,ons:ons}[alEl.value];var sEl=document.getElementById('al-simdi');if(sEl&&f)sEl.textContent='Şu an: '+f.toLocaleString('tr-TR');}
}

// ── TAB ───────────────────────────────────────────────────────────────────
function goTab(name,btn) {
  var newIdx=TAB_ORDER.indexOf(name);
  var dir=newIdx>currentTabIdx?'slide-right':'slide-left';
  if(newIdx>=0)currentTabIdx=newIdx;
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active','slide-left','slide-right');});
  document.querySelectorAll('.nb').forEach(function(b){b.classList.remove('active');});
  var tabEl=document.getElementById('tab-'+name);
  if(tabEl){tabEl.classList.add('active',dir);setTimeout(function(){tabEl.classList.remove('slide-left','slide-right');},400);}
  if(btn)btn.classList.add('active');
  haptic();
  if(name==='calculator')setTimeout(cu,50);
  if(name==='bakiye')setTimeout(renderBakiye,50);
  if(name==='hedef')setTimeout(renderHedef,50);
  if(name==='yolharitasi')buildTimeline();
  if(name==='aksiyon')buildAksiyon();
  if(name==='alarmlar'){renderAlarmListe();renderAlarmGecmis();bildirimBannerKontrol();}
  if(name==='vergi')updateSigortaDetay();
  if(name==='gider')setTimeout(function(){renderGiderler();renderGiderCharts();},50);
}

// ── YATIRIM & RISK DÜZENLE ──────────────────────────────────────────────────
function toggleYatirimEdit(){var d=document.getElementById('yatirim-display'),e=document.getElementById('yatirim-edit'),i=document.getElementById('yatirim-input');if(e.style.display==='none'){e.style.display='block';d.style.display='none';i.value=S.yatirim;i.focus();i.select();}else cancelYatirim();}
function cancelYatirim(){document.getElementById('yatirim-edit').style.display='none';document.getElementById('yatirim-display').style.display='block';}
function saveYatirim(){
  var v=parseInt(document.getElementById('yatirim-input').value);
  if(!v||v<100){showToast('Geçerli bir tutar gir (min 100 ₺)','warning');return;}
  S.yatirim=v;P.yatirim=v;
  var idx=TUM_PROFILLER.findIndex(function(x){return x.id===P.id;});
  if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}
  saveState();updateAll();buildYasStrateji();buildSenaryolar();buildTimeline();renderHedef();buildAksiyon();cancelYatirim();cu();
  calculateHealthScore();
  showToast('Aylık yatırım güncellendi: '+fmtR(v)+' ₺','success');
}

function toggleRiskEdit(){var d=document.getElementById('risk-display'),e=document.getElementById('risk-edit'),i=document.getElementById('risk-input');if(e.style.display==='none'){e.style.display='block';d.style.display='none';i.value=P.risk||'dengeli';i.focus();}else cancelRisk();}
function cancelRisk(){document.getElementById('risk-edit').style.display='none';document.getElementById('risk-display').style.display='block';}
function saveRisk(){
  var r=document.getElementById('risk-input').value;
  P.risk=r;
  S.araclar=getDefaultAraclar(r);
  var idx=TUM_PROFILLER.findIndex(function(x){return x.id===P.id;});
  if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}
  saveState();updateAll();buildYasStrateji();buildSenaryolar();buildTimeline();renderHedef();buildAksiyon();cancelRisk();cu();
  var rA={konser:'Muhafazakâr',dengeli:'Dengeli',agresif:'Agresif'};
  showToast('Risk profili: '+(rA[r]||r),'success');
}

// ── DAĞILIM ───────────────────────────────────────────────────────────────
var ARAC_FN={altin:function(){return S.rates.altin||7100;},usd:function(){return S.rates.usd||44;},ppf:function(){return 1;},bist:function(){return 1;},diger:function(){return 1;}};

function renderDagılım(){
  if(!S.araclar||!S.araclar.length)S.araclar=getDefaultAraclar(P.risk||'dengeli');
  var c=document.getElementById('dagılım-satirlar');if(!c)return;
  c.innerHTML=S.araclar.map(function(a){
    var t=Math.round(S.yatirim*a.oran/100),extra='';
    if(a.aciklama==='gram'&&S.rates.altin&&!GIZLI)extra=(t/S.rates.altin).toFixed(2)+' gram alınır';
    else if(a.aciklama==='usd'&&S.rates.usd&&!GIZLI)extra='~'+Math.round(t/S.rates.usd)+' USD';
    else if(a.aciklama==='faiz')extra='Günlük ~%0.10 faiz';
    return '<div class="arow"><div class="adot" style="background:'+a.renk+';"></div>'+
      '<div class="an"><div class="an-m">'+a.ad+'</div><div class="an-s">'+a.platform+(extra?' · '+extra:'')+'</div></div>'+
      '<div class="abw"><div class="ab" style="width:'+Math.min(a.oran,100)+'%;background:'+a.renk+';"></div></div>'+
      '<div class="ap">%'+a.oran+'</div>'+
      '<div class="aa" style="color:'+a.renk+';">'+fmtN(t)+' ₺</div></div>';
  }).join('');
}

function renderAracListe(){var c=document.getElementById('arac-liste');if(!c)return;c.innerHTML=S.araclar.map(function(a,i){return'<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);"><div style="width:12px;height:12px;border-radius:50%;background:'+a.renk+';flex-shrink:0;"></div><div style="flex:1;font-size:13px;font-weight:500;">'+a.ad+'</div><div style="display:flex;align-items:center;gap:4px;"><span style="font-size:12px;color:var(--ink3);">%</span><input type="number" value="'+a.oran+'" min="0" max="100" step="1" style="width:52px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;font-size:16px;font-weight:600;text-align:center;font-family:var(--sans);" oninput="oranGuncelle('+i+',this.value)"></div><button onclick="aracSil('+i+')" style="font-size:18px;background:none;border:none;cursor:pointer;color:var(--ink3);padding:0 4px;">×</button></div>';}).join('');toplamGoster();}
function oranGuncelle(i,v){S.araclar[i].oran=parseInt(v)||0;toplamGoster();}
function toplamGoster(){var t=S.araclar.reduce(function(s,a){return s+a.oran;},0);var el=document.getElementById('toplam-oran-uyari');if(!el)return;el.style.display='block';if(t===100){el.style.background='var(--green-bg)';el.style.color='var(--green)';el.textContent='✓ Toplam: %100';}else if(t<100){el.style.background='var(--gold-bg)';el.style.color='var(--gold)';el.textContent='⚠ %'+t+' — '+(100-t)+'% eksik';}else{el.style.background='var(--red-bg)';el.style.color='var(--red)';el.textContent='✗ %'+t+' — '+(t-100)+'% fazla';}}
function aracEkle(ad,renk,oran){S.araclar.push({id:'ozel_'+Date.now(),ad:ad,renk:renk,oran:parseInt(oran),platform:'Ziraat → Yatırım',aciklama:''});renderAracListe();}
function aracSil(i){if(S.araclar.length<=1){showToast('En az 1 araç olmalı','warning');return;}S.araclar.splice(i,1);renderAracListe();}
function toggleAracDuzenle(){var n=document.getElementById('dagılım-normal'),d=document.getElementById('dagılım-duzenle'),b=document.getElementById('arac-btn');if(d.style.display==='none'){d.style.display='block';n.style.display='none';b.textContent='✕ Kapat';renderAracListe();}else dagılımIptal();}
function dagılımKaydet(){var t=S.araclar.reduce(function(s,a){return s+a.oran;},0);if(t!==100){showToast('Toplam %100 olmalı! Şu an: %'+t,'warning');return;}saveState();renderDagılım();updateAll();buildTimeline();renderHedef();buildAksiyon();dagılımIptal();cu();showToast('Yatırım dağılımı güncellendi','success');}
function dagılımIptal(){try{var st=JSON.parse(localStorage.getItem('mn-state-'+P.id)||'{}');if(st.araclar)S.araclar=st.araclar;else S.araclar=getDefaultAraclar(P.risk||'dengeli');}catch(e){S.araclar=getDefaultAraclar(P.risk||'dengeli');}document.getElementById('dagılım-duzenle').style.display='none';document.getElementById('dagılım-normal').style.display='block';document.getElementById('arac-btn').textContent='✏️ Düzenle';}

// ── BORDRO ────────────────────────────────────────────────────────────────
function calcPreview(){var net=parseInt(document.getElementById('f-net').value)||0,brut=parseInt(document.getElementById('f-brut').value)||0;if(!net&&!brut){document.getElementById('preview-box').style.display='none';return;}document.getElementById('preview-box').style.display='block';var oran=vergiBelirleGercek(brut,parseInt(document.getElementById('f-vergi').value)||0),primTL=getSigortaPrimTL(),iade=primTL>0?primTL*0.5*oran:0;document.getElementById('prev-net').textContent=fmtR(net)+' ₺';document.getElementById('prev-dilim').textContent='%'+Math.round(oran*100);document.getElementById('prev-iade').textContent=primTL>0?'~'+fmtR(iade)+' ₺':'Sigorta yok';document.getElementById('prev-yiade').textContent=primTL>0?'~'+fmtR(iade*12)+' ₺':'—';}
function saveBordro(){var ay=document.getElementById('f-ay').value,net=parseInt(document.getElementById('f-net').value),brut=parseInt(document.getElementById('f-brut').value),vergi=parseInt(document.getElementById('f-vergi').value);if(!net||!brut){showToast('Net Maaş ve Brüt Ücret gerekli','warning');return;}S.maas=net;S.brut=brut;S.vergiBrut=vergi||0;P.gelir=net;var idx=TUM_PROFILLER.findIndex(function(x){return x.id===P.id;});if(idx>=0){TUM_PROFILLER[idx]=P;try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(e){}}document.getElementById('s-maas').textContent=fmtN(net)+' ₺';document.getElementById('s-maas-sub').textContent=ay+' bordrousu';var e={ay:ay,net:net,brut:brut,vergi:vergi,tarih:new Date().toLocaleDateString('tr-TR')};S.bordrolar=S.bordrolar.filter(function(b){return b.ay!==ay;});S.bordrolar.unshift(e);if(S.bordrolar.length>24)S.bordrolar.pop();saveState();renderHistory();updateAll();renderHedef();buildSenaryolar();buildTimeline();buildAksiyon();document.getElementById('success-box').style.display='block';document.getElementById('success-msg').textContent=ay+' bordrousu kaydedildi.';document.getElementById('f-net').value='';document.getElementById('f-brut').value='';document.getElementById('f-vergi').value='';document.getElementById('preview-box').style.display='none';showToast(ay+' bordrosu kaydedildi ✓','success');}
function renderHistory(){var c=document.getElementById('bordro-history');if(!S.bordrolar.length){c.innerHTML=emptyState('📋','İlk bordronu gir','Maaş bordrosundaki 3 rakamı gir — vergi dilimin ve sigorta iadein otomatik hesaplansın.','Bordro Gir',"scrollToEl('f-net')");document.getElementById('avg-maas').textContent='—';return;}c.innerHTML=S.bordrolar.map(function(b,i){return'<div class="history-item"><span class="h-badge">'+b.ay+'</span><span class="h-net">'+fmtN(b.net)+' ₺</span><span style="font-size:10px;color:var(--ink3);">'+b.tarih+'</span><span class="h-del" onclick="delBordro('+i+')">Sil</span></div>';}).join('');var avg=S.bordrolar.reduce(function(a,b){return a+b.net;},0)/S.bordrolar.length;document.getElementById('avg-maas').textContent=fmtN(avg)+' ₺';document.getElementById('avg-sub').textContent='Son '+S.bordrolar.length+' bordro ortalaması';}
function delBordro(i){if(!confirm(S.bordrolar[i].ay+' silinsin mi?'))return;S.bordrolar.splice(i,1);if(S.bordrolar.length>0){S.maas=S.bordrolar[0].net;S.brut=S.bordrolar[0].brut;S.vergiBrut=S.bordrolar[0].vergi||0;P.gelir=S.bordrolar[0].net;}saveState();renderHistory();updateAll();renderHedef();}

// ── HESAP MAKİNESİ ────────────────────────────────────────────────────────
var cc;
function calcPortfoy(aylik,getiriPct,yil,artisPct){var mr=getiriPct/100/12,p=aylik,m=aylik;for(var mo=1;mo<=yil*12;mo++){if(artisPct>0&&mo>1&&mo%6===1)m=Math.round(m*(1+artisPct/100));p=p*(1+mr)+m;}return Math.round(p);}
function cu(){var m=parseInt(document.getElementById('c-m').value),r=parseInt(document.getElementById('c-r').value),y=parseInt(document.getElementById('c-y').value),inc=parseInt(document.getElementById('c-inc').value);document.getElementById('c-m-o').textContent=(m>=1000?(m/1000).toFixed(0)+'K':m)+' ₺';document.getElementById('c-r-o').textContent='%'+r;document.getElementById('c-y-o').textContent=y+' yıl';document.getElementById('c-inc-o').textContent='%'+inc;var mr=r/100/12,p=m,inv=m,pA=[m],iA=[m],mA=m;for(var mo=1;mo<=y*12;mo++){if(inc>0&&mo>1&&mo%6===1)mA=Math.round(mA*(1+inc/100));p=p*(1+mr)+mA;inv+=mA;pA.push(Math.round(p));iA.push(Math.round(inv));}document.getElementById('c-res').textContent=fmt(p);document.getElementById('c-inv').textContent=fmt(inv);document.getElementById('c-gain').textContent='+'+fmt(p-inv);document.getElementById('c-income').textContent=fmt(Math.round(p*r/100/12))+' / ay';var sA=P.yas||27,ms='',sh={};[5,10,15,20,y].forEach(function(a){if(sh[a]||a>y)return;sh[a]=true;var age=sA+a,f=(a===y);ms+='<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);'+(f?'font-weight:700;':'')+'"><span style="color:'+(f?'var(--green)':'var(--ink3)')+';">'+age+' yaş ('+a+'. yıl)</span><span style="color:'+(f?'var(--green)':'var(--ink)')+';">'+fmt(pA[Math.min(a*12,pA.length-1)])+'</span></div>';});document.getElementById('ms').innerHTML=ms;var labels=Array.from({length:y*12+1},function(_,i){return i%12===0?(sA+i/12)+' yaş':'';});if(cc)cc.destroy();cc=new Chart(document.getElementById('cc'),{type:'line',data:{labels:labels,datasets:[{label:'Portföy',data:pA,borderColor:'#B8860B',backgroundColor:'rgba(184,134,11,0.05)',fill:true,tension:0.4,pointRadius:0,borderWidth:2},{label:'Yatırılan',data:iA,borderColor:'#C8C8D0',borderDash:[4,4],fill:false,tension:0,pointRadius:0,borderWidth:1.5}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{boxWidth:8,font:{size:11},color:'#8E8E93',padding:10}}},scales:{y:{ticks:{callback:function(v){return fs(v);},font:{size:10},color:'#8E8E93'},grid:{color:'rgba(0,0,0,0.04)'}},x:{ticks:{font:{size:10},color:'#8E8E93',maxRotation:0},grid:{display:false}}}}});}

// ── BAKİYEM ───────────────────────────────────────────────────────────────
document.addEventListener('input',function(e){if(e.target.id==='bk-miktar'||e.target.id==='bk-alis'){var m=parseFloat(document.getElementById('bk-miktar').value)||0,a=parseFloat(document.getElementById('bk-alis').value)||0;document.getElementById('bk-maliyet').value=m&&a?Math.round(m*a).toLocaleString('tr-TR'):'';}});
function bakiyeEkle(){var arac=document.getElementById('bk-arac').value,miktar=parseFloat(document.getElementById('bk-miktar').value),alis=parseFloat(document.getElementById('bk-alis').value);if(!miktar||!alis){showToast('Miktar ve alış fiyatı giriniz','warning');return;}var I={altin:{ad:'🥇 Gram Altın',renk:'#C9A84C',birim:'gram'},ppf:{ad:'📊 Para Piy. Fonu',renk:'#1A7A4A',birim:'₺'},bist:{ad:'📈 BİST 30',renk:'#1A5FAA',birim:'pay'},usd:{ad:'💵 Döviz Fonu',renk:'#7B3FBE',birim:'$'},diger:{ad:'⭐ Diğer',renk:'#888',birim:'adet'}},info=I[arac]||I['diger'];S.bakiye.push({id:Date.now(),arac:arac,ad:info.ad,renk:info.renk,birim:info.birim,miktar:miktar,alis:alis,maliyet:Math.round(miktar*alis),tarih:new Date().toLocaleDateString('tr-TR')});saveState();document.getElementById('bk-miktar').value='';document.getElementById('bk-alis').value='';document.getElementById('bk-maliyet').value='';renderBakiye();renderHedef();showToast(info.ad+' pozisyon eklendi','success');}
function bakiyeSil(id){if(!confirm('Bu pozisyonu sil?'))return;S.bakiye=S.bakiye.filter(function(b){return b.id!==id;});saveState();renderBakiye();renderHedef();}
function renderBakiye(){var liste=document.getElementById('bakiye-liste'),ozet=document.getElementById('bk-ozet');if(!liste||!ozet)return;if(!S.bakiye.length){liste.innerHTML=emptyState('💼','İlk pozisyonunu ekle','Altın, döviz, fon gibi yatırımlarını ekle ve portföyünü canlı takip et.','+ Pozisyon Ekle',"scrollToEl('bk-miktar')");document.getElementById('bk-toplam-deger').textContent='—';document.getElementById('bk-toplam-maliyet').textContent='—';document.getElementById('bk-karzarar').textContent='—';document.getElementById('bk-karzarar-pct').textContent='—';ozet.innerHTML='';return;}var tM=0,tD=0,aO={};var rows=S.bakiye.map(function(b){var fn=ARAC_FN[b.arac]||ARAC_FN['diger'],gf=fn(),gd=(b.arac==='ppf'||b.arac==='diger')?b.maliyet:Math.round(b.miktar*gf),kz=gd-b.maliyet,kzP=b.maliyet>0?((kz/b.maliyet)*100).toFixed(1):0;tM+=b.maliyet;tD+=gd;if(!aO[b.arac])aO[b.arac]={ad:b.ad,renk:b.renk,maliyet:0,deger:0};aO[b.arac].maliyet+=b.maliyet;aO[b.arac].deger+=gd;var kzC=kz>0?'var(--green)':kz<0?'var(--red)':'var(--ink3)';return'<div style="background:var(--cream);border-radius:8px;padding:10px 12px;margin-bottom:8px;border:1px solid var(--border);"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:'+b.renk+';"></div><span style="font-size:13px;font-weight:600;">'+b.ad+'</span><span style="font-size:10px;color:var(--ink3);">'+b.tarih+'</span></div><button onclick="bakiyeSil('+b.id+')" style="font-size:16px;background:none;border:none;cursor:pointer;color:var(--ink3);">×</button></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;font-size:11px;"><div><div style="color:var(--ink3);">Miktar</div><div style="font-weight:600;">'+b.miktar+' '+b.birim+'</div></div><div><div style="color:var(--ink3);">Maliyet</div><div style="font-weight:600;">'+fmtN(b.maliyet)+' ₺</div></div><div><div style="color:var(--ink3);">Güncel</div><div style="font-weight:600;">'+fmtN(gd)+' ₺</div></div></div><div style="margin-top:6px;font-size:12px;font-weight:700;color:'+kzC+';">'+(kz>0?'+':'')+fmtN(kz)+' ₺ ('+(kz>0?'+':'')+kzP+'%)</div></div>';}).join('');liste.innerHTML=rows;var tKZ=tD-tM,tP=tM>0?((tKZ/tM)*100).toFixed(1):0,kzC=tKZ>0?'var(--green)':tKZ<0?'var(--red)':'var(--ink3)';document.getElementById('bk-toplam-deger').textContent=fmtN(tD)+' ₺';document.getElementById('bk-toplam-maliyet').textContent='Maliyet: '+fmtN(tM)+' ₺';document.getElementById('bk-karzarar').textContent=(tKZ>0?'+':'')+fmtN(tKZ)+' ₺';document.getElementById('bk-karzarar').style.color=kzC;document.getElementById('bk-karzarar-pct').textContent=(tKZ>0?'+':'')+tP+'%';ozet.innerHTML=Object.values(aO).map(function(a){var kz=a.deger-a.maliyet,kzP=a.maliyet>0?((kz/a.maliyet)*100).toFixed(1):0,kzC=kz>0?'var(--green)':kz<0?'var(--red)':'var(--ink3)';return'<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);"><div style="display:flex;align-items:center;gap:7px;"><div style="width:8px;height:8px;border-radius:50%;background:'+a.renk+';"></div><span style="font-size:12px;font-weight:500;">'+a.ad+'</span></div><div style="text-align:right;"><div style="font-size:13px;font-weight:700;">'+fmtN(a.deger)+' ₺</div><div style="font-size:10px;font-weight:600;color:'+kzC+';">'+(kz>0?'+':'')+kzP+'%</div></div></div>';}).join('');}

// ── HEDEF ─────────────────────────────────────────────────────────────────
function renderHedef(){if(!P.yas)return;var yas=P.yas,hYas=P.emekYas||55,getiri=18,artis=P.artis||0,tYil=hYas-yas,aylik=S.yatirim,hP=calcPortfoy(aylik,getiri,tYil,artis),gercek=S.bakiye.reduce(function(t,b){var fn=ARAC_FN[b.arac]||ARAC_FN['diger'];return t+(b.arac==='ppf'||b.arac==='diger'?b.maliyet:Math.round(b.miktar*fn()));},0),gAy=S.bordrolar.length,gYil=gAy/12,zPct=Math.min((gYil/tYil)*100,100).toFixed(1),beklenen=gYil>0?calcPortfoy(aylik,getiri,gYil,artis):0,bPct=hP>0?Math.min((gercek/hP)*100,100).toFixed(2):0,fark=gercek-beklenen;document.getElementById('hd-hedef').textContent=fmt(hP);document.getElementById('hd-hedef-sub').textContent=hYas+' yaşında · %'+getiri;document.getElementById('hd-gercek').textContent=gercek>0?fmt(gercek):'Bakiye gir';document.getElementById('hd-pct').textContent=gercek>0?'%'+bPct:'—';document.getElementById('hd-pct').style.color=gercek>0?'var(--green)':'var(--ink3)';document.getElementById('hd-pct-sub').textContent=gercek>0?'Hedefe ulaşma':'Bakiyem sekmesine gir';document.getElementById('hd-kalan').textContent=(tYil-gYil).toFixed(1)+' yıl';document.getElementById('hd-kalan-sub').textContent=hYas+' yaşına kalan';document.getElementById('hd-baslangic-lbl').textContent=yas+' yaş';document.getElementById('hd-hedef-yas-lbl').textContent=hYas+' yaş';document.getElementById('hd-zaman-bar').style.width=zPct+'%';document.getElementById('hd-gecen').textContent='← '+gYil.toFixed(1)+' yıl ('+zPct+'%)';document.getElementById('hd-birikim-bar').style.width=bPct+'%';document.getElementById('hd-birikim-pct-lbl').textContent='%'+bPct;document.getElementById('hd-beklenen').textContent=beklenen>0?fmt(beklenen):'—';document.getElementById('hd-gercek2').textContent=gercek>0?fmt(gercek):'—';document.getElementById('hd-fark').textContent=beklenen>0?(fark>=0?'+':'')+fmt(Math.abs(fark)):'—';document.getElementById('hd-fark').style.color=fark>=0?'var(--green)':'var(--red)';var yEl=document.getElementById('hd-yorum');if(gercek===0){yEl.style.background='var(--blue-bg)';yEl.style.color='var(--blue)';yEl.textContent='💡 Bakiyem sekmesine gerçek birikimini gir.';}else if(fark>=0){yEl.style.background='var(--green-bg)';yEl.style.color='var(--green)';yEl.textContent='🎉 Harika! Beklenenin önündesin.';}else{yEl.style.background='var(--gold-bg)';yEl.style.color='var(--gold)';yEl.textContent='📊 Biraz geride. Aylık yatırımını artırarak telafi edebilirsin.';}var rEl=document.getElementById('hd-rozet');if(gercek===0){rEl.textContent='⏳ Başlangıç';rEl.style.background='#F2F2F7';rEl.style.color='var(--ink3)';}else if(fark>=0){rEl.textContent='🚀 Hedefte';rEl.style.background='var(--green-bg)';rEl.style.color='var(--green)';}else{rEl.textContent='⚡ Yakala';rEl.style.background='var(--gold-bg)';rEl.style.color='var(--gold)';}var taslar='';[5,10,15,20,tYil].forEach(function(a){if(a>tYil)return;var age=yas+a,b=calcPortfoy(aylik,getiri,a,artis),f=(a===tYil),g=gYil>=a;taslar+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);"><div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:'+(g?'var(--green)':f?'var(--gold)':'#DDD')+';"></div><span style="font-size:12px;'+(f?'font-weight:700;':'')+'color:'+(f?'var(--gold)':g?'var(--green)':'var(--ink3)')+';">'+age+' yaş ('+a+'. yıl)</span></div><span style="font-size:13px;font-weight:700;color:'+(f?'var(--gold)':g?'var(--green)':'var(--ink)')+';">'+fmt(b)+'</span></div>';});document.getElementById('hd-taslar').innerHTML=taslar;}

// ── ALARMLAR ──────────────────────────────────────────────────────────────
function bildirimIzniIste(){if(!('Notification' in window)){alert('Bu tarayıcı bildirimleri desteklemiyor.');return;}Notification.requestPermission().then(function(p){if(p==='granted'){document.getElementById('bildirim-banner').style.display='none';bildirimGonder('Mangır','Bildirimler aktif!');}});};
function bildirimBannerKontrol(){var b=document.getElementById('bildirim-banner');if(!b)return;if(!('Notification' in window)||Notification.permission==='granted')b.style.display='none';}
function bildirimGonder(baslik,mesaj){if(Notification.permission==='granted')new Notification(baslik,{body:mesaj});S.alarmGecmis.unshift({zaman:new Date().toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'}),tarih:new Date().toLocaleDateString('tr-TR'),baslik:baslik,mesaj:mesaj});if(S.alarmGecmis.length>20)S.alarmGecmis.pop();saveState();renderAlarmGecmis();}
function updateAlarmHint(){var f={altin:S.rates.altin,usd:S.rates.usd,eur:S.rates.eur,ons:S.rates.ons}[document.getElementById('al-arac').value];var el=document.getElementById('al-simdi');if(el&&f)el.textContent='Şu an: '+f.toLocaleString('tr-TR');}
function alarmEkle(){var arac=document.getElementById('al-arac').value,yon=document.getElementById('al-yon').value,fiyat=parseFloat(document.getElementById('al-fiyat').value);if(!fiyat||fiyat<=0){showToast('Geçerli bir fiyat girin','warning');return;}var I={altin:'🥇 Gram Altın',usd:'💵 USD/TL',eur:'💶 EUR/TL',ons:'⭐ ONS/$'};S.alarmlar.push({id:Date.now(),arac:arac,ad:I[arac],yon:yon,fiyat:fiyat,aktif:true,tetiklendi:false});saveState();document.getElementById('al-fiyat').value='';renderAlarmListe();showToast('Alarm kuruldu: '+I[arac]+' '+(yon==='yukari'?'↑':'↓')+' '+fiyat,'success');}
function alarmSil(id){S.alarmlar=S.alarmlar.filter(function(a){return a.id!==id;});saveState();renderAlarmListe();}
function alarmToggle(id){S.alarmlar=S.alarmlar.map(function(a){if(a.id===id){a.aktif=!a.aktif;a.tetiklendi=false;}return a;});saveState();renderAlarmListe();}
function renderAlarmListe(){var el=document.getElementById('alarm-liste');if(!el)return;if(!S.alarmlar.length){el.innerHTML=emptyState('🔔','Fiyat alarmı kur','Altın, döviz veya ons fiyatı hedefine ulaşınca anında bildirim al.','+ Alarm Ekle',"scrollToEl('al-fiyat')");return;}var F={altin:S.rates.altin,usd:S.rates.usd,eur:S.rates.eur,ons:S.rates.ons};el.innerHTML=S.alarmlar.map(function(a){var gf=F[a.arac],yakin=gf&&Math.abs(gf-a.fiyat)/a.fiyat<0.02,bg=a.tetiklendi?'var(--green-bg)':yakin?'var(--gold-bg)':'var(--cream)',bd=a.tetiklendi?'var(--green-bd)':yakin?'var(--gold-bd)':'var(--border)';return'<div style="background:'+bg+';border:1px solid '+bd+';border-radius:8px;padding:10px 12px;margin-bottom:8px;"><div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:13px;font-weight:600;">'+a.ad+' '+(a.yon==='yukari'?'↑':'↓')+' '+a.fiyat.toLocaleString('tr-TR')+(a.arac==='ons'?' $':' ₺')+'</div><div style="font-size:10px;color:var(--ink3);margin-top:2px;">'+(a.yon==='yukari'?'Yukarı geçince':'Aşağı düşünce')+(gf?' · Şu an: '+gf.toLocaleString('tr-TR'):'')+(a.tetiklendi?' · ✓ Tetiklendi':'')+(yakin&&!a.tetiklendi?' · ⚡ Yaklaşıyor!':'')+'</div></div><div style="display:flex;gap:8px;align-items:center;"><button onclick="alarmToggle('+a.id+')" style="font-size:10px;padding:3px 8px;border-radius:12px;border:1px solid var(--border);background:'+(a.aktif?'var(--green-bg)':'var(--cream)')+';color:'+(a.aktif?'var(--green)':'var(--ink3)')+';cursor:pointer;font-family:var(--sans);font-weight:600;">'+(a.aktif?'Aktif':'Pasif')+'</button><button onclick="alarmSil('+a.id+')" style="font-size:16px;background:none;border:none;cursor:pointer;color:var(--ink3);">×</button></div></div></div>';}).join('');}
function alarmlariKontrolEt(){if(!S.rates.altin)return;var F={altin:S.rates.altin,usd:S.rates.usd,eur:S.rates.eur,ons:S.rates.ons},degisti=false;S.alarmlar.forEach(function(a){if(!a.aktif||a.tetiklendi)return;var gf=F[a.arac];if(!gf)return;if((a.yon==='yukari'&&gf>=a.fiyat)||(a.yon==='asagi'&&gf<=a.fiyat)){a.tetiklendi=true;degisti=true;bildirimGonder('🔔 Fiyat Alarmı!',a.ad+' '+gf.toLocaleString('tr-TR')+(a.arac==='ons'?'$':'₺')+' seviyesine '+(a.yon==='yukari'?'yükseldi':'düştü')+'!');}});if(degisti){saveState();renderAlarmListe();}updateAlarmHint();}
function renderAlarmGecmis(){var el=document.getElementById('alarm-gecmis');if(!el)return;if(!S.alarmGecmis.length){el.innerHTML='<div style="font-size:12px;color:var(--ink3);text-align:center;padding:12px 0;">Henüz bildirim yok.</div>';return;}el.innerHTML=S.alarmGecmis.slice(0,10).map(function(g){return'<div style="padding:7px 0;border-bottom:1px solid var(--border);"><div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:600;">'+g.baslik+'</span><span style="font-size:10px;color:var(--ink3);">'+g.zaman+'</span></div><div style="font-size:11px;color:var(--ink3);margin-top:1px;">'+g.mesaj+'</div></div>';}).join('');}
function gecmisiTemizle(){S.alarmGecmis=[];saveState();renderAlarmGecmis();}
function maasHatirlaticiKaydet(){var gun=parseInt(document.getElementById('maas-gun').value)||15,hatir=parseInt(document.getElementById('maas-hatir').value)||0;try{localStorage.setItem('mn-maas-'+(P.id||P.ad),JSON.stringify({gun:gun,hatirlatma:hatir}));}catch(e){}document.getElementById('maas-durum').textContent='✓ Kaydedildi! Her ayın '+gun+'. gününde.';document.getElementById('maas-durum').style.color='var(--green)';}

// ── DARK MODE ────────────────────────────────────────────────────────────
function toggleTheme(){
  var html=document.documentElement;
  var isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  var btn=document.getElementById('theme-btn');
  if(btn)btn.textContent=isDark?'🌙':'☀️';
  try{localStorage.setItem('mn-theme',isDark?'light':'dark');}catch(e){}
  // Chart.js renk güncelle
  if(typeof cc!=='undefined'&&cc)try{cu();}catch(e){}
  // Gider chart'ları tema renklerini kullandığı için yeniden render
  try{renderGiderCharts();}catch(e){}
}
function initTheme(){
  var saved;try{saved=localStorage.getItem('mn-theme');}catch(e){}
  if(!saved){saved=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
  document.documentElement.setAttribute('data-theme',saved);
  var btn=document.getElementById('theme-btn');
  if(btn)btn.textContent=saved==='dark'?'☀️':'🌙';
}

// ── BOTTOM NAV ───────────────────────────────────────────────────────────
function goTabBottom(name,btn){
  var newIdx=TAB_ORDER.indexOf(name);
  var dir=newIdx>currentTabIdx?'slide-right':'slide-left';
  if(newIdx>=0)currentTabIdx=newIdx;
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active','slide-left','slide-right');});
  document.querySelectorAll('.nb').forEach(function(b){b.classList.remove('active');});
  document.querySelectorAll('.bnav-item').forEach(function(b){b.classList.remove('active');});
  var tabEl=document.getElementById('tab-'+name);
  if(tabEl){tabEl.classList.add('active',dir);setTimeout(function(){tabEl.classList.remove('slide-left','slide-right');},400);}
  if(btn)btn.classList.add('active');
  haptic();
  var nbs=document.querySelectorAll('.nb');
  nbs.forEach(function(b){if(b.textContent.toLowerCase().indexOf(name)>-1||b.onclick.toString().indexOf("'"+name+"'")>-1)b.classList.add('active');});
  if(name==='calculator')setTimeout(cu,50);
  if(name==='bakiye')setTimeout(renderBakiye,50);
  if(name==='hedef')setTimeout(renderHedef,50);
  if(name==='yolharitasi')buildTimeline();
  if(name==='aksiyon')buildAksiyon();
  if(name==='alarmlar'){renderAlarmListe();renderAlarmGecmis();bildirimBannerKontrol();}
  if(name==='vergi')updateSigortaDetay();
  if(name==='gider')setTimeout(function(){renderGiderler();renderGiderCharts();},50);
  window.scrollTo({top:0,behavior:'smooth'});
}
function toggleBottomMore(){
  var tabs=['yolharitasi','aksiyon','alarmlar','bordro','vergi'];
  var names=['🗺️ Yol Haritası','✅ Aksiyon','🔔 Alarmlar','📋 Bordro','💸 Vergi'];
  var menu=document.createElement('div');
  menu.style.cssText='position:fixed;bottom:60px;right:12px;background:var(--white);border:1px solid var(--border);border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,.12);padding:8px 4px;z-index:300;animation:fadeInUp .2s ease-out;min-width:160px;';
  menu.id='bottom-more-menu';
  var old=document.getElementById('bottom-more-menu');if(old){old.remove();return;}
  tabs.forEach(function(t,i){
    var btn=document.createElement('button');
    btn.style.cssText='display:block;width:100%;text-align:left;padding:10px 14px;border:none;background:none;font-size:13px;font-weight:500;cursor:pointer;font-family:var(--sans);color:var(--ink);border-radius:8px;transition:background .15s;';
    btn.textContent=names[i];
    btn.onmouseover=function(){this.style.background='var(--gold-bg)';};
    btn.onmouseout=function(){this.style.background='none';};
    btn.onclick=function(){menu.remove();goTabBottom(t,null);document.querySelectorAll('.bnav-item').forEach(function(b){b.classList.remove('active');});};
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);
  document.addEventListener('click',function closeMenu(e){if(!menu.contains(e.target)&&e.target.id!=='bnav-more'){menu.remove();document.removeEventListener('click',closeMenu);}},{once:false});
}

// ── GİDER TAKİBİ ─────────────────────────────────────────────────────────
var giderSecilenKat='';
var GIDER_KATS={market:{ad:'Market',icon:'🛒',renk:'#e67e22'},kira:{ad:'Kira',icon:'🏠',renk:'#3498db'},fatura:{ad:'Faturalar',icon:'💡',renk:'#f1c40f'},ulasim:{ad:'Ulaşım',icon:'🚗',renk:'#9b59b6'},yemek:{ad:'Yemek',icon:'🍽️',renk:'#e74c3c'},saglik:{ad:'Sağlık',icon:'🏥',renk:'#2ecc71'},giyim:{ad:'Giyim',icon:'👕',renk:'#1abc9c'},eglence:{ad:'Eğlence',icon:'🎬',renk:'#e91e63'},diger:{ad:'Diğer',icon:'📦',renk:'#95a5a6'}};

function selectGiderCat(el,cat){
  document.querySelectorAll('.gider-cat').forEach(function(c){c.classList.remove('selected');});
  el.classList.add('selected');
  giderSecilenKat=cat;
}

function giderEkle(){
  if(!giderSecilenKat){showToast('Lütfen bir kategori seçin','warning');return;}
  var tutar=parseFloat(document.getElementById('gider-tutar').value);
  if(!tutar||tutar<=0){showToast('Geçerli bir tutar girin','warning');return;}
  var aciklama=document.getElementById('gider-aciklama').value.trim()||GIDER_KATS[giderSecilenKat].ad;
  if(!S.giderler)S.giderler=[];
  S.giderler.push({id:Date.now(),kategori:giderSecilenKat,aciklama:aciklama,tutar:tutar,tarih:new Date().toISOString(),ay:new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'})});
  saveState();
  haptic();
  document.getElementById('gider-tutar').value='';
  document.getElementById('gider-aciklama').value='';
  document.querySelectorAll('.gider-cat').forEach(function(c){c.classList.remove('selected');});
  giderSecilenKat='';
  renderGiderler();renderGiderCharts();renderBudget();calculateHealthScore();
  showToast(esc(aciklama)+' gideri eklendi','success',2500);
}

function giderSil(id){
  if(!confirm('Bu gideri sil?'))return;
  S.giderler=S.giderler.filter(function(g){return g.id!==id;});
  saveState();
  var filtreEl=document.getElementById('gider-ay-filtre');
  if(filtreEl){
    var secilenAy=filtreEl.value;
    filtreEl.innerHTML='';
    var aylar={};
    S.giderler.forEach(function(g){aylar[g.ay]=true;});
    var now=new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
    aylar[now]=true;
    Object.keys(aylar).forEach(function(a){var o=document.createElement('option');o.value=a;o.textContent=a;if(a===secilenAy)o.selected=true;filtreEl.appendChild(o);});
    if(!aylar[secilenAy])filtreEl.value=now;
  }
  renderGiderler();renderGiderCharts();renderBudget();calculateHealthScore();
}

function renderGiderler(){
  if(!S.giderler)S.giderler=[];
  // Ay filtresi başlat
  var filtreEl=document.getElementById('gider-ay-filtre');
  if(filtreEl&&filtreEl.options.length===0){
    var aylar={};S.giderler.forEach(function(g){aylar[g.ay]=true;});
    var now=new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
    aylar[now]=true;
    Object.keys(aylar).forEach(function(a){var o=document.createElement('option');o.value=a;o.textContent=a;if(a===now)o.selected=true;filtreEl.appendChild(o);});
  }
  var secilenAy=filtreEl?filtreEl.value:new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
  var filtered=S.giderler.filter(function(g){return g.ay===secilenAy;});
  var liste=document.getElementById('gider-liste');
  if(!filtered.length){liste.innerHTML=S.giderler.length===0?emptyState('🧾','Harcamalarını takip et','Giderlerini kategorize et, aylık trendini gör ve bütçeni kontrol altında tut.','+ Gider Ekle',"scrollToEl('gider-tutar')"):'<div style="font-size:12px;color:var(--ink3);text-align:center;padding:16px 0;">Bu ay gider yok.</div>';document.getElementById('gider-toplam').textContent='0 ₺';document.getElementById('gider-kalan').textContent='—';return;}
  var toplam=filtered.reduce(function(s,g){return s+g.tutar;},0);
  document.getElementById('gider-toplam').textContent=fmtN(toplam)+' ₺';
  var kalan=S.maas-toplam-S.yatirim;
  document.getElementById('gider-kalan').textContent='Gelir: '+fmtN(S.maas)+' ₺ — Yatırım: '+fmtN(S.yatirim)+' ₺ — Kalan: '+fmtN(Math.max(0,kalan))+' ₺';
  liste.innerHTML=filtered.sort(function(a,b){return b.id-a.id;}).map(function(g){
    var info=GIDER_KATS[g.kategori]||GIDER_KATS['diger'];
    var tarih=new Date(g.tarih).toLocaleDateString('tr-TR',{day:'numeric',month:'short'});
    return '<div class="gider-item"><div style="width:32px;height:32px;border-radius:8px;background:'+info.renk+'15;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">'+info.icon+'</div><div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+esc(g.aciklama)+'</div><div style="font-size:10px;color:var(--ink3);margin-top:1px;">'+info.ad+' · '+tarih+'</div></div><div style="text-align:right;"><div style="font-size:14px;font-weight:700;color:var(--red);">-'+fmtN(g.tutar)+' ₺</div></div><button onclick="giderSil('+g.id+')" style="font-size:14px;background:none;border:none;cursor:pointer;color:var(--ink3);padding:0 4px;">×</button></div>';
  }).join('');
}

var giderPie,giderTrend;
function renderGiderCharts(){
  if(!S.giderler||!S.giderler.length){
    // Tüm giderler silindiğinde chartları temizle
    if(giderPie){giderPie.destroy();giderPie=null;}
    if(giderTrend){giderTrend.destroy();giderTrend=null;}
    var ozetEl=document.getElementById('gider-cats-ozet');if(ozetEl)ozetEl.innerHTML='';
    return;
  }
  var secilenAy=document.getElementById('gider-ay-filtre')?document.getElementById('gider-ay-filtre').value:new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
  var filtered=S.giderler.filter(function(g){return g.ay===secilenAy;});
  // Pie chart
  var catTotals={};filtered.forEach(function(g){catTotals[g.kategori]=(catTotals[g.kategori]||0)+g.tutar;});
  var labels=[],data=[],colors=[];
  Object.keys(catTotals).forEach(function(k){var info=GIDER_KATS[k]||GIDER_KATS['diger'];labels.push(info.icon+' '+info.ad);data.push(catTotals[k]);colors.push(info.renk);});
  var pieEl=document.getElementById('gider-pie');
  if(pieEl){
    if(giderPie){giderPie.destroy();giderPie=null;}
    if(data.length>0){
      giderPie=new Chart(pieEl,{type:'doughnut',data:{labels:labels,datasets:[{data:data,backgroundColor:colors,borderWidth:2,borderColor:document.documentElement.getAttribute('data-theme')==='dark'?'#1a1a2e':'#fff'}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false}}}});
    }
  }
  // Kategori özet
  var ozetEl=document.getElementById('gider-cats-ozet');
  if(ozetEl){
    if(data.length>0){
      var topTotal=data.reduce(function(a,b){return a+b;},0);
      ozetEl.innerHTML=labels.map(function(l,i){var pct=topTotal>0?((data[i]/topTotal)*100).toFixed(0):'0';return '<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--border);font-size:12px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;border-radius:50%;background:'+colors[i]+';"></div><span>'+l+'</span></div><div style="font-weight:700;">'+fmtN(data[i])+' ₺ <span style="color:var(--ink3);font-weight:500;">(%'+pct+')</span></div></div>';}).join('');
    } else {
      ozetEl.innerHTML='';
    }
  }
  // Trend chart
  var ayTotals={};S.giderler.forEach(function(g){ayTotals[g.ay]=(ayTotals[g.ay]||0)+g.tutar;});
  var tLabels=Object.keys(ayTotals).slice(-6),tData=tLabels.map(function(a){return ayTotals[a];});
  var trendEl=document.getElementById('gider-trend');
  if(trendEl){
    if(giderTrend){giderTrend.destroy();giderTrend=null;}
    if(tLabels.length>0){
      giderTrend=new Chart(trendEl,{type:'bar',data:{labels:tLabels,datasets:[{label:'Gider',data:tData,backgroundColor:'rgba(231,76,60,.6)',borderRadius:6,borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:function(v){return fs(v);},font:{size:10},color:'#8E8E93'},grid:{color:'rgba(0,0,0,.04)'}},x:{ticks:{font:{size:10},color:'#8E8E93'},grid:{display:false}}}}});
    }
  }
}

// ── EXPORT / IMPORT ──────────────────────────────────────────────────────
function exportData(){
  if(!P.id){alert('Önce bir profil seçin.');return;}
  var data={profiller:TUM_PROFILLER,aktifProfil:P,state:{yatirim:S.yatirim,maas:S.maas,brut:S.brut,vergiBrut:S.vergiBrut,bordro:S.bordrolar,bakiye:S.bakiye,araclar:S.araclar,alarmlar:S.alarmlar,alarmGecmis:S.alarmGecmis,sigortaBaslangic:S.sigortaBaslangic,giderler:S.giderler||[]},tarih:new Date().toISOString(),versiyon:'2.1'};
  var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='mangir-yedek-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();URL.revokeObjectURL(a.href);
}

function importData(event){
  var file=event.target.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      if(!data.profiller||!data.state){alert('Geçersiz yedek dosyası.');return;}
      if(!confirm('Mevcut veriler üzerine yazılacak. Devam?'))return;
      TUM_PROFILLER=data.profiller;
      try{localStorage.setItem('mn-profiller',JSON.stringify(TUM_PROFILLER));}catch(ex){}
      if(data.aktifProfil){
        P=data.aktifProfil;
        S.yatirim=data.state.yatirim||P.yatirim;
        S.maas=data.state.maas||P.gelir;
        S.bordrolar=data.state.bordro||[];
        S.bakiye=data.state.bakiye||[];
        S.araclar=data.state.araclar||getDefaultAraclar(P.risk||'dengeli');
        S.alarmlar=data.state.alarmlar||[];
        S.alarmGecmis=data.state.alarmGecmis||[];
        S.sigortaBaslangic=data.state.sigortaBaslangic||null;
        S.giderler=data.state.giderler||[];
        saveState();
      }
      alert('✓ Yedek başarıyla yüklendi!');
      location.reload();
    }catch(ex){alert('Dosya okunamadı: '+ex.message);}
  };
  reader.readAsText(file);
  event.target.value='';
}

// ── SCROLL HINT SYSTEM ───────────────────────────────────────────────────
function initScrollHints() {
  // ─── Top nav scroll detection ───
  var topNav = document.getElementById('top-nav');
  var navContainer = document.getElementById('nav-container');
  var navHint = document.getElementById('nav-scroll-hint');

  if (topNav && navContainer) {
    function updateTopNavScroll() {
      var sl = topNav.scrollLeft;
      var maxScroll = topNav.scrollWidth - topNav.clientWidth;
      navContainer.classList.remove('scroll-start', 'scroll-end', 'scroll-middle');
      if (maxScroll <= 2) {
        navContainer.classList.add('scroll-end');
        if (navHint) navHint.classList.add('hidden');
      } else if (sl <= 2) {
        navContainer.classList.add('scroll-start');
      } else if (sl >= maxScroll - 2) {
        navContainer.classList.add('scroll-end');
      } else {
        navContainer.classList.add('scroll-middle');
      }
      // Hide hint arrow once user scrolls
      if (navHint && sl > 10) {
        navHint.classList.add('hidden');
      }
    }
    topNav.addEventListener('scroll', updateTopNavScroll, { passive: true });
    setTimeout(updateTopNavScroll, 100);
    // Auto-hide hint arrow after 6 seconds
    if (navHint) {
      setTimeout(function() { navHint.classList.add('hidden'); }, 6000);
    }
  }

  // ─── Bottom nav scroll detection ───
  var bottomInner = document.getElementById('bottom-nav-inner');
  var bottomNav = document.getElementById('bottom-nav');
  var bnavHint = document.getElementById('bnav-scroll-hint');
  var swipeTooltip = document.getElementById('swipe-hint-tooltip');

  if (bottomInner && bottomNav) {
    function updateBottomNavScroll() {
      var sl = bottomInner.scrollLeft;
      var maxScroll = bottomInner.scrollWidth - bottomInner.clientWidth;
      bottomNav.classList.remove('bnav-scroll-start', 'bnav-scroll-end', 'bnav-scroll-middle');
      if (maxScroll <= 2) {
        bottomNav.classList.add('bnav-scroll-end');
        if (bnavHint) bnavHint.classList.add('hidden');
      } else if (sl <= 2) {
        bottomNav.classList.add('bnav-scroll-start');
      } else if (sl >= maxScroll - 2) {
        bottomNav.classList.add('bnav-scroll-end');
      } else {
        bottomNav.classList.add('bnav-scroll-middle');
      }
      // Hide hint chevrons once user scrolls
      if (bnavHint && sl > 10) {
        bnavHint.classList.add('hidden');
      }
    }
    bottomInner.addEventListener('scroll', updateBottomNavScroll, { passive: true });
    setTimeout(updateBottomNavScroll, 200);

    // Auto-hide bottom hint arrow after 6 seconds
    if (bnavHint) {
      setTimeout(function() { bnavHint.classList.add('hidden'); }, 6000);
    }

    // Show tooltip only once per user
    if (swipeTooltip) {
      var hintShown = false;
      try { hintShown = localStorage.getItem('mn-swipe-hint-shown') === '1'; } catch(e) {}
      if (hintShown) {
        swipeTooltip.style.display = 'none';
      } else {
        // Mark as shown after animation completes
        setTimeout(function() {
          try { localStorage.setItem('mn-swipe-hint-shown', '1'); } catch(e) {}
        }, 5500);
        // Remove tooltip completely after it fades
        setTimeout(function() {
          if (swipeTooltip.parentNode) swipeTooltip.style.display = 'none';
        }, 6000);
      }
    }
  }
}

// ── FAZ 3 (SAĞLIK SKORU, TEKRARLAYAN GIDER, BÜTÇE) ───────────────
function calculateHealthScore() {
  if(!P.id) return;
  var gel=P.gelir||0, yatS=S.yatirim||0;
  var gTotal=S.giderler?S.giderler.filter(function(g){return g.ay===new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'})}).reduce(function(a,b){return a+b.tutar},0):0;
  var sRate=gel>0 ? Math.min(100, Math.round((yatS/gel)*100)) : 0;
  var gRate=gel>0 ? Math.min(100, Math.round((gTotal/gel)*100)) : 0;
  
  var score = 50; 
  if(sRate >= 20) score += 20; else if(sRate >= 10) score += 10;
  if(sRate >= 40) score += 10;
  if(gRate <= 50) score += 20; else if(gRate <= 70) score += 10; else if(gRate > 90) score -= 20;
  if(!S.bakiye || S.bakiye.length===0) score -= 10;

  score = Math.max(0, Math.min(100, score));

  var offset = 377 - (377 * score / 100);
  var ring = document.getElementById('health-ring-fg');
  if(ring) {
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = score>=80 ? 'var(--green)' : score>=50 ? 'var(--gold)' : 'var(--red)';
  }
  var valEl = document.getElementById('health-score');
  if(valEl) valEl.textContent = score;

  var lblEl = document.getElementById('health-label');
  var grdEl = document.getElementById('health-grade');
  if(lblEl && grdEl) {
    if(score >= 80) { lblEl.textContent="Mükemmel Yoldaşı"; grdEl.textContent="A Sınıfı Finansal Sağlık"; grdEl.style.color="var(--green)"; grdEl.style.background="var(--green-bg)"; }
    else if(score >= 50) { lblEl.textContent="İyi İlerliyorsun"; grdEl.textContent="B Sınıfı Finansal Sağlık"; grdEl.style.color="var(--gold)"; grdEl.style.background="var(--gold-bg)"; }
    else { lblEl.textContent="Biraz Düzenleme Şart"; grdEl.textContent="C Sınıfı Finansal Sağlık"; grdEl.style.color="var(--red)"; grdEl.style.background="var(--red-bg)"; }
  }

  var facEl = document.getElementById('health-factors');
  if(facEl) {
    facEl.innerHTML = 
      '<div class="health-factor"><span>Tasarruf Oranı (%'+sRate+')</span><div class="health-factor-bar"><div class="health-factor-fill" style="width:'+sRate+'%;background:'+(sRate>=20?'var(--green)':'var(--red)')+'"></div></div></div>' +
      '<div class="health-factor"><span>Gider/Gelir (%'+gRate+')</span><div class="health-factor-bar"><div class="health-factor-fill" style="width:'+Math.min(100,gRate)+'%;background:'+(gRate<=50?'var(--green)':gRate<=80?'var(--gold)':'var(--red)')+'"></div></div></div>';
  }
}

function applyRecurring() {
  if(!S.tekrarlayan || S.tekrarlayan.length===0) return;
  var currAy = new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
  var hasAdded = false;
  S.tekrarlayan.forEach(function(r){
    if(r.sonAy !== currAy) {
      if(!S.giderler)S.giderler=[];
      S.giderler.push({id:Date.now()+Math.floor(Math.random()*1000), aciklama:r.ad+' (Oto)', tutar:r.tutar, kategori:r.kat, tarih:new Date().toISOString(), ay:currAy});
      r.sonAy = currAy;
      hasAdded = true;
    }
  });
  if(hasAdded) {
    saveState(); renderGiderler(); renderGiderCharts();
    showToast('Tekrarlayan giderler bu ay için işlendi','info',3000);
  }
}

function renderRecur() {
  var list = document.getElementById('recur-liste');
  if(!list) return;
  if(!S.tekrarlayan || S.tekrarlayan.length===0) {
    list.innerHTML='<div style="font-size:12px;color:var(--ink3);padding:10px 0;text-align:center;">Tekrarlayan gider yok.</div>';
    return;
  }
  list.innerHTML = S.tekrarlayan.map(function(r, i){
    var info=GIDER_KATS[r.kat]||GIDER_KATS['diger'];
    return '<div class="recur-item"><div class="recur-icon" style="background:'+info.renk+'20;">'+info.icon+'</div><div class="recur-info"><div class="recur-info-name">'+esc(r.ad)+'</div><div class="recur-info-sub">Ayın 1\'inde</div></div><div class="recur-amount">-'+fmtN(r.tutar)+' ₺</div><button class="recur-del" onclick="recurSil('+i+')">×</button></div>';
  }).join('');
}

function recurEkle() {
  var k=document.getElementById('recur-kat').value;
  var info=GIDER_KATS[k];
  var t=parseFloat(document.getElementById('recur-tutar').value);
  if(!t||t<=0){showToast('Geçerli bir tutar girin.','warning');return;}
  if(!S.tekrarlayan)S.tekrarlayan=[];
  S.tekrarlayan.push({ad:info.ad, kat:k, tutar:t, sonAy:''});
  saveState(); document.getElementById('recur-tutar').value='';
  renderRecur(); applyRecurring(); haptic();
  showToast('Sisteme eklendi ✓','success',2000);
}

function recurSil(i) {
  S.tekrarlayan.splice(i,1); saveState(); renderRecur(); haptic();
}

function toggleBudgetEdit() {
  var b=document.getElementById('budget-edit');
  if(b.style.display==='none'){ b.style.display='block'; renderBudgetInputs(); } else { b.style.display='none'; }
}

function renderBudgetInputs() {
  var limitDiv = document.getElementById('budget-limits');
  if(!limitDiv) return;
  var html = '';
  Object.keys(GIDER_KATS).forEach(function(k){
    var info=GIDER_KATS[k];
    var val = S.butce && S.butce[k] ? S.butce[k] : '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div style="font-size:12px;display:flex;align-items:center;gap:6px;">'+info.icon+' <span style="font-weight:600;">'+info.ad+'</span></div><input type="number" id="b-lim-'+k+'" class="form-input" placeholder="Limit ₺" value="'+val+'" style="width:100px;padding:6px 10px;font-size:12px;text-align:right;"></div>';
  });
  limitDiv.innerHTML = html;
}

function budgetKaydet() {
  if(!S.butce) S.butce = {};
  Object.keys(GIDER_KATS).forEach(function(k){
    var v=parseFloat(document.getElementById('b-lim-'+k).value);
    if(v>0) S.butce[k] = v; else delete S.butce[k];
  });
  saveState(); document.getElementById('budget-edit').style.display='none';
  renderBudget(); calculateHealthScore(); haptic();
  showToast('Bütçe limitleri kaydedildi ✓','success',2000);
}

function renderBudget() {
  var d=document.getElementById('budget-display');
  if(!d) return;
  if(!S.butce || Object.keys(S.butce).length===0) {
    d.innerHTML='<div style="font-size:12px;color:var(--ink3);text-align:center;padding:14px 0;background:var(--cream);border-radius:10px;">📉 Bütçe belirleyerek harcamalarını kontrol altına al.</div>';
    return;
  }
  var currAy = new Date().toLocaleDateString('tr-TR',{month:'long',year:'numeric'});
  var currHarcamalar = {};
  if(S.giderler) S.giderler.filter(function(g){return g.ay===currAy}).forEach(function(g){ currHarcamalar[g.kategori] = (currHarcamalar[g.kategori]||0) + g.tutar; });
  
  var html='';
  Object.keys(S.butce).forEach(function(k){
    var limit = S.butce[k]; var info = GIDER_KATS[k];
    var harcama = currHarcamalar[k] || 0;
    var pct = Math.min(100, (harcama/limit)*100);
    var isOver = harcama>limit;
    html += '<div class="budget-item"><div class="budget-header"><div class="budget-cat"><div class="budget-cat-dot" style="background:'+info.renk+';"></div>'+info.ad+'</div><div class="budget-amounts"><strong style="color:'+(isOver?'var(--red)':'var(--ink)')+'">'+fmtN(harcama)+' ₺</strong> / '+fmtN(limit)+' ₺</div></div><div class="budget-bar '+(isOver?'over':'')+'"><div class="budget-fill" style="width:'+pct+'%;background:'+(isOver?'var(--red)':info.renk)+';"></div></div></div>';
  });
  d.innerHTML = html;
}

// ── PULL TO REFRESH ──────────────────────────────────────────────────────
var ptrStartY=0,ptrActive=false,ptrDone=false;
function initPullToRefresh(){
  var db=document.getElementById('dashboard');
  if(!db)return;
  db.addEventListener('touchstart',function(e){
    if(window.scrollY<=5){ptrStartY=e.touches[0].clientY;ptrActive=true;ptrDone=false;}
  },{passive:true});
  db.addEventListener('touchmove',function(e){
    if(!ptrActive)return;
    var diff=e.touches[0].clientY-ptrStartY;
    if(diff>0&&window.scrollY<=5){
      var pull=Math.min(diff*0.4,70);
      var wrap=document.getElementById('ptr-wrap');
      var ind=document.getElementById('ptr-indicator');
      if(wrap)wrap.style.transform='translateY('+(pull-60)+'px)';
      if(ind)ind.style.transform='rotate('+(pull*4)+'deg)';
      if(pull>=55)ptrDone=true;
    }
  },{passive:true});
  db.addEventListener('touchend',function(){
    if(!ptrActive)return;
    ptrActive=false;
    var wrap=document.getElementById('ptr-wrap');
    var ind=document.getElementById('ptr-indicator');
    if(ptrDone){
      if(ind)ind.classList.add('spinning');
      haptic();
      fetchRates().finally(function(){
        if(wrap)wrap.style.transform='translateY(-60px)';
        if(ind){ind.classList.remove('spinning');ind.style.transform='';}
        showToast('Kurlar güncellendi ✓','success',2000);
      });
    }else{
      if(wrap)wrap.style.transform='translateY(-60px)';
      if(ind)ind.style.transform='';
    }
  },{passive:true});
}

// ── INIT ──────────────────────────────────────────────────────────────────
initTheme();
setTimeout(function(){
  document.getElementById('splash').classList.add('fade');
  setTimeout(function(){ document.getElementById('splash').style.display='none'; }, 500);
  TUM_PROFILLER = JSON.parse((function(){ try{ return localStorage.getItem('mn-profiller')||'[]' }catch(e){ return '[]' } })());
  showAuthScreen();
  // Initialize scroll hints after dashboard is ready
  setTimeout(initScrollHints, 500);
}, 1800);