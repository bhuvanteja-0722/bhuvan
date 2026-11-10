import { build } from "esbuild";

await build({
  entryPoints: ["src/site-mount.tsx"],
  outfile: "assets/site-mount.js",
  bundle: true,
  minify: true,
  legalComments: "none",
  format: "iife",
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  alias: { "@": process.cwd() },
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});
