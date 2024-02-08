const handler = async (m, {conn, text}) => {
  let customMessage = text ? text.trim() : '';
  
  // Mensaje predeterminado
  const defaultMessage = ' _*< 📜 LISTA DE MENUS 📋 />*_
  
  🎵 _${usedPrefix}lista_
  📺 _${usedPrefix}lista 8vs8_
  📖 _${usedPrefix}lista 12vs12_
  📖 _${usedPrefix}lista 16vs16_
  
';
  
  // Responder con el mensaje final
  m.reply(defaultMessage);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefire1'];

// Comandos que activan este manejador
handler.command = ['freefire'];

// Exporta el manejador para su uso en otros módulos
export default handler;
