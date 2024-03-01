const handler = async (m, { conn, usedPrefix }) => {
  try {
    const pp = imagen2;
    const equipos = {
      debut: ["Once Caldas (Colombia)", "Boca Juniors (Argentina)", "Atlético Nacional (Colombia)", "América de Cali (Colombia)", "Millonarios (Colombia)", "Independiente Santa Fe (Colombia)", "Deportivo Cali (Colombia)", "Junior (Colombia)", "River Plate (Argentina)", "Independiente (Argentina)", "Racing Club (Argentina)", "San Lorenzo (Argentina)", "Huracán (Argentina)", "Vélez Sarsfield (Argentina)", "Alianza Lima (Perú)", "Universitario de Deportes (Perú)", "Sporting Cristal (Perú)", "Melgar (Perú)", "Alianza Universidad (Perú)", "Cienciano (Perú)", "Barcelona SC (Ecuador)", "Emelec (Ecuador)", "Liga de Quito (Ecuador)", "Independiente del Valle (Ecuador)", "Universidad Católica (Ecuador)", "Delfín SC (Ecuador)"],
      joven: ["Once Caldas (Colombia)", "Boca Juniors (Argentina)", "Atlético Nacional (Colombia)", "América de Cali (Colombia)", "Millonarios (Colombia)", "Independiente Santa Fe (Colombia)", "Deportivo Cali (Colombia)", "Junior (Colombia)", "River Plate (Argentina)", "Independiente (Argentina)", "Racing Club (Argentina)", "San Lorenzo (Argentina)", "Huracán (Argentina)", "Vélez Sarsfield (Argentina)", "Alianza Lima (Perú)", "Universitario de Deportes (Perú)", "Sporting Cristal (Perú)", "Melgar (Perú)", "Alianza Universidad (Perú)", "Cienciano (Perú)", "Barcelona SC (Ecuador)", "Emelec (Ecuador)", "Liga de Quito (Ecuador)", "Independiente del Valle (Ecuador)", "Universidad Católica (Ecuador)", "Delfín SC (Ecuador)"],
      maduro: ["FC Porto (Portugal)", "Ajax (Holanda)", "SL Benfica (Portugal)", "Sporting CP (Portugal)", "SC Braga (Portugal)", "Vitória SC (Portugal)", "Belenenses SAD (Portugal)", "Marítimo (Portugal)", "Portimonense (Portugal)", "Boavista (Portugal)", "Famalicão (Portugal)", "Gil Vicente (Portugal)", "Paços de Ferreira (Portugal)", "Ajax Amsterdam (Holanda)", "PSV Eindhoven (Holanda)", "Feyenoord Rotterdam (Holanda)", "AZ Alkmaar (Holanda)", "FC Utrecht (Holanda)", "Vitesse Arnhem (Holanda)", "FC Groningen (Holanda)", "SC Heerenveen (Holanda)", "Heracles Almelo (Holanda)", "FC Twente (Holanda)", "Willem II (Holanda)", "Fortuna Sittard (Holanda)"],
      pico: ["Sevilla FC (España)", "Villarreal CF (España)"],
      veterano: ["Bayern Munich (Germany)", "Paris Saint-Germain (France)", "Juventus (Italia)"],
      retiro: ["Club América (México)", "River Plate (Argentina)"]
    };

    const equipoAleatorio = (etapa) => equipos[etapa][Math.floor(Math.random() * equipos[etapa].length)];

    const asistencias = Math.floor(Math.random() * 100) + 1; // Valor entre 1 y 100
    const amarillas = Math.floor(Math.random() * 20) + 1; // Valor entre 1 y 20
    const rojas = Math.floor(Math.random() * 5) + 1; // Valor entre 1 y 5
    const champions = Math.floor(Math.random() * 10) + 1; // Valor entre 1 y 10
    const mundiales = Math.floor(Math.random() * 5) + 1; // Valor entre 1 y 5
    const goles = Math.floor(Math.random() * 500) + 70; // Valor entre 1 y 500
    const balonOros = Math.floor(Math.random() * 3) + 1; // Valor entre 1 y 7

    const str = `
📊 _*< TU CARRERA />*_

╭━━━━━━ ◜◌◝ ━━━━━━╮
│
├ • 🏹 A: ${equipoAleatorio("debut")}
├ • 📝 18: ${equipoAleatorio("joven")}
├ • 🧮 21: ${equipoAleatorio("maduro")}
├ • 🏔️ 24: ${equipoAleatorio("pico")}
├ • 🌊 27: ${equipoAleatorio("veterano")}
├ • 🐿️ 30: ${equipoAleatorio("retiro")}
├ • 🧸 33: Retiro
├ • 🍄 R: ${equipoAleatorio("retiro")}
├ • 🍂 M: ${equipoAleatorio("retiro")}
├ • 📺 ASISTENCIAS: ${asistencias}
├ • 🍪 GOALS: ${goles}
├ • 📖 YELLOW CARDS: ${amarillas}
├ • ✒️ RED CARDS: ${rojas}
├ • 📚 LIGAS: ${equipoAleatorio("retiro")}
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
