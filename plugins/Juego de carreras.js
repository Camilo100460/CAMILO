const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const desc = `_*DESCARGAS - TIKTOK*_  🎧\n\n*[ ℹ️ ] Tu video está en proceso de envío. Por favor, ten paciencia.*`;

  try {
    const aa = { quoted: m, userJid: conn.user.jid };
    const prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: desc, contextInfo: { externalAdReply: { title: '𝙈𝙖𝙮-𝘽𝙤𝙩', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] } } }, aa);
    await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] });
  } catch (ee1) {
    // Puedes manejar el error de la manera que desees
    console.log("Ocurrió un error al enviar el mensaje de espera:", ee1);
  }
};

handler.command = /^prueba$/i;
export default handler;
