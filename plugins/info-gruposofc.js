const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝗛𝗢𝗟𝗔 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 👋🏻, 𝗧𝗘 𝗜𝗡𝗩𝗜𝗧𝗢 𝗔 𝗨𝗡𝗜𝗥𝗧𝗘 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 𝗗𝗘 𝗠𝗔𝗬-𝗕𝗢𝗧*

*➤ 🤖 𝗚𝗿𝘂𝗽𝗼 𝗼𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲𝗹 𝗕𝗼𝘁:*

*1.-* https://chat.whatsapp.com/KXkX5ZzZp3mFWYt5comZHr`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Akanksh`},
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
        'title': '𝗘𝗹 𝗺𝗲𝗷𝗼𝗿 𝗯𝗼𝘁 𝗱𝗲 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/watch?v=-yc54n9Tv5A'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
