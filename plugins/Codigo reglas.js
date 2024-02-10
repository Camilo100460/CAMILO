const handler = async (m, { conn, text, isROwner, isOwner }) => {
  const chatId = m.chat;
  const [command, restOfText] = text.split(" ", 2);

  switch (command) {
    case '.infi1':
    case '.infi2':
    case '.infi3':
      const index = parseInt(command.replace(".infi", "")) - 1;
      if (restOfText) {
        global.db.data.chats[chatId][`sInfi${index + 1}`] = restOfText.trim();
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
      m.reply('*[❗] El comando no es válido. Use .infi1, .infi2 o .infi3 seguido del mensaje.*');
  }
};

handler.help = ['.infi1 <texto>', '.infi2 <texto>', '.infi3 <texto>', '.infi1', '.infi2', '.infi3'];
handler.tags = ['group'];
handler.command = ['infi1', 'infi2', 'infi3'];
handler.admin = true;

export default handler;
