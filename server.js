const express = require("express");
const path = require("path");
const sendEmail = require("./src/js/nodemailerTest"); // Asegúrate de que la ruta es correcta
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json()); // Para poder leer datos JSON enviados en la solicitud
app.use(express.static(path.join(__dirname, "src"))); // Servir archivos estáticos
app.use(cors()); // Habilitar CORS si lo necesitas

// Definir la ruta POST para enviar el correo
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body; // Obtener los datos del cuerpo de la solicitud

  if (!to || !subject || !text) {
    return res.status(400).send("Faltan datos necesarios para enviar el correo.");
  }

  try {
    await sendEmail(to, subject, text); // Usar la función sendEmail que ya tienes definida
    res.send("Correo enviado con éxito");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el correo.");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
