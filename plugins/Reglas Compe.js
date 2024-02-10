const cooldowns = {};

const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const userId = m.sender; // Obtiene el ID del remitente del mensaje
  
  // Verifica si el usuario está en el registro de enfriamiento y si ha pasado el tiempo de enfriamiento
  if (cooldowns[userId] && cooldowns[userId] > Date.now()) {
    const remainingTime = (cooldowns[userId] - Date.now()) / 1000;
    m.reply(`Debes esperar ${remainingTime.toFixed(1)} segundos antes de volver a usar este comando.`);
    return;
  }
  
  // Registra el momento actual más el tiempo de enfriamiento (por ejemplo, 1 minuto)
  cooldowns[userId] = Date.now() + 60000; // 1 minuto de enfriamiento
  
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
