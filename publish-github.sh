#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-jonathon-chat}"
VISIBILITY="${2:-private}"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI 'gh' is not installed."
  echo "Install and login first, or create the repo manually and run:"
  echo "  git remote add origin https://github.com/<user>/${REPO_NAME}.git"
  echo "  git push -u origin main"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is installed but not logged in. Run: gh auth login"
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" "--$VISIBILITY" --source=. --remote=origin --push
else
  git push -u origin main
fi

echo "Pushed ${REPO_NAME}. Enable GitHub Pages in repository Settings > Pages."
