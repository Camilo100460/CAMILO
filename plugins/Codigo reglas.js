let mensajes = {};

const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const chatId = m.chat;
  const [command, ...restOfText] = text.split(" ", 2);

  switch (command) {
    case '.infia':
    case '.infie':
    case '.infii':
      const index = ['a', 'e', 'i'].indexOf(command.charAt(5));
      const infiText = restOfText.join(" ");
      if (infiText) {
        mensajes[`${chatId}_sInfi${index + 1}`] = infiText.trim();
        m.reply(`*[❗] Mensaje ${index + 1} configurado correctamente para Infi.*`);
      } else {
        const sInfi = mensajes[`${chatId}_sInfi${index + 1}`];
        if (sInfi) {
          m.reply(sInfi);
        } else {
          m.reply(`*[❗] No se ha configurado un mensaje ${index + 1} para Infi.*`);
        }
      }
      break;
  }
};

handler.help = ['.infia <texto>', '.infie <texto>', '.infii <texto>', '.infia', '.infie', '.infii'];
handler.tags = ['group'];
handler.command = ['infia', 'infie', 'infii'];
handler.admin = true;

export default handler;
