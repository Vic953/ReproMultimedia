// Función para establecer una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Función para cerrar el modal de cookies
function aceptarCookie() {
    document.getElementById('cookieContent').style.display = 'none';
    setCookie('accepted', 'true', 30); // Establece la cookie 'accepted' por 30 días
}
function rechazarCookie() {
    document.getElementById('cookieContent').style.display = 'none';
   
}

// Mostrar el modal de cookies al cargar la página si la cookie 'accepted' no está establecida
window.onload = function() {
    let accepted = getCookie('accepted');
    if (!accepted) {
        document.getElementById('cookieContent').style.display = 'block';
    }
};

function guardarClicsVideo() {
    // Intenta obtener el valor actual de la cookie de clics en el video
    let clicsVideo = getCookie('clicsVideo');
    // Si la cookie no existe, inicialízala en 0
    if (!clicsVideo) {
        clicsVideo = 0;
    } else {
        // Si la cookie existe, conviértela a entero
        clicsVideo = parseInt(clicsVideo);
    }
    // Incrementa el contador de clics
    clicsVideo++;
    // Guarda el nuevo valor del contador en una cookie
    setCookie('clicsVideo', clicsVideo, 30); // La cookie expira en 30 días
}

