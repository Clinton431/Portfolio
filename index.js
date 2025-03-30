// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });

    // Close mobile navigation if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Change header background on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.9)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Animate feature cards on scroll
const featureCards = document.querySelectorAll(".feature-card");

function checkScroll() {
  featureCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.8;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initialize feature cards
featureCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

// Check for animations on load and scroll
window.addEventListener("load", checkScroll);
window.addEventListener("scroll", checkScroll);
