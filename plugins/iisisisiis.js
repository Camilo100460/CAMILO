const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen2;
    const str = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮
    
📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ *< MENU-ANIME />*
│
├ • 🌹 _${usedPrefix}lolivid_
├ • 🌙 _${usedPrefix}loli_
├ • ⭐ _${usedPrefix}ppcouple_
├ • 🌈 _${usedPrefix}neko_
├ • 🎭 _${usedPrefix}waifu_
├ • 🎨 _${usedPrefix}akira_
├ • 🎵 _${usedPrefix}akiyama_
├ • 🎀 _${usedPrefix}anna_
├ • 🎁 _${usedPrefix}asuna_
├ • 🎉 _${usedPrefix}ayuzawa_
├ • 🎊 _${usedPrefix}boruto_
├ • 🎈 _${usedPrefix}chiho_
├ • 🎆 _${usedPrefix}chitoge_
├ • 🎇 _${usedPrefix}deidara_
├ • 🧧 _${usedPrefix}erza_
├ • 🏮 _${usedPrefix}elaina_
├ • 💌 _${usedPrefix}eba_
├ • 💎 _${usedPrefix}emilia_
├ • 💍 _${usedPrefix}hestia_
├ • 💖 _${usedPrefix}hinata_
├ • 💗 _${usedPrefix}inori_
├ • 💓 _${usedPrefix}isuzu_
├ • 💞 _${usedPrefix}itachi_
├ • 💕 _${usedPrefix}itori_
├ • 💘 _${usedPrefix}kaga_
├ • 💝 _${usedPrefix}kagura_
├ • 💟 _${usedPrefix}kaori_
├ • 🥀 _${usedPrefix}keneki_
├ • 🌼 _${usedPrefix}kotori_
├ • 🌻 _${usedPrefix}kurumi_
├ • 🌸 _${usedPrefix}madara_
├ • 🌺 _${usedPrefix}mikasa_
├ • 🌷 _${usedPrefix}miku_
├ • 🌱 _${usedPrefix}minato_
├ • 🍀 _${usedPrefix}naruto_
├ • 🍁 _${usedPrefix}nezuko_
├ • 🍂 _${usedPrefix}sagiri_
├ • 🍃 _${usedPrefix}sasuke_
├ • 🌿 _${usedPrefix}sakura_
├ • 🌾 _${usedPrefix}cosplay_
╰━━━━━━━━━━━━━━━━╯`.trim();

    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(cami|camilo)$/i;
export default handler;
