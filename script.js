function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
}

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.querySelectorAll(".parallax-layer").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });