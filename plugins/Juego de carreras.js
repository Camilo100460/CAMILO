import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) throw `_*< DESCARGAS - TIKTOK />*_\n\n*[ ℹ️ ] Ingrese un enlace de TikTok.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `_*DESCARGAS - TIKTOK*_  🎧\n\n*[ ℹ️ ] Ingrese un enlace de TikTok.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  const texto = `_*DESCARGAS - TIKTOK*_  🎧\n\n*[ ℹ️ ]  Tu video está en proceso de envío. Por favor, ten paciencia.*`;
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: '𝙈𝙖𝙮-𝘽𝚘𝚝', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'}, mentionedJid: [m.sender]}}}, aa);
  await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
}
handler.command = /^(JUEGO|juegos)$/i;
