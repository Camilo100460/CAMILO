import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (!/\bfree ?fire\b/i.test(text)) return; // Se activa solo cuando se menciona "freefire" o "Free fire" como palabra completa
  try {
    const pp = imagen4;
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

 📌 *Hola,* ${taguser}

  _*< MENU FREE FIRE 🕹️ />*_

  🧮 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  🎭 _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ✊ _${usedPrefix}ppt *<papel / tijera /piedra>*_
  👨‍💼 _${usedPrefix}prostituto *<nombre / @tag>*_
  👩‍💼 _${usedPrefix}prostituta *<nombre / @tag>*_
  🌈 _${usedPrefix}gay2 *<nombre / @tag>*_
  🌈 _${usedPrefix}lesbiana *<nombre / @tag>*_
  🐒 _${usedPrefix}pajero *<nombre / @tag>*_
  🐵 _${usedPrefix}pajera *<nombre / @tag>*_
  🎉 _${usedPrefix}puto *<nombre / @tag>*_
  🎉 _${usedPrefix}puta *<nombre / @tag>*_
  🎮 _${usedPrefix}trabaja *<nombre / @tag>*_
  📩 _${usedPrefix}anunciar *<txt>*_
  🔄 _${usedPrefix}tradu *<leng / lenguaje> <txt>*_

 ${readMore}
`.trim()
    await conn.sendFile(m.chat, pp, 'Menu2.jpg', str, m)
  } catch (e) {
    m.reply(util.format(e))
    console.log(e)
  }
}
handler.help = ['menu <freefire>']
handler.tags = ['game']
handler.command = /^menu$/i

module.exports = handler
