import subprocess

def run_git():
    # first, let's configure the remote just in case
    subprocess.run(['git', 'remote', 'set-url', 'origin', 'https://github.com/tymursoseliia/crm.git'])
    
    # Check if a rebase is in progress
    status_out = subprocess.run(['git', 'status'], capture_output=True, text=True).stdout
    if 'rebase in progress' in status_out:
        # We are rebasing. We should add and continue
        subprocess.run(['git', 'add', '.'])
        # Amend the current commit
        subprocess.run(['git', 'commit', '--amend', '--no-edit'])
        # Continue rebase
        subprocess.run(['git', 'rebase', '--continue'])
    else:
        # Add all
        subprocess.run(['git', 'add', '.'])
        # Commit
        subprocess.run(['git', 'commit', '-m', 'feat: update Voha team and variable percentages'])
        
    # push to main
    push_out = subprocess.run(['git', 'push', '-f', 'origin', 'HEAD:main'], capture_output=True, text=True)
    print("Push Output:", push_out.stdout)
    print("Push Errors:", push_out.stderr)

run_git()
