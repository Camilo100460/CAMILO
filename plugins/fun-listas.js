// By https://github.com/elrebelde21

const handler = async (m, { conn, text }) => {
  // Extraer el tiempo de la cadena de texto
  const timeRegex = /(\d{1,2}:\d{2}) (\d{1,2}:\d{2})/;
  const matches = text.match(timeRegex);

  let replyMessage = `💬• *${pickRandom(global.lista)}*`;

  // Si se encuentra el tiempo en el mensaje
  if (matches && matches.length >= 3) {
    const startTime = matches[1];
    const endTime = matches[2];
    replyMessage += `\n\nHorario: ${startTime} - ${endTime}`;
  }

  m.reply(replyMessage);
};

handler.tags = ['frases'];
handler.command = ['lista'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.lista = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3', 'Mensaje 4', 'Mensaje 5'];





