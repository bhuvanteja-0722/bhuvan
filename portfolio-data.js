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
  { title: "ProofPass", image: "assets/project-art/data-network.jpg", meta: "BLOCKCHAIN / DIGITAL IDENTITY", desc: "Team MIB's AI and zero-knowledge skill passport, built at the MST Blockchain × Newrro 24-Hour Buildathon and recognized with the Special Recognition Prize.", url: "https://github.com/Nmvijeyendranath/proofpass", imageAlt: "Connected points visualizing a privacy-first identity network", visual: "proof" },
  { title: "Career Signal", image: "assets/project-art/career-signal-live.jpg", meta: "AI / CAREER INTELLIGENCE", desc: "A live career-market agent that searches public employer job feeds, compares companies, and turns role signals into a project-based learning plan.", url: "https://github.com/bhuvanteja-0722/carrier-signal", liveUrl: "https://career-signal-dt7c.onrender.com", imageAlt: "Career Signal live dashboard showing employer analysis and job-market data", visual: "carrier" },
  { title: "SupeRR Selector", image: "assets/project-art/superrr-live.jpg", meta: "SPORTS ANALYTICS / DECISION SUPPORT", desc: "A Rajasthan Royals scouting dashboard built around public T20 evidence, transparent candidate review, role context, and local candidate-file workflows.", url: "https://github.com/bhuvanteja-0722/SupeRR-Selector-Season-2", liveUrl: "https://superrr-scout-ipl-2027.onrender.com", imageAlt: "SupeRR Scout live interface with Rajasthan Royals scouting metrics", visual: "selectors" },
  { title: "SupeRR Pressure Dashboard", image: "assets/project-art/cricket-stadium.jpg", meta: "CRICKET / MATCH ANALYTICS", desc: "A match-pressure dashboard that surfaces batter and bowler signals alongside innings context for a Rajasthan Royals analysis workflow.", url: "https://github.com/bhuvanteja-0722/rr-dashboard-", imageAlt: "Cricket field under stadium lights, representing match pressure analysis", visual: "pressure" },
  { title: "The 4 PM Hunger Detective", image: "assets/project-art/hunger-detective-live.jpg", meta: "HACKATHON / HEALTH EDUCATION", desc: "A mobile-first quiz prototype that turns a familiar afternoon-hunger moment into a short, non-diagnostic learning experience.", url: "https://github.com/bhuvanteja-0722/hungerdetective", liveUrl: "https://bhuvanteja-0722.github.io/hungerdetective/", imageAlt: "The 4 PM Hunger Detective live quiz about afternoon food cravings", visual: "hunger" },
  { title: "NovaOS", image: "assets/project-art/motherboard.jpg", meta: "SYSTEMS / OPERATING SYSTEMS", desc: "A general-purpose x86-64 operating system in progress. Current work focuses on a reproducible boot path, kernel initialization and carefully documented engineering boundaries.", url: "https://github.com/bhuvanteja-0722/NovaOS", imageAlt: "Detailed computer motherboard and circuitry", visual: "kernel" },
  { title: "FlowPilot", image: "assets/project-art/analytics-laptop.jpg", meta: "AI / FINTECH", desc: "Cash-flow copilot that turns payment activity into a concise operating brief for independent sellers.", url: "https://github.com/bhuvanteja-0722/FlowPilot", imageAlt: "Laptop displaying financial analytics", visual: "cash" },
  { title: "SpotWise", image: "assets/project-art/city-grid.jpg", meta: "DATA / DECISION SYSTEMS", desc: "Location research for local businesses, combining prepared datasets with transparent break-even and readiness scenarios.", url: "https://github.com/bhuvanteja-0722/SpotWise", imageAlt: "Urban buildings and street grid", visual: "map" },
  { title: "Applied Data Science Notebooks", image: "assets/project-art/analytics-laptop.jpg", meta: "DATA SCIENCE / NOTEBOOKS", desc: "A collection of applied exercises across Iris classification, unemployment trends, car-price prediction, spam detection, and sales forecasting.", url: "https://github.com/bhuvanteja-0722/OIBSIP-Data-Science-Internship", imageAlt: "Laptop with data analysis charts for a set of applied data science notebooks", visual: "notebooks" },
  { title: "India Cricket Vision", image: "assets/project-art/india-cricket-live.jpg", meta: "COMPUTER VISION / SPORTS", desc: "A local face-matching web app for Indian cricketer portraits, with a runnable app and bundled inference model.", url: "https://github.com/bhuvanteja-0722/india-cricket-vision", liveUrl: "https://india-cricket-vision.onrender.com/", imageAlt: "India Cricket Vision live page describing portrait face matching", visual: "field" },
  { title: "AI Resume Screening", image: "assets/project-art/resume-screening-live.jpg", meta: "AI / NLP", desc: "A recruiter dashboard for creating role briefs and screening PDF, DOCX, or TXT resumes, with optional AI provider integrations.", url: "https://github.com/bhuvanteja-0722/AI-resume-screening-system", liveUrl: "https://talentlens-resume-screening.onrender.com", imageAlt: "TalentLens live recruiter dashboard for candidate screening", visual: "docs" },
  { title: "Knowledge Base Q&A", image: "assets/project-art/pypal-live.jpg", meta: "LLMS / RETRIEVAL", desc: "A Python question-answering chatbot grounded in a supplied knowledge base.", url: "https://github.com/bhuvanteja-0722/python-chat-bot-using-knowledge-base", liveUrl: "https://pypal-python-chatbot.onrender.com", imageAlt: "PyPal live chatbot interface with its Python learning helper", visual: "network" },
  { title: "RecoverAI", image: "assets/project-art/analytics-laptop.jpg", meta: "AI / FINANCIAL OPERATIONS", desc: "Payment failure intelligence and recovery workflows for identifying accounts that need attention.", url: "https://github.com/bhuvanteja-0722/recoverai", imageAlt: "Laptop displaying payment and revenue analytics", visual: "pulse" },
  { title: "Outbreak Agent Demo", image: "assets/project-art/microorganisms.jpg", meta: "DATA / EARLY WARNING", desc: "A multi-agent early-warning prototype that combines signals, anomaly detection and forecasting.", url: "https://github.com/bhuvanteja-0722/outbreak-agent-demo", imageAlt: "Microscopic organisms viewed through a microscope", visual: "signal" },
  { title: "SevaTrack", image: "assets/project-art/city-grid.jpg", meta: "CIVIC TECH / APPLICATION", desc: "A service tracking application designed around structured reports and follow-through.", url: "https://github.com/bhuvanteja-0722/SevaTrack", imageAlt: "City buildings representing public-service systems", visual: "service" },
  { title: "Crop AI", image: "assets/project-art/rice-field.jpg", meta: "MACHINE LEARNING / AGRICULTURE", desc: "A crop recommendation website that uses humidity, temperature, soil pH, nitrogen, phosphorus, potassium, and rainfall to suggest suitable crops.", url: "https://github.com/bhuvanteja-0722/crop-ai", imageAlt: "Green rice paddy field", visual: "leaf" },
  { title: "FlyRank AI · Search Intelligence", image: "assets/project-art/data-network.jpg", meta: "AI COMPANY / SEARCH INTELLIGENCE", desc: "Machine learning internship work at FlyRank AI, focused on Google Search ranking and discoverability using anonymized search data.", url: "https://github.com/bhuvanteja-0722/flyrank-ml-internship", imageAlt: "Data network visualization for search ranking", visual: "ranking" },
  { title: "Razorpay Track 3 · RecoverAI", image: "assets/project-art/analytics-laptop.jpg", meta: "HACKATHON / FINTECH", desc: "Razorpay AI Buildathon Track 3 work: identify recoverable revenue, understand payment risk, recommend bounded recovery actions, and keep the decision trail visible.", url: "https://github.com/bhuvanteja-0722/razorpay-track3-recover-ai", imageAlt: "Revenue analytics dashboard on a laptop", visual: "pin" },
  { title: "Steer Lab", image: "assets/project-art/steerlab-live.jpg", meta: "HEALTH CONTENT / RESEARCH WORKFLOW", desc: "A front-end prototype for turning metabolic-health research into source-linked content, with a simulated evidence review and demo pipeline.", url: "https://github.com/bhuvanteja-0722/steerlab-github-ready", liveUrl: "https://bhuvanteja-0722.github.io/steerlab-github-ready/", imageAlt: "Steer Lab live research-to-content workspace with linked evidence and review queue", visual: "steer" },
  { title: "Baahubali · Epic Warrior", image: "assets/project-art/baahubali-temple.jpg", meta: "CINEMATIC WEB / STORYTELLING", desc: "An epic-themed cinematic landing page with a dramatic title sequence and a gold-on-black visual direction.", url: "https://github.com/bhuvanteja-0722/bahubali", liveUrl: "https://bahubali-eight.vercel.app/", imageAlt: "Ornate Indian temple towers representing the epic visual world of the Baahubali tribute site", visual: "epic" },
  { title: "Smart Scheduler", image: "assets/project-art/smart-scheduler-live.jpg", meta: "PRODUCT / WEB", desc: "A focused scheduling tool for organizing tasks and time.", url: "https://github.com/bhuvanteja-0722/smart-scheduler", liveUrl: "https://smart-scheduler-ochre.vercel.app", imageAlt: "Smart Scheduler live page with class schedule and manual timetable controls", visual: "calendar" },
];

const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/bhuvanteja-ponakala-696206330/" },
  { label: "GitHub", url: "https://github.com/bhuvanteja-0722" },
  { label: "Kaggle", url: "https://www.kaggle.com/bhuvantejaponakala22" },
  { label: "LeetCode", url: "https://leetcode.com/u/bhuvan_teja_0722/" },
  { label: "HackerRank", url: "https://www.hackerrank.com/profile/bhuvanteja_ad24" },
  { label: "Unstop", url: "https://unstop.com/u/bhuvapon96449" },
  { label: "X", url: "https://x.com/bhuvanteja_0722" },
  { label: "Instagram", url: "https://www.instagram.com/bhuvan_teja_0722/" }
];
window.PORTFOLIO_DATA = {
  certs: certs,
  projects: projects,
  socials: socials,
  email: "bhuvanteja.ad24@bmsce.ac.in"
};
