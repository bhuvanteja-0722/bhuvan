(function () {
  "use strict";

  var canvas = document.getElementById("cursor-flow");
  if (!canvas || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var size = 104;
  var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  var particles = [];
  var current = { x: -120, y: -120 };
  var target = { x: -120, y: -120 };
  var hasPointer = false;
  var lastMove = 0;
  var pulseUntil = 0;
  var frame = 0;
  var goldenAngle = Math.PI * (3 - Math.sqrt(5));

  canvas.width = Math.round(size * ratio);
  canvas.height = Math.round(size * ratio);
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  for (var i = 0; i < 20; i += 1) {
    var radial = 10 + Math.sqrt((i + 1) / 20) * 35;
    var angle = i * goldenAngle;
    particles.push({
      x: size / 2 + Math.cos(angle) * radial,
      y: size / 2 + Math.sin(angle) * radial * 0.76,
      phase: Math.random() * Math.PI * 2,
      radius: 0.9 + Math.random() * 1.7,
      color: ["#ff4358", "#ff7585", "#ffd1d5", "#f5223a"][i % 4],
    });
  }

  function draw(time) {
    context.clearRect(0, 0, size, size);
    var motionTime = reducedMotion ? 0 : time * 0.001;
    var drift = reducedMotion ? 0 : Math.min(1, Math.max(0, (lastMove + 420 - time) / 420));
    var pulse = time < pulseUntil ? 1.7 : 1;
    var points = particles.map(function (particle) {
      return {
        x: particle.x + Math.cos(motionTime * 1.25 + particle.phase) * 2.5 * drift,
        y: particle.y + Math.sin(motionTime * 1.1 + particle.phase * 1.2) * 2.3 * drift,
        radius: particle.radius * pulse,
        color: particle.color,
      };
    });
    var center = size / 2;
    var maxDistance = 35 * 35;

    for (var a = 0; a < points.length; a += 1) {
      var point = points[a];
      for (var b = a + 1; b < points.length; b += 1) {
        var other = points[b];
        var dx = point.x - other.x;
        var dy = point.y - other.y;
        var distance = dx * dx + dy * dy;
        if (distance > maxDistance) continue;
        var opacity = (1 - Math.sqrt(distance) / 35) * 0.54;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = "rgba(255, 123, 139, " + opacity + ")";
        context.lineWidth = 0.75;
        context.stroke();
      }

      var centerDistance = Math.hypot(point.x - center, point.y - center);
      if (centerDistance < 43) {
        context.beginPath();
        context.moveTo(center, center);
        context.lineTo(point.x, point.y);
        context.strokeStyle = "rgba(255, 80, 101, " + (1 - centerDistance / 43) * 0.3 + ")";
        context.lineWidth = 0.7;
        context.stroke();
      }
    }

    points.forEach(function (point) {
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fillStyle = point.color;
      context.globalAlpha = 0.78;
      context.shadowColor = "rgba(245, 34, 58, .8)";
      context.shadowBlur = 8;
      context.fill();
      context.shadowBlur = 0;
      context.globalAlpha = 1;
    });

    context.beginPath();
    context.moveTo(center - 4, center);
    context.lineTo(center + 4, center);
    context.moveTo(center, center - 4);
    context.lineTo(center, center + 4);
    context.strokeStyle = "rgba(255, 224, 227, .95)";
    context.lineWidth = 0.9;
    context.stroke();
    context.beginPath();
    context.arc(center, center, 1.4, 0, Math.PI * 2);
    context.fillStyle = "#fff1f2";
    context.fill();
  }

  function animate(time) {
    frame = 0;
    if (time - lastMove > 820 && time > pulseUntil) {
      canvas.classList.remove("is-visible", "is-clicking");
      return;
    }
    current.x += (target.x - current.x) * (reducedMotion ? 1 : 0.3);
    current.y += (target.y - current.y) * (reducedMotion ? 1 : 0.3);
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
      }, 820);
      return;
    }
    start();
  }, { passive: true });

  window.addEventListener("pointerdown", function () {
    pulseUntil = performance.now() + 240;
    canvas.classList.add("is-clicking");
    if (reducedMotion) draw(pulseUntil - 120);
    else start();
  }, { passive: true });

  window.addEventListener("pointerup", function () {
    canvas.classList.remove("is-clicking");
  }, { passive: true });

  window.addEventListener("resize", function () {
    ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(size * ratio);
    canvas.height = Math.round(size * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (reducedMotion && canvas.classList.contains("is-visible")) draw(performance.now());
  }, { passive: true });
})();
