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
    const message = `${text}\n\n*_¡Te deseo mucha suerte en tu servidor!_* 🍀`; // Agrega el mensaje de buena suerte al nuevo texto
    global.db.data.chats[m.chat].sDiscord = message; // Sobrescribe el texto personalizado en la base de datos
    m.reply('*[❗] El mensaje se ha configurado correctamente. Por favor, espera un minuto antes de volver a usar este comando.*');
  } else {
    const sDiscord = global.db.data.chats[m.chat].sDiscord; // Obtiene el texto personalizado de la base de datos
    if (sDiscord) {
      m.reply(sDiscord); // Envía el mensaje personalizado si está configurado
    } else {
      m.reply('*[❗] No se ha configurado el mensaje para Discord.*');
    }
  }
};

handler.help = ['.discord <texto>', '.discord'];
handler.tags = ['group'];
handler.command = ['discord'];
handler.admin = true;

export default handler;
