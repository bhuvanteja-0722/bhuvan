(function () {
  "use strict";

  var orb = document.getElementById("cursor-orb");
  if (!orb || !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var x = -120;
  var y = -120;
  var targetX = x;
  var targetY = y;
  var frame = 0;
  var idleTimer = 0;

  function draw() {
    x += (targetX - x) * 0.24;
    y += (targetY - y) * 0.24;
    orb.style.left = x + "px";
    orb.style.top = y + "px";
    if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5) {
      frame = window.requestAnimationFrame(draw);
    } else {
      frame = 0;
    }
  }

  window.addEventListener("pointermove", function (event) {
    if (event.pointerType === "touch") return;
    targetX = event.clientX;
    targetY = event.clientY;
    orb.classList.add("is-visible");
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(function () {
      orb.classList.remove("is-visible");
    }, 950);
    if (!frame) frame = window.requestAnimationFrame(draw);
  }, { passive: true });

  window.addEventListener("pointerdown", function () {
    orb.classList.add("is-pressed");
  }, { passive: true });
  window.addEventListener("pointerup", function () {
    orb.classList.remove("is-pressed");
  }, { passive: true });
})();
