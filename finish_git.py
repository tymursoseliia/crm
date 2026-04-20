import subprocess

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        print(f"--- CMD: {' '.join(cmd)} ---")
        print("STDOUT:\n", result.stdout)
        print("STDERR:\n", result.stderr)
    except Exception as e:
        print(f"--- CMD: {' '.join(cmd)} ERROR: {e} ---")

run_cmd(['git', 'add', 'src/'])
run_cmd(['git', 'add', 'supabase-init.sql'])
run_cmd(['git', 'commit', '--amend', '--no-edit'])
run_cmd(['git', 'rebase', '--continue'])
run_cmd(['git', 'remote', 'set-url', 'origin', 'https://github.com/tymursoseliia/crm.git'])
