PR: Set basePath/assetPrefix for GitHub Pages

When deploying a Next.js static-export site to a repository page (https://USERNAME.github.io/REPO/),
assets must be served from the repo subpath. Follow these steps:

1. Create a branch (example):

```bash
git checkout -b set-basepath/REPO_NAME
```

2. Edit `next.config.js` and set:

```js
module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: '/REPO_NAME',
  assetPrefix: '/REPO_NAME/',
}
```

3. Commit and push the branch:

```bash
git add next.config.js
git commit -m "chore: set basePath and assetPrefix for repo pages"
git push -u origin set-basepath/REPO_NAME
```

4. Open a Pull Request on GitHub to merge into `main`. Merge when ready.

5. After merging, Actions will run the export workflow and publish to `gh-pages`.

Notes:
- If you host on a user/organization site (https://USERNAME.github.io/) you do NOT set `basePath`.
- Test locally before pushing: `npm run export` and `npx http-server out -p 8080`.
