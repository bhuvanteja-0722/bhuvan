const certs = [
  {
    title: 'Codefest — Nationwide Coding Hackathon 2026',
    issuer: 'Unstop',
    cat: 'hackathon',
    img: '18.10.14.jpg',
    url: 'https://unstop.com/certificate-preview/7d42e824-31f2-43e7-bfdb-75676074f9ad?utm_campaign=site-emails'
  },

  {
    title: 'HackTheRank',
    issuer: 'Unstop',
    cat: 'hackathon',
    img: '18.10.40.jpg',
    url: 'https://unstop.com/certificate-preview/d515efa3-35f9-4ee5-b2c2-4d466cf62217?utm_campaign=site-emails'
  },

  {
    title: '5-Day AI Agents Intensive Course with Google',
    issuer: 'Kaggle × Google',
    cat: 'ai',
    img: '18.11.06.jpg',
    url: 'https://www.kaggle.com/certification/badges/bhuvantejaponakala22/105'
  },

  {
    title: 'Full Stack Development 2026',
    issuer: 'GUVI | HCL',
    cat: 'development',
    img: '18.11.34.jpg',
    url: 'https://www.guvi.in/verify-certificate?id=gG97u3n65610BX2700'
  },

  {
    title: 'Introduction to Generative AI Studio',
    issuer: 'Google Cloud / Simplilearn SkillUp',
    cat: 'ai',
    img: '18.11.49.jpg',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGVhcm4ubmV0XC9zaGFyZVwvOTU2Mjk3MF85ODMxMTQxMTc2NTM1MDIyNTcyOS5wbmciLCJ1c2VybmFtZSI6ImJodXZhbiB0ZWphIHBvbmFrYWxhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion'
  },

  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Forage',
    cat: 'data',
    img: '18.12.02.jpg',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6937bbe0d5fde1ddbe9b60f5_1765348014752_completion_certificate.pdf'
  },

  {
    title: 'Tata GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    cat: 'data',
    img: '18.12.19.jpg',
    url: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6937bbe0d5fde1ddbe9b60f5_1765263694324_completion_certificate.pdf'
  },

  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy · Credly',
    cat: 'data',
    img: '18.12.49.jpg',
    url: 'https://www.credly.com/badges/e8317bb3-5476-4030-98f2-9b8f54bd1e5d/linked_in_profile'
  },

  {
    title: 'Develop a Company Website with Wix',
    issuer: 'Coursera',
    cat: 'development',
    img: '18.13.06.jpg',
    url: 'https://www.coursera.org/account/accomplishments/verify/73BWHQS61ORP'
  },

  {
    title: 'Introduction to Project Management with ClickUp',
    issuer: 'Coursera',
    cat: 'development',
    img: '18.13.21.jpg',
    url: 'https://www.coursera.org/account/accomplishments/verify/N0MLAXIZWOCM'
  },

  {
    title: 'Getting Started with Microsoft Excel',
    issuer: 'Coursera',
    cat: 'data',
    img: '18.16.21.jpg',
    url: 'https://www.coursera.org/account/accomplishments/verify/HUNCZ28THWVT'
  },

  {
    title: 'Artificial Intelligence Mastery',
    issuer: 'EventBeep',
    cat: 'ai',
    img: '18.16.53.jpg',
    url: 'https://certified.eventbeep.com/verify'
  },

  {
    title: 'GenAI Landscape',
    issuer: 'Analytics Vidhya',
    cat: 'ai',
    img: '18.17.03.jpg',
    url: 'https://tinyurl.com/preview/deprecated/ynuwdveh'
  },

  {
    title: 'C for Beginners',
    issuer: 'Great Learning',
    cat: 'programming',
    img: '18.17.13.jpg',
    url: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997385514'
  },

  {
    title: 'Python Basic Assessment',
    issuer: 'LearnTube.ai',
    cat: 'programming',
    img: '18.17.37.jpg',
    url: null
  },

  {
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'Be10x',
    cat: 'ai',
    img: '18.17.48.jpg',
    url: 'https://inkd.in/eSqiaUhT'
  },

  {
    title: 'Python Beginner Level Guru',
    issuer: 'TechGig / CoolBoots',
    cat: 'programming',
    img: '18.17.57.jpg',
    url: null
  },

  {
    title: 'Claude Platform 101',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-42ef7m37amyx-1786712212(1).png',
    url: null
  },

  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-95q5zoqecven-1786704542(1).png',
    url: null
  },

  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-azxeh6htnmyb-1786711619(1).png',
    url: null
  },

  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-b4gzcpnfosbs-1786714056(1).png',
    url: null
  },

  {
    title: 'AI Fluency for Small Businesses',
    issuer: 'Anthropic · PayPal',
    cat: 'anthropic',
    img: 'certificate-crmaun5qygqm-1786968822(1).png',
    url: null
  },

  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-hgp2a86wfe2y-1786689566(1).png',
    url: null
  },

  {
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-jtygzodww62g-1786711379(1).png',
    url: null
  },

  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-m8m2jcd5i7cd-1786711919(1).png',
    url: null
  },

  {
    title: 'AI Fluency: AI Capabilities & Limitations',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'certificate-uq2ef74x5pyz-1786714406(1).png',
    url: null
  },

  {
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    cat: 'anthropic',
    img: 'ai-fluency-students.png',
    url: null
  }
];


