with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

out = []
skip = False
for line in lines:
    if "// ── STATE ──" in line:
        skip = True
        out.append('<script src=\"assets/js/utils.js\"></script>\n')
        out.append('<script src=\"assets/js/state.js\"></script>\n')
        out.append('<script src=\"assets/js/charts.js\"></script>\n')
        out.append('<script src=\"assets/js/app.js\"></script>\n')
        continue
    if skip and "</script>" in line:
        skip = False
        continue # we don't append the final </script> since it was part of the original script block
    if not skip:
        out.append(line)

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(out)

print("done")
