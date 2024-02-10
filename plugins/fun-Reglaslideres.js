const path = require('path');

const handler = async (m, { conn }) => {
  try {
    const pdfPath = 'C:/may/CAMILO/REGLAS_JUEGO.pdf'; // Ruta al archivo PDF

    if (!fs.existsSync(pdfPath)) {
      conn.reply(m.chat, 'Lo siento, el archivo PDF no se encontró en la ruta especificada.', m);
      return;
    }

    const pdfBuffer = fs.readFileSync(pdfPath); // Lee el contenido del archivo PDF
    const pdfName = path.basename(pdfPath); // Obtén el nombre del archivo PDF

    const fkontak2 = {
      'key': {
        'fromMe': false,
        'participant': '0@s.whatsapp.net',
        'remoteJid': 'status@broadcast',
        'id': 'Halo'
      },
      'message': {
        'contactMessage': {
          'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
      }
    };

    const messageOptions = {
      quoted: fkontak2,
      mimetype: 'application/pdf',
      filename: pdfName, // Usa el nombre del archivo como nombre de archivo
      caption: pdfName // Agrega el nombre del archivo como texto del mensaje
    };

    conn.sendMessage(m.chat, { document: pdfBuffer }, messageOptions);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};

handler.command = /^(reglas|reglasss)$/i;
export default handler;
