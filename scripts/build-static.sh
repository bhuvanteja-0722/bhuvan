#!/usr/bin/env sh
set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
publish_dir="$root_dir/dist"

rm -rf "$publish_dir"
mkdir -p "$publish_dir/assets/certificates/cropped"
cp "$root_dir/index.html" "$root_dir/resume.html" "$root_dir/fresh.css" \
  "$root_dir/script.js" "$root_dir/portfolio-data.js" "$publish_dir/"
cp "$root_dir/assets/favicon.svg" "$root_dir/assets/share-card.svg" \
  "$root_dir/assets/bhuvan-blue-suit.png" "$publish_dir/assets/"
cp "$root_dir"/assets/certificates/cropped/* "$publish_dir/assets/certificates/cropped/"
