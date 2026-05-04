// =============================================
//  JavaScript específico para bitacora.html
//  Funcionalidades interactivas de la bitácora
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Auto-animación de estadísticas al cargar la página
    setTimeout(() => {
        document.querySelectorAll('.stat-card').forEach((card, index) => {
            setTimeout(() => animateStat(card), index * 200);
        });
    }, 1000);
});

/**
 * Función para expandir/colapsar tarjetas de decisiones
 * @param {HTMLElement} card - Elemento de la tarjeta a expandir
 */
function toggleCard(card) {
    card.classList.toggle('expanded');
}

/**
 * Animación de números en las estadísticas del proyecto
 * @param {HTMLElement} statCard - Elemento de la tarjeta de estadística
 */
function animateStat(statCard) {
    const numberEl = statCard.querySelector('.stat-number');
    const target = parseInt(numberEl.dataset.target);
    const duration = 1000; // 1 segundo de duración
    const step = target / (duration / 16); // ~60fps
    let current = 0;

    const animate = () => {
        current += step;
        if (current >= target) {
            numberEl.textContent = target;
        } else {
            numberEl.textContent = Math.floor(current);
            requestAnimationFrame(animate);
        }
    };

    // Reiniciar a 0 y comenzar animación
    numberEl.textContent = '0';
    animate();
}



/**
 * Función para scroll suave a secciones
 * Mejora la navegación interna
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    //initTimelineAnimation();
    //initHoverEffects();
    initSmoothScroll();
    
 });