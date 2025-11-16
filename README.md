# Portfolio 3D — React + Tailwind + R3F

A responsive single-page portfolio featuring an interactive 3D hero, lazy‑loaded GLTF previews, dark theme, accessibility, SEO, and analytics. Designed for Vercel deployment.

Tech
- React (Vite)
- Tailwind CSS
- Spline 3D in hero
- react-three-fiber + drei for previews
- Framer Motion for micro‑interactions
- Accessible navigation, reduced‑motion support
- Plausible analytics (optional)

Getting started
1. Install dependencies and start dev server (already configured here):
   - npm run dev
2. Open the preview URL provided by the environment.

Environment variables
- VITE_PLAUSIBLE_DOMAIN: yourdomain.com (optional, for Plausible)

Build & deploy (Vercel)
- Project includes vercel.json for SPA routing.
- Build command: npm run build
- Output directory: dist
- Framework preset: Vite

Structure
- Hero: Spline scene as interactive background, CTA buttons.
- About: Bio with skills grid.
- Projects: Cards containing R3F canvases that lazy‑load GLTF models with Suspense fallbacks and low‑poly placeholders. Auto‑rotating OrbitControls with user interaction.
- Blog: Simple list of posts.
- Contact: Basic email form (uses mailto fallback) + socials for GitHub, LinkedIn, Twitter/X, Instagram, ArtStation, Sketchfab.
- Footer: Navigation and copyright.

Accessibility
- Skip‑link for keyboard users.
- Focus rings on interactive elements.
- ARIA labels on navigation, social links, and CTAs.
- Respects prefers‑reduced‑motion to limit animations.

SEO
- Sets meta tags and JSON‑LD person schema at runtime.
- Open Graph tags and Twitter card included.

3D performance notes
- Preload common GLTFs with useGLTF.preload.
- Low‑poly placeholder renders instantly while models stream.
- DPR is clamped for balance between sharpness and performance.

Customization
- Update name, role, and copy in Hero/About.
- Replace models/links in Projects.
- Add your Plausible domain.

License
MIT
