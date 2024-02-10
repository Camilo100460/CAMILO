const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sReglascompe = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje de bienvenida configurado correctamente para Reglascompe.*');
  } else {
    const sReglascompe = global.db.data.chats[m.chat].sReglascompe; // Obtiene el texto personalizado de la base de datos
    if (sReglascompe) {
      m.reply(sReglascompe); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje de bienvenida para Reglascompe.*');
    }
  }
};

handler.help = ['.reglascompe <texto>', '.reglascompe'];
handler.tags = ['group'];
handler.command = ['reglascompe'];
handler.admin = true;

export default handler;
