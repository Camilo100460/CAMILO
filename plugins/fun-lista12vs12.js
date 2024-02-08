const handler = async (m, {conn, text}) => {
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en hora y color
    const parts = text.split('/');
    
    if (parts.length > 1) {
      const hora = parts[0].trim(); // Se extrae la hora
      const color = parts[1].trim(); // Se extrae el color

      // Mensaje predeterminado de la lista global
      const randomMessage = pickRandom(global.listaaaaa);
      
      // Insertar la hora y el color dentro del mensaje predeterminado
      const finalMessage = `${randomMessage.replace("Aqui quiero que vaya el mensaje personalizado", hora).replace("COLOR:", "COLOR: " + color)}`;
      
      // Responder con el mensaje final
      m.reply(`${finalMessage}`);
    } else {
      m.reply('Por favor, envía tu mensaje en el formato ".prueba hora/color".');
    }
  } else {
    m.reply('Por favor, envía tu mensaje en el formato ".prueba hora/color".');
  }
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
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
];
