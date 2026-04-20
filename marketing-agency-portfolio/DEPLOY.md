# Deployment Guide

This file explains how to publish the site to GitHub Pages and to Vercel.

## 1) Create a GitHub repository and push

1. On GitHub, create a new repository (e.g. `easttwist-portfolio`).
2. From your project root, run:

```bash
git init
git add .
git commit -m "Prepare static export and deployment"
git branch -M main
# replace URL with your repo
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

3. After pushing, GitHub Actions will run `.github/workflows/gh-pages.yml` and publish the `out/` folder to the `gh-pages` branch.

4. In the repository Settings → Pages, confirm the site is published from the `gh-pages` branch (the Actions workflow should create this branch automatically).

5. If your site will live at `https://USERNAME.github.io/REPO_NAME/`, open `next.config.js` and set `basePath` and `assetPrefix` to `'/REPO_NAME'` BEFORE running the first deployment:

```js
module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: '/REPO_NAME',
  assetPrefix: '/REPO_NAME/',
}
```

Then run `npm run export` locally to test, and push the change.

Optional: I prepared `scripts/prepare-deploy.sh` to automate creating a branch that updates `next.config.js` for you. Edit `REPO_NAME` inside the script, then run:

```bash
chmod +x scripts/prepare-deploy.sh
./scripts/prepare-deploy.sh
```

That will create a branch, commit the change, and push the branch to `origin` for you to open a PR.

## 2) Preview locally

Export and preview the static output:

```bash
npm ci
npm run export
npx http-server out -p 8080
# open http://localhost:8080
```

## 3) Deploy to Vercel (recommended for Next features)

Vercel is the origin platform for Next.js and is straightforward to use:

1. Create a Vercel account at https://vercel.com and connect your GitHub account.
2. Import your repository and choose the `main` branch.
3. For a static export site, set the build command to `npm run export` and the output directory to `out` in the Vercel UI. Alternatively, let Vercel run `next build` for a standard Next.js deployment (no static export needed).
4. If you use environment variables (e.g., `API_URL`), add them in the Vercel project settings.

Notes:
- If you rely on Next.js server-only features (getServerSideProps, API routes), use Vercel's default `next build` (no `export`) and deploy the site as a standard Next.js app.
- For purely static sites, `npm run export` produces an `out/` directory suitable for both GitHub Pages and any static host.

## 4) Common Troubleshooting

- Broken assets: confirm `basePath`/`assetPrefix` when deploying under a subpath (like `/<repo>/`).
- Missing fonts: ensure external font URLs are reachable or host fonts locally in `public/`.
- CI fails: check `Actions` tab for logs. The workflow uses `npm ci` so ensure `package-lock.json` matches `package.json` dependencies.

## 5) What I did for you

- Added a GitHub Actions workflow: `.github/workflows/gh-pages.yml` to export and publish `out/`.
- Added `npm run export` in `package.json`.
- Added image and icon assets under `public/` and updated components to use them.

If you want, I can also:
- Open a PR that updates `next.config.js` with your repo name set as `basePath`/`assetPrefix` before you create the GitHub repo.
- Prepare a `CNAME` file for a custom domain.
