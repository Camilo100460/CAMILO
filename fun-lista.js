// By https://github.com/elrebelde21

const handler = async (m, {conn, text}) => {
  m.reply(`💬• *${pickRandom(global.lista)}*`);
};
handler.tags = ['frases'];
handler.command = ['lista'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.lista = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3', 'Mensaje 4', 'Mensaje 5', 'Mensaje 6', 'Mensaje 7', 'Mensaje 8', 'Mensaje 9', 'Mensaje 10', 'Mensaje 11', 'Mensaje 12', 'Mensaje 13', 'Mensaje 14', 'Mensaje 15', 'Mensaje 16', 'Mensaje 17', 'Mensaje 18', 'Mensaje 19', 'Mensaje 20'];






