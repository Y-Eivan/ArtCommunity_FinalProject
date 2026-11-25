# Art Community Website

A 5-page website where artists can browse a gallery, follow community activity and submit their own artwork. Designed in Figma with a reusable component library, then built in plain HTML, CSS and JavaScript.

Final project for the Human-Computer Interaction course at BINUS University.

[Figma design](https://www.figma.com/design/vDPgrDsBwskuFOpHSZm4ob/Untitled?node-id=0-1)
<!-- Live demo: add your GitHub Pages or Vercel link here -->

<!-- Add a screenshot here, e.g. ![Home page](Assets/screenshot.png) -->

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `index.html` | Hero carousel with featured artists and an auto-scrolling art showcase |
| Gallery | `gallery.html` | Artwork grid filtered by tags, with a lightbox to view each piece |
| Community | `community.html` | Recent activity feed with switchable sections |
| Submit | `submit.html` | Artwork submission form with validation and image preview |
| About Us | `aboutus.html` | About the site and its key features |

## Features

- **Tag filtering:** toggle tags to show or hide gallery groups, with a placeholder when nothing matches
- **Lightbox:** click any artwork to open it full size, with its title and artist
- **Carousel:** featured-artist slider with arrow navigation
- **Form validation** on the submission page:
  - all fields required
  - title up to 50 characters, description up to 300
  - 1 to 3 tags
  - AI-generated art is rejected
  - image files only, up to 10 MB, with a live preview before submitting
- **Responsive design** with a hamburger menu on mobile

## Design process

The UI was designed in Figma first:

- A component library: navigation bar, hero section, carousel, gallery cards, tags, search bar, footer
- Separate frames for each page, including form error states
- Desktop and mobile layouts

## Tech stack

HTML, CSS, JavaScript (no framework), Figma

## Running it locally

No build step. Open `index.html` in your browser.
