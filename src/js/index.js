document.getElementById("emailForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  const email = document.getElementById("email").value;

  // Validar si los campos están vacíos
  if (!email) {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  // Mostrar un mensaje de "esperando" mientras se procesa el envío del correo
  const button = e.target.querySelector("button");
  button.disabled = true; // Deshabilita el botón para evitar múltiples clics
  button.textContent = "Enviando...";

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email, // Enviar el correo del usuario
        subject: "Gracias por usar este formulario",
        text: "Bienvenido a la estafa piramidal.",
      }),
    });

    const result = await response.text();
    alert(result); // Mostrar el mensaje de éxito
  } catch (error) {
    alert("Error al enviar el correo. Intenta nuevamente.");
  } finally {
    button.disabled = false; // Habilitar el botón nuevamente
    button.textContent = "Send Email"; // Restaurar el texto del botón
  }
});
