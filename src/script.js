document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('.desktop-nav');
            const icon = menuToggle.querySelector('i');
            const navLinks = nav.querySelectorAll('a');

            // Abrir/Cerrar menú al tocar la hamburguesa
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                
                // Cambiar el icono de hamburguesa (bars) a X (times)
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            // Cerrar el menú automáticamente al tocar un enlace
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
        });