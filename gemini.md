# Project Context: academic-website

This repository contains the source code for Janeet Bajracharya's academic website, built using Hugo.

## Technology Stack & Theme
- **Framework:** Hugo (Go modules enabled)
- **Theme:** `terminal` (`github.com/panr/hugo-theme-terminal/v4` via Hugo Modules)
- **Configuration:** [config.toml](file:///Users/janeetbajracharya/Desktop/Code/academic-website/config.toml)

## Key Configurations & Customizations

### 1. Last Updated Dates
- Configured in [config.toml](file:///Users/janeetbajracharya/Desktop/Code/academic-website/config.toml) to automatically update the last modified dates of pages when changes are made.
- Settings enabled:
  - `enableGitInfo = true`
  - `showLastUpdated = true` (under `[params]`)
  - `[frontmatter] lastmod = [":git", ":fileModTime", "lastmod", "date"]` (prioritizes Git commit timestamps first, falling back to local file modification times on disk, then frontmatter parameters).

### 2. Photography Mosaic Modal Customization
- **Shortcode:** [mosaic.html](file:///Users/janeetbajracharya/Desktop/Code/academic-website/layouts/shortcodes/mosaic.html)
- **Features:**
  - Responsive image grid layout.
  - Interactive modal popup with a blurred backdrop (`backdrop-filter: blur(8px)`) and a dimmed background.
  - Automatically extracts image `alt` text to display as centered captions in the modal.
  - Multi-method modal closing (click outside, press `Escape`, or click close `×` button).
  - Hover effects on images (`scale(1.02)`) indicating interactivity.

## Directory Structure & Important Files
- `content/` - Contains website content pages (markdown).
  - [photography.md](file:///Users/janeetbajracharya/Desktop/Code/academic-website/content/photography.md) - Displays Fuji XE-3 photos using the `{{< mosaic >}}` shortcode.
  - [about.md](file:///Users/janeetbajracharya/Desktop/Code/academic-website/content/about.md)
  - [personal.md](file:///Users/janeetbajracharya/Desktop/Code/academic-website/content/personal.md)
- `layouts/` - Custom templates.
  - `layouts/shortcodes/mosaic.html` - The photography grid + modal component.
- `static/` - Static assets like custom CSS, JavaScript, and images (e.g. `static/images/photography/`).