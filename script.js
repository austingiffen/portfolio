function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// optimized parallax scroll (drop into script.js, loaded at end of body)
(() => {
  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  if (!layers.length) return;

  // convert speeds once, fallback to 0 if missing
  const layerData = layers.map(l => ({
    el: l,
    speed: Math.max(0, parseFloat(l.dataset.speed || '0'))
  }));

  let latestScroll = window.scrollY;
  let ticking = false;

  function onScroll() {
    latestScroll = window.scrollY || window.pageYOffset;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        layerData.forEach(({ el, speed }) => {
          // smaller speed -> moves less (farther away),
          // larger speed -> moves more (closer)
          const y = latestScroll * speed;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  // passive option for smoother scrolling
  window.addEventListener('scroll', onScroll, { passive: true });

  // run once to set initial positions (in case page isn't at 0)
  onScroll();
})();