const projects = [
  { title: "ProofPass", meta: "BLOCKCHAIN / DIGITAL IDENTITY", desc: "Team MIB's AI and zero-knowledge skill passport, built at the MST Blockchain × Newrro 24-Hour Buildathon and recognized with the Special Recognition Prize.", url: "https://lnkd.in/ge4MeA2B", visual: "proof" },
  { title: "NovaOS", meta: "SYSTEMS / OPERATING SYSTEMS", desc: "A general-purpose x86-64 operating system in progress. Current work focuses on a reproducible boot path, kernel initialization and carefully documented engineering boundaries.", url: "https://github.com/bhuvanteja-0722/NovaOS", visual: "kernel" },
  { title: "FlowPilot", meta: "AI / FINTECH", desc: "Cash-flow copilot that turns payment activity into a concise operating brief for independent sellers.", url: "https://github.com/bhuvanteja-0722/FlowPilot", visual: "cash" },
  { title: "SpotWise", meta: "DATA / DECISION SYSTEMS", desc: "Location research for local businesses, combining prepared datasets with transparent break-even and readiness scenarios.", url: "https://github.com/bhuvanteja-0722/SpotWise", visual: "map" },
  { title: "India Cricket Vision", meta: "COMPUTER VISION / SPORTS", desc: "A computer-vision project exploring cricket footage and player action analysis.", url: "https://github.com/bhuvanteja-0722/india-cricket-vision", visual: "field" },
  { title: "AI Resume Screening", meta: "AI / NLP", desc: "A resume screening system focused on matching candidate documents to role requirements.", url: "https://github.com/bhuvanteja-0722/AI-resume-screening-system", visual: "docs" },
  { title: "Knowledge Base Q&A", meta: "LLMS / RETRIEVAL", desc: "A Python question-answering chatbot grounded in a supplied knowledge base.", url: "https://github.com/bhuvanteja-0722/python-chat-bot-using-knowledge-base", visual: "network" },
  { title: "RecoverAI", meta: "AI / FINANCIAL OPERATIONS", desc: "Payment failure intelligence and recovery workflows for identifying accounts that need attention.", url: "https://github.com/bhuvanteja-0722/recoverai", visual: "pulse" },
  { title: "Outbreak Agent Demo", meta: "DATA / EARLY WARNING", desc: "A multi-agent early-warning prototype that combines signals, anomaly detection and forecasting.", url: "https://github.com/bhuvanteja-0722/outbreak-agent-demo", visual: "signal" },
  { title: "SevaTrack", meta: "CIVIC TECH / APPLICATION", desc: "A service tracking application designed around structured reports and follow-through.", url: "https://github.com/bhuvanteja-0722/SevaTrack", visual: "service" },
  { title: "Crop AI", meta: "COMPUTER VISION / AGRICULTURE", desc: "Plant disease detection work using machine learning and computer vision.", url: "https://github.com/bhuvanteja-0722/crop-ai", visual: "leaf" },
  { title: "FlyRank ML", meta: "MACHINE LEARNING", desc: "Internship project work across search intelligence, data analysis and ranked recommendations.", url: "https://github.com/bhuvanteja-0722/flyrank-ml-internship", visual: "ranking" },
  { title: "Razorpay Track 3 · RecoverAI", meta: "HACKATHON / FINTECH", desc: "Lost-and-found recovery with intelligent item matching, verification and secure handoff.", url: "https://github.com/bhuvanteja-0722/razorpay-track3-recover-ai", visual: "pin" },
  { title: "Smart Scheduler", meta: "PRODUCT / WEB", desc: "A focused scheduling tool for organizing tasks and time.", url: "https://github.com/bhuvanteja-0722/smart-scheduler", visual: "calendar" }
];
const art = {
  proof: '<rect x="50" y="48" width="540" height="384" fill="#dce4d8"/><rect x="133" y="82" width="374" height="316" rx="8" fill="#f6f4ed" stroke="#315140" stroke-width="5"/><circle cx="208" cy="171" r="37" fill="#9fc7b8"/><path d="M161 261c12-39 81-39 94 0" fill="none" stroke="#315140" stroke-width="8" stroke-linecap="round"/><path d="M292 150h165m-165 37h129m-129 74h165m-165 37h112" stroke="#839487" stroke-width="7"/><path d="M293 338h115" stroke="#e64f35" stroke-width="8"/><circle cx="457" cy="337" r="20" fill="#edc54e" stroke="#315140" stroke-width="4"/><path d="M447 337l7 7 14-16" fill="none" stroke="#315140" stroke-width="4"/>',
  cash: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><rect x="50" y="48" width="540" height="52" fill="#cbd6ca"/><rect x="82" y="130" width="210" height="112" fill="#f6f4ed"/><rect x="315" y="130" width="244" height="112" fill="#f6f4ed"/><path d="M104 208l38-35 44 18 43-45 42 16M340 164h170m-170 25h137m-137 25h105" fill="none" stroke="#315140" stroke-width="7"/><path d="M82 282h477M82 326h477M82 370h477" stroke="#a8b4a8" stroke-width="4"/>',
  map: '<rect x="50" y="48" width="540" height="384" fill="#dce4d8"/><path d="M75 124l95 56-35 94 119 88 74-119 129 37 71-148M76 360l119-102 91 39 62-142 117 66" fill="none" stroke="#879989" stroke-width="5"/><path d="M75 124l95 56-35 94 119 88 74-119 129 37" fill="none" stroke="#315140" stroke-width="8"/><circle cx="75" cy="124" r="14" fill="#e64f35"/><circle cx="327" cy="241" r="14" fill="#edc54e"/><circle cx="457" cy="278" r="14" fill="#9fc7b8"/>',
  field: '<rect x="50" y="48" width="540" height="384" fill="#294b3c"/><ellipse cx="320" cy="240" rx="181" ry="157" fill="none" stroke="#e3e2da" stroke-width="4"/><path d="M320 82v316M140 240h360M320 240l-74-76 81-50 92 57 55 96-99 58-55-85" fill="none" stroke="#edc54e" stroke-width="5"/><circle cx="320" cy="240" r="12" fill="#e64f35"/>',
  docs: '<rect x="85" y="55" width="270" height="360" fill="#e3e2da"/><path d="M118 106h188m-188 28h147m-147 66h205m-205 26h175m-175 66h205m-205 26h141m-141 66h165" stroke="#718073" stroke-width="6"/><rect x="390" y="118" width="170" height="75" fill="#cbd6ca"/><rect x="390" y="216" width="170" height="75" fill="#edc54e"/><rect x="390" y="314" width="170" height="75" fill="#9fc7b8"/><path d="M408 156h132m-132 98h98m-98 98h116" stroke="#315140" stroke-width="7"/>',
  network: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><path d="M156 145l165 96m-165-96l-18 170m183-74l147-104m-147 104l145 112m-145-112l-38 148" stroke="#9cac9c" stroke-width="5"/><circle cx="156" cy="145" r="34" fill="#315140"/><circle cx="321" cy="241" r="49" fill="#edc54e"/><circle cx="468" cy="137" r="27" fill="#9fc7b8"/><circle cx="466" cy="353" r="31" fill="#e64f35"/><circle cx="283" cy="389" r="22" fill="#315140"/>',
  pulse: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><rect x="86" y="85" width="468" height="66" fill="#f6f4ed"/><circle cx="120" cy="118" r="12" fill="#e64f35"/><path d="M153 111h207m-207 17h154" stroke="#7c8b7e" stroke-width="6"/><path d="M320 177v45M320 222H175m145 0h145" stroke="#93a195" stroke-width="5"/><rect x="92" y="249" width="182" height="125" fill="#cbd6ca"/><rect x="366" y="249" width="182" height="125" fill="#cbd6ca"/><path d="M116 291h136m-136 23h101m-101 23h120m42-46h137m-137 23h102m-102 23h121" stroke="#315140" stroke-width="6"/>',
  signal: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><path d="M92 352h460M92 105v247" stroke="#97a396" stroke-width="4"/><path d="M107 299l52-31 51 13 47-86 47 45 49-98 43 33 46-76 43 49 46-42" fill="none" stroke="#315140" stroke-width="7"/><circle cx="353" cy="142" r="17" fill="#e64f35"/><circle cx="353" cy="142" r="36" fill="none" stroke="#e64f35" stroke-width="3" opacity=".55"/><circle cx="353" cy="142" r="57" fill="none" stroke="#e64f35" stroke-width="2" opacity=".3"/><rect x="95" y="73" width="150" height="38" fill="#315140"/>',
  service: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><path d="M94 128h450M94 218h450M94 308h450M140 96v254m116-254v254m115-254v254m116-254v254" stroke="#afbaad" stroke-width="3"/><path d="M140 128l116 90 115-90 116 180" fill="none" stroke="#315140" stroke-width="7"/><circle cx="140" cy="128" r="13" fill="#e64f35"/><circle cx="256" cy="218" r="13" fill="#edc54e"/><circle cx="371" cy="128" r="13" fill="#315140"/><circle cx="487" cy="308" r="13" fill="#9fc7b8"/>',
  leaf: '<rect x="50" y="48" width="540" height="384" fill="#cbd8c2"/><path d="M321 382c-2-91-18-189-76-286m76 257c11-95 43-171 117-232" fill="none" stroke="#315140" stroke-width="11" stroke-linecap="round"/><path d="M244 185c-68-12-98-57-89-112 63-3 105 27 113 89m66 96c0-75 50-123 127-128 6 67-34 119-113 132m-87 18c-75 11-126-27-139-92 62-22 126 3 158 69" fill="#92b58f" stroke="#315140" stroke-width="5"/><path d="M155 74l112 86m194-19l-127 91m-210-23l120 75" stroke="#315140" stroke-width="3"/><circle cx="321" cy="215" r="20" fill="#edc54e"/>',
  ranking: '<rect x="58" y="58" width="524" height="364" fill="#e3e2da"/><rect x="58" y="58" width="524" height="55" fill="#cbd6ca"/><path d="M95 85h176m148 0h124M102 163h430M102 225h430M102 287h430M102 349h430" stroke="#718073" stroke-width="6"/><circle cx="108" cy="163" r="15" fill="#edc54e"/><circle cx="108" cy="225" r="15" fill="#9fc7b8"/><circle cx="108" cy="287" r="15" fill="#bfcabf"/><circle cx="108" cy="349" r="15" fill="#bfcabf"/><path d="M470 154l13 15 28-33M470 216l13 15 28-33" fill="none" stroke="#315140" stroke-width="5"/>',
  pin: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><path d="M320 84c-67 0-119 53-119 120 0 80 119 185 119 185s119-105 119-185c0-67-52-120-119-120z" fill="#cbd9cc" stroke="#315140" stroke-width="6"/><circle cx="320" cy="204" r="57" fill="#315140"/><rect x="292" y="180" width="56" height="51" rx="4" fill="#edc54e"/><path d="M300 180v-15a20 20 0 0 1 40 0v15" fill="none" stroke="#315140" stroke-width="6"/><circle cx="144" cy="317" r="25" fill="#e64f35"/><path d="M132 317h24m-12-12v24" stroke="#f3efe4" stroke-width="4"/>',
  kernel: '<rect x="50" y="48" width="540" height="384" fill="#e3e2da"/><rect x="92" y="88" width="456" height="62" fill="#315140"/><circle cx="119" cy="119" r="7" fill="#e64f35"/><circle cx="143" cy="119" r="7" fill="#edc54e"/><circle cx="167" cy="119" r="7" fill="#9fc7b8"/><path d="M120 197h228m-228 30h168m-168 56h333m-333 30h280m-280 56h205" stroke="#728378" stroke-width="7"/><path d="M403 198l36 29-36 29m60-58 36 29-36 29" fill="none" stroke="#315140" stroke-width="7"/><rect x="377" y="323" width="138" height="32" fill="#cbd6ca"/',
  calendar: '<rect x="54" y="56" width="532" height="368" fill="#e3e2da"/><rect x="54" y="56" width="532" height="64" fill="#315140"/><path d="M93 88h128M98 164h450M98 222h450M98 280h450M98 338h450m-360-190v240m72-240v240m72-240v240m72-240v240m72-240v240" stroke="#acb9ac" stroke-width="3"/><rect x="185" y="177" width="48" height="29" fill="#9fc7b8"/><rect x="254" y="235" width="112" height="29" fill="#edc54e"/><rect x="329" y="293" width="48" height="29" fill="#e64f35"/><rect x="400" y="351" width="123" height="29" fill="#9fc7b8"/>'
};

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function projectVisual(project) {
  return '<svg viewBox="0 0 640 480" role="img" aria-label="' + escapeHtml(project.title) + ' project diagram" xmlns="http://www.w3.org/2000/svg">' + art[project.visual] + '</svg>';
}
const projectList = document.querySelector("#project-list");
const projectDetail = document.querySelector("#project-detail");
function renderProject(index) {
  const p = projects[index];
  projectList.querySelectorAll(".project-select").forEach(function (button, i) {
    button.classList.toggle("is-active", i === index);
    button.setAttribute("aria-pressed", String(i === index));
  });
  projectDetail.innerHTML =
    '<div class="project-detail-inner"><div class="project-visual">' + projectVisual(p) + '</div>' +
    '<div class="project-copy"><p class="project-meta">' + String(index + 1).padStart(2, "0") + ' / ' + String(projects.length).padStart(2, "0") + ' · ' + escapeHtml(p.meta) + '</p>' +
    '<h3>' + escapeHtml(p.title) + '</h3><p>' + escapeHtml(p.desc) + '</p>' +
    '<a class="project-open" href="' + p.url + '" target="_blank" rel="noopener noreferrer">Open repository <span aria-hidden="true">↗</span></a></div></div>';
}
projectList.innerHTML = projects.map(function (p, i) {
  return '<div class="project-row"><button class="project-select' + (i === 0 ? " is-active" : "") + '" type="button" aria-pressed="' + String(i === 0) + '">' +
    '<span>' + String(i + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(p.title) + '</strong></button>' +
    '<a class="project-source" href="' + p.url + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + escapeHtml(p.title) + ' repository">↗</a></div>';
}).join("");
projectList.addEventListener("click", function (event) {
  const button = event.target.closest(".project-select");
  if (!button) return;
  renderProject(Array.prototype.indexOf.call(projectList.querySelectorAll(".project-select"), button));
});
renderProject(0);

const certificateGrid = document.querySelector("#certificate-grid");
function renderCertificates(filter) {
  const selected = filter === "all" ? certs : certs.filter(function (c) { return c.cat === filter; });
  certificateGrid.innerHTML = selected.map(function (c) {
    const image = "assets/certificates/cropped/" + encodeURIComponent(c.img);
    const verify = c.url ? '<a class="credential-verify" href="' + c.url + '" target="_blank" rel="noopener noreferrer">Verify credential ↗</a>' : '<span class="credential-unverified">No online verification link</span>';
    return '<article class="credential"><a class="certificate-image" href="' + image + '" target="_blank" rel="noopener noreferrer" aria-label="Open full certificate scan: ' +
      escapeHtml(c.title) + '"><img src="' + image + '" alt="' + escapeHtml(c.title + " — " + c.issuer) + '" loading="lazy" decoding="async"></a>' +
      '<div class="credential-info"><span class="issuer">' + escapeHtml(c.issuer) + '</span><h3>' + escapeHtml(c.title) + '</h3><div class="credential-actions"><a class="credential-scan" href="' + image + '" target="_blank" rel="noopener noreferrer">View full scan ↗</a>' + verify + '</div></div></article>';
  }).join("");
  document.querySelector("#cert-count").textContent = String(selected.length).padStart(2, "0") + " RECORDS";
}
renderCertificates("all");
document.querySelector("#cert-filters").addEventListener("click", function (event) {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document.querySelectorAll("#cert-filters button").forEach(function (item) {
    const active = item === button;
    item.classList.toggle("selected", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderCertificates(button.dataset.filter);
});

const menuButton = document.querySelector(".nav-toggle");
menuButton.addEventListener("click", function () {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".site-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const cursor = document.querySelector("#cursor-orbit");
const finePointer = window.matchMedia("(pointer: fine)").matches;
if (cursor && finePointer) {
  window.addEventListener("pointermove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
    cursor.classList.add("is-visible");
  }, { passive: true });
  document.addEventListener("pointerover", function (event) {
    if (event.target.closest("a, button")) cursor.classList.add("is-over");
  });
  document.addEventListener("pointerout", function (event) {
    if (event.target.closest("a, button") && !event.relatedTarget?.closest("a, button")) cursor.classList.remove("is-over");
  });
}
const poster = document.querySelector("#signal-poster");
const signalNode = document.querySelector("#orbit-node");
if (poster && signalNode && finePointer) {
  poster.addEventListener("pointermove", function (event) {
    const box = poster.getBoundingClientRect();
    const x = Math.max(32, Math.min(488, (event.clientX - box.left) / box.width * 520));
    const y = Math.max(56, Math.min(400, (event.clientY - box.top) / box.height * 720));
    signalNode.setAttribute("cx", x.toFixed(1));
    signalNode.setAttribute("cy", y.toFixed(1));
  }, { passive: true });
  poster.addEventListener("pointerleave", function () {
    signalNode.setAttribute("cx", "260");
    signalNode.setAttribute("cy", "190");
  });
}

const hero = document.querySelector(".hero[data-enter]");
if (hero) requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add("is-entered"); }); });
const loader = document.querySelector("#intro-loader");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loaderText = document.querySelector("#name-trace-text");
let introSeen = false;
try { introSeen = sessionStorage.getItem("bhuvan-portfolio-intro") === "seen"; } catch (_) {}
if (loader && (reducedMotion || introSeen)) {
  loader.remove();
} else if (loader && loaderText) {
  try { sessionStorage.setItem("bhuvan-portfolio-intro", "seen"); } catch (_) {}
  const width = loaderText.getComputedTextLength();
  const dash = Math.max(900, Math.ceil((width || 760) * 1.15));
  loaderText.style.strokeDasharray = dash + " " + dash;
  loaderText.style.strokeDashoffset = String(dash);
  const duration = 1100;
  let offset = dash;
  let passes = 0;
  let last = performance.now();
  function drawName(now) {
    offset -= dash * Math.min(48, now - last) / duration;
    last = now;
    if (offset <= 0) {
      passes += 1;
      if (passes === 2) {
        loaderText.style.strokeDashoffset = "0";
        return;
      }
      offset = dash;
    }
    loaderText.style.strokeDashoffset = String(offset);
    requestAnimationFrame(drawName);
  }
  requestAnimationFrame(drawName);
  setTimeout(function () { loader.classList.add("is-leaving"); }, 2350);
  setTimeout(function () { loader.remove(); }, 2950);
}
