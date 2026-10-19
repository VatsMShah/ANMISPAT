# ANM Ispat Website

Proprietary company website for ANM Ispat, built as a responsive, client-rendered React application. This repository is **not open source**. See [LICENSE](./LICENSE) for the usage restrictions.

## Project status

The site has client-side pages for the company overview, products, industries, achievements, CSR, careers, and contact information. The shared layout, responsive styling, local media, and interactive product viewer are implemented.

This is currently a front-end application, not a complete website service:

- The contact form displays a local success state but does not send submissions to a server or email service.
- The footer newsletter form does not subscribe users to a mailing list.
- Some phone numbers, addresses, social links, certifications, awards, team information, statistics, and CSR project details are placeholders or require business-owner confirmation.
- Some images load from external websites and depend on those services remaining available.

Treat unverified material as sample content until an authorized business representative confirms it. Refer to [PROJECT_HANDOVER.txt](./PROJECT_HANDOVER.txt) for the component-by-component description and recommended handover priorities, and [design.md](./design.md) for the visual design system.

## Technology

- React 19 and React DOM
- Vite 8
- Tailwind CSS 4 with the Vite plugin
- React Router 7
- Framer Motion
- Lucide React
- Three.js, React Three Fiber, and Drei for the product viewer
- ESLint

The application is written in JavaScript and JSX. There is no TypeScript configuration or automated test script in the current package manifest.

## Requirements

- Node.js compatible with the installed Vite version
- npm
- Git (for cloning or retrieving the repository)

## Getting started

From the project directory:

```sh
npm install
npm run dev
```

Vite prints a local development URL in the terminal. Open that address in a browser. The dev server supports hot module replacement (HMR), so most source edits appear without manually restarting the server.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run preview` | Serve the generated production build locally. Run the build first. |
| `npm run lint` | Run ESLint against the project. |

There is no `npm test` command configured at this time.

## Routes

Routes are declared in [src/App.jsx](./src/App.jsx) using React Router.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About the company |
| `/achievements` | Achievements |
| `/csr` | Corporate social responsibility |
| `/careers` | Careers |
| `/contact` | Contact |
| `/products` | Products and interactive catalog |
| `/services` | Industries served |

The [vercel.json](./vercel.json) rewrite sends requests to the SPA entry point so client-side paths can be handled by React Router. This file is not proof that a Vercel project or production deployment is configured. Confirm hosting, DNS, build settings, and environment before deploying.

## Repository layout

```text
.
├── index.html              # HTML entry, metadata, icons, and font loading
├── public/                 # Public static assets and web manifest
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Shared shell and routes
│   ├── App.css             # Legacy Vite starter styles
│   ├── index.css           # Tailwind import, theme, and global styles
│   ├── assets/              # Images, logos, and video
│   └── components/          # Pages and reusable sections
├── design.md               # Visual design guide
├── PROJECT_HANDOVER.txt    # Detailed component and project handover
├── vite.config.js           # React and Tailwind plugins
├── eslint.config.js         # ESLint configuration
├── package.json             # Scripts and dependencies
└── vercel.json              # SPA rewrite configuration
```

### Application structure

[src/main.jsx](./src/main.jsx) mounts the React app and imports the global stylesheet. [src/App.jsx](./src/App.jsx) wraps the site in `BrowserRouter` and renders the shared top strip, sticky navigation, route content, scroll manager, and footer. Page and section components are in `src/components/`.

Styling is primarily Tailwind utility classes in JSX. Global theme colors, font roles, and custom shared styles are in [src/index.css](./src/index.css). Font files are loaded from Google Fonts in [index.html](./index.html). See [design.md](./design.md) before making visual changes.

## Content and media

Most bundled media is under `src/assets/`, organized into folders such as `images`, `webp_images`, `clients-images`, `industry-images`, `logo`, `products-images`, and `awards-images`. Static public-facing icons and manifest files are in `public/`.

Some components use remote Unsplash, Pexels, or other hosted images. These require network access and may change or become unavailable. Confirm image rights, reliability, and content suitability before production use.

The home page hero video is a large local asset. The current production build also creates a JavaScript bundle above Vite's 500 kB advisory threshold. Consider media optimization and route-level code splitting as future performance work.

## Development guidance

- Keep new visual work consistent with the shared palette and typography in `design.md`.
- Use React Router `Link` for internal route navigation where appropriate; use ordinary anchors for external URLs, telephone/email links, and in-page hashes.
- Keep interactive controls keyboard accessible and provide visible focus states.
- Respect reduced-motion preferences when adding animations.
- Do not publish placeholder contact details, statistics, awards, certificates, team profiles, product claims, or CSR project details as verified facts.
- Do not add secrets or environment-specific credentials to source control. No environment-variable configuration is currently documented or present in the project setup.
- `src/App.css` contains Vite starter styles; verify whether a selector is used before treating that file as the design system.

## Validation

The latest recorded verification for this repository:

- `npm run build` succeeds. Vite reports a non-fatal warning about the size of the minified JavaScript bundle.
- `npm run lint` currently fails because of 13 unused default `React` imports in existing JSX components.
- No automated test or end-to-end browser test suite is configured.

Run the build and lint commands again after changes; the recorded status may no longer be current. Prioritize fixing the existing lint errors and adding targeted checks for routes, form behavior, product selection, modals, and navigation.

## Handover and tools

The reported editor is Visual Studio Code. The project owner reports using Copilot, Gemini, ChatGPT, and Opencode during development.

Start with:

1. [PROJECT_HANDOVER.txt](./PROJECT_HANDOVER.txt) for the component inventory, implementation details, known gaps, and suggested next steps.
2. [design.md](./design.md) for the visual system and style conventions.
3. [package.json](./package.json) for the authoritative dependency versions and scripts.

## Proprietary rights and permitted use

This codebase and its project-specific content are proprietary and are **not offered under an open-source license**. Copyright and other applicable rights remain with ANM Ispat and/or the applicable lawful project rights holder. All rights are reserved.

No permission is granted by this repository to copy, publish, distribute, sublicense, sell, modify, or create derivative works from the project, except where the rights holder has separately authorized that activity in writing. Access to the repository or possession of a copy does not itself grant a license or transfer ownership.

Use and share the source only as authorized by the rights holder and the applicable business agreements. Third-party packages, fonts, images, logos, and other assets remain subject to their own owners' terms; this notice does not grant rights to those materials.

Repository hosting permissions are separate from copyright terms. Keep the Git hosting project private and grant access only to approved collaborators where that matches the rights holder's requirements.

For the full notice, see [LICENSE](./LICENSE). This project notice is not a substitute for legal advice or confirmation of the correct legal rights holder.
