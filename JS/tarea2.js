document
  .getElementById("formularioSolicitud")
  .addEventListener("submit", enviarSolicitud);

function enviarSolicitud(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;
  const copia = document.getElementById("copia").value;

  // Crear un mensaje de resultado con los valores ingresados
  let resultadoHTML = `
        <h3>Solicitud Enviada</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <p><strong>Desea recibir una copia:</strong> ${
          copia === "si" ? "Sí" : "No"
        }</p>
    `;

  // Agregar mensaje adicional si el usuario desea recibir una copia
  if (copia === "si") {
    resultadoHTML += `<p>Se enviará una copia de la solicitud a su correo electrónico.</p>`;
  }

  // Mostrar el resultado en el div con el ID resultado
  document.getElementById("resultado").innerHTML = resultadoHTML;

  // Limpiar el formulario
  document.getElementById("formularioSolicitud").reset();
}
