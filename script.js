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

const projects=[{"title": "FlowPilot", "meta": "AI / FINTECH", "desc": "Cash-flow copilot that turns payment activity into a concise operating brief for independent sellers.", "url": "https://github.com/bhuvanteja-0722/FlowPilot", "num": "01"}, {"title": "SpotWise", "meta": "DATA / DECISION SYSTEMS", "desc": "Location research for local businesses, combining prepared datasets with transparent break-even and readiness scenarios.", "url": "https://github.com/bhuvanteja-0722/SpotWise", "num": "02"}, {"title": "India Cricket Vision", "meta": "COMPUTER VISION / SPORTS", "desc": "A computer-vision project exploring cricket footage and player action analysis.", "url": "https://github.com/bhuvanteja-0722/india-cricket-vision", "num": "03"}, {"title": "AI Resume Screening", "meta": "AI / NLP", "desc": "A resume screening system focused on matching candidate documents to role requirements.", "url": "https://github.com/bhuvanteja-0722/AI-resume-screening-system", "num": "04"}, {"title": "Knowledge Base Q&A", "meta": "LLMs / RETRIEVAL", "desc": "A Python question-answering chatbot grounded in a supplied knowledge base.", "url": "https://github.com/bhuvanteja-0722/python-chat-bot-using-knowledge-base", "num": "05"}, {"title": "RecoverAI", "meta": "AI / FINANCIAL OPERATIONS", "desc": "Payment failure intelligence and recovery workflows for identifying accounts that need attention.", "url": "https://github.com/bhuvanteja-0722/recoverai", "num": "06"}, {"title": "Outbreak Agent Demo", "meta": "DATA / EARLY WARNING", "desc": "A multi-agent early-warning prototype that combines signals, anomaly detection and forecasting.", "url": "https://github.com/bhuvanteja-0722/outbreak-agent-demo", "num": "07"}, {"title": "SevaTrack", "meta": "CIVIC TECH / APPLICATION", "desc": "A service tracking application designed around structured reports and follow-through.", "url": "https://github.com/bhuvanteja-0722/SevaTrack", "num": "08"}, {"title": "Crop AI", "meta": "COMPUTER VISION / AGRICULTURE", "desc": "Plant disease detection work using machine learning and computer vision.", "url": "https://github.com/bhuvanteja-0722/crop-ai", "num": "09"}, {"title": "FlyRank ML", "meta": "MACHINE LEARNING", "desc": "Internship project work across search intelligence, data analysis and ranked recommendations.", "url": "https://github.com/bhuvanteja-0722/flyrank-ml-internship", "num": "10"}, {"title": "Razorpay Track 3 · RecoverAI", "meta": "HACKATHON / FINTECH", "desc": "Lost-and-found recovery with intelligent item matching, verification and secure handoff.", "url": "https://github.com/bhuvanteja-0722/razorpay-track3-recover-ai", "num": "11"}, {"title": "Smart Scheduler", "meta": "PRODUCT / WEB", "desc": "A focused scheduling tool for organizing tasks and time.", "url": "https://github.com/bhuvanteja-0722/smart-scheduler", "num": "12"}];
const projectGrid=document.querySelector('#project-grid');
projectGrid.innerHTML=projects.map((p,i)=>`<article class="work-card tone-${i%4}"><div class="card-head"><span>${p.num} / PROJECT</span><span>${p.meta}</span></div><div class="card-art art-${i%4}"><div class="art-stamp">${p.title.split(' ').map(x=>x[0]).join('').slice(0,3)}</div><div class="art-lines"></div><span class="art-index">FIELD STUDY ${p.num}</span></div><div class="card-copy"><h3>${p.title}</h3><p>${p.desc}</p><a href="${p.url}" target="_blank" rel="noopener noreferrer">OPEN REPOSITORY <b>↗</b></a></div></article>`).join('');
const certGrid=document.querySelector('#certificate-grid');
function showCerts(filter='all'){const list=filter==='all'?certs:certs.filter(c=>c.cat===filter);certGrid.innerHTML=list.map(c=>`<article class="credential"><a class="cert-image" href="${c.url||'#'}" ${c.url?'target="_blank" rel="noopener noreferrer"':''}><img src="assets/certificates/${c.img}" alt="${c.title} — ${c.issuer}" loading="lazy"></a><div class="credential-meta"><span>${c.issuer}</span><a href="${c.url||'#'}" ${c.url?'target="_blank" rel="noopener noreferrer"':''} aria-label="${c.url?'Verify':'View'} ${c.title}">${c.url?'VERIFY ↗':'CREDENTIAL'}</a></div><h3>${c.title}</h3></article>`).join('');document.querySelector('#cert-count').textContent=String(list.length).padStart(2,'0')+' RECORDS'}
showCerts();document.querySelector('#cert-filters').addEventListener('click',e=>{const b=e.target.closest('button[data-filter]');if(!b)return;document.querySelectorAll('#cert-filters button').forEach(x=>x.classList.toggle('selected',x===b));showCerts(b.dataset.filter)});
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{let open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open))});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const loader=document.querySelector('.loader');if(reduce){loader.remove()}else{setTimeout(()=>loader.classList.add('leave'),2350);setTimeout(()=>loader.remove(),3150)}
const pointer=document.querySelector('.pointer');window.addEventListener('pointermove',e=>{pointer.style.left=e.clientX+'px';pointer.style.top=e.clientY+'px'});document.querySelectorAll('a,button').forEach(el=>el.addEventListener('pointerenter',()=>pointer.classList.add('hover')));document.querySelectorAll('a,button').forEach(el=>el.addEventListener('pointerleave',()=>pointer.classList.remove('hover')));
