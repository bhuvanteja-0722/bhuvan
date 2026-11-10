#!/usr/bin/env sh
set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
publish_dir="$root_dir/dist"

(cd "$root_dir" && npm run build:crt && npm run build:components && npm run build:styles)

test -f "$root_dir/assets/crt-mount.js"
test -f "$root_dir/assets/site-mount.js"
test -f "$root_dir/assets/app.css"

rm -rf "$publish_dir"
mkdir -p "$publish_dir/assets/certificates/cropped" "$publish_dir/assets/project-art" "$publish_dir/src/shaders"
cp "$root_dir/index.html" "$root_dir/resume.html" "$root_dir/fresh.css" \
  "$root_dir/intro.js" "$root_dir/script.js" \
  "$root_dir/portfolio-data.js" "$publish_dir/"
cp "$root_dir/assets/favicon.svg" "$root_dir/assets/share-card.svg" \
  "$root_dir/assets/bhuvan-blue-suit.png" "$root_dir/assets/crt-mount.js" \
  "$root_dir/assets/site-mount.js" "$root_dir/assets/app.css" \
  "$root_dir/assets/champ-has-arrived.mp3" "$publish_dir/assets/"
cp "$root_dir"/assets/project-art/*.jpg "$publish_dir/assets/project-art/"
cp "$root_dir/src/shaders/threeui.css" "$publish_dir/src/shaders/threeui.css"
cp "$root_dir"/assets/certificates/cropped/* "$publish_dir/assets/certificates/cropped/"
