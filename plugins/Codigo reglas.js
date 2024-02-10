const handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sPrueba = text; // Guarda el texto personalizado en la base de datos
    m.reply('*[❗] Mensaje de bienvenida configurado correctamente para Prueba.*');
  } else {
    const sPrueba = global.db.data.chats[m.chat].sPrueba; // Obtiene el texto personalizado de la base de datos
    if (sPrueba) {
      m.reply(sPrueba); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado un mensaje de bienvenida para Prueba.*');
    }
  }
};

handler.help = ['.prueba <texto>', '.prueba'];
handler.tags = ['group'];
handler.command = ['prueba'];
handler.admin = true;

export default handler;
