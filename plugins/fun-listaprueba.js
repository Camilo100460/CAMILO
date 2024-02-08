const handler = async (m, {conn, text, usedPrefix}) => {
  // Función para solicitar el color al usuario
  const askForColor = async () => {
    return new Promise((resolve, reject) => {
      conn.sendMessage(m.chat, '_Por favor, ingresa el color que deseas para el menú:_', 'conversation', {
        quoted: m,
        contextInfo: { mentionedJid: conn.parseMention(text) }
      });
      conn.once('message-update', async (m) => {
        if (m.key.fromMe && m.key.id === conn.user.jid.split('@')[0]) {
          const color = m.message.conversation;
          resolve(color);
        }
      });
    });
  };

  // Pedir al usuario que ingrese el color
  const color = await askForColor();

  // Mensaje predeterminado con la lista de comandos
  const defaultMessage = `
  _*< 📜 LISTA DE MENUS 📋 />*_
COLOR: ${color}
HORA:   
  `;
  
  // Responder con el mensaje final
  m.reply(defaultMessage);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefi22re1'];

// Comandos que activan este manejador
handler.command = ['freefire'];

// Exporta el manejador para su uso en otros módulos
export default handler;
