const projects = [
  {
    id: 'cropguard',
    no: '01',
    kicker: 'DATA × AI · COMPUTER VISION',
    title: 'CropGuard AI',
    sub: 'Multi-crop plant disease detection & agricultural assistance',
    tags: [
      'EfficientNetV2S',
      'Deep Learning',
      'Computer Vision',
      'Dashboard'
    ],
    body: 'Plant image data moves through preprocessing, augmentation and deep learning classification before becoming agricultural assistance. Features include disease identification, severity assessment, weather advisory, yield estimation, analytics, multilingual assistance and an AI chatbot.',
    repo: 'https://github.com/Nmvijeyendranath/plant-disease-detection-system'
  },

  {
    id: 'crop-ai',
    no: '02',
    kicker: 'AI · COMPUTER VISION · AGRICULTURE',
    title: 'Crop AI',
    sub: 'AI-powered crop disease detection system',
    tags: [
      'Python',
      'Computer Vision',
      'Machine Learning',
      'Agriculture'
    ],
    body: 'An agricultural AI project focused on detecting crop and plant diseases using computer-vision techniques and machine-learning concepts.',
    repo: 'https://github.com/nmvijeyendranathad24-collab/crop-ai'
  },

  {
    id: 'outbreak',
    no: '03',
    kicker: 'DATA SCIENCE × AI AGENTS',
    title: 'Outbreak Agent Demo',
    sub: 'Multi-agent, data-driven disease outbreak early-warning prototype',
    tags: [
      'Python',
      'Pandas',
      'Forecasting',
      'Anomaly Detection',
      'AI Agents'
    ],
    body: 'A simulated early-warning architecture combining news, social signals, search trends, weather and symptom information. The pipeline explores classification, anomaly detection, forecasting, risk analysis and alert generation.',
    repo: 'https://github.com/bhuvanteja-0722/outbreak-agent-demo'
  },

  {
    id: 'recoverai',
    no: '04',
    kicker: 'AI · REVENUE RECOVERY',
    title: 'RecoverAI',
    sub: 'AI-powered revenue recovery application',
    tags: [
      'AI',
      'Data Analysis',
      'Revenue Recovery',
      'Decision Support'
    ],
    body: 'RecoverAI is an AI-oriented application focused on revenue recovery workflows, intelligent analysis and practical business decision support.',
    repo: 'https://github.com/bhuvanteja-0722/recoverai'
  },

  {
    id: 'razorpay-recoverai',
    no: '05',
    kicker: 'HACKATHON · RAZORPAY TRACK 3',
    title: 'Razorpay Track 3 — RecoverAI',
    sub: 'Hackathon revenue recovery solution',
    tags: [
      'Hackathon',
      'AI',
      'React',
      'Revenue Recovery'
    ],
    body: 'A hackathon implementation built around the RecoverAI concept, combining application development, AI-oriented workflows and revenue recovery use cases.',
    repo: 'https://github.com/bhuvanteja-0722/razorpay-track3-recover-ai'
  },

  {
    id: 'seva-track',
    no: '06',
    kicker: 'DATA × AI · APPLICATION',
    title: 'SevaTrack',
    sub: 'Data- and AI-oriented service tracking platform',
    tags: [
      'Data',
      'AI',
      'Application Development',
      'Tracking'
    ],
    body: 'SevaTrack is a practical data- and AI-oriented application designed around service tracking, structured information and intelligent application workflows.',
    repo: 'https://github.com/bhuvanteja-0722/SevaTrack'
  },

  {
    id: 'flyrank',
    no: '07',
    kicker: 'MACHINE LEARNING · INTERNSHIP',
    title: 'FlyRank ML Internship',
    sub: 'Machine-learning internship work',
    tags: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Recommendations'
    ],
    body: 'Machine-learning internship work involving search intelligence, structured datasets, data analysis, baseline modeling, validation and ranked recommendation workflows.',
    repo: 'https://github.com/bhuvanteja-0722/flyrank-ml-internship'
  },

  {
    id: 'oibsip',
    no: '08',
    kicker: 'DATA SCIENCE · INTERNSHIP',
    title: 'OIBSIP Data Science Internship',
    sub: 'Project-based Data Science internship work',
    tags: [
      'Python',
      'Data Science',
      'EDA',
      'Machine Learning'
    ],
    body: 'Project-oriented Data Science and Machine Learning work involving Python, data preprocessing, exploratory data analysis, visualization and practical machine-learning workflows.',
    repo: 'https://github.com/bhuvanteja-0722/OIBSIP-Data-Science-Internship'
  },

  {
    id: 'scheduler',
    no: '09',
    kicker: 'WEB DEVELOPMENT',
    title: 'Smart Scheduler',
    sub: 'Productivity & scheduling application',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Productivity'
    ],
    body: 'A web-based productivity application focused on scheduling, task organization, interaction and a usable frontend experience.',
    repo: null
  },

  {
    id: 'bahubali',
    no: '10',
    kicker: 'CREATIVE FRONTEND',
    title: 'Bahubali',
    sub: 'Interactive multimedia web experience',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'SVG',
      'Audio',
      'Video'
    ],
    body: 'A creative frontend experience combining multimedia, SVG, audio, video and interactive visual elements.',
    repo: null
  },

  {
    id: 'aiapp',
    no: '11',
    kicker: 'APPLICATION DEVELOPMENT',
    title: 'AI Application',
    sub: 'Modern application architecture',
    tags: [
      'TypeScript',
      'React',
      'React Native',
      'Expo'
    ],
    body: 'An AI-oriented application project exploring components, application structure, authentication-related flows, navigation, error handling and user interaction.',
    repo: null
  },

  {
    id: 'dsa',
    no: '12',
    kicker: 'COMPUTER SCIENCE',
    title: 'Data Structures in C',
    sub: 'Programming fundamentals repository',
    tags: [
      'C',
      'Linked Lists',
      'Stacks',
      'Queues',
      'malloc',
      'Algorithms'
    ],
    body: 'A C-based repository covering linked lists, stacks, deques, dynamic memory, postfix expressions, Tower of Hanoi, searching and linked-list operations.',
    repo: null
  },

  {
    id: 'ecom',
    no: '13',
    kicker: 'FRONTEND',
    title: 'E-Commerce Website',
    sub: 'Interactive browser-side shopping experience',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'LocalStorage'
    ],
    body: 'Frontend work covering interactive UI, product handling, browser-side storage and application logic.',
    repo: null
  },

  {
    id: 'attendance',
    no: '14',
    kicker: 'JAVA · OOP',
    title: 'Attendance Management System',
    sub: 'Java application',
    tags: [
      'Java',
      'OOP',
      'Data Handling'
    ],
    body: 'A Java-based application focused on attendance workflows, data handling and application logic.',
    repo: null
  }
];

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

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];


