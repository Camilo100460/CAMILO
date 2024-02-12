import db from './ruta/a/db'; // Importa la base de datos si es necesaria

const handler = async (m, { conn, text }) => {
  const chatId = m.chat; // Obtiene el ID del chat
  
  if (text) {
    // Sobrescribe la URL proporcionada en la base de datos
    db.data.chats[chatId].sDiscord = text.trim(); // Guarda la URL proporcionada en la base de datos
    m.reply('*[❗] Información actualizada correctamente para Discord.*');
  } else {
    const sDiscord = db.data.chats[chatId].sDiscord; // Obtiene la URL personalizada de la base de datos
    if (sDiscord) {
      conn.sendFile(chatId, sDiscord, 'error.jpg', `Aquí está la imagen personalizada para Discord`, m);
    } else {
      m.reply('*[❗] No se ha configurado ninguna URL personalizada para Discord.*');
    }
  }
};

handler.help = ['reglasx-fly <URL>', 'reglasx-fly'];
handler.tags = ['internet'];
handler.command = /^(reglasx-fly)$/i;
handler.group = true;

export default handler;
