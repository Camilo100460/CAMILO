const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝑬𝑳 𝑵𝑼𝑴𝑬𝑹𝑶 𝑫𝑬 𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 𝑬𝑺 wa.me/573178454976*`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Akanksh/`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝙎𝙊𝙇𝙊 𝙈𝘼𝙔-𝘽𝙊𝙏 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/Akanksh',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '*SOLO MAY - BOT*⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/watch?v=-yc54n9Tv5A'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
