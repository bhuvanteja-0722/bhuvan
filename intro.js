(function () {
  "use strict";

  var root = document.documentElement;
  var active = root.classList.contains("intro-active");
  var crtStage = document.getElementById("crt-sequence");
  var swarmScene = document.getElementById("swarm-scene");
  var soundtrackToggle = document.getElementById("soundtrack-toggle");
  var soundtrackAudio = document.getElementById("portfolio-soundtrack");
  var SWARM_SPEED = 0.25;

  function timer(callback, delay) {
    return window.setTimeout(callback, delay);
  }

  function syncSoundtrackControl() {
    if (!soundtrackToggle || !soundtrackAudio) return;
    var audible = !soundtrackAudio.muted && !soundtrackAudio.paused;
    soundtrackToggle.setAttribute("aria-pressed", audible ? "true" : "false");
    soundtrackToggle.setAttribute("aria-label", audible ? "Mute background music" : "Unmute background music");
    soundtrackToggle.title = audible ? "Mute background music" : "Unmute background music";
  }

  function startIntroSoundtrack() {
    if (!soundtrackAudio) return;
    soundtrackAudio.loop = true;
    soundtrackAudio.volume = 0.64;
    soundtrackAudio.muted = true;
    var playAttempt = soundtrackAudio.play();
    if (playAttempt && typeof playAttempt.catch === "function") playAttempt.catch(syncSoundtrackControl);
    syncSoundtrackControl();
  }

  if (soundtrackToggle) soundtrackToggle.addEventListener("click", function () {
    if (!soundtrackAudio) return;
    soundtrackAudio.loop = true;
    soundtrackAudio.volume = 0.64;
    if (soundtrackAudio.muted || soundtrackAudio.paused) {
      soundtrackAudio.muted = false;
      var playAttempt = soundtrackAudio.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(function () {
          soundtrackAudio.muted = true;
          syncSoundtrackControl();
        });
      }
    } else {
      soundtrackAudio.muted = true;
    }
    syncSoundtrackControl();
  });
  if (soundtrackAudio) {
    var retryMutedAutoplay = function () {
      if (!soundtrackAudio.muted || !soundtrackAudio.paused) return;
      var retry = soundtrackAudio.play();
      if (retry && typeof retry.catch === "function") retry.catch(syncSoundtrackControl);
    };
    soundtrackAudio.addEventListener("loadeddata", retryMutedAutoplay, { once: true });
    soundtrackAudio.addEventListener("canplay", retryMutedAutoplay, { once: true });
    soundtrackAudio.addEventListener("play", syncSoundtrackControl);
    soundtrackAudio.addEventListener("pause", syncSoundtrackControl);
    soundtrackAudio.addEventListener("volumechange", syncSoundtrackControl);
    soundtrackAudio.addEventListener("ended", function () {
      soundtrackAudio.currentTime = 0;
      soundtrackAudio.play().catch(syncSoundtrackControl);
    });
  }

  startIntroSoundtrack();

  if (!active) return;

  var skipTimers = [];
  var tourFrame = 0;
  var swarmFrame = 0;
  var returnFrame = 0;
  var targets = [];
  var targetIndex = 0;
  var agents = [];
  var wireframes = [];
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var introStartedAt = window.__btpIntroStartedAt || Date.now();
  var sections = [];
  var canvas = document.getElementById("swarm-field");
  var context = canvas && canvas.getContext("2d", { alpha: true });
  var viewportWidth = 0;
  var viewportHeight = 0;
  var pointerX = window.innerWidth * 0.5;
  var pointerY = window.innerHeight * 0.5;
  var nextBuildAt = 0;
  var particles = [];
  var crtFailed = false;
  var introPrepared = false;

  function later(callback, delay) {
    var id = timer(callback, delay);
    skipTimers.push(id);
    return id;
  }

  function prepareTargets() {
    var selector = [
      ".site-header .brand", ".site-header .site-nav > a", ".site-header .menu-toggle",
      "main > section", "footer.site-footer",
      ".hero-copy > *", ".hero-stage .portrait-frame", ".hero-stage .floating-token",
      ".hero-stage .stage-coordinate", ".hero-stage .stage-index", ".hero-bottom > *",
      ".about .section-kicker", ".about-statement > *", ".about-details > .detail-card", ".capability-list > div",
      ".recognition-copy > *", ".award-stage > *", ".work .section-kicker", ".work .section-intro-row > *",
      ".works-wheel-label", ".works-wheel-current", ".works-wheel-index-item", ".works-wheel [role='option']", ".work-bottom > *",
      ".credentials .section-kicker", ".credential-intro > *", ".credential-filters > *", ".credential-count",
      ".certificate-grid .credential", ".contact .section-kicker", ".contact-layout > *", ".social-links > *",
      ".site-footer > *"
    ].join(",");

    targets = Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function (element) {
      var box = element.getBoundingClientRect();
      return box.width > 0 && box.height > 0 && window.getComputedStyle(element).display !== "none";
    });
    targets.forEach(function (element, index) {
      element.classList.add("swarm-build-target");
      element.dataset.swarmIndex = String(index + 1).padStart(3, "0");
      if (element.matches("img, video, canvas") === false) {
        Array.prototype.forEach.call(element.querySelectorAll("img, video, canvas"), function (media) {
          media.classList.add("swarm-media-target");
        });
      }
    });
    sections = Array.prototype.slice.call(document.querySelectorAll("main > section, footer.site-footer"));
  }

  function makeAgents() {
    var layer = document.getElementById("swarm-agent-layer");
    if (!layer || agents.length) return;
    var labels = ["FRAME", "TYPE", "IMAGE", "PEN", "GUIDE", "COPY", "TYPE", "IMAGE", "FRAME", "COPY", "PEN", "TYPE"];
    var colors = ["#ff445a", "#ffd166", "#50e3c2", "#a78bfa", "#ff8c42", "#5eead4", "#f472b6", "#a3e635", "#60a5fa", "#facc15", "#fb7185", "#c4b5fd"];
    for (var index = 0; index < labels.length; index += 1) {
      var agent = document.createElement("div");
      agent.className = "swarm-agent swarm-agent-" + String(index + 1);
      agent.style.setProperty("--agent-color", colors[index]);
      agent.style.setProperty("--agent-travel-duration", (140 / SWARM_SPEED) + "ms");
      agent.setAttribute("aria-hidden", "true");
      agent.innerHTML = '<svg viewBox="0 0 24 28" focusable="false"><path d="M3 2.5v22l5.7-6.3 3.1 7.2 4-1.8-3.5-7.2 8.6-.8L3 2.5Z"/><path class="agent-crosshair" d="M19 1v5m-2.5-2.5h5"/></svg><span>' + labels[index] + " / 0" + (index + 1) + "</span>";
      layer.appendChild(agent);
      agents.push(agent);
    }
  }

  function resizeSwarm() {
    if (!canvas || !context) return;
    var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    canvas.width = Math.round(viewportWidth * ratio);
    canvas.height = Math.round(viewportHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function seedParticles() {
    particles = [];
    var total = window.innerWidth < 600 ? 52 : 104;
    for (var index = 0; index < total; index += 1) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 0.13 + Math.random() * 0.34,
        speed: (Math.random() * 0.0002 + 0.00006) * SWARM_SPEED * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 1.8 + 0.45,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function placeAgent(agent, x, y) {
    if (!agent) return;
    var left = Math.max(8, Math.min(viewportWidth - 24, x));
    var top = Math.max(8, Math.min(viewportHeight - 24, y));
    agent.style.left = left + "px";
    agent.style.top = top + "px";
  }

  function orbitAgents(now) {
    if (root.classList.contains("intro-tour")) return;
    var radius = Math.min(viewportWidth, viewportHeight) * 0.17;
    var centerX = viewportWidth * 0.5;
    var centerY = viewportHeight * 0.5;
    agents.forEach(function (agent, index) {
      var angle = now * 0.00072 * SWARM_SPEED + (Math.PI * 2 * index) / agents.length;
      placeAgent(agent, centerX + Math.cos(angle) * radius - 6, centerY + Math.sin(angle) * radius * 0.58 - 8);
    });
  }

  function drawSwarm(now) {
    if (!context || !root.classList.contains("intro-blank") && !root.classList.contains("intro-tour")) return;
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    var radius = Math.min(viewportWidth, viewportHeight);
    var centerX = viewportWidth * 0.5;
    var centerY = viewportHeight * (root.classList.contains("intro-tour") ? 0.46 : 0.5);
    particles.forEach(function (particle, index) {
      var angle = particle.angle + now * particle.speed;
      var breathing = 1 + Math.sin(now * 0.0013 * SWARM_SPEED + particle.phase) * 0.06;
      var x = centerX + Math.cos(angle) * radius * particle.radius * breathing * 1.5;
      var y = centerY + Math.sin(angle) * radius * particle.radius * breathing * 0.68;
      var alpha = 0.22 + (Math.sin(now * 0.0016 * SWARM_SPEED + particle.phase) + 1) * 0.22;
      context.beginPath();
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fillStyle = index % 6 === 0 ? "rgba(255,105,120," + alpha + ")" : "rgba(245,34,58," + alpha + ")";
      context.fill();
    });
    orbitAgents(now);
    swarmFrame = window.requestAnimationFrame(drawSwarm);
  }

  function showWireframe(target, index, rect) {
    var layer = document.getElementById("swarm-wireframe-layer");
    if (!layer) return;
    var left = Math.max(4, Math.min(viewportWidth - 12, rect.left));
    var top = Math.max(4, Math.min(viewportHeight - 12, rect.top));
    var width = Math.max(18, Math.min(rect.width, viewportWidth - left - 8));
    var height = Math.max(14, Math.min(rect.height, viewportHeight - top - 8));
    var wire = document.createElement("div");
    var repeated = target.matches(".works-wheel [role='option'], .certificate-grid .credential, .site-nav > a, .social-links > *, .about-details > .detail-card");
    var tool = repeated ? "COPY" : target.matches("img, video, canvas, .portrait-frame, .certificate-image, .credential, .works-wheel [role='option']") ? "IMAGE" : target.matches("h1, h2, h3, p, a, span, small, b, .works-wheel-current, .works-wheel-index-item") ? "TYPE" : (index % 4 === 2 ? "PEN" : "FRAME");
    wire.className = "swarm-wireframe";
    wire.dataset.tool = tool;
    wire.dataset.size = Math.round(width) + " × " + Math.round(height);
    wire.style.left = left + "px";
    wire.style.top = top + "px";
    wire.style.width = width + "px";
    wire.style.height = height + "px";
    layer.appendChild(wire);
    wireframes.push(wire);
    window.requestAnimationFrame(function () { wire.classList.add("is-drawing"); });
    later(function () {
      wire.classList.add("is-done");
      later(function () {
        if (wire.parentNode) wire.parentNode.removeChild(wire);
        wireframes = wireframes.filter(function (item) { return item !== wire; });
    }, 180 / SWARM_SPEED);
    }, 250 / SWARM_SPEED);
  }

  function showRuler(rect, index) {
    if (index % 5 !== 1) return;
    var layer = document.getElementById("swarm-wireframe-layer");
    if (!layer) return;
    var guide = document.createElement("div");
    guide.className = "swarm-ruler-guide";
    guide.dataset.measure = Math.round(rect.left) + " PX / " + String(index + 1).padStart(2, "0");
    guide.style.top = Math.max(8, Math.min(viewportHeight - 8, rect.top)) + "px";
    layer.appendChild(guide);
    window.requestAnimationFrame(function () { guide.classList.add("is-snapping"); });
    later(function () {
      guide.classList.add("is-fading");
      later(function () { if (guide.parentNode) guide.parentNode.removeChild(guide); }, 220 / SWARM_SPEED);
    }, 420 / SWARM_SPEED);
  }

  function buildTarget(target, index) {
    if (!target || target.classList.contains("swarm-built")) return;
    var rect = target.getBoundingClientRect();
    var agentIndex = index % agents.length;
    target.classList.add("swarm-building");
    if (target.matches("h1, h2, h3, p, a, button, small, b, .works-wheel-current, .works-wheel-index-item")) target.classList.add("swarm-typing");
    target.style.setProperty("--swarm-action-duration", (320 / SWARM_SPEED) + "ms");
    var media = target.matches("img, video, canvas") ? [target] : Array.prototype.slice.call(target.querySelectorAll("img, video, canvas"));
    media.forEach(function (item) { item.classList.add("swarm-media-building"); });
    if (rect.width > 0 && rect.height > 0) {
      placeAgent(agents[agentIndex], rect.left - 8, rect.top - 10);
      showWireframe(target, index, rect);
      showRuler(rect, index);
    }
    later(function () {
      target.classList.remove("swarm-building");
      target.classList.add("swarm-built");
    }, (110 + (index % 4) * 45) / SWARM_SPEED);
    later(function () {
      media.forEach(function (item) { item.classList.remove("swarm-media-building"); });
    }, 320 / SWARM_SPEED);
  }

  function currentSectionLabel() {
    var current = 0;
    sections.forEach(function (section, index) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.48) current = index;
    });
    var section = sections[current];
    if (!section) return "PORTFOLIO";
    var labels = { top: "HERO", about: "PROFILE", recognition: "RECOGNITION", work: "PROJECTS", credentials: "CREDENTIALS", contact: "CONTACT" };
    return labels[section.id] || (section.classList.contains("site-footer") ? "SIGN-OFF" : "PORTFOLIO");
  }

  function updateReadout(progress) {
    var label = document.getElementById("swarm-step");
    var bar = document.getElementById("swarm-progress");
    var percent = Math.max(0, Math.min(100, Math.round(progress * 100)));
    if (label) label.textContent = currentSectionLabel() + " / " + String(percent).padStart(2, "0") + "%";
    if (bar) bar.style.width = percent + "%";
  }

  function buildVisibleTargets(scrollPosition, limit, now) {
    if (now < nextBuildAt) return 0;
    var cutoff = scrollPosition + window.innerHeight * 0.86;
    var count = 0;
    while (targetIndex < targets.length && count < limit) {
      var target = targets[targetIndex];
      var pageTop = target.getBoundingClientRect().top + window.scrollY;
      if (pageTop > cutoff) break;
      targetIndex += 1;
      buildTarget(target, targetIndex - 1);
      count += 1;
    }
    if (count) nextBuildAt = now + 54 / SWARM_SPEED;
    return count;
  }

  function revealRemainder(now) {
    if (now < nextBuildAt) return targetIndex >= targets.length;
    var count = 0;
    while (targetIndex < targets.length && count < 1) {
      var target = targets[targetIndex];
      targetIndex += 1;
      buildTarget(target, targetIndex - 1);
      count += 1;
    }
    if (count) nextBuildAt = now + 54 / SWARM_SPEED;
    return targetIndex >= targets.length;
  }

  function clearIntro() {
    window.cancelAnimationFrame(tourFrame);
    window.cancelAnimationFrame(swarmFrame);
    window.cancelAnimationFrame(returnFrame);
    skipTimers.forEach(function (id) { window.clearTimeout(id); });
    skipTimers = [];
    root.classList.remove("intro-active", "intro-terminal", "intro-blue", "intro-blank", "intro-tour", "intro-return");
    if (window.BTP_UPLINK) { window.BTP_UPLINK.unmount(); window.BTP_UPLINK = null; }
    targets.forEach(function (target) {
      target.classList.remove("swarm-build-target", "swarm-building", "swarm-built", "swarm-typing");
      target.style.removeProperty("--swarm-action-duration");
      Array.prototype.forEach.call(target.querySelectorAll(".swarm-media-target"), function (media) {
        media.classList.remove("swarm-media-target", "swarm-media-building");
      });
      delete target.dataset.swarmIndex;
    });
    wireframes.forEach(function (wire) { if (wire.parentNode) wire.parentNode.removeChild(wire); });
    Array.prototype.forEach.call(document.querySelectorAll(".swarm-ruler-guide"), function (guide) { if (guide.parentNode) guide.parentNode.removeChild(guide); });
    wireframes = [];
    if (window.BTP_CRT) window.BTP_CRT.unmount();
    if (crtStage) crtStage.classList.remove("is-unavailable");
    window.scrollTo(0, 0);
  }

  function returnToHero() {
    clearIntro();
  }

  function interruptIntro(event) {
    if (!root.classList.contains("intro-active") && !root.classList.contains("intro-terminal") && !root.classList.contains("intro-blue") && !root.classList.contains("intro-blank") && !root.classList.contains("intro-tour")) return;
    if (event && event.type !== "keydown" && event.target && event.target.closest && event.target.closest("#soundtrack-toggle")) return;
    returnToHero();
  }

  function flockToPointer() {
    agents.forEach(function (agent, index) {
      var angle = (Math.PI * 2 * index) / agents.length;
      placeAgent(agent, pointerX + Math.cos(angle) * 16 - 8, pointerY + Math.sin(angle) * 16 - 10);
    });
  }

  function beginReturn() {
    if (!root.classList.contains("intro-tour")) return;
    flockToPointer();
    later(function () { startReturnScroll(); }, 480 / SWARM_SPEED);
  }

  function startReturnScroll() {
    if (!root.classList.contains("intro-tour")) return;
    root.classList.add("intro-return");
    var start = performance.now();
    var from = window.scrollY;
    var duration = reducedMotion ? 1 : 2400 / SWARM_SPEED;
    function step(now) {
      var progress = Math.min(1, (now - start) / duration);
      var eased = 0.5 - Math.cos(progress * Math.PI) / 2;
      window.scrollTo(0, from * (1 - eased));
      if (progress < 1) returnFrame = window.requestAnimationFrame(step);
      else clearIntro();
    }
    returnFrame = window.requestAnimationFrame(step);
  }

  function beginTour() {
    if (!root.classList.contains("intro-blank")) return;
    makeAgents();
    resizeSwarm();
    seedParticles();
    root.classList.remove("intro-blank");
    root.classList.add("intro-tour");
    nextBuildAt = performance.now();
    window.scrollTo(0, 0);
    swarmFrame = window.requestAnimationFrame(drawSwarm);

    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (maxScroll < 100 || !targets.length) {
      targets.forEach(function (target, index) { buildTarget(target, index); });
      targetIndex = targets.length;
      later(beginReturn, 1200 / SWARM_SPEED);
      return;
    }

    var baseDuration = Math.min(7600, Math.max(4100, maxScroll * 0.64));
    var buildDuration = targets.length * 54;
    var duration = reducedMotion ? 1 : Math.max(baseDuration, buildDuration) / SWARM_SPEED;
    var start = performance.now();
    function travel(now) {
      if (!root.classList.contains("intro-tour")) return;
      var progress = Math.min(1, (now - start) / duration);
      var eased = 0.5 - Math.cos(progress * Math.PI) / 2;
      var nextScroll = maxScroll * eased;
      window.scrollTo(0, nextScroll);
      buildVisibleTargets(nextScroll, 1, now);
      updateReadout(Math.min(progress, targets.length ? targetIndex / targets.length : progress));
      if (progress < 1) {
        tourFrame = window.requestAnimationFrame(travel);
        return;
      }
      if (!revealRemainder(now)) {
        tourFrame = window.requestAnimationFrame(travel);
        return;
      }
      updateReadout(1);
      later(beginReturn, 720 / SWARM_SPEED);
    }
    tourFrame = window.requestAnimationFrame(travel);
  }

  function startSwarmChapter() {
    root.classList.remove("intro-blue");
    if (window.BTP_CRT) window.BTP_CRT.unmount();
    root.classList.add("intro-blank");
    later(beginTour, reducedMotion ? 1 : 720 / SWARM_SPEED);
  }

  function startBlueScreen() {
    if (crtFailed) {
      startSwarmChapter();
      return;
    }
    root.classList.remove("intro-terminal");
    root.classList.add("intro-blue");
    var label = document.getElementById("crt-stage-label");
    if (label) label.textContent = "SIGNAL FAULT / 02";
    if (window.BTP_CRT) window.BTP_CRT.render("blue-screen");
    later(startSwarmChapter, reducedMotion ? 1 : 1780);
  }

  function startTerminal() {
    if (!root.classList.contains("intro-active")) return;
    if (window.BTP_UPLINK) { window.BTP_UPLINK.unmount(); window.BTP_UPLINK = null; }
    root.classList.remove("intro-active");
    if (crtFailed || !window.BTP_CRT) {
      root.classList.add("intro-blank");
      later(beginTour, 520);
      return;
    }
    root.classList.add("intro-terminal");
    if (crtStage) crtStage.classList.remove("is-unavailable");
    if (window.BTP_CRT) window.BTP_CRT.render("terminal");
    later(startBlueScreen, reducedMotion ? 1 : 2450);
  }

  function onError(event) {
    if (!/CRT|WebGL|shader/i.test(String(event.message || ""))) return;
    crtFailed = true;
    if (crtStage) crtStage.classList.add("is-unavailable");
  }

  function pageReady() {
    if (introPrepared) return;
    introPrepared = true;
    prepareTargets();
    makeAgents();
    var remaining = Math.max(0, 9000 - (Date.now() - introStartedAt));
    later(startTerminal, remaining);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    clearIntro();
    return;
  }
  window.addEventListener("wheel", interruptIntro, { passive: true, capture: true });
  window.addEventListener("touchstart", interruptIntro, { passive: true, capture: true });
  window.addEventListener("pointerdown", interruptIntro, { passive: true, capture: true });
  window.addEventListener("keydown", function (event) { if (event.key === "Escape") interruptIntro(event); }, true);
  window.addEventListener("resize", resizeSwarm, { passive: true });
  window.addEventListener("pointermove", function (event) { pointerX = event.clientX; pointerY = event.clientY; }, { passive: true });
  window.addEventListener("error", onError);
  window.addEventListener("load", pageReady, { once: true });
  if (document.readyState === "complete") pageReady();
})();
