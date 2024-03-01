const handler = async (m, { conn, usedPrefix }) => {
  try {
    const pp = imagen2;
    const equipos = [
      "Real Madrid",
      "Barcelona",
      "Manchester United",
      "Liverpool",
      "Juventus",
      "Bayern Munich",
      "Paris Saint-Germain",
      "Chelsea",
      "Manchester City",
      "Arsenal"
    ];

    const equipoAleatorio = () => equipos[Math.floor(Math.random() * equipos.length)];

    const asistencias = Math.floor(Math.random() * 100) + 1; // Valor entre 1 y 100
    const amarillas = Math.floor(Math.random() * 20) + 1; // Valor entre 1 y 20
    const rojas = Math.floor(Math.random() * 5) + 1; // Valor entre 1 y 5
    const champions = Math.floor(Math.random() * 10) + 1; // Valor entre 1 y 10
    const mundiales = Math.floor(Math.random() * 5) + 1; // Valor entre 1 y 5
    const balonOros = Math.floor(Math.random() * 7) + 1; // Valor entre 1 y 7

    const str = `
📊 _*< TU CARRERA />*_

╭━━━━━━ ◜◌◝ ━━━━━━╮
│
├ • 🏹 A: ${equipoAleatorio()}
├ • 📝 18: ${equipoAleatorio()}
├ • 🧮 21: ${equipoAleatorio()}
├ • 🏔️ 24: ${equipoAleatorio()}
├ • 🌊 27: ${equipoAleatorio()}
├ • 🐿️ 30: ${equipoAleatorio()}
├ • 🧸 33: ${equipoAleatorio()}
├ • 🍄 R: ${equipoAleatorio()}
├ • 🍂 M: ${equipoAleatorio()}
├ • 📺 ASISTENCIAS: ${asistencias}
├ • 🍪 GOALS: ${equipoAleatorio()}
├ • 📖 YELLOW CARDS: ${amarillas}
├ • ✒️ RED CARDS: ${rojas}
├ • 📚 LIGAS: ${equipoAleatorio()}
├ • 🏹 CHAMPIONS: ${champions}
├ • 📝 MUNDIALES: ${mundiales}
├ • 🧮 BALLON D'ORS: ${balonOros}
│
╰━━━━━━━━━━━━━━━━╯`.trim();

    if (m.isGroup) {
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    } else {
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Carrera|Micarrera|micarrera)$/i;
export default handler;
