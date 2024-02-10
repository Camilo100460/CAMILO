const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sInfi = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje de bienvenida configurado correctamente para Infi.*');
  } else {
    const sInfi = global.db.data.chats[m.chat].sInfi; // Obtiene el texto personalizado de la base de datos
    if (sInfi) {
      m.reply(sInfi); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje de bienvenida para Infi.*');
    }
  }
};

handler.help = ['.infi <texto>', '.infi'];
handler.tags = ['group'];
handler.command = ['infi'];
handler.admin = true;

export default handler;
