document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Actualizar el año dinámicamente en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Lógica del menú hamburguesa para dispositivos móviles
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú móvil automáticamente al hacer clic en cualquier enlace
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Efecto de sombra dinámica para el header al hacer scroll
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Aumenta la sombra cuando se empieza a hacer scroll
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            } else {
                // Sombra sutil cuando está en la parte superior
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });
    }
});