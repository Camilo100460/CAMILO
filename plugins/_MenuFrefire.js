const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen2;
    const str = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮
    
📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ _*< LISTA DE COMANDOS />*_
│
├ • 🏹 _${usedPrefix}Reglaslideres_ 
├ • 📝 _${usedPrefix}reglasinfi_ *< Text >* 
├ • 🧮 _${usedPrefix}reglascompe_ *< Text >* 
├ • 🏔️ _${usedPrefix}discord_ *< Text >*
├ • 🌊 _${usedPrefix}insta_ *< Text >* 
├ • 🐿️ _${usedPrefix}bloquescrim_ *< Text >* 
├ • 🧸 _${usedPrefix}listavv2_ *< HORA >*
├ • 🍄 _${usedPrefix}lista4vs4_ *< HORA >*
├ • 🍂 _${usedPrefix}lista6vs6_ *< HORA >*
├ • 📺 _${usedPrefix}lista8vs8_ *< H/C/R >*
├ • 🍪 _${usedPrefix}lista12vs2_ *< H/C/R >*
├ • 📖 _${usedPrefix}lista12vs12_ *< H/C/R >*
├ • ✒️ _${usedPrefix}lista16vs16_ *< H/C/R >*
├ • 📚 _${usedPrefix}listacuadri_ *< H/C/R >*
│
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
handler.command = /^(MenuFreefire|freefire|Menufreefire)$/i;
export default handler;
