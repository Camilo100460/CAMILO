const handler = async (m, {conn, text, usedPrefix}) => {
  // Mensaje predeterminado con la lista de comandos
  const defaultMessage = `
  _*< 📜 LISTA DE MENUS 📋 />*_
  
  🧸• _${usedPrefix}listavv2_
  🍄• _${usedPrefix}lista4vs4_
  🍂• _${usedPrefix}lista6vs6_
  📺• _${usedPrefix}lista8vs8_
  🍪• _${usedPrefix}lista12vs2_
  📖• _${usedPrefix}lista12vs12_
  ✒️• _${usedPrefix}lista16vs16_
  🏹• _${usedPrefix}listacuadri_
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