/* =========================================================
   PROJECT GRID
========================================================= */

const projectGrid = $('#projectGrid');

projectGrid.innerHTML = projects
  .map((p, i) => `
    <article
      class="project-card ${i === 0 || i === 1 ? 'large' : ''} reveal"
      data-project="${p.id}"
    >
      <div class="project-visual"></div>

      <div class="project-top">
        <span>${p.kicker}</span>
        <span class="project-no">${p.no}</span>
      </div>

      <div class="project-bottom">
        <div>
          <h3 class="project-title">
            ${p.title}
            <small>${p.sub}</small>
          </h3>
        </div>

        <div class="project-arrow">↗</div>
      </div>
    </article>
  `)
  .join('');


/* =========================================================
   CERTIFICATION GRID
========================================================= */

const certGrid = $('#certGrid');

function renderCerts(filter = 'all') {

  const list =
    filter === 'all'
      ? certs
      : certs.filter(c => c.cat === filter);

  certGrid.innerHTML = list
    .map(c => `
      <article
        class="cert-card reveal in"
        data-cert-index="${certs.indexOf(c)}"
      >

        <div class="cert-thumb">
          <img
            loading="lazy"
            src="assets/certificates/${c.img}"
            alt="${c.title} certificate"
          />
        </div>

        <div class="cert-info">

          <div class="cert-issuer">
            ${c.issuer}
          </div>

          <div class="cert-title">
            ${c.title}
          </div>

          <div class="cert-footer">

            <span class="cert-cat">
              ${
                c.cat
                  .replace('ai', 'AI / GenAI')
                  .replace('hackathon', 'Hackathon')
                  .replace('development', 'Development')
                  .replace('programming', 'Programming')
                  .replace('data', 'Data')
                  .replace('anthropic', 'Anthropic')
              }
            </span>

            <span class="cert-link">
              ${c.url ? 'VERIFY ↗' : 'CERTIFICATE'}
            </span>

          </div>

        </div>

      </article>
    `)
    .join('');

  $$('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      openCert(Number(card.dataset.certIndex));
    });
  });
}

renderCerts();


