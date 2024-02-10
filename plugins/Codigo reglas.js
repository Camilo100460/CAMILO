const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const { MessageType } = conn;

  // Verificar si se proporcionó texto y/o una imagen
  if (text && m.quoted && m.quoted.mimetype.includes('image')) {
    const img = await conn.downloadAndSaveMediaMessage(m.quoted);
    global.db.data.chats[m.chat].sReglasimg = { text, img }; // Guarda el texto y la imagen en la base de datos
    m.reply('*[❗] Mensaje de bienvenida con imagen configurado correctamente para Reglasimg.*');
  } else {
    const sReglasimg = global.db.data.chats[m.chat].sReglasimg; // Obtiene el mensaje personalizado de la base de datos
    if (sReglasimg && sReglasimg.text && sReglasimg.img) {
      // Envía el mensaje personalizado con la imagen si está configurado
      conn.sendMessage(m.chat, sReglasimg.text, MessageType.text);
      conn.sendMessage(m.chat, sReglasimg.img, MessageType.image, { caption: 'Imagen de bienvenida' });
    } else if (sReglasimg && sReglasimg.text) {
      // Envía solo el mensaje personalizado si está configurado sin imagen
      m.reply(sReglasimg.text);
    } else {
      // Mensaje de advertencia si no se ha configurado ningún mensaje de bienvenida
      m.reply('*[❗] No se ha configurado un mensaje de bienvenida para Reglasimg.*');
    }
  }
};

handler.help = ['.reglasimg <texto>', '.reglasimg'];
handler.tags = ['group'];
handler.command = ['reglasimg'];
handler.admin = true;

export default handler;
