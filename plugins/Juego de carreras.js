const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `_*< DESCARGAS - TIKTOK />*_\n\n*[ ℹ️ ] Ingrese un enlace de TikTok.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `_*DESCARGAS - TIKTOK*_  🎧\n\n*[ ℹ️ ] Ingrese un enlace de TikTok.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;

  const desc = `_*DESCARGAS - TIKTOK*_  🎧\n\n*[ ℹ️ ] Tu video está en proceso de envío. Por favor, ten paciencia.*`;

  try {
    const aa = { quoted: m, userJid: conn.user.jid };
    const prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: desc, contextInfo: { externalAdReply: { title: '𝙈𝙖𝙮-𝘽𝙤𝙩', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] } } }, aa);
    await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] });
  } catch (ee1) {
    throw `_*< DESCARGAS - TIKTOK />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
  }
};

handler.command = /^juego$/i;
export default handler;
