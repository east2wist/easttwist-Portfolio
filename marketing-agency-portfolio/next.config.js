module.exports = {
  reactStrictMode: true,
  // Export the site as static HTML for GitHub Pages
  output: 'export',
  // Use trailingSlash so exported pages map to directories (helpful for GH Pages)
  trailingSlash: true,
  // If deploying to a repository page (https://username.github.io/repo/)
  // set `basePath` and `assetPrefix` to `/repo` after you create the repo.
  // basePath: '/REPO_NAME',
  // assetPrefix: '/REPO_NAME/',
  images: {
    // Allow loading images from Unsplash for curated, royalty-free photos used in placeholders
    domains: ['images.unsplash.com', 'source.unsplash.com', 'images.unsplash.com'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};