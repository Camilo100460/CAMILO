import { lenguajeGB } from './ruta/a/lenguajeGB'; // Importa la variable lenguajeGB si es necesaria
import db from './ruta/a/db'; // Importa la base de datos si es necesaria

const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const userId = m.sender; // Obtiene el ID del remitente del mensaje
  let sDiscord = db.data.chats[m.chat].sDiscord; // Obtiene el texto personalizado de la base de datos
  if (sDiscord) {
    sDiscord = sDiscord.replace('$url', 'https://tu-url-personalizada.com'); // Reemplaza $url con la URL personalizada
    conn.reply(m.chat, sDiscord, m); // Envía el mensaje personalizado con la URL actualizada
  } else {
    conn.reply(m.chat, '*[❗] No se ha configurado el mensaje para Discord.*', m);
  }
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`;
  let url = "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; // Cambia este enlace por el que desees usar
  conn.sendFile(m.chat, url, 'error.jpg', `May te desea mucha suerte`, m);
  // conn.sendButton(m.chat, `May te desea mucha suerte.`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m);
}

handler.help = ['reglasx-fly'];
handler.tags = ['internet'];
handler.command = /^(reglasx-fly)$/;
handler.exp = 50;
handler.level = 0;

export default handler;
