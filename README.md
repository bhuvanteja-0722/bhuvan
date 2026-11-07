# Bhuvan Teja Ponakala — AI & Data Science Portfolio

A ground-up portfolio redesign with a cinematic particle-field hero, a custom dimensional ProofPass award feature, an interactive index of 17 projects, and a linked archive of all 27 certificate scans. The responsive resume opens at /resume.html and can be printed or saved as a PDF from the browser.

## Run locally

From this folder, run ./scripts/build-static.sh, then start a local server with python3 -m http.server 8000.

Open http://localhost:8000/ for the source files. For the production output, open http://localhost:8000/dist/.

Certificate scans are framed with object-fit: contain so the complete document remains visible. Each certificate links to its original scan and, where supplied, its issuer verification page.

## Deploy on Render

This is a static site. The root render.yaml builds a lean dist/ directory for Render's free static-site service and deploys automatically from main.
