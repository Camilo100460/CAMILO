let handler = async (m, { conn, text }) => {
  m.reply(`╭┄┄┄┄┄〔 *Menu Freefire* 〕┄⊱\n┊\n *😹 ${pickRandom(global.chiste)} 😹*\n┊\n*╰━━━⊰ 𓃠 ${conn.getName(m.sender)} ⊱━━━━დ*`);
};

handler.tags = ['humor'];
handler.command = ['Frefire'];

export default handler;

function pickRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  const chosenChiste = list[randomIndex];
  return chosenChiste.split("\n").map(line => `┊ ${line}`).join("\n");
}

global.chiste = [
  " _*< 🤖 SOBRE EL BOT 📚 />*_

  📜 _${usedPrefix}terminosycondiciones_
  👥 _${usedPrefix}grupos_
  📊 _${usedPrefix}estado_
  📝 _${usedPrefix}infobot_
  🚀 _${usedPrefix}speedtest_
  💸 _${usedPrefix}donar_
  👑 _${usedPrefix}owner_
  💻 _${usedPrefix}script_
  📝 _${usedPrefix}reporte *<txt>*_
  🚪 _${usedPrefix}join *<wagp_url>*_
  🔄 _${usedPrefix}fixmsgespera_
  🤖 _bot_ (sin prefijo)"
];
