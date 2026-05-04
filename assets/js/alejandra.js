// 1. Lógica del Menú Hamburguesa 
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// 2. Cerrar el menú al hacer clic en opciones + Scroll a "Sobre Mí"
const navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        
        // Si el link es Sobre Mí, activamos tu función especial
        if (link.getAttribute('href') === '#sobre-mi') {
            abrirPerfil();
        }
    });
});

// 3. Interactividad (Mejorada para que la foto acompañe)
const btnInfo = document.getElementById('btn-interactivo');
const infoExtra = document.getElementById('info-extra');
const contenedorFoto = document.querySelector('.sobre-mi-img');
function abrirPerfil() {
    if (infoExtra) {
        infoExtra.style.display = "block";
        btnInfo.textContent = "Cerrar perfil";
        // Agregamos la clase para que la foto baje (la que pusimos en el CSS)
        if (contenedorFoto) contenedorFoto.classList.add('foto-desplazada');
        
        setTimeout(() => {
            document.getElementById('sobre-mi').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'end' 
            });
        }, 100);
    }
}
function cerrarPerfil() {
    if (infoExtra) {
        infoExtra.style.display = "none";
        btnInfo.textContent = "Más sobre mi perfil";
        if (contenedorFoto) contenedorFoto.classList.remove('foto-desplazada');
        
        document.getElementById('sobre-mi').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Lógica del botón de tarjeta
if(btnInfo) {
    btnInfo.addEventListener('click', () => {
        if (infoExtra.style.display === "none" || infoExtra.style.display === "") {
            abrirPerfil();
        } else {
            cerrarPerfil();
        }
    });
}