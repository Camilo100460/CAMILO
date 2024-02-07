// By https://github.com/elrebelde21

const handler = async (m, {conn, text}) => {
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Concatena el texto proporcionado con un mensaje aleatorio de la lista global
    m.reply(`💬• "${text}" ${pickRandom(global.lista)}`);
  } else {
    // Si no se proporcionó texto, solo envía un mensaje aleatorio de la lista global
    m.reply(`💬• *${pickRandom(global.lista)}*`);
  }
};

// Etiquetas que describen la función del manejador
handler.tags = ['mensajes'];

// Comandos que activan este manejador
handler.command = ['lista'];

// Exporta el manejador para su uso en otros módulos
export default handler;

// Función para seleccionar un elemento aleatorio de una lista
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Lista global de mensajes
global.lista = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3', 'Mensaje 4', 'Mensaje 5'];
