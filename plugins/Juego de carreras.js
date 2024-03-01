const handler = async (m, {conn, text}) => {
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: `💐• *${pickRandom(global.refran2)}*`, contextInfo: {externalAdReply: {title: '[ ⚠ ] Advertencia', body: '𝙈𝙖𝙮-𝘽𝙤𝙩', thumbnail: imagen1, sourceUrl: 'https://github.com/Anksawhs'}}}}, aa);
  if (text) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};

handler.tags = ['frases'];
handler.command = ['carrera'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.refran2 = ["Más vale estar solo que mal acompañado.","Adios rogando con el mazo dando"]
