import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import fs from 'fs';

const handler = async (m, { conn, usedPrefix, command }) => {
  const name = await conn.getName(m.sender);
  const donar =`
_*< 🤖 SOBRE EL BOT 📚 />*_

📜 _${usedPrefix}terminosycondiciones_
👥 _${usedPrefix}grupos_
📊 _${usedPrefix}estado_
📝 _${usedPrefix}infobot_
🚀 _${usedPrefix}speedtest_
💸 _${usedPrefix}donar_
👑 _${usedPrefix}owner_
💻 _${usedPrefix}script_
📝 _${usedPrefix}reporte *<txt>*_
🚪 _${usedPrefix}join *<wagp_url>*_
🔄 _${usedPrefix}fixmsgespera_
🤖 _bot_ (sin prefijo)
`.trim();
  const aa = { quoted: m, userJid: conn.user.jid };
  const res = generateWAMessageFromContent(m.chat, { liveLocationMessage: { degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: { mentionedJid: conn.parseMention() } } }, aa);
  conn.relayMessage(m.chat, res.message, {});
};

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /\freefire|\Free fire|\free fire$/i;

export default handler;
