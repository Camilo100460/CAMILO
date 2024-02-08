let color = 'NEGRO'; // Variable para almacenar el color

const handler = async (m, {conn, text, usedPrefix}) => {
  // Si el color no se ha establecido, preguntar por el color
  if (!color) {
    m.reply('Por favor, dime qué color te gustaría para el mensaje general.');
    return;
  }

  // Mensaje predeterminado con la lista de comandos
  const defaultMessage = `
  _*< 📜 LISTA DE MENUS 📋 />*_

  COLOR: ${color}
  HORA:
  
  🎵 _${usedPrefix}(lista)_
  📺 _${usedPrefix}lista (8vs8)_
  📖 _${usedPrefix}lista (12vs12)_
  📖 _${usedPrefix}lista (16vs16)_
  `;
  
  // Responder con el mensaje final
  m.reply(defaultMessage);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefi22re1'];

// Comandos que activan este manejador
handler.command = ['prueba'];

// Exporta el manejador para su uso en otros módulos
export default handler;
