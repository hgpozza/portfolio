#!/bin/bash
# Deploy portfolio to GitHub
# Run from project folder: chmod +x deploy-to-github.sh && ./deploy-to-github.sh

set -e

echo "=== Portfolio deployment to GitHub ==="
echo ""

# 1. Initialize git if needed
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
  git branch -M main
else
  echo "Git repository already exists."
fi

# 2. Add and commit
git add .
if git diff --staged --quiet; then
  echo "No changes to commit. Working tree clean."
else
  echo "Committing changes..."
  git commit -m "Deploy portfolio site"
fi

# 3. Push (add remote first if needed)
echo ""
echo "To add your GitHub repo and push, run:"
echo "  git remote add origin https://github.com/hgpozza/portfolio.git"
echo "  git push -u origin main"
echo ""
echo "Replace 'portfolio' with your repo name if different."
read -p "Push now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git push -u origin main
  echo "Done. Enable Pages: Repo -> Settings -> Pages -> Source: GitHub Actions"
fi
