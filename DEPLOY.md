# Deploy Your Portfolio to a GitHub Domain (Step-by-Step)

Follow these steps to put your site online at a URL like `https://yourusername.github.io/portfolio/` (or `https://yourusername.github.io/` if you use a special repo name).

---

## Step 1: Put Your Files in the Right Places

Before deploying, add your assets so they appear on the live site.

### Resume PDF (required for “Download Resume” button)

1. Export your resume as a PDF (e.g. `resume.pdf`).
2. Put the file in the **`public`** folder of this project:
   ```
   portfolio/
   └── public/
       └── resume.pdf    ← put it here
   ```
3. The site is already set to use `/resume.pdf`; no code change needed.

### Cover and profile images (optional)

1. **Cover image** (banner at the top of the Hero):
   - Add the image to the **`public`** folder, e.g. `public/cover.jpg` (or `cover.png`).
   - In **`data/content.ts`**, set:
     ```ts
     coverImage: "/cover.jpg",
     ```
     (Use the same filename you put in `public/`.)

2. **Profile picture** (circle under the cover):
   - Add the image to **`public`**, e.g. `public/profile.jpg` (or `profile.png`).
   - In **`data/content.ts`**, set:
     ```ts
     profileImage: "/profile.jpg",
     ```

If you leave `coverImage` and `profileImage` as `""`, the placeholders will keep showing.

---

## Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **“+”** (top right) → **“New repository”**.
3. Choose a name, for example:
   - **`portfolio`** → site will be at `https://<your-username>.github.io/portfolio/`
   - **`<your-username>.github.io`** → site will be at `https://<your-username>.github.io/`
4. Set visibility to **Public**.
5. Do **not** add a README, .gitignore, or license (you already have a project).
6. Click **“Create repository”**.

---

## Step 3: Push Your Code to GitHub

In a terminal, in your project folder (where `package.json` is):

```bash
# Initialize Git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: portfolio site"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repo as remote (replace YOUR_USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

Example: if your repo is `https://github.com/hgpozza/portfolio`, use:

```bash
git remote add origin https://github.com/hgpozza/portfolio.git
git push -u origin main
```

---

## Step 4: Turn On GitHub Pages and Use the Workflow

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **“Build and deployment”**:
   - **Source:** choose **“GitHub Actions”**.
3. The repo already has a workflow (`.github/workflows/deploy.yml`) that:
   - Runs when you push to `main`
   - Builds the site with the correct base path for GitHub Pages
   - Deploys the built files so GitHub can serve them

No need to create another workflow unless you want to change something.

---

## Step 5: Wait for the First Deploy

1. After you push, open the **“Actions”** tab in your repo.
2. You should see a workflow run (e.g. “Deploy to GitHub Pages”).
3. Wait until it finishes (green checkmark).
4. Your site will be available at:
   - **If repo name is `portfolio`:**  
     **https://hgpozza.github.io/portfolio/**
   - **If repo name is `hgpozza.github.io`:**  
     **https://hgpozza.github.io/**

It can take 1–2 minutes after the workflow finishes for the URL to work.

---

## Step 6: Updating the Site Later

Whenever you change the project (content, images, or code):

1. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
2. The same workflow will run and redeploy the site. No need to run `npm run build` yourself for deployment.

---

## Quick Reference: Where Things Go

| What              | Where to put it              | What to set in `data/content.ts` (if needed) |
|-------------------|-----------------------------|-----------------------------------------------|
| Resume PDF        | `public/resume.pdf`         | Already set: `resumePdf: "/resume.pdf"`       |
| Cover image       | `public/cover.jpg` (or .png)| `coverImage: "/cover.jpg"`                    |
| Profile picture   | `public/profile.jpg` (or .png) | `profileImage: "/profile.jpg"`              |

---

## Troubleshooting

- **“Download Resume” opens 404**  
  Make sure the file is exactly `public/resume.pdf` and that you pushed the latest code (so `public/resume.pdf` is in the repo).

- **Images don’t show**  
  Check that the file is in `public/` and that the path in `content.ts` starts with `/` and matches the filename (e.g. `"/cover.jpg"`).

- **Site is blank or wrong at the GitHub URL**  
  In **Settings → Pages**, ensure **Source** is **GitHub Actions**. Check the **Actions** tab for a failed run and fix any errors (e.g. build or path issues).

- **Wrong URL (e.g. 404 on homepage)**  
  The workflow sets the base path from your repo name. If you renamed the repo, push again so the workflow runs with the new name.
