const fs = require('fs');

// Agregar un nuevo manejador para el comando .reglas
const rulesHandler = async (m, {conn}) => {
  // Leer el archivo PDF
  const pdfBuffer = fs.readFileSync('https://github.com/Camilo100460/CAMILO/blob/master/REGLAS_JUEGO.pdf');

  // Responder con el archivo PDF
  conn.sendFile(m.chat, pdfBuffer, 'REGLAS_LIDERES.pdf', '', m);
};

rulesHandler.tags = ['rules'];
rulesHandler.command = ['reglas'];
export default rulesHandler;
