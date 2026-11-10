import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { build } from "esbuild";

const root = process.cwd();

const pressGroups = [
  { title: "Buildathon Honors", t1: "BUILDATHON", t2: "HONORS", sub: "HACKATHON RECOGNITION", spine: "#a32235", cloth: "#211317", edge: "#eadbc8", blurb: "Three hackathon credentials, including the MST Blockchain × Newrro 24-Hour Buildathon winners certificate for Team MIB.", certificates: ["MST Blockchain × Newrro 24-Hour Buildathon 2026 — Winners Certificate", "Codefest — Nationwide Coding Hackathon 2026", "HackTheRank"] },
  { title: "Applied AI Systems", t1: "APPLIED AI", t2: "SYSTEMS", sub: "GENERATIVE AI · AGENTS", spine: "#ba593f", cloth: "#201716", edge: "#eadbc8", blurb: "Five course and workshop credentials across AI agents, generative AI, and practical AI tooling.", certificates: ["5-Day AI Agents Intensive Course with Google", "Introduction to Generative AI Studio", "Artificial Intelligence Mastery", "GenAI Landscape", "AI Tools & ChatGPT Workshop"] },
  { title: "Data & Analytics", t1: "DATA", t2: "ANALYTICS", sub: "ANALYSIS · DECISION MAKING", spine: "#bf8b44", cloth: "#1d1913", edge: "#eddfc8", blurb: "Four applied credentials spanning analytics simulations, data essentials, and spreadsheet work.", certificates: ["Deloitte Australia Data Analytics Job Simulation", "Tata GenAI Powered Data Analytics Job Simulation", "Data Analytics Essentials", "Getting Started with Microsoft Excel"] },
  { title: "Product Delivery", t1: "PRODUCT", t2: "DELIVERY", sub: "WEB · PROJECT WORK", spine: "#69785a", cloth: "#171a16", edge: "#e4e1d2", blurb: "Three credentials for shipping web experiences and organizing product work.", certificates: ["Full Stack Development 2026", "Develop a Company Website with Wix", "Introduction to Project Management with ClickUp"] },
  { title: "Programming Foundations", t1: "CODE", t2: "FOUNDATIONS", sub: "C · PYTHON", spine: "#50716b", cloth: "#151a18", edge: "#e0e4d8", blurb: "Three programming credentials covering introductory C and Python assessments.", certificates: ["C for Beginners", "Python Basic Assessment", "Python Beginner Level Guru"] },
  { title: "Claude Foundations", t1: "CLAUDE", t2: "FOUNDATIONS", sub: "ANTHROPIC · PLATFORM", spine: "#887254", cloth: "#1b1815", edge: "#e7dece", blurb: "Three credentials covering the Claude platform and foundational AI fluency.", certificates: ["Claude Platform 101", "Claude 101", "AI Fluency: Framework & Foundations"] },
  { title: "Claude Development", t1: "CLAUDE", t2: "DEVELOPMENT", sub: "CODE · API · WORKFLOWS", spine: "#7b5544", cloth: "#1c1715", edge: "#ead9ca", blurb: "Four developer credentials across Claude Code, the API, and Cowork workflows.", certificates: ["Claude Code 101", "Claude with the Anthropic API", "Introduction to Claude Cowork", "Claude Code in Action"] },
  { title: "AI Fluency", t1: "AI FLUENCY", t2: "IN PRACTICE", sub: "BUSINESS · STUDENTS", spine: "#9a5360", cloth: "#1c1519", edge: "#ead9db", blurb: "Three AI fluency credentials for small businesses, students, and understanding model capabilities.", certificates: ["AI Fluency for Small Businesses", "AI Fluency: AI Capabilities & Limitations", "AI Fluency for Students"] },
  { title: "Engineering Ethics", t1: "ENGINEERING", t2: "ETHICS", sub: "NPTEL · IIT KHARAGPUR", spine: "#9c2834", cloth: "#201416", edge: "#eddbd2", blurb: "The NPTEL course certificate for Ethics in Engineering Practice, completed in February–April 2026.", certificates: ["Ethics in Engineering Practice"] },
  { title: "Research Methodology", t1: "RESEARCH", t2: "METHODS", sub: "NPTEL · IIT MADRAS", spine: "#6f5144", cloth: "#191615", edge: "#e7dbd1", blurb: "The NPTEL course certificate for Research Methodology, completed in July–October 2026.", certificates: ["Research Methodology"] },
];

