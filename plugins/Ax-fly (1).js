const handler = async (m, { conn }) => {
  const iqResult = pickRandom(global.iq);
  conn.reply(m.chat, `Tu coeficiente intelectual es: ${iqResult}`, m);
};

handler.help = ['iqtest'];
handler.tags = ['game'];
handler.command = /^(iqtest)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.iq = [
  1, 14, 23, 35, 41, 50, 67, 72, 86, 99,
  150, 340, 423, 500, 676, 780, 812, 945,
  1000, '¡Ilimitado!', 5000, 7500, 10000
];
