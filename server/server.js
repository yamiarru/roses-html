// FAKE SERVER ROSES PARA PRUEBAS LOCALES
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// DATOS ENVIADOS
app.use(express.urlencoded({ extended: true }));

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

// RUTA PRINCIPAL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// RUTA ENVIO DEL FORM
app.post('/submit-form', (req, res) => {
  console.log('Formulario recibido:', req.body);

  // MENSAJE
  res.send('<h4>¡Mensaje enviado!</h4>');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
