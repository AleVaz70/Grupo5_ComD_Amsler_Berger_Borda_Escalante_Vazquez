/**
 * 1. FUNCIÓN PARA DESPLEGABLES (ACORDEÓN)
 * Maneja la visibilidad de Películas y Discos y la rotación de la flecha.
 */
function toggleSection(idContent, idArrow) {
    const content = document.getElementById(idContent);
    const arrow = document.getElementById(idArrow);

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

/**
 * 2. LÓGICA DE INTERACTIVIDAD AL CARGAR EL DOCUMENTO
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- EFECTO SOBRESALIR (ÍTEM COMPLETO) ---
    // Selección de todos los contenedores que tienen clase .item
    const itemsFavoritos = document.querySelectorAll('.item');

    itemsFavoritos.forEach(item => {
        item.addEventListener('click', function(e) {
            // Detener la propagación para que el clic no cierre el desplegable
            e.stopPropagation();

            // Si ya está resaltado, lo normaliza
            if (this.classList.contains('sobresalir')) {
                this.classList.remove('sobresalir');
            } else {
                // Primero limpiar cualquier otro ítem que esté resaltado
                itemsFavoritos.forEach(i => i.classList.remove('sobresalir'));
                
                // Aplicamos el efecto al bloque actual (Foto + Texto)
                this.classList.add('sobresalir');
            }
        });
    });

    // --- CIERRE AL CLICKEAR FUERA ---
    // Si el usuario hace clic en el fondo de la página, todo vuelve a su tamaño normal
    document.addEventListener('click', () => {
        itemsFavoritos.forEach(i => i.classList.remove('sobresalir'));
    });

    // --- MANEJO DEL FORMULARIO DE CONTACTO ---
    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue
            
            // Simulación de envío
            alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
            this.reset(); // Limpia los campos
        });
    }
});
// --- LÓGICA DEL MENÚ HAMBURGUESA ---
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}