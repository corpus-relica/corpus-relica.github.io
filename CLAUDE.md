# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for **Systema Relica**, a semantic data modeling and management platform for next-generation applications. The site documents the design, theory, and implementation of a data platform that serves a semantic knowledge graph based on Gellish Ontological Modeling Language.

The site is structured around three main documentation sections:
- **Background**: Introduction to the vision and concepts behind the platform
- **Design**: Detailed theory and implementation documentation, including Quintessential Modeling procedures and the Semantic Transaction Engine
- **Documentation**: Auto-generated reference documentation

## Development Commands

### Essential Commands
- `yarn install` - Install dependencies
- `yarn start` - Start local development server (auto-reloads on changes)
- `yarn build` - Build static site for production
- `yarn typecheck` - Run TypeScript type checking
- `yarn serve` - Serve built site locally

### Deployment
- `yarn deploy` - Deploy to GitHub Pages (requires GIT_USER env var)
- `USE_SSH=true yarn deploy` - Deploy using SSH

### Other Commands
- `yarn clear` - Clear Docusaurus cache
- `yarn swizzle` - Customize Docusaurus components
- `yarn write-translations` - Generate translation files
- `yarn write-heading-ids` - Generate heading IDs

## Architecture & Key Files

### Configuration
- `docusaurus.config.ts` - Main Docusaurus configuration with site metadata, navbar, footer, and plugins
- `sidebars.ts` - Sidebar navigation structure for the three main documentation sections
- `package.json` - Dependencies and scripts (uses Yarn as package manager)
- `tsconfig.json` - TypeScript configuration extending Docusaurus defaults

### Content Structure
- `docs/` - Main documentation content organized by:
  - `background/` - Conceptual introduction
  - `design/` - Theory and implementation details with nested categories for Quintessential Modeling procedures
  - `documentation/` - Reference documentation
- `blog/` - Blog posts (currently minimal content)
- `src/` - React components and custom CSS
- `static/` - Static assets (images, favicon, etc.)

### Key Features
- **Mermaid diagrams** - Enabled for architectural diagrams (see `docs/design/index.md`)
- **Google Analytics** - Configured via `GOOGLE_ANALYTICS_ID` environment variable
- **Multi-sidebar navigation** - Three separate sidebars for different documentation sections
- **TypeScript support** - Full TypeScript configuration for components and config

## Development Notes

### Content Editing
- Most content changes will auto-reload in development mode
- Documentation is written in Markdown with optional MDX support
- Mermaid diagrams are supported and used for architectural documentation
- Sidebar structure is manually configured in `sidebars.ts` rather than auto-generated

### Environment Requirements
- Node.js >=18.0 required
- Uses Yarn for package management
- Deployed to GitHub Pages via `gh-pages` branch

### Site Configuration
- Production URL: https://docs.relica.io
- GitHub organization: corpus-relica
- Deployment configured for GitHub Pages with custom domain