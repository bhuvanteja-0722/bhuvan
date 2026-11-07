# Bhuvan Teja — AI & Data Science Portfolio

A new portfolio built around a signal-poster visual, an interactive project workbench, and a linked archive of 27 certificates. The resume is available from the site navigation and at `/resume.html`.

## Run locally

From this folder, run `python3 -m http.server 8000` and open `http://localhost:8000`.

The certificate originals are retained in `assets/certificates/`; presentation copies in `assets/certificates/cropped/` have excess viewer margins trimmed where needed.

## Deploy on Render

This is a static site, so Render can host it on its free static-site service. The root `render.yaml` builds a publish-only `dist/` directory and configures automatic deploys from `main`. Create a Render Blueprint from this repository to apply the configuration; Render will provide the public `onrender.com` address after the first deploy.
