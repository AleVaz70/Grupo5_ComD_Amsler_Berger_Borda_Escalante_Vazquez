//Menu hamburguesa
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a"); // Seleccionamos todos los enlaces
/*toggle.addEventListener("click", () => nav.classList.toggle("open"));*/


// Abrir/Cerrar al clickear el icono ☰
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // NUEVO: Cerrar el menú automáticamente al elegir una sección
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

//resaltar la sección activa
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});