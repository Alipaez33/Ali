document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje').value;

  // Crear un objeto con los datos a enviar
  const datos = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    fecha: fecha,
    mensaje: mensaje
  };

  // Enviar los datos al script PHP utilizando fetch
  fetch('enviar_email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
    .then(function(response) {
      if (response.ok) {
        // Si la respuesta del servidor es exitosa, mostrar mensaje de éxito o redirigir al usuario
        alert('El formulario se envió correctamente.');
      } else {
        // Si la respuesta del servidor no es exitosa, mostrar mensaje de error
        alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      }
    })
    .catch(function(error) {
      // Si hay un error en el envío, mostrar mensaje de error
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      console.error(error);
    });
});
