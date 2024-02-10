import fetch from 'node-fetch';

let mensajes = {};

const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const chatId = m.chat;
  const [command, ...restOfText] = text.split(" ");

  switch (command) {
    case '.infia':
    case '.infie':
    case '.infii':
      const index = ['a', 'e', 'i'].indexOf(command.charAt(5));
      const infiText = restOfText.join(" ");
      if (infiText) {
        global.db.data.chats[chatId][`sInfi${index + 1}`] = infiText.trim();
        m.reply(`*[❗] Mensaje ${index + 1} configurado correctamente para Infi.*`);
      } else {
        const sInfi = global.db.data.chats[chatId][`sInfi${index + 1}`];
        if (sInfi) {
          m.reply(sInfi);
        } else {
          m.reply(`*[❗] No se ha configurado un mensaje ${index + 1} para Infi.*`);
        }
      }
      break;
    default:
      m.reply('*[❗] El comando no es válido. Use .infia, .infie o .infii seguido del mensaje.*');
  }
};

handler.help = ['.infia <texto>', '.infie <texto>', '.infii <texto>', '.infia', '.infie', '.infii'];
handler.tags = ['group'];
handler.command = ['infia', 'infie', 'infii'];
handler.admin = true;

export default handler;
