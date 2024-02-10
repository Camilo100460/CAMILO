const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sReglasinfi = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje de bienvenida configurado correctamente para Reglasinfi.*');
  } else {
    const sReglasinfi = global.db.data.chats[m.chat].sReglasinfi; // Obtiene el texto personalizado de la base de datos
    if (sReglasinfi) {
      m.reply(sReglasinfi); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje de bienvenida para Reglasinfi.*');
    }
  }
};

handler.help = ['.Reglasinfi <texto>', '.Reglasinfi'];
handler.tags = ['group'];
handler.command = ['Reglasinfi'];
handler.admin = true;

export default handler;
