#!/usr/bin/env sh
set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
publish_dir="$root_dir/dist"

rm -rf "$publish_dir"
mkdir -p "$publish_dir"
cp "$root_dir/index.html" "$root_dir/resume.html" "$root_dir"/*.css "$root_dir"/*.js "$publish_dir"/
cp -R "$root_dir/assets" "$publish_dir/assets"
