# Personal Portfolio

A single-page personal portfolio built with Next.js, Tailwind CSS, and system-based light/dark theme. Content is driven by `data/content.ts` for easy editing.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later) installed on your machine (Mac or Windows).

## Run locally

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
```

The static site is generated in the `out` folder. To preview it locally:

```bash
npx serve out
```

## Where to put your files

| File | Location | Then |
|------|----------|------|
| **Resume PDF** | `public/resume.pdf` | "Download Resume" will link to it automatically. |
| **Cover image** | e.g. `public/cover.jpg` | In `data/content.ts`, set `coverImage: "/cover.jpg"`. |
| **Profile photo** | e.g. `public/profile.jpg` | In `data/content.ts`, set `profileImage: "/profile.jpg"`. |

Leave `coverImage` and `profileImage` as `""` in `content.ts` to keep the placeholders.

For a full walkthrough of putting the site on a GitHub domain, see **[DEPLOY.md](./DEPLOY.md)**.

## Deploy to GitHub Pages (GitHub domain)

1. **Create a GitHub repository** (e.g. `portfolio` or `username.github.io`).

2. **Add your resume PDF**  
   Place your resume file at **`public/resume.pdf`** so the "Download Resume" button works.

3. **Set the base path for GitHub Pages**  
   If your site will be at `https://<username>.github.io/<repo-name>/` (e.g. `https://johndoe.github.io/portfolio/`), set the repo name as base path:
   - Create a file `.env.production` in the project root with:
     ```
     NEXT_PUBLIC_BASE_PATH=portfolio
     ```
     Replace `portfolio` with your actual repository name.

   - If you use **username.github.io** as the repo (so the site is at `https://username.github.io/`), leave `NEXT_PUBLIC_BASE_PATH` empty or omit `.env.production`.

4. **Build the site**
   ```bash
   npm run build
   ```

5. **Deploy the `out` folder to GitHub Pages**
   - **Option A – GitHub Actions (recommended)**  
     Create `.github/workflows/deploy.yml` with a workflow that runs `npm ci && npm run build` and deploys the contents of `out` to the `gh-pages` branch (or to the same branch with a path like `./out`), and enable Pages in the repo settings to use that branch (or “GitHub Actions” as source).
   - **Option B – Manual**  
     Push the contents of `out` to a branch named `gh-pages`, then in the repo **Settings → Pages** set source to that branch and folder `/ (root)`.

6. **Repo Settings → Pages**  
   - If using **GitHub Actions**: choose “GitHub Actions” as the source.  
   - If using **gh-pages branch**: choose branch `gh-pages` and root.

Your site will be available at `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if the repo is `username.github.io`).

## Edit content

All text and links are in **`data/content.ts`**. Edit that file to change:

- Name, headline, contact info, resume link
- About summary
- Experience, projects, skills, education, certifications, publications

No need to touch component code for content updates.

## Tech stack

- **Next.js** (App Router) with static export (`output: 'export'`)
- **Tailwind CSS** for styling
- **System theme**: follows OS light/dark preference via `prefers-color-scheme`