/* =========================================================
   CERTIFICATION FILTERS
========================================================= */

$('#certFilters').addEventListener('click', e => {

  const button = e.target.closest('button');

  if (!button) return;

  $$('#certFilters button').forEach(x => {
    x.classList.remove('active');
  });

  button.classList.add('active');

  renderCerts(button.dataset.filter);
});


/* =========================================================
   MODALS
========================================================= */

const projectModal = $('#projectModal');
const certModal = $('#certModal');


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(id) {

  const p = projects.find(x => x.id === id);

  if (!p) return;

  $('#projectModalContent').innerHTML = `

    <div class="modal-content">

      <div class="modal-media">

        <div
          style="
            width:100%;
            height:100%;
            min-height:420px;
            background:
              radial-gradient(
                circle at 60% 35%,
                rgba(78,140,255,.22),
                transparent 32%
              ),
              linear-gradient(
                145deg,
                #091226,
                #050914
              );
            display:grid;
            place-items:center;
            border:1px solid var(--line);
            font-family:var(--display);
            font-size:clamp(50px,8vw,110px);
            font-weight:800;
            letter-spacing:-.08em;
            color:rgba(255,255,255,.08);
          "
        >
          ${p.title.split(' ').slice(0, 2).join(' ')}
        </div>

      </div>


      <div class="modal-copy">

        <div class="eyebrow">
          ${p.kicker}
        </div>

        <h2>
          ${p.title}
        </h2>

        <p>
          ${p.body}
        </p>

        <div class="chips">
          ${p.tags.map(t => `<span>${t}</span>`).join('')}
        </div>

        ${
          p.repo
            ? `
              <a
                class="btn btn-primary"
                href="${p.repo}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open repository ↗
              </a>
            `
            : ''
        }

      </div>

    </div>
  `;

  projectModal.showModal();
}


/* =========================================================
   CERTIFICATE MODAL
========================================================= */

function openCert(i) {

  const c = certs[i];

  if (!c) return;

  $('#certModalContent').innerHTML = `

    <div class="modal-content">

      <div class="modal-media">

        <img
          src="assets/certificates/${c.img}"
          alt="${c.title} certificate"
        />

      </div>


      <div class="modal-copy">

        <div class="eyebrow">
          ${c.issuer}
        </div>

        <h2>
          ${c.title}
        </h2>

        <p>
          This credential is part of Bhuvan Teja Ponakala's
          learning and evidence portfolio.
        </p>

        <div class="chips">

          <span>
            ${
              c.cat === 'ai'
                ? 'AI / GenAI'
                : c.cat === 'anthropic'
                  ? 'Anthropic'
                  : c.cat
            }
          </span>

          <span>
            ${c.issuer}
          </span>

        </div>

        ${
          c.url
            ? `
              <a
                class="btn btn-primary"
                href="${c.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify credential ↗
              </a>
            `
            : `
              <p
                style="
                  font-size:11px;
                  color:#65738a;
                  margin-top:24px;
                "
              >
                Individual verification URL was not supplied
                for this certificate.
              </p>
            `
        }

      </div>

    </div>
  `;

  certModal.showModal();
}


/* =========================================================
   CLOSE MODALS
========================================================= */

$$('[data-close]').forEach(button => {

  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });

});


[projectModal, certModal].forEach(dialog => {

  dialog.addEventListener('click', e => {

    if (e.target === dialog) {
      dialog.close();
    }

  });

});


/* =========================================================
   PROJECT CARD CLICK
========================================================= */

projectGrid.addEventListener('click', e => {

  const card = e.target.closest('[data-project]');

  if (!card) return;

  openProject(card.dataset.project);
});


/* =========================================================
   NAVIGATION
========================================================= */

const nav = $('#nav');

window.addEventListener('scroll', () => {

  nav.classList.toggle(
    'scrolled',
    scrollY > 20
  );

});


/* =========================================================
   SCROLL REVEALS
========================================================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }

    });

  },
  {
    threshold: 0.12
  }
);

$$('.reveal').forEach(element => {
  observer.observe(element);
});


/* =========================================================
   CURSOR GLOW
========================================================= */

const glow = $('.cursor-glow');

window.addEventListener('pointermove', e => {

  if (!glow) return;

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});


/* =========================================================
   MOBILE MENU
========================================================= */

$('.menu-btn').addEventListener('click', () => {

  nav.classList.toggle('open');

  $('.menu-btn').setAttribute(
    'aria-expanded',
    nav.classList.contains('open')
  );

});


$$('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });

});