(function () {
  "use strict";

  var canvas = document.getElementById("cursor-flow");
  if (!canvas || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var size = 380;
  var half = size / 2;
  var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  var particles = [];
  var current = { x: -half, y: -half };
  var target = { x: -half, y: -half };
  var hasPointer = false;
  var lastMove = 0;
  var pulseUntil = 0;
  var frame = 0;

  canvas.width = Math.round(size * ratio);
  canvas.height = Math.round(size * ratio);
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  for (var i = 0; i < 74; i += 1) {
    var angle = Math.random() * Math.PI * 2;
    var distance = Math.sqrt(Math.random()) * 172;
    particles.push({
      x: half + Math.cos(angle) * distance,
      y: half + Math.sin(angle) * distance,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      radius: 0.8 + Math.random() * 1.55,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function draw(time) {
    context.clearRect(0, 0, size, size);
    var centerX = half;
    var centerY = half;
    var linkDistance = 78;
    var linkDistanceSquared = linkDistance * linkDistance;
    var repulsionRadius = 154;

    particles.forEach(function (particle) {
      if (!reducedMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 9 || particle.x > size - 9) particle.vx *= -1;
        if (particle.y < 9 || particle.y > size - 9) particle.vy *= -1;

        var dx = particle.x - centerX;
        var dy = particle.y - centerY;
        var distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < repulsionRadius) {
          var force = ((repulsionRadius - distance) / repulsionRadius) * 0.46;
          particle.x += (dx / distance) * force;
          particle.y += (dy / distance) * force;
        }
      }
    });

    for (var a = 0; a < particles.length; a += 1) {
      var particle = particles[a];
      for (var b = a + 1; b < particles.length; b += 1) {
        var neighbor = particles[b];
        var dx = particle.x - neighbor.x;
        var dy = particle.y - neighbor.y;
        var distanceSquared = dx * dx + dy * dy;
        if (distanceSquared > linkDistanceSquared) continue;

        var distance = Math.sqrt(distanceSquared);
        var proximity = 1 - distance / linkDistance;
        var fromPointer = Math.hypot(particle.x - centerX, particle.y - centerY);
        var alpha = proximity * (fromPointer < repulsionRadius ? 0.58 : 0.37);
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(neighbor.x, neighbor.y);
        context.strokeStyle = fromPointer < repulsionRadius
          ? "rgba(255, 231, 235, " + alpha + ")"
          : "rgba(255, 77, 98, " + alpha + ")";
        context.lineWidth = 0.85;
        context.stroke();
      }

      var shimmer = reducedMotion
        ? 0.82
        : 0.62 + (Math.sin(time * 0.0012 + particle.phase) + 1) * 0.16;
      var pulse = time < pulseUntil ? 1.38 : 1;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * pulse, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, " + (72 + (a % 4) * 12) + ", " + (92 + (a % 3) * 12) + ", " + shimmer + ")";
      context.shadowColor = "rgba(245, 34, 58, .8)";
      context.shadowBlur = 7;
      context.fill();
      context.shadowBlur = 0;
    }
  }

  function animate(time) {
    frame = 0;
    if (time - lastMove > 720 && time > pulseUntil) {
      canvas.classList.remove("is-visible", "is-clicking");
      context.clearRect(0, 0, size, size);
      return;
    }

    current.x += (target.x - current.x) * (reducedMotion ? 1 : 0.32);
    current.y += (target.y - current.y) * (reducedMotion ? 1 : 0.32);
    canvas.style.left = current.x + "px";
    canvas.style.top = current.y + "px";
    draw(time);
    if (!reducedMotion) frame = window.requestAnimationFrame(animate);
  }

  function start() {
    if (!frame) frame = window.requestAnimationFrame(animate);
  }

  window.addEventListener("pointermove", function (event) {
    if (event.pointerType === "touch") return;
    target.x = event.clientX;
    target.y = event.clientY;
    lastMove = performance.now();
    if (!hasPointer) {
      current.x = target.x;
      current.y = target.y;
      hasPointer = true;
    }
    canvas.classList.add("is-visible");

    if (reducedMotion) {
      current.x = target.x;
      current.y = target.y;
      canvas.style.left = current.x + "px";
      canvas.style.top = current.y + "px";
      draw(lastMove);
      window.clearTimeout(canvas.__cursorHideTimer);
      canvas.__cursorHideTimer = window.setTimeout(function () {
        canvas.classList.remove("is-visible", "is-clicking");
      }, 720);
      return;
    }
    start();
  }, { passive: true });

  window.addEventListener("pointerdown", function () {
    pulseUntil = performance.now() + 220;
    canvas.classList.add("is-clicking");
    if (reducedMotion) draw(pulseUntil - 100);
    else start();
  }, { passive: true });

  window.addEventListener("pointerup", function () {
    canvas.classList.remove("is-clicking");
  }, { passive: true });

  window.addEventListener("blur", function () {
    canvas.classList.remove("is-visible", "is-clicking");
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
  });

  window.addEventListener("resize", function () {
    ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(size * ratio);
    canvas.height = Math.round(size * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (reducedMotion && canvas.classList.contains("is-visible")) draw(performance.now());
  }, { passive: true });
})();
