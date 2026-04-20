import subprocess

def run_git():
    status_out = subprocess.run(['git', 'remote', '-v'], capture_output=True, text=True).stdout
    print("Remote:", status_out)

run_git()
