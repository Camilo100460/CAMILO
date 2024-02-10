const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sInfi = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje configurado correctamente.*');
  } else {
    const sInfi = global.db.data.chats[m.chat].sInfi; // Obtiene el texto personalizado de la base de datos
    if (sInfi) {
      m.reply(sInfi); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje.*');
    }
  }
};

handler.help = ['.Mensaje <texto>', '.Mensaje'];
handler.tags = ['group'];
handler.command = ['Mensaje'];
handler.admin = true;

export default handler;
