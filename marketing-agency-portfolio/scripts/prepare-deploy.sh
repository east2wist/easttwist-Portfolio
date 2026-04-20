#!/usr/bin/env bash
# prepare-deploy.sh
# Helper script to prepare a branch that sets basePath/assetPrefix (for repo pages),
# commits, and pushes to remote. Edit REPO_NAME below before running.

set -e

REPO_NAME="REPO_NAME_HERE" # <-- Replace with your GitHub repo name (no leading slash)
BRANCH_NAME="set-basepath/$REPO_NAME"

if [ "$REPO_NAME" = "REPO_NAME_HERE" ]; then
  echo "Please edit scripts/prepare-deploy.sh and set REPO_NAME to your repository name."
  exit 1
fi

echo "Creating branch $BRANCH_NAME ..."
git checkout -b $BRANCH_NAME

CONFIG_FILE="next.config.js"
BACKUP_FILE="$CONFIG_FILE.bak"

if [ ! -f $CONFIG_FILE ]; then
  echo "Cannot find $CONFIG_FILE in project root. Run this script from the project root.";
  exit 1
fi

cp $CONFIG_FILE $BACKUP_FILE

echo "Updating $CONFIG_FILE to set basePath and assetPrefix for /$REPO_NAME ..."

# Insert basePath/assetPrefix lines if not present
python - <<PY
from pathlib import Path
p = Path('$CONFIG_FILE')
s = p.read_text()
if "basePath" in s or "assetPrefix" in s:
    print('next.config.js already contains basePath/assetPrefix (please verify).')
else:
    s = s.replace("trailingSlash: true,", "trailingSlash: true,\n  basePath: '/%s',\n  assetPrefix: '/%s/'," % ('$REPO_NAME', '$REPO_NAME'))
    p.write_text(s)
    print('Inserted basePath/assetPrefix.')
PY

git add $CONFIG_FILE
git commit -m "chore: set basePath/assetPrefix for GitHub Pages ($REPO_NAME)"

echo "Pushing branch $BRANCH_NAME to origin..."
git push -u origin $BRANCH_NAME

echo "Branch pushed. Open a PR on GitHub to merge $BRANCH_NAME into main, then Actions will deploy on push to main (or you can merge when ready)."

echo "If you want to revert changes locally, run: git checkout main && git reset --hard $BACKUP_FILE && rm $BACKUP_FILE"
