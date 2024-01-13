const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `_*TUTORIAL DE INSTACION*_
  
Con gusto te enseñamos a instalar nuestro bot. En nuestro grupo de ayuda, puedes ponerte en contacto con uno de nuestros administradores.

🖼️•  _*GRUPO DE AYUDA:*_  https://chat.whatsapp.com/KXkX5ZzZp3mFWYt5comZHr`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Akanksh`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝙈𝙖𝙮-𝘽𝙤𝙩 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙈𝙖𝙮-𝘽𝙤𝙩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/watch?v=JVpTp8IHdEg'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
