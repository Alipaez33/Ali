<?php
// Obtener los valores enviados desde el formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];

// Configurar el destinatario y otros detalles del correo
$destinatario = "alinsonpaez@gmail.com";
$asunto = "Nuevo formulario de contacto";
$mensaje = "Has recibido un nuevo formulario de contacto con los siguientes datos:\n\n";

// Obtener los valores enviados desde el formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];
$mensaje = $_POST['mensaje'];

// Resto del código para enviar el correo electrónico
// ...




// Enviar el correo utilizando la función mail()
mail($destinatario, $asunto, $mensaje);

// Devolver una respuesta al cliente
http_response_code(200); // Respuesta exitosa
?>
