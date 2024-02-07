// By https://github.com/elrebelde21

const handler = async (m, {conn, text}) => {
  m.reply(`💬• *${pickRandom(global.lista)}*`);
};
handler.tags = ['frases'];
handler.command = ['lista'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.lista = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3', 'Mensaje 4', 'Mensaje 5'];





