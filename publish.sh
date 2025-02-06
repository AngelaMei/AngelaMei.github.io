#! /bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <commit-hash>"
  exit 1
fi

COMMIT_HASH=$1
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
TARGET_BRANCH=gh-pages

echo "Current branch: $CURRENT_BRANCH"
echo "Checking out commit: $COMMIT_HASH"

git stash push -m "temp-build-stash"  # Stash uncommitted changes
git checkout $COMMIT_HASH

echo "Running yarn build..."
yarn install --frozen-lockfile  # Ensures dependencies are consistent
yarn build

git checkout $TARGET_BRANCH

echo "Moving 'out' directory back to $CURRENT_BRANCH..."
rsync -av out/ .

#echo "Switching back to $CURRENT_BRANCH..."
#git checkout $CURRENT_BRANCH
git stash pop || echo "No stashed changes to apply"

#mv /tmp/out-build ./out

#echo "Build from commit $COMMIT_HASH is now available on $CURRENT_BRANCH in the 'out' directory."
