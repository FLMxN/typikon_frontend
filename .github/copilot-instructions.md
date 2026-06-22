<!-- PDB Prime - Vite + React + TypeScript Project -->

# Project Setup Instructions

## Project Overview

This is a Vite + Node.js project with React and TypeScript configured for modern web development.

## Environment Details

- **Build Tool**: Vite 8.0.10
- **Framework**: React 19 with TypeScript
- **Runtime**: Node.js with npm
- **Port**: http://localhost:5173/
- **Status**: Development server is running

## Quick Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (http://localhost:5173/) |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

## Project Structure

```
.
├── src/                 # React components and application code
│   ├── App.tsx         # Main component
│   ├── App.css         # Component styles
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Installation & Setup

Dependencies are already installed. To reinstall:
```bash
npm install
```

## Development Workflow

1. Edit files in `src/` directory
2. Changes automatically hot-reload in browser
3. Check console for TypeScript errors
4. Run `npm run lint` to check code quality

## Production Build

```bash
npm run build
```

Output goes to `dist/` directory, optimized for deployment.

## Troubleshooting

- **Port 5173 already in use**: Stop any existing Vite servers or change port in vite.config.ts
- **Missing dependencies**: Run `npm install`
- **TypeScript errors**: Check tsconfig.json or run `npm run lint`
