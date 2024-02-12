const fs = require('fs');

let handler = async (m, { conn }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    let imagePath = "ruta/a/la/imagen.jpg"; // Cambia esto por la ruta de tu imagen personalizada
    let imageBuffer = fs.readFileSync(imagePath);
    conn.sendFile(m.chat, imageBuffer, 'imagen_personalizada.jpg', 'May te desea mucha suerte', m)
}

handler.help = ['reglas-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/
handler.exp = 50
handler.level = 0

export default handler;
