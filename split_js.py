import re

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Define patterns to extract blocks
def extract_block(text, start_comment, end_comment=None):
    if end_comment:
        pattern = r"(" + re.escape(start_comment) + r".*?)(?=" + re.escape(end_comment) + r")"
    else:
        pattern = r"(" + re.escape(start_comment) + r".*)"
        
    match = re.search(pattern, text, re.DOTALL)
    if match:
        extracted = match.group(1).strip() + "\n\n"
        text = text.replace(match.group(1), "")
        return text, extracted
    return text, ""

utils_js = ""
state_js = ""
charts_js = ""
app_js = ""

# STATE
text, b = extract_block(text, "// ── STATE ──", "// ── GİZLİLİK")
state_js += b

# GIZLILIK
text, b = extract_block(text, "// ── GİZLİLİK", "// ── XSS PROTECTION")
utils_js += b

# XSS
text, b = extract_block(text, "// ── XSS PROTECTION", "// ── TOAST NOTIFICATIONS")
utils_js += b

# TOAST
text, b = extract_block(text, "// ── TOAST NOTIFICATIONS", "// ── FORMAT")
utils_js += b

# FORMAT
text, b = extract_block(text, "// ── FORMAT", "// ── AUTH")
utils_js += b

# AUTH
text, b = extract_block(text, "// ── AUTH", "// ── ONBOARDING")
state_js += b

# ONBOARDING
text, b = extract_block(text, "// ── ONBOARDING", "// ── DASHBOARD INIT")
state_js += b

# DASHBOARD INIT
text, b = extract_block(text, "// ── DASHBOARD INIT", "// ── SİGORTA")
app_js += b

# SİGORTA
text, b = extract_block(text, "// ── SİGORTA", "// ── KURLAR")
app_js += b

# KURLAR
text, b = extract_block(text, "// ── KURLAR", "// ── TAB")
app_js += b

# TAB
text, b = extract_block(text, "// ── TAB", "// ── YATIRIM & RISK DÜZENLE")
app_js += b

# YATIRIM & RISK
text, b = extract_block(text, "// ── YATIRIM & RISK DÜZENLE", "// ── DAĞILIM")
app_js += b

# DAĞILIM
text, b = extract_block(text, "// ── DAĞILIM", "// ── BORDRO")
charts_js += b

# BORDRO
text, b = extract_block(text, "// ── BORDRO", "// ── HESAP MAKİNESİ")
app_js += b

# HESAP MAKİNESİ
text, b = extract_block(text, "// ── HESAP MAKİNESİ", "// ── BAKİYEM")
app_js += b

# BAKİYEM
text, b = extract_block(text, "// ── BAKİYEM", "// ── HEDEF")
app_js += b

# HEDEF
text, b = extract_block(text, "// ── HEDEF", "// ── ALARMLAR")
app_js += b

# ALARMLAR
text, b = extract_block(text, "// ── ALARMLAR", "// ── DARK MODE")
app_js += b

# DARK MODE
text, b = extract_block(text, "// ── DARK MODE", "// ── BOTTOM NAV")
utils_js += b

# BOTTOM NAV
text, b = extract_block(text, "// ── BOTTOM NAV", "// ── GİDER TAKİBİ")
app_js += b

# GİDER TAKİBİ
text, b = extract_block(text, "// ── GİDER TAKİBİ", "// ── EXPORT / IMPORT")
app_js += b

# EXPORT / IMPORT
text, b = extract_block(text, "// ── EXPORT / IMPORT", "// ── SCROLL HINT SYSTEM")
utils_js += b

# SCROLL HINT
text, b = extract_block(text, "// ── SCROLL HINT SYSTEM", "// ── FAZ 3")
utils_js += b

# FAZ 3
text, b = extract_block(text, "// ── FAZ 3", "// ── PULL TO REFRESH")
app_js += b

# PULL TO REFRESH
text, b = extract_block(text, "// ── PULL TO REFRESH", "// ── INIT")
utils_js += b

# INIT
text, b = extract_block(text, "// ── INIT")
app_js += b

# Also any leftover code (like the haptic function that was before GİZLİLİK) should be added.
# WAIT, haptic function is right after STATE var declarations.
utils_js = "function haptic(){try{if(navigator.vibrate)navigator.vibrate(50);}catch(e){}}\n\n" + utils_js

with open('assets/js/utils.js', 'w', encoding='utf-8') as f:
    f.write(utils_js.strip())

with open('assets/js/state.js', 'w', encoding='utf-8') as f:
    f.write(state_js.strip())

with open('assets/js/charts.js', 'w', encoding='utf-8') as f:
    f.write(charts_js.strip())

with open('assets/js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js.strip())

print("Split completed.")