// Keep certificate groupings intact while giving all ten volumes one tailored
// oxblood and charcoal palette for this portfolio.
const pressSpines = ["#c52a43", "#a91f36", "#d33a50", "#8f172d", "#bc233c", "#e1495a", "#9f2037", "#cf3148", "#7e1428", "#ad263b"];
const pressCloths = ["#16090c", "#1d090e", "#13090b", "#200a10", "#17090d", "#210b10", "#14080c", "#1c080d", "#110709", "#1a080d"];
pressGroups.forEach((group, index) => {
  group.spine = pressSpines[index];
  group.cloth = pressCloths[index];
  group.edge = "#eadde0";
});

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const xml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
const svgDataUri = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

function makePlate(group, index, certificateRecords) {
  const items = group.certificates.map((title) => {
    const cert = certificateRecords.get(title);
    if (!cert) throw new Error(`Ashen Press is missing certificate: ${title}`);
    const previewPath = path.join(root, "assets/certificates/press-previews", `${path.parse(cert.img).name}.jpg`);
    if (!fs.existsSync(previewPath)) throw new Error(`Missing full-page certificate preview: ${previewPath}`);
    return { title: cert.title, issuer: cert.issuer, data: `data:image/jpeg;base64,${fs.readFileSync(previewPath).toString("base64")}` };
  });

  const one = items.length === 1;
  const cardW = one ? 462 : 252;
  const cardH = one ? 322 : 166;
  const gapX = one ? 0 : 18;
  const gapY = one ? 0 : 20;
  const cols = one ? 1 : 2;
  const startX = one ? (600 - cardW) / 2 : (600 - (cols * cardW + gapX)) / 2;
  const startY = one ? 300 : 222;
  const cards = items.map((item, itemIndex) => {
    const col = one ? 0 : itemIndex % cols;
    const row = one ? 0 : Math.floor(itemIndex / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    const imageInset = one ? 12 : 8;
    const imageY = y + imageInset;
    const imageH = cardH - imageInset * 2;
    return `<g><rect x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="5" fill="#fffdf8" stroke="#b6a793" stroke-width="1.5"/><image href="${item.data}" x="${x + imageInset}" y="${imageY}" width="${cardW - imageInset * 2}" height="${imageH}" preserveAspectRatio="xMidYMid meet"/><title>${xml(item.title)} — ${xml(item.issuer)}</title></g>`;
  }).join("");

  const label = `${String(index + 1).padStart(2, "0")} / 10`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><defs><linearGradient id="paper" x2=".8" y2="1"><stop stop-color="#faf5eb"/><stop offset="1" stop-color="#e5dac8"/></linearGradient><pattern id="grain" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 2h12M2 0v12" stroke="#8d2233" stroke-opacity=".035"/></pattern></defs><rect width="600" height="900" fill="url(#paper)"/><rect width="600" height="900" fill="url(#grain)"/><path d="M30 55H570M30 842H570" stroke="#8e2734" stroke-opacity=".65"/><text x="34" y="40" font-family="Arial,sans-serif" font-size="12" letter-spacing="3" fill="#28201d">BHUVAN TEJA · LEARNING ARCHIVE</text><text x="566" y="40" text-anchor="end" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" fill="#8e2734">${label}</text>${cards}<text x="34" y="874" font-family="Arial,sans-serif" font-size="11" letter-spacing="2" fill="#302823">${items.length} FULL-PAGE ${items.length === 1 ? "PLATE" : "PLATES"} · ISSUER LINKS IN THE ARCHIVE BELOW</text></svg>`;
  return svgDataUri(svg);
}

function authoredPressWithCredentials(source) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "portfolio-data.js"), "utf8"), context, { timeout: 1000 });
  const certificates = context.window.PORTFOLIO_DATA?.certs ?? [];
  const records = new Map(certificates.map((certificate) => [certificate.title, certificate]));
  const groupedTitles = pressGroups.flatMap((group) => group.certificates);
  if (new Set(groupedTitles).size !== groupedTitles.length) throw new Error("A certificate appears in more than one Ashen Press volume.");
  const missing = certificates.filter((certificate) => !groupedTitles.includes(certificate.title));
  if (missing.length) throw new Error(`Ashen Press does not include: ${missing.map(({ title }) => title).join(", ")}`);
  if (groupedTitles.length !== certificates.length) throw new Error("Ashen Press volume count does not match the certificate archive.");

  const books = pressGroups.map((group, index) => ({
    id: `credential-${String(index + 1).padStart(2, "0")}`,
    title: group.title,
    t1: group.t1,
    t2: group.t2,
    sub: group.sub,
    year: "ARCHIVE",
    vol: roman[index],
    shelf: index < 5 ? 0 : 1,
    slot: index < 5 ? index : index - 5,
    spine: group.spine,
    cloth: group.cloth,
    edge: group.edge,
    blurb: group.blurb,
  }));
  source = source.replace(/const STUDIO = '[^']*';\s*const BOOKS = \[[\s\S]*?\n\];/, `const STUDIO = 'Bhuvan Teja';\nconst BOOKS = ${JSON.stringify(books)};`);

  const plateStart = source.indexOf("const PLATE_SRC = {};");
  const loaderStart = source.indexOf("function loadPlates(){", plateStart);
  if (plateStart < 0 || loaderStart < 0) throw new Error("Could not locate the authored Ashen Press plate registry.");
  const plates = Object.fromEntries(pressGroups.map((group, index) => [books[index].id, makePlate(group, index, records)]));
  const marks = Object.fromEntries(books.map((book, index) => {
    const mark = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" fill="#241719" stroke="${book.spine}" stroke-width="4"/><text x="48" y="57" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#f4e8d8">${String(index + 1).padStart(2, "0")}</text></svg>`;
    return [book.id, svgDataUri(mark)];
  }));
  source = `${source.slice(0, plateStart)}const PLATE_SRC = ${JSON.stringify(plates)};\nconst MARK_SRC = ${JSON.stringify(marks)};\nconst PLATE = {};\n${source.slice(loaderStart)}`;
  source = source.replace("Join the press", "FULL SCANS BELOW");
  // Preserve the authored renderer while bringing the first shelf frame in sooner.
  source = source
    .replace("new Promise(r=>setTimeout(r,2200))", "new Promise(r=>setTimeout(r,320))")
    .replace("introStagger: 78, introWallFade: 1000, introFade: 460", "introStagger: 24, introWallFade: 480, introFade: 260")
    .replace("renderer.setPixelRatio(Math.min(devicePixelRatio,2))", "renderer.setPixelRatio(Math.min(devicePixelRatio,1.5))")
    .replace("g.fillStyle='#7d5228'", "g.fillStyle='#17090d'")
    .replace("peak:231, bell:15, bellR:4.6, rightLift:4,", "peak:24, bell:7, bellR:4.6, rightLift:3,")
    .replace("tint:[1.0,0.876,0.726]", "tint:[0.34,0.11,0.15]")
    .replace("rgba(${146+r()*40|0},${98+r()*26|0},${48+r()*22|0},", "rgba(${91+r()*30|0},${13+r()*8|0},${24+r()*12|0},")
    .replace("rgba(${38+r()*26|0},${22+r()*16|0},${9+r()*10|0},", "rgba(${24+r()*14|0},${7+r()*7|0},${12+r()*8|0},")
    .replace("rgba(${186+r()*40|0},${138+r()*32|0},${80+r()*26|0},", "rgba(${132+r()*34|0},${31+r()*18|0},${47+r()*20|0},")
    .replace("rgba(${62+r()*26|0},${38+r()*18|0},${16+r()*12|0},", "rgba(${68+r()*22|0},${15+r()*9|0},${27+r()*12|0},")
    .replace("rgba(${208+r()*26|0},${172+r()*28|0},${118+r()*28|0},", "rgba(${180+r()*26|0},${71+r()*24|0},${84+r()*26|0},")
    .replace("rgba(${44+r()*28|0},${26+r()*16|0},${10+r()*10|0},", "rgba(${24+r()*12|0},${7+r()*6|0},${13+r()*7|0},")
    .replace("vec3(0.10,0.082,0.055)*arris", "vec3(0.10,0.025,0.035)*arris")
    .replace("vec3(0.05,0.040,0.026)*pow", "vec3(0.045,0.018,0.026)*pow")
    .replace("0x241c12", "0x10080a")
    .replace("0x241a10", "0x10080a")
    .replace("0x1a1208", "0x17090d")
    .replace("renderer.setClearColor(0xc6ae8e,1)", "renderer.setClearColor(0x080607,1)");
  const redBlackUi = `\n/* Bhuvan Teja portfolio palette: dark gallery, oxblood accents, warm white type. */
  :root{--bg:#080607;--ink:#f4e9eb;--ink-soft:rgba(244,233,235,.64)}
  html,body{background:#080607;color:#f4e9eb}
  .mark{background:#b51f38}.mark svg{fill:#fff2f4}
  .pill{background:#a81c34;color:#fff4f5;border:1px solid rgba(255,95,115,.42)}
  .pill:hover{background:#cf2b45}
  .detail .meta,.mbar-txt p,.tli p,.menu button span{color:rgba(246,230,233,.62)}
  .detail p{color:rgba(246,230,233,.86)}
  .detail .acts button,.mbar-acts button{background:rgba(28,10,14,.94);color:#fff0f2;border:1px solid rgba(255,96,117,.3);box-shadow:0 8px 24px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.12)}
  .detail .acts button:hover{background:#42111c}
  .mbar-acts button.solid{background:#b51f38;color:#fff}
  .hint{background:rgba(20,8,11,.94);color:#fff0f2;border:1px solid rgba(255,96,117,.32)}
  footer{background:linear-gradient(to top,rgba(8,6,7,.97) 46%,rgba(8,6,7,.7) 76%,rgba(8,6,7,0));border-color:rgba(255,220,226,.14)}
  .tli p{color:rgba(246,230,233,.64)}.tli:hover p{color:#fff1f3}
  .menu{background:rgba(10,6,8,.97)}.menu button{color:#f4e9eb;border-color:rgba(255,220,226,.14)}
  .loader{background:#080607}.bar{background:rgba(255,240,243,.2)}.bar i{background:#f5223a}
`;
  source = source.replace("</style>", `${redBlackUi}</style>`);
  return source;
}

