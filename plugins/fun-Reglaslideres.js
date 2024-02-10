const fs = require('fs');

const handler = async (m, { conn }) => {
  try {
    const pdfPath = 'C:/may/CAMILO/REGLAS_JUEGO.pdf'; // Ruta al archivo PDF

    if (!fs.existsSync(pdfPath)) {
      conn.reply(m.chat, 'Lo siento, el archivo PDF no se encontró en la ruta especificada.', m);
      return;
    }

    // Leer el archivo como un búfer
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Enviar el archivo como documento adjunto sin especificar el nombre del archivo
    await conn.sendFile(m.chat, pdfBuffer, '', { quoted: m });
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};

handler.command = /^(reglas|reglasss)$/i;
export default handler;
