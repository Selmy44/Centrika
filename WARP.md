# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

- Local preview (no build step; static assets only)
  - With Python (recommended):
    - pwsh: python -m http.server 5500
    - Open http://localhost:5500/index.html
  - Alternative (Node, if available):
    - pwsh: npx http-server -p 5500 .
    - Open http://localhost:5500/index.html

- Linting/tests
  - None configured in this repo. There is no package.json or test runner; do not assume npm/yarn.

## Architecture and project layout

- Static site; no bundler or framework. All pages are hand-authored HTML with shared assets.
  - Root landing page: index.html
  - Subpages: pages/*.html (e.g., transport.html, software-development.html, ...)
  - Assets: assets/
    - CSS: templatemo-chain-app-dev.css (base), plus custom layers: navbar-custom.css, products-custom.css, partners-custom.css, footer-custom.css, dark-mode.css, mobile-responsive.css, subpages.css
    - JS: jQuery-based IIFEs; no modules/bundler
      - custom.js: header background on scroll, Owl Carousel init, modal login flow, smooth scrolling, preloader loaded state, submenu/mobile fixes
      - navbar-custom.js: dark/light mode toggle (localStorage), search overlay, mobile dropdown behavior, active menu highlighting, smooth scroll
      - animation.js: WOW/animate-on-scroll implementation
    - Images and font assets under assets/images and assets/fonts
  - Third-party vendor libs committed to repo under vendor/ (Bootstrap and jQuery). Font Awesome is loaded via CDN in HTML.

- Navigation/header/footer
  - Markup is duplicated across pages (no templating). Changes to nav or footer must be applied to index.html and all files under pages/.
  - Subpages include CSS via ../assets/...; root uses assets/...; ensure correct relative paths when adding pages.

## Conventions and important notes

- Dark mode toggle IDs differ across files
  - navbar-custom.js expects a button with id="themeToggle".
  - Some subpages (e.g., pages/transport.html) use id="theme-toggle". Align IDs to themeToggle for dark mode to work universally.
- Preloader
  - custom.js adds 'loaded' to #js-preloader on window load. Include the preloader markup on new pages if you rely on this behavior.
- Animations
  - WOW.js classes (e.g., wow, fadeIn*) are used throughout; animation.js initializes them globally.
- README status
  - README.md contains unresolved merge conflict markers. Resolve before publishing or consuming README details.

## Tools/rules present in repo

- Claude
  - .claude/settings.local.json exists with permissive command allowances used previously for batch-editing HTML (e.g., inserting Contacts links; adding mobile-responsive.css). There is no CLAUDE.md with behavioral rules.
