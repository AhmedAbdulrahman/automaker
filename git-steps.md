### Fetch all upstream branches

git fetch upstream

### Switch to v0.14.0rc branch (tracks upstream if you don't have local)

git checkout v0.14.0rc

### Make sure you're up-to-date with upstream

git pull upstream v0.14.0rc

## One-liner:

git fetch upstream && git checkout -B v0.14.0rc upstream/v0.14.0rc