function authoredUplinkWithPortfolioPalette(source) {
  // Keep the verified document byte-for-byte in src; apply the requested
  // portfolio red palette only to the embedded runtime copy.
  const palette = [
    ["#030806", "#080607"], ["#2fe07d", "#ff4058"], ["#d9f4e6", "#f4dfe2"],
    ["rgba(55,225,130,.26)", "rgba(255,64,88,.26)"], ["rgba(120,255,185,.46)", "rgba(255,136,147,.46)"],
    ["rgba(24,150,92,.17)", "rgba(220,42,66,.17)"], ["rgba(16,104,66,.08)", "rgba(145,24,40,.08)"], ["rgba(10,58,38,.025)", "rgba(72,13,23,.025)"],
    ["#07251a", "#26090e"], ["#041a12", "#140609"], ["#c8ffe2", "#ffd7dc"], ["#33cf76", "#ff445a"],
    ["rgba(70,235,145,.6)", "rgba(255,94,115,.6)"], ["rgba(48,210,125,.55)", "rgba(255,56,83,.55)"],
    ["rgba(32,175,105,.4)", "rgba(206,25,48,.4)"], ["rgba(56,225,140,.26)", "rgba(255,67,88,.26)"],
    ["rgba(46,200,126,.17)", "rgba(240,48,70,.17)"], ["rgba(38,170,108,.082)", "rgba(185,36,54,.082)"],
    ["rgba(30,140,90,.024)", "rgba(95,18,28,.024)"], ["#dcffec", "#ffe7ea"],
    ["rgba(200,255,225,1)", "rgba(255,231,234,1)"], ["rgba(85,230,150,.85)", "rgba(255,80,105,.85)"],
    ["rgba(50,190,120,.45)", "rgba(200,35,60,.45)"], ["rgba(95,240,155,.6)", "rgba(255,90,112,.6)"],
    ["rgba(55,205,125,.32)", "rgba(224,48,72,.32)"], ["rgba(40,175,105,.16)", "rgba(145,25,42,.16)"],
    ["rgba(200,250,225,.34)", "rgba(255,220,225,.34)"], ["rgba(120,235,175,.3)", "rgba(255,140,155,.3)"],
    ["rgba(60,195,130,.22)", "rgba(205,54,74,.22)"], ["#9fd0b6", "#d7a4aa"],
    ["rgba(185,240,215,.3)", "rgba(255,180,190,.3)"], ["rgba(110,220,160,.22)", "rgba(235,68,88,.22)"],
    ["rgba(70,235,145,.7)", "rgba(255,94,115,.7)"], ["rgba(120,255,185,.24)", "rgba(255,136,147,.24)"],
    ["#2bd074", "#f23b52"], ["#cfe8da", "#f5e4e6"],
    ["rgba(206,235,220,.82)", "rgba(250,225,229,.82)"], ["rgba(206,235,220,.45)", "rgba(245,218,222,.45)"],
    ["rgba(70,235,145,.9)", "rgba(255,94,115,.9)"], ["#dcefe4", "#f4e2e4"], ["#9dc3b0", "#c49ba1"],
    ["rgba(160,255,205,.05)", "rgba(255,130,150,.05)"],
  ];
  return palette.reduce((document, [from, to]) => document.replaceAll(from, to), source);
}

const credentialPressPlugin = {
  name: "credential-press-source",
  setup(buildContext) {
    buildContext.onResolve({ filter: /\.html\?raw$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path.replace(/\?raw$/, "")),
      namespace: "credential-press-source",
    }));
    buildContext.onLoad({ filter: /.*/, namespace: "credential-press-source" }, (args) => {
      const source = fs.readFileSync(args.path, "utf8");
      const document = args.path.endsWith("/ashen-press/sources/ashen-press.html")
        ? authoredPressWithCredentials(source)
        : args.path.endsWith("/uplink-loader/uplink-loader.html")
          ? authoredUplinkWithPortfolioPalette(source)
          : source;
      return { contents: `export default ${JSON.stringify(document)};`, loader: "js" };
    });
  },
};

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
  plugins: [credentialPressPlugin],
});
