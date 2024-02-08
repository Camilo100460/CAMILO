let color = ''; // Variable para almacenar el color
let hora = ''; // Variable para almacenar la hora

const handler = async (m, {conn, text}) => {
  // Si el color y la hora no se han establecido, preguntar por ellos
  if (!color || !hora) {
    m.reply('Por favor, envía tu mensaje en el formato ".prueba (hora)/(color)".');
    return;
  }

  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.listaaaaa);
  
  // Insertar la hora y el color dentro del mensaje predeterminado
  const finalMessage = `${randomMessage.replace("Aqui quiero que vaya el mensaje personalizado", hora).replace("COLOR:", "COLOR: " + color)}`;
  
  // Responder con el mensaje final
  m.reply(`${finalMessage}`);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefire'];

// Comandos que activan este manejador
handler.command = ['prueba'];

// Exporta el manejador para su uso en otros módulos
export default handler;

// Función para seleccionar un elemento aleatorio de una lista
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Lista global de mensajes
global.listaaaaa = [
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\nCOLOR:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\nCOLOR:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\nCOLOR\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\nCOLOR:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\nCOLOR\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
];
