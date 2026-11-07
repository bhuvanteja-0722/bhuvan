(function () {
  "use strict";

  var data = window.PORTFOLIO_DATA || { certs: [], projects: [], socials: [], email: "" };
  var projects = data.projects || [];
  var certificates = data.certs || [];
  var byId = function (id) { return document.getElementById(id); };
  var esc = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  var intro = document.documentElement.classList.contains("intro-active");
  if (intro) {
    window.setTimeout(function () {
      document.documentElement.classList.remove("intro-active");
      try { sessionStorage.setItem("btp-intro-seen", "1"); } catch (_) {}
    }, 1320);
  }

  var scenes = {
    proof: {
      title: "Proof of capability.",
      copy: "A portable credential built around evidence, identity, and verification.",
      tags: ["CREDENTIAL", "ZERO-KNOWLEDGE", "TEAM MIB"],
      core: "PROOF"
    },
    carrier: {
      title: "Find the right role.",
      copy: "Public career feeds, company context, and a learning path in one search.",
      tags: ["GREENHOUSE", "LEVER", "ASHBY"],
      core: "SIGNAL"
    },
    selectors: {
      title: "Scout with public evidence.",
      copy: "Player context and role evidence shaped into an inspectable scouting workflow.",
      tags: ["T20 EVIDENCE", "ROLE CONTEXT", "REVIEW"],
      core: "SCOUT"
    },
    hunger: {
      title: "Make learning interactive.",
      copy: "A familiar afternoon moment becomes a short, non-diagnostic learning journey.",
      tags: ["FOOD CONTEXT", "MYTH OR FACT", "EDUCATION"],
      core: "4 PM"
    },
    kernel: {
      title: "Build from the boot path.",
      copy: "A general-purpose x86-64 operating system, documented as it takes shape.",
      tags: ["X86-64", "KERNEL", "SYSTEMS"],
      core: "BOOT"
    },
    cash: {
      title: "Read the cash flow.",
      copy: "Payment activity shaped into a clear operating brief for independent sellers.",
      tags: ["PAYMENT SIGNAL", "CASH FLOW", "OPERATIONS"],
      core: "FLOW"
    },
    map: {
      title: "Choose a better location.",
      copy: "Local-business research with transparent readiness and break-even scenarios.",
      tags: ["LOCATION", "READINESS", "SCENARIOS"],
      core: "PLACE"
    },
    field: {
      title: "Read the game in frames.",
      copy: "Computer-vision exploration of cricket footage and player actions.",
      tags: ["CRICKET", "VIDEO", "VISION"],
      core: "PLAY"
    },
    docs: {
      title: "Match people to roles.",
      copy: "Resume screening focused on connecting candidate documents to role needs.",
      tags: ["RESUME", "ROLE", "MATCH"],
      core: "FIT"
    },
    network: {
      title: "Answers with evidence.",
      copy: "A question-answering experience grounded in a supplied knowledge base.",
      tags: ["KNOWLEDGE", "RETRIEVAL", "PYTHON"],
      core: "ASK"
    },
    pulse: {
      title: "Make the next payment count.",
      copy: "Payment-failure signals and recovery workflows for accounts needing attention.",
      tags: ["PAYMENT FAILURE", "RECOVERY", "INTELLIGENCE"],
      core: "NEXT"
    },
    signal: {
      title: "Catch a change early.",
      copy: "An early-warning prototype that brings together signals, anomalies, and forecasts.",
      tags: ["SIGNAL", "ANOMALY", "FORECAST"],
      core: "WATCH"
    },
    service: {
      title: "Make service follow through.",
      copy: "A tracking experience built around structured reports and clear next steps.",
      tags: ["CIVIC TECH", "REPORTS", "FOLLOW-THROUGH"],
      core: "TRACK"
    },
    leaf: {
      title: "See what a leaf is telling you.",
      copy: "Plant-disease detection work using machine learning and computer vision.",
      tags: ["PLANT IMAGE", "CLASSIFICATION", "VISION"],
      core: "LEAF"
    },
    ranking: {
      title: "Search with a stronger signal.",
      copy: "Internship project work across search intelligence and ranked recommendations.",
      tags: ["SEARCH", "MACHINE LEARNING", "RANKING"],
      core: "RANK"
    },
    pin: {
      title: "Help a lost item find its way.",
      copy: "Intelligent item matching, verification, and secure recovery for a hackathon build.",
      tags: ["ITEM MATCH", "VERIFICATION", "RECOVERY"],
      core: "FOUND"
    },
    calendar: {
      title: "Plan time with intent.",
      copy: "A focused web tool for organizing tasks and time.",
      tags: ["TASKS", "TIME", "WEB"],
      core: "PLAN"
    }
  };

  var list = byId("project-list");
  var detail = byId("project-detail");
  var projectTotal = byId("project-total");
  if (projectTotal) projectTotal.textContent = String(projects.length).padStart(2, "0") + " BUILDS";
  var workCount = document.querySelector(".work-list-heading span:last-child");
  if (workCount) workCount.textContent = "01 — " + String(projects.length).padStart(2, "0");

  function renderProject(index) {
    var project = projects[index];
    if (!project || !list || !detail) return;
    Array.prototype.forEach.call(list.querySelectorAll(".project-select"), function (button, i) {
      var active = i === index;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    var scene = scenes[project.visual] || scenes.proof;
    var tags = scene.tags.map(function (tag) { return "<span>" + esc(tag) + "</span>"; }).join("");
    var visual = esc(project.visual || "proof");
    detail.innerHTML =
      '<div class="project-panel-inner">' +
        '<div class="preview-frame">' +
          '<div class="preview-toolbar"><span class="traffic" aria-hidden="true"><i></i><i></i><i></i></span><span>VISUAL STUDY / PROJECT INTERFACE</span><span class="preview-status">FIELD NOTE ' + String(index + 1).padStart(2, "0") + '</span></div>' +
          '<div class="mock-project mock-' + visual + '">' +
            '<div class="mock-copy">' +
              '<span class="mock-label">' + esc(project.meta) + '</span>' +
              '<h3>' + esc(scene.title) + '</h3>' +
              '<p>' + esc(scene.copy) + '</p>' +
              '<div class="mock-tags">' + tags + '</div>' +
            '</div>' +
            '<div class="mock-art" aria-hidden="true">' +
              '<svg class="mock-lines" viewBox="0 0 200 180" preserveAspectRatio="none"><path d="M21 119 62 80 101 99 152 41M46 145l41-45 57 33M45 44l51 45 61-14"/></svg>' +
              '<span class="mock-node node-a"></span><span class="mock-node node-b"></span><span class="mock-node node-c"></span>' +
              '<span class="mock-core">' + esc(scene.core) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="project-description">' +
          '<p class="project-meta">' + String(index + 1).padStart(2, "0") + ' / ' + String(projects.length).padStart(2, "0") + ' &nbsp;·&nbsp; ' + esc(project.meta) + '</p>' +
          '<h3>' + esc(project.title) + '</h3>' +
          '<a class="project-open" href="' + esc(project.url) + '" target="_blank" rel="noopener noreferrer">Open repository <span aria-hidden="true">↗</span></a>' +
          '<p>' + esc(project.desc) + '</p>' +
        '</div>' +
      '</div>';
  }

  if (list && projects.length) {
    list.innerHTML = projects.map(function (project, index) {
      return '<div class="project-row">' +
        '<button class="project-select' + (index === 0 ? " is-active" : "") + '" type="button" aria-pressed="' + (index === 0) + '">' +
          '<span>' + String(index + 1).padStart(2, "0") + '</span><strong>' + esc(project.title) + '</strong>' +
        '</button>' +
        '<a class="project-source" href="' + esc(project.url) + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + esc(project.title) + ' repository">↗</a>' +
      '</div>';
    }).join("");
    list.addEventListener("click", function (event) {
      var button = event.target.closest(".project-select");
      if (!button) return;
      renderProject(Array.prototype.indexOf.call(list.querySelectorAll(".project-select"), button));
    });
    list.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      var buttons = Array.prototype.slice.call(list.querySelectorAll(".project-select"));
      var active = buttons.indexOf(document.activeElement);
      if (active < 0) return;
      event.preventDefault();
      var next = event.key === "ArrowDown" ? (active + 1) % buttons.length : (active - 1 + buttons.length) % buttons.length;
      buttons[next].focus();
      renderProject(next);
    });
    renderProject(0);
  }

  var certGrid = byId("certificate-grid");
  var certFilters = byId("cert-filters");
  var certCount = byId("cert-count");
  var certDialog = byId("certificate-dialog");
  var dialogImage = byId("dialog-image");
  var dialogTitle = byId("dialog-title");
  var dialogIssuer = byId("dialog-issuer");
  var dialogActions = byId("dialog-actions");

  function categoryMatches(cert, filter) {
    if (filter === "all") return true;
    if (filter === "ai") return cert.cat === "ai" || cert.cat === "anthropic";
    return cert.cat === filter;
  }
  function showCertificate(cert) {
    if (!certDialog || !dialogImage) return;
    var image = "assets/certificates/cropped/" + encodeURIComponent(cert.img);
    dialogImage.src = image;
    dialogImage.alt = cert.title + " — " + cert.issuer;
    dialogTitle.textContent = cert.title;
    dialogIssuer.textContent = cert.issuer;
    dialogActions.innerHTML = cert.url
      ? '<a href="' + esc(cert.url) + '" target="_blank" rel="noopener noreferrer">Verify with issuer ↗</a><a href="' + image + '" target="_blank" rel="noopener noreferrer">Open full-size scan ↗</a>'
      : '<span>No issuer verification link was supplied for this certificate.</span><a href="' + image + '" target="_blank" rel="noopener noreferrer">Open full-size scan ↗</a>';
    if (typeof certDialog.showModal === "function") certDialog.showModal();
    else window.open(image, "_blank", "noopener,noreferrer");
  }
  function renderCertificates(filter) {
    if (!certGrid) return;
    var shown = certificates.filter(function (cert) { return categoryMatches(cert, filter); });
    certGrid.innerHTML = shown.map(function (cert) {
      var image = "assets/certificates/cropped/" + encodeURIComponent(cert.img);
      var verified = cert.url
        ? '<a href="' + esc(cert.url) + '" target="_blank" rel="noopener noreferrer">Verify with issuer ↗</a>'
        : '<span class="credential-unverified">No online verification</span>';
      return '<article class="credential">' +
        '<button class="certificate-image" type="button" aria-label="View full certificate: ' + esc(cert.title) + '">' +
          '<img src="' + image + '" alt="' + esc(cert.title + " — " + cert.issuer) + '" width="1320" height="1020" loading="lazy" decoding="async">' +
        '</button>' +
        '<div class="credential-info">' +
          '<span class="issuer">' + esc(cert.issuer) + '</span>' +
          '<h3>' + esc(cert.title) + '</h3>' +
          '<div class="credential-actions"><button class="credential-scan" type="button">Open full scan ↗</button>' + verified + '</div>' +
        '</div>' +
      '</article>';
    }).join("");
    if (certCount) certCount.textContent = String(shown.length).padStart(2, "0") + " CERTIFICATES";
    Array.prototype.forEach.call(certGrid.querySelectorAll(".credential"), function (card, index) {
      var openButtons = card.querySelectorAll(".certificate-image, .credential-scan");
      Array.prototype.forEach.call(openButtons, function (button) {
        button.addEventListener("click", function () { showCertificate(shown[index]); });
      });
    });
  }
  renderCertificates("all");

  var filterLabels = Array.prototype.slice.call(document.querySelectorAll("#cert-filters [data-filter]"));
  filterLabels.forEach(function (button) {
    var key = button.dataset.filter;
    if (key === "all") {
      var total = button.querySelector("span");
      if (total) total.textContent = String(certificates.length);
    } else {
      var count = certificates.filter(function (cert) { return categoryMatches(cert, key); }).length;
      if (count) {
        var badge = document.createElement("span");
        badge.textContent = String(count);
        button.appendChild(badge);
      }
    }
  });
  if (certFilters) {
    certFilters.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-filter]");
      if (!button) return;
      filterLabels.forEach(function (item) {
        var active = item === button;
        item.classList.toggle("selected", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderCertificates(button.dataset.filter);
    });
  }

  if (certDialog) {
    var closeButton = certDialog.querySelector(".dialog-close");
    if (closeButton) closeButton.addEventListener("click", function () { certDialog.close(); });
    certDialog.addEventListener("click", function (event) {
      if (event.target === certDialog) certDialog.close();
    });
  }

  var socials = document.getElementById("social-links");
  if (socials) {
    socials.innerHTML = (data.socials || []).map(function (social) {
      return '<a href="' + esc(social.url) + '" target="_blank" rel="noopener noreferrer">' + esc(social.label) + '<span aria-hidden="true">↗</span></a>';
    }).join("");
  }

  var menu = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.addEventListener("click", function (event) {
      if (!event.target.closest("a")) return;
      document.body.classList.remove("menu-open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open navigation");
        menu.focus();
      }
    });
  }

  var canvas = byId("hero-field");
  var hero = document.querySelector(".hero");
  if (canvas && hero) {
    var context = canvas.getContext("2d", { alpha: true });
    if (context) {
      var points = [];
      var count = 540;
      var goldenAngle = Math.PI * (3 - Math.sqrt(5));
      for (var i = 0; i < count; i += 1) {
        var y = 1 - (i / (count - 1)) * 2;
        var radius = Math.sqrt(1 - y * y);
        var angle = goldenAngle * i;
        points.push({ x: Math.cos(angle) * radius, y: y, z: Math.sin(angle) * radius });
      }

      var width = 0;
      var height = 0;
      var pointer = { x: 0, y: 0, active: false };
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var finePointer = window.matchMedia("(pointer: fine) and (min-width: 900px)").matches;
      var frame = 0;
      var lastDraw = 0;

      function sizeCanvas() {
        var box = hero.getBoundingClientRect();
        var ratio = Math.min(window.devicePixelRatio || 1, 1.35);
        width = Math.max(1, box.width);
        height = Math.max(1, box.height);
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        if (reduced || !finePointer) drawField(0);
      }

      function drawField(now) {
        context.clearRect(0, 0, width, height);
        var radius = Math.min(width * 0.255, height * 0.385, 360);
        var cx = width * 0.735 + (pointer.active ? pointer.x * 20 : 0);
        var cy = height * 0.515 + (pointer.active ? pointer.y * 13 : 0);
        var spin = reduced || !finePointer ? -0.22 : now * 0.000075 + pointer.x * 0.2;
        var tilt = -0.18 + (pointer.active ? pointer.y * 0.12 : 0);
        var cosY = Math.cos(spin);
        var sinY = Math.sin(spin);
        var cosX = Math.cos(tilt);
        var sinX = Math.sin(tilt);

        context.save();
        context.globalCompositeOperation = "screen";
        for (var r = 0; r < 2; r += 1) {
          context.beginPath();
          context.ellipse(cx, cy, radius * (1.06 + r * 0.08), radius * (0.34 + r * 0.07), r ? 0.48 : -0.38, 0, Math.PI * 2);
          context.strokeStyle = r ? "rgba(141,130,245,.12)" : "rgba(112,188,255,.16)";
          context.lineWidth = 1;
          context.stroke();
        }
        for (var p = 0; p < points.length; p += 1) {
          var point = points[p];
          var x1 = point.x * cosY + point.z * sinY;
          var z1 = point.z * cosY - point.x * sinY;
          var y1 = point.y * cosX - z1 * sinX;
          var z2 = point.y * sinX + z1 * cosX;
          var perspective = 1.08 / (1.38 - z2 * 0.35);
          var px = cx + x1 * radius * perspective;
          var py = cy + y1 * radius * perspective;
          var front = (z2 + 1) / 2;
          var alpha = 0.13 + front * 0.53;
          var size = 0.65 + front * 1.35;
          var tint = p % 23 === 0;
          if (pointer.active) {
            var dx = (px - (cx + pointer.x * radius * 0.8)) / radius;
            var dy = (py - (cy + pointer.y * radius * 0.8)) / radius;
            var glow = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) * 1.25);
            alpha = Math.min(0.9, alpha + glow * 0.26);
            size += glow * 1.15;
          }
          context.beginPath();
          context.arc(px, py, size, 0, Math.PI * 2);
          context.fillStyle = tint
            ? "rgba(243,161,127," + (alpha * 0.8) + ")"
            : (p % 7 === 0
              ? "rgba(166,151,255," + alpha + ")"
              : "rgba(112,190,255," + alpha + ")");
          context.fill();
        }
        context.restore();
      }

      function animate(now) {
        frame = window.requestAnimationFrame(animate);
        if (document.hidden || now - lastDraw < 38) return;
        lastDraw = now;
        drawField(now);
      }
      sizeCanvas();
      if (!reduced && finePointer) frame = window.requestAnimationFrame(animate);
      window.addEventListener("resize", sizeCanvas, { passive: true });
      if (finePointer) {
        hero.addEventListener("pointermove", function (event) {
          var box = hero.getBoundingClientRect();
          pointer.x = (event.clientX - box.left) / box.width * 2 - 1;
          pointer.y = (event.clientY - box.top) / box.height * 2 - 1;
          pointer.active = true;
        }, { passive: true });
        hero.addEventListener("pointerleave", function () { pointer.active = false; }, { passive: true });
      }
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll("img"), function (image) {
    image.addEventListener("error", function () {
      image.classList.add("image-unavailable");
      image.alt = image.alt || "Image unavailable";
    });
  });
})();
