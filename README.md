# Bhuvan Teja Ponakala — AI & Data Science Portfolio

A ground-up portfolio redesign with a cinematic particle-field hero, a custom dimensional ProofPass award feature, an interactive index of 21 projects, and a linked archive of all 27 certificate scans. The hero combines a 3D red particle sculpture with the pointer-reactive Aether Flow network from the supplied component brief. The project index includes clear DEMO and CODE links where available. On each page load, the intro moves from the verified terminal CRT to its blue-screen variant, then uses a cursor swarm to trace and brighten the visible page during a full-site tour before returning to the hero. The provided soundtrack attempts to autoplay with the intro and stops when the intro ends. The responsive resume opens at /resume.html and can be printed or saved as a PDF from the browser.

## Run locally

From this folder, install the locked build dependencies with `npm ci`, then run `./scripts/build-static.sh` and start a local server with `python3 -m http.server 8000 --directory dist`.

Open http://localhost:8000/ to play the intro and return to the hero.

Certificate scans are framed with object-fit: contain so the complete document remains visible. Each certificate links to its original scan and, where supplied, its issuer verification page.

## Deploy on Render

This is a static site. The root render.yaml builds a lean dist/ directory for Render's free static-site service and deploys automatically from main.
