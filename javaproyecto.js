// script.js

// Función para mostrar u ocultar secciones
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

//boton para regresar
function goBack() {
    window.history.back();
}


// Agregar evento al botón de recursos
document.addEventListener("DOMContentLoaded", function() {
    const resourceLinks = document.querySelectorAll("ul li a");
    resourceLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1); // Eliminar el "#"
            toggleSection(sectionId);
        });
    });
});

// Función para mostrar un mensaje de agradecimiento al enviar el formulario
function showThankYouMessage() {
    alert("¡Gracias por contactarnos! Responderemos pronto.");
}

// Evento para el formulario (debes añadir un formulario en tu HTML)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario
            showThankYouMessage();
            form.reset(); // Limpiar el formulario
        });
    }
});
