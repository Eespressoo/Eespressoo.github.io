// script.js

// Este código se ejecuta una vez que todo el contenido HTML y sus recursos (CSS, imágenes) han sido cargados.
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡La página de Radio Taxi ha cargado completamente!');

    // Ejemplo de funcionalidad adicional:
    // Puedes agregar aquí cualquier otro script que quieras para tu página.
    // Por ejemplo, un botón que al hacer clic muestre un mensaje,
    // o un efecto de desplazamiento suave (smooth scrolling) a las secciones.

    // Ejemplo: Mensaje para el usuario (aparecerá en la consola del navegador)
    console.log('¡Gracias por visitar Radio Taxi en Limache!');

    // Si quieres interactuar con elementos HTML, puedes hacerlo aquí.
    // Por ejemplo, cambiar el texto de un elemento:
    // const tituloPrincipal = document.querySelector('header h1');
    // if (tituloPrincipal) {
    //     tituloPrincipal.textContent = 'Radio Taxi - Tu Servicio de Confianza';
    // }
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('¡La página de Radio Taxi ha cargado completamente!');
    console.log('¡Gracias por visitar Radio Taxi en Limache!');

    // 1. Smooth scroll para enlaces internos (por ejemplo, menú con anclas)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Notificación discreta al copiar número o correo (mejor UX)
    document.querySelectorAll('.dato a').forEach(link => {
        link.addEventListener('click', () => {
            const text = link.textContent.trim();
            navigator.clipboard.writeText(text).then(() => {
                mostrarAvisoTemporal(`"${text}" copiado al portapapeles`);
            }).catch(err => {
                console.error('Error al copiar al portapapeles:', err);
            });
        });
    });

    // Función para mostrar un aviso discreto en pantalla
    function mostrarAvisoTemporal(mensaje) {
        const aviso = document.createElement('div');
        aviso.textContent = mensaje;
        aviso.style.position = 'fixed';
        aviso.style.bottom = '20px';
        aviso.style.right = '20px';
        aviso.style.backgroundColor = '#198754'; // verde bootstrap
        aviso.style.color = 'white';
        aviso.style.padding = '10px 15px';
        aviso.style.borderRadius = '8px';
        aviso.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
        aviso.style.zIndex = '1000';
        aviso.style.opacity = '0';
        aviso.style.transition = 'opacity 0.3s ease';

        document.body.appendChild(aviso);
        requestAnimationFrame(() => {
            aviso.style.opacity = '1';
        });

        setTimeout(() => {
            aviso.style.opacity = '0';
            setTimeout(() => aviso.remove(), 300);
        }, 2500);
    }
});

    // Ajustar dinámicamente el padding-top del body según la altura real del navbar
    const navbar = document.querySelector('.navbar');
    const ajustarPaddingSuperior = () => {
        if (navbar) {
            const alturaNavbar = navbar.offsetHeight;
            document.body.style.paddingTop = `${alturaNavbar}px`;
        }
    };

    // Ajustar al cargar y al cambiar el tamaño de la ventana
    ajustarPaddingSuperior();
    window.addEventListener('resize', ajustarPaddingSuperior);

    document.addEventListener('DOMContentLoaded', () => {
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});
