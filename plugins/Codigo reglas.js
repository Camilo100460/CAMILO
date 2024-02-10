import fetch from 'node-fetch';

let mensajes = {};

const handler = async (m, {conn, usedPrefix, text}) => {
  if (usedPrefix == '.infi') {
    if (text) {
      mensajes[m.chat] = text;
      conn.reply(m.chat, 'Mensaje guardado.', m);
    } else {
      let mensaje = mensajes[m.chat];
      conn.reply(m.chat, mensaje ? 'Mensaje guardado: ' + mensaje : 'No hay ningún mensaje guardado.', m);
    }
  }

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount, exp, limit, level, role} = user;
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮
 📌 *Hola,* ${taguser}
 📊 _*< TUS ESTADÍSTICAS />*_
 🖼️ _${usedPrefix}viewimage_`.trim();
    conn.reply(m.chat, str.trim(), m);
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};

handler.command = /^(regas|reglasinfi|infi)$/i;
handler.exp = 50;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
