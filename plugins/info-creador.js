const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `
  ╭────═[ *𝘾𝙍𝙀𝘼𝘿𝙊𝙍* ]═─────⋆
│╭───────────────···
┴│✯ *🗳️ ɴᴏᴍʙʀᴇ* : CAMILO
✩│✯  𝙉𝙧𝙤 : 
✯│✯ wa.me/573178454976
✩│✯  𝙀𝙡 𝙚𝙨 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 :3
┬ ʀᴇᴄᴜᴇʀᴅᴀ ɴᴏ ᴅᴇʙᴇꜱ
│ ᴇꜱᴄʀɪʙɪʀʟᴇ ᴀ ᴍɪ ᴄʀᴇᴀᴅᴏʀ ᴀ
│ ᴍᴇɴᴏꜱ Qᴜᴇ ꜱᴇᴀ ᴅᴇ ᴍᴜᴄʜᴀ
│ ᴜʀɢᴇɴᴄɪᴀ ꜱɪ Qᴜɪᴇʀᴇ ʜᴀʙʟᴀʀ ᴇꜱ
│ ᴄᴏɴ ᴍɪ ᴍᴏᴅᴇʀᴀᴅᴏʀᴀ ᴄᴏɴ ᴇʟ
│ ᴄᴏᴍᴀɴᴅᴏ:
│ ✯ .𝘮𝘰𝘥𝘦𝘳𝘢𝘥𝘰𝘳𝘢 , .𝘮𝘰𝘥
╰───────────═┅═──────
  `.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Akanksh/`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝙎𝙊𝙇𝙊 𝙈𝘼𝙔-𝘽𝙊𝙏 」`,
    'fileLength': 99999999999999,
    'pageCount': 1,
    'contextInfo': {
      'forwardingScore': 2,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/Akanksh',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙈𝘼𝙔-𝘽𝙊𝙏',
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
