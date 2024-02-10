const handler = async (m, { conn, isROwner, isOwner }) => {
  const { MessageType } = conn;

  // Verificar si se adjuntó una imagen
  if (m.quoted && m.quoted.mimetype.includes('image')) {
    const img = await conn.downloadAndSaveMediaMessage(m.quoted);
    global.db.data.chats[m.chat].sReglasimg = img; // Guarda solo la imagen en la base de datos
    m.reply('*[❗] Imagen de bienvenida configurada correctamente para Reglasimg.*');
  } else {
    const sReglasimg = global.db.data.chats[m.chat].sReglasimg; // Obtiene la imagen personalizada de la base de datos
    if (sReglasimg) {
      // Envía la imagen de bienvenida si está configurada
      conn.sendMessage(m.chat, sReglasimg, MessageType.image, { caption: 'Imagen de bienvenida' });
    } else {
      // Mensaje de advertencia si no se ha configurado ninguna imagen de bienvenida
      m.reply('*[❗] No se ha configurado una imagen de bienvenida para Reglasimg.*');
    }
  }
};

handler.help = ['.reglasimg', '.reglasimg'];
handler.tags = ['group'];
handler.command = ['reglasimg'];
handler.admin = true;

export default handler;
