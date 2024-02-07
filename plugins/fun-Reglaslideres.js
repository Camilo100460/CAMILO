const axios = require('axios');
const fs = require('fs');

const handler = async (m, { conn }) => {
  try {
    // URL del archivo PDF en el repositorio
    const pdfUrl = 'https://tu-repositorio.com/ruta/a/tu/archivo.pdf';
    
    // Descargar el archivo PDF
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    
    // Guardar el archivo PDF temporalmente
    const pdfPath = './temp.pdf';
    fs.writeFileSync(pdfPath, Buffer.from(response.data, 'binary'));
    
    // Enviar el archivo PDF como documento adjunto
    conn.sendFile(m.chat, pdfPath, 'reglas.pdf', 'Aquí están las reglas del grupo.');
    
    // Eliminar el archivo PDF temporal después de enviarlo
    fs.unlinkSync(pdfPath);
  } catch (error) {
    console.error('Error al enviar el archivo PDF:', error);
    m.reply('Lo siento, no pude enviar las reglas en este momento. Por favor, inténtalo de nuevo más tarde.');
  }
};

// Comando para obtener las reglas
handler.command = ['reglas'];

// Exportar el manejador
module.exports = handler;
