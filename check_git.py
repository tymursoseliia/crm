import subprocess
import time

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=5)
        print(f"--- CMD: {' '.join(cmd)} ---")
        print("STDOUT:\n", result.stdout)
        print("STDERR:\n", result.stderr)
    except subprocess.TimeoutExpired:
        print(f"--- CMD: {' '.join(cmd)} TIMED OUT ---")
    except Exception as e:
        print(f"--- CMD: {' '.join(cmd)} ERROR: {e} ---")

run_cmd(['git', 'status'])
run_cmd(['git', 'log', '-n', '3', '--oneline'])
