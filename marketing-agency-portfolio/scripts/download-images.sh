#!/usr/bin/env bash
# Download curated Unsplash photos into public/images/works/
# Run this script from the project root. Requires curl.

set -e

mkdir -p public/images/works

# Images (source URLs chosen earlier in code)
curl -L "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80" -o public/images/hero.jpg
curl -L "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" -o public/images/works/brand-identity.jpg
curl -L "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80" -o public/images/works/social-media-marketing.jpg
curl -L "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" -o public/images/works/website-redesign.jpg
curl -L "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" -o public/images/works/email-marketing.jpg
curl -L "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" -o public/images/works/seo-optimization.jpg

# Small logo image used in navbar
mkdir -p public/images
curl -L "https://images.unsplash.com/photo-1520975919133-4f2a4e1b5a2b?auto=format&fit=crop&w=80&q=80" -o public/images/logo.jpg

echo "Downloaded images to public/images/ and public/images/works/."

echo "You can now run: npm run export && npx http-server out -p 8080 to preview the exported site locally."
