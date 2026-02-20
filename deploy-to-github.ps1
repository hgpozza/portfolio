# Deploy portfolio to GitHub
# Run this script from the project folder in PowerShell (right-click project folder -> Open in Terminal, then: .\deploy-to-github.ps1)

$ErrorActionPreference = "Stop"

Write-Host "=== Portfolio deployment to GitHub ===" -ForegroundColor Cyan
Write-Host ""

# 1. Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
} else {
    Write-Host "Git repository already exists." -ForegroundColor Green
}

# 2. Add all files
Write-Host "Adding files..." -ForegroundColor Yellow
git add .

# 3. Check if there are changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit. Working tree clean." -ForegroundColor Green
} else {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Deploy portfolio site"
}

# 4. Remote and push
Write-Host ""
Write-Host "Next: Add your GitHub repo and push." -ForegroundColor Cyan
Write-Host "If you have NOT added the remote yet, run:" -ForegroundColor White
Write-Host "  git remote add origin https://github.com/hgpozza/portfolio.git" -ForegroundColor Gray
Write-Host ""
Write-Host "Replace 'portfolio' with your actual repo name if different." -ForegroundColor Gray
Write-Host ""
Write-Host "Then push:" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor Gray
Write-Host ""

$push = Read-Host "Do you want to run 'git push -u origin main' now? (y/n)"
if ($push -eq "y" -or $push -eq "Y") {
    git push -u origin main
    Write-Host "Done. Enable GitHub Pages: Repo -> Settings -> Pages -> Source: GitHub Actions" -ForegroundColor Green
} else {
    Write-Host "Run 'git push -u origin main' when ready." -ForegroundColor Yellow
}
