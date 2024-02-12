const handler = async (m, { conn, text, isROwner, isOwner }) => {
  global.db.data.chats[m.chat] = global.db.data.chats[m.chat] || {}; // Inicializa global.db.data.chats[m.chat] si es undefined
  
  if (text) {
    global.db.data.chats[m.chat].sReglasxFly = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje se configurado correctamente para Reglasx-fly.*');
  } else {
    const sReglasxFly = global.db.data.chats[m.chat].sReglasxFly; // Obtiene el texto personalizado de la base de datos
    if (sReglasxFly) {
      m.reply(sReglasxFly); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje para Reglasx-fly.*');
    }
  }
};

handler.help = ['.reglasx-fly <texto>', '.reglasx-fly'];
handler.tags = ['group'];
handler.command = ['reglasx-fly'];
handler.admin = true;

export default handler;
