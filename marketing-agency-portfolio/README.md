# Marketing Agency Portfolio

Welcome to the Marketing Agency Portfolio project! This project is designed to showcase the services and capabilities of a modern marketing and advertising agency. It features a visually appealing layout, interactive components, and a user-friendly interface.

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience on all devices.
- **Hero Section**: A captivating hero section that highlights the agency's mission and services.
- **Services Showcase**: A dedicated section to display the various services offered by the agency.
- **Case Studies**: Highlighting successful projects and case studies to demonstrate the agency's effectiveness.
- **Portfolio Carousel**: An interactive carousel to showcase the agency's portfolio visually.
- **Client Testimonials**: A section for client testimonials to build trust and credibility.
- **Contact Form**: A user-friendly contact form for potential clients to reach out.
- **Call to Action**: Encouraging users to take specific actions, such as requesting a quote or consultation.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/marketing-agency-portfolio.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd marketing-agency-portfolio
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Your Browser**:
   Visit `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React**: A JavaScript library for building user interfaces.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please reach out to [your-email@example.com].

## Deployment to GitHub Pages (added)

This repo is prepared for static export and GH Pages deployment. I added a workflow `.github/workflows/gh-pages.yml` that runs on push to `main`, builds the app with `npm run export`, and publishes the generated `out/` folder to the `gh-pages` branch.

Quick steps to deploy:

1. Create a GitHub repo and push this project to `main`.
2. If the site will be served under a repo subpath (e.g. `https://USERNAME.github.io/REPO_NAME/`), update `next.config.js` and set `basePath` and `assetPrefix` to `/REPO_NAME`.
3. Push to `main`. The Actions workflow will build and deploy automatically.

Preview the exported output locally:

```bash
npm ci
npm run export
npx http-server out -p 8080
# open http://localhost:8080
```

If you'd like, I can now:

- Replace the placeholder SVGs in `public/images/` with curated photographs or illustrations.
- Swap the simple icons for a professional icon set and update components to use them.
- Update the `Hero`, `Services`, and `CaseStudies` components to include the new visuals.

Tell me which of these you'd like me to implement next.

---

## Finalized: What I did

- Added professional SVG icons in `public/icons/` and illustrative placeholders in `public/images/` (used across `Hero`, `Services`, `CaseStudies`, `PortfolioCarousel`, and `Navbar`).
- Added a GitHub Actions workflow at `.github/workflows/gh-pages.yml` to export and publish the `out/` directory to `gh-pages`.
- Added `npm run export` and `next.config.js` settings for static export.
- Added `DEPLOY.md` with step-by-step instructions for GitHub Pages and Vercel.

## Next actions I can take (pick any)

- Push a branch and open a PR that sets `basePath`/`assetPrefix` for your repo name.
- Add a `CNAME` or prepare DNS-ready instructions for a custom domain.
- Replace SVG placeholders with curated royalty-free photography and optimize images.

- I replaced SVG placeholders with curated Unsplash photos (remote URLs) for `Hero`, `CaseStudies`, and the portfolio `works` data. To preview the exported site exactly as deployed, run `npm run export` and serve the `out/` folder.
 - I replaced SVG placeholders with curated Unsplash photos and added a helper script to bundle them locally.
    - Run `scripts/download-images.sh` locally to download images into `public/images/`.
    - After running the script, `public/images/` will contain the photos and the site will reference them locally.
    - Then run `npm run export` and serve `out/` to preview the exported site.

See `DEPLOY.md` for detailed deployment instructions.