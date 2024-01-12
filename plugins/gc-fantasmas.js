const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] ESTE GRUPO ES ACTIVO, NO TIENE FANTASMAS*`, m);
m.reply(`*[ REVISION DE INACTIVOS ]*\n\n🕰️•  _*GRUPO:*_ ${await conn.getName(m.chat)}\n🥂•  _*MIEMBROS DEL GRUPO*_ ${sum}\n\n*[ 👻 LISTA DE FANTASMAS 👻 ]*\n\n${sider.map((v) => '  • @' + v.replace(/@.+/, '')).join('\n')}\n\n*☆━━━━━━━━━━━━━━━━━━━☆*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
