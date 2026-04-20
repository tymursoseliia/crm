import os
import glob

def reverse_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        code = f.read()
    
    original = code
    code = code.replace(r'vady', 'voha')
    code = code.replace(r'vadyTeam', 'vohaTeam')
    code = code.replace(r'vadyStats', 'vohaStats')
    code = code.replace(r'Vady', 'Voha')
    code = code.replace('Вади', 'Вохи')
    code = code.replace('Вадя', 'Воха')

    if code != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(code)
        print(f"Reversed: {file_path}")

for file_path in glob.glob('./src/**/*.ts', recursive=True) + glob.glob('./src/**/*.tsx', recursive=True):
    reverse_in_file(file_path)

if os.path.exists('./supabase-init.sql'):
    reverse_in_file('./supabase-init.sql')

print("Reverse replacement complete.")
