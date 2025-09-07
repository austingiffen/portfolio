function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
}


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Adjust the background position based on scroll
    document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
    
    // Optional: Add subtle rotation to each section for perspective effect
    document.querySelectorAll('section').forEach(section => {
      const rect = section.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const sectionCenterX = rect.left + rect.width / 2;
      const sectionCenterY = rect.top + rect.height / 2;

      const deltaX = (sectionCenterX - centerX) / centerX; // -1 to 1
      const deltaY = (sectionCenterY - centerY) / centerY; // -1 to 1

      const rotateX = deltaY * 5; // max 5deg tilt
      const rotateY = deltaX * 5;

      section.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });
  });


