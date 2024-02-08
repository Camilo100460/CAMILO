const handler = async (m, {conn, text, usedPrefix}) => {
  // Mensaje predeterminado con la lista de comandos
  const defaultMessage = `
  _*< 📜 LISTA DE MENUS 📋 />*_
  
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
handler.command = ['freefire'];

// Exporta el manejador para su uso en otros módulos
export default handler;
