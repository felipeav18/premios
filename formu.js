document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mensaje = document.getElementById('mensaje');

    mensaje.innerHTML = ''; // Limpiar el mensaje

    // Validación de campos obligatorios
    if (!nombre || !email || !password || !confirmPassword) {
        mensaje.innerHTML = 'Todos los campos son obligatorios';
        mensaje.style.color = 'red';
        return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensaje.innerHTML = 'Por favor, introduce un correo electrónico válido';
        mensaje.style.color = 'red';
        return;
    }

    // Validación de la longitud de la contraseña
    if (password.length < 8) {
        mensaje.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        mensaje.style.color = 'red';
        return;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
        mensaje.innerHTML = 'Las contraseñas no coinciden';
        mensaje.style.color = 'red';
        return;
    }

    // Si todas las validaciones pasan
    mensaje.innerHTML = 'Registro exitoso';
    mensaje.style.color = 'green';
});