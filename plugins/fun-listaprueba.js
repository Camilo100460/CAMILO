const handler = async (m, { conn }) => {
  // Función para solicitar el color al usuario
  const askForColor = async () => {
    return new Promise((resolve, reject) => {
      const waitForColor = (msg) => {
        if (msg.key.fromMe && msg.message && msg.message.conversation) {
          const color = msg.message.conversation.trim();
          resolve(color);
          conn.off('message-new', waitForColor);
        }
      };

      conn.on('message-new', waitForColor);

      conn.sendMessage(m.chat, '_Por favor, ingresa el color que deseas para el menú:_', 'conversation', {
        quoted: m,
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
  conn.sendMessage(m.chat, defaultMessage, 'conversation', { quoted: m });
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefi22re1'];

// Comandos que activan este manejador
handler.command = ['prueba'];

// Exporta el manejador para su uso en otros módulos
export default handler;
