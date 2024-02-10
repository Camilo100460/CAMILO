const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sReglasinfi = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje de configurado correctamente.*');
  } else {
    const sInfi = global.db.data.chats[m.chat].sReglasinfi; // Obtiene el texto personalizado de la base de datos
    if (sInfi) {
      m.reply(sInfi); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje.*');
    }
  }
};

handler.help = ['.Reglasinfi <texto>', '.Reglasinfi'];
handler.tags = ['group'];
handler.command = ['infi'];
handler.admin = true;

export default handler;
