const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const userId = m.sender; // Obtiene el ID del remitente del mensaje
  const sDiscord = global.db.data.chats[m.chat].sDiscord; // Obtiene el texto personalizado de la base de datos
  if (sDiscord) {
    m.reply(sDiscord); // Envía el mensaje personalizado si está configurado
  } else {
    m.reply('*[❗] No se ha configurado el mensaje para Discord.*');
  }
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
  let url = "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; // Cambia este enlace por el que desees usar
  conn.sendFile(m.chat, url, 'error.jpg', `May te desea mucha suerte`, m)
  //conn.sendButton(m.chat, `May te desea mucha suerte.`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}

handler.help = ['reglas-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/
handler.exp = 50
handler.level = 0

export default handler
