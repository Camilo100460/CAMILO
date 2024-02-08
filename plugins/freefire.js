const handler = async (m, {conn, text}) => {
  let customMessage = text ? text.trim() : '';
  
  // Mensaje predeterminado
  const defaultMessage = '_*Hola mundo';
  
  // Responder con el mensaje final
  m.reply(defaultMessage);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefire1'];

// Comandos que activan este manejador
handler.command = ['freefire'];

// Exporta el manejador para su uso en otros módulos
export default handler;
