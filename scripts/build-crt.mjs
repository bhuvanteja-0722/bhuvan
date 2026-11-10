import { build } from "esbuild";

await build({
  entryPoints: ["src/crt-mount.tsx"],
  outfile: "assets/crt-mount.js",
  bundle: true,
  minify: true,
  legalComments: "none",
  format: "iife",
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});
