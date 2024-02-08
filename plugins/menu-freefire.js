// Handler
let handler = async (m, { conn, text }) => {
  if (text.toLowerCase() === ".freefire") {
    m.reply(`
_*< 🤖 SOBRE EL BOT 📚 />*_

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
🤖 _bot_ (sin prefijo)`);
  }
};

handler.tags = ['Free fire'];
handler.command = ['freefire'];

export default handler;
