const handler = async (m, { conn, usedPrefix }) => {
  try {
    const pp = imagen2;
    const equipos = {
      debut: ["Once Caldas", "Boca Juniors", "Atlético Nacional", "América de Cali", "Millonarios", "Independiente Santa Fe", "Deportivo Cali", "Junior", "River Plate", "Independiente", "Racing Club", "San Lorenzo", "Huracán", "Vélez Sarsfield", "Alianza Lima", "Universitario de Deportes", "Sporting Cristal", "Melgar", "Alianza Universidad", "Cienciano", "Barcelona SC", "Emelec", "Liga de Quito", "Independiente del Valle", "Universidad Católica", "Delfín SC"],
      joven: ["Once Caldas", "Boca Juniors", "Atlético Nacional", "América de Cali", "Millonarios", "Independiente Santa Fe", "Deportivo Cali", "Junior", "River Plate", "Independiente", "Racing Club", "San Lorenzo", "Huracán", "Vélez Sarsfield", "Alianza Lima", "Universitario de Deportes", "Sporting Cristal", "Melgar", "Alianza Universidad", "Cienciano", "Barcelona SC", "Emelec", "Liga de Quito", "Independiente del Valle", "Universidad Católica", "Delfín SC"],
      maduro: ["FC Porto", "Ajax", "SL Benfica", "Sporting CP", "SC Braga", "Vitória SC", "Belenenses SAD", "Marítimo", "Portimonense", "Boavista", "Famalicão", "Gil Vicente", "Paços de Ferreira", "Ajax Amsterdam", "PSV Eindhoven", "Feyenoord Rotterdam", "AZ Alkmaar", "FC Utrecht", "Vitesse Arnhem", "FC Groningen", "SC Heerenveen", "Heracles Almelo", "FC Twente", "Willem II", "Fortuna Sittard"],
      pico: ["Bayern Munich", "Paris Saint-Germain", "Juventus", "Real Madrid", "FC Barcelona", "Atlético Madrid", "Sevilla FC", "Manchester United", "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham Hotspur", "Bayern Munich", "Borussia Dortmund", "Inter Milan", "AC Milan", "Ajax Amsterdam", "FC Porto", "SL Benfica", "Sporting CP", "Zenit St. Petersburg"],
      veterano: ["Bayern Munich", "Paris Saint-Germain", "Juventus", "Real Madrid", "FC Barcelona", "Atlético Madrid", "Sevilla FC", "Manchester United", "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham Hotspur", "Bayern Munich", "Borussia Dortmund", "Inter Milan", "AC Milan", "Ajax Amsterdam", "FC Porto", "SL Benfica", "Sporting CP", "Zenit St. Petersburg"],
      retiro: ["Once Caldas", "Boca Juniors", "Atlético Nacional", "América de Cali", "Millonarios", "Independiente Santa Fe", "Deportivo Cali", "Junior", "River Plate", "Independiente", "Racing Club", "San Lorenzo", "Huracán", "Vélez Sarsfield", "Alianza Lima", "Universitario de Deportes", "Sporting Cristal", "Melgar", "Alianza Universidad", "Cienciano", "Barcelona SC", "Emelec", "Liga de Quito", "Independiente del Valle", "Universidad Católica", "Delfín SC"],
    };

    const equipoAleatorio = (etapa) => equipos[etapa][Math.floor(Math.random() * equipos[etapa].length)];

    const asistencias = Math.floor(Math.random() * 100) + 1; // Valor entre 1 y 100
    const champions = Math.floor(Math.random() * 10) + 1; // Valor entre 1 y 10
    const mundiales = Math.floor(Math.random() * 5) + 1; // Valor entre 1 y 5
    const goles = Math.floor(Math.random() * 500) + 70; // Valor entre 1 y 500
    const liga = Math.floor(Math.random() * 15) + 1; // Valor entre 1 y 15
    const balonOros = Math.floor(Math.random() * 3) + 1; // Valor entre 1 y 7
   
    const str = `
📊 _*< TU CARRERA />*_

╭━━━━━━ ◜◌◝ ━━━━━━╮
│
├ • 🏹 *A:* ${equipoAleatorio("debut")}
├ • 📝 *18:* ${equipoAleatorio("joven")}
├ • 🧮 *21:* ${equipoAleatorio("maduro")}
├ • 🏔️ *24:* ${equipoAleatorio("pico")}
├ • 🌊 *27:* ${equipoAleatorio("veterano")}
├ • 🐿️ *30:* ${equipoAleatorio("retiro")}
├ • 🧸 *33:* Retiro
├ • 🍄 *R:* ${equipoAleatorio("retiro")}
├ • 📺 *ASISTENCIAS:* ${asistencias}
├ • 🍪 *GOALS:* ${goles}
├ • 📚 *LIGAS:* ${liga}
├ • 🏹 *CHAMPIONS:* ${champions}
├ • 📝 *MUNDIALES:* ${mundiales}
├ • 🧮 *BALLON D'ORS:* ${balonOros}
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
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] EL COMANDO TIENE UN ERROR Y NO FUE POSIBLE ENVIARLO.*', m);
  }
};
handler.command = /^(Carrera|Micarrera|micarrera)$/i;
export default handler;
