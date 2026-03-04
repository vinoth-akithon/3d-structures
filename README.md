# Duinz Engineering Services

Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures.

## 🚀 Overview

This repository contains the source code for the official website of **Duinz Engineering Services Pvt Ltd**. The site is built with a modern, high-performance stack to showcase the company's expertise in structural steel detailing and engineering solutions.

## ✨ Key Features

- **Modern UI/UX**: Clean, professional design tailored for the engineering industry.
- **Project Showcase**: Detailed view of completed projects across various regions (US, Canada, etc.).
- **Service Highlights**: Comprehensive breakdown of engineering and detailing services.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Performance Optimized**: Built with Astro 5 for blazing-fast page loads and minimal JavaScript.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **UI Components**: [React](https://reactjs.org/) & [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Imaging**: [Sharp](https://sharp.pixelplumbing.com/) for high-quality image processing.

## 📦 Project Structure

```text
├── src/
│   ├── components/     # Reusable UI components
│   ├── config/         # Site-wide configuration (site.ts)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages (routing)
│   └── styles/         # Global styles and Tailwind config
├── public/             # Static assets (images, fonts, etc.)
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [pnpm](https://pnpm.io/) (Recommended)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
pnpm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

To build the project for production:

```bash
pnpm run build
```

The output will be generated in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
pnpm run preview
```

## 🌐 Forms & Lead Generation

This project uses **Netlify Forms** for handling submissions without requiring a dedicated backend.

- **Contact Form**: Located at `/contact`, handled via the `contact` form name.
- **Careers Form**: Located at `/careers`, handled via the `careers` form name, supporting file uploads (resumes).

Ensure the site is deployed on Netlify to enable these features automatically.

## ⚙️ Environment Variables

The project uses the following environment variables for configuration (managed in `astro.config.mjs`):

| Variable   | Description                                     | Default                        |
| :--------- | :---------------------------------------------- | :----------------------------- |
| `URL`      | The production URL of the site (`site` config). | `https://duinzengineering.com` |
| `BASE_URL` | The base path of the site (`base` config).      | `/`                            |

## 📝 Maintainer Notes

- **Configuration**: All site-wide constants (links, contact info, SEO metadata) should be managed in `src/config/site.ts`.
- **Images**: High-resolution images are processed using Sharp. Ensure new images are placed in `public/` or `src/assets/` as needed.
- **Styling**: The project uses Tailwind CSS v4. Custom theme configurations can be found in the CSS files.
