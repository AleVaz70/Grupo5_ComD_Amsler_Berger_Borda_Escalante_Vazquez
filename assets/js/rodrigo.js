// 1. Lógica del Menú Hamburguesa
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Función para abrir/cerrar el menú
if (navToggle && navMenu) {
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
}

// 2. SOLUCIÓN: Cerrar el menú al hacer clic en cualquier opción
const navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Al hacer clic en un enlace, eliminamos la clase 'open' del menú
        navMenu.classList.remove('open');
    });
});

// 3. Interactividad obligatoria para la tarjeta individual
const btnInfo = document.getElementById('btn-interactivo');
const infoExtra = document.getElementById('info-extra');

if(btnInfo) {
    btnInfo.addEventListener('click', () => {
        if (infoExtra.style.display === "none") {
            infoExtra.style.display = "block";
            btnInfo.textContent = "Cerrar info";
        } else {
            infoExtra.style.display = "none";
            btnInfo.textContent = "Ver más info";
        }
    });
}