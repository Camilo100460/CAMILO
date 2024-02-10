const fs = require('fs');
const path = require('path'); // Asegúrate de tener este módulo importado

const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pdfPath = 'C:/may/CAMILO/REGLAS_JUEGO.pdf';
    const originalFilename = path.basename(pdfPath); // Esto obtendrá 'REGLAS_JUEGO.pdf' de la ruta

    if (!fs.existsSync(pdfPath)) {
      conn.reply(m.chat, 'Lo siento, el archivo PDF no se encontró en la ruta especificada.', m);
      return;
    }
    
    const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
    
    if (m.isGroup) {
      conn.sendMessage(m.chat, {document: fs.readFileSync(pdfPath), mimetype: 'application/pdf', filename: originalFilename}, {quoted: fkontak2});
    } else {
      conn.sendMessage(m.chat, {document: fs.readFileSync(pdfPath), mimetype: 'application/pdf', filename: originalFilename}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};

handler.command = /^(reglas|reglasss)$/i;
export default handler;
