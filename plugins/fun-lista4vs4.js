const handler = async (m, {conn, text}) => {
  let customMessage = '';
  let horarios = '';
  
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en mensaje y horarios
    const parts = text.split('HORARIOS:');
    
    if (parts.length > 1) {
      customMessage = parts[1].trim(); // Se cambia para que se tome lo que hay despues de HORARIOS:
      horarios = 'HORARIOS: ' + parts[0].trim();
    } else {
      customMessage = text.trim();
    }
  }
  
  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.lista);
  
  // Insertar el mensaje personalizado dentro del mensaje predeterminado
  const finalMessage = `${randomMessage.replace("Aqui quiero que vaya el mensaje personalizado", customMessage)}`;
  
  // Responder con el mensaje final
  m.reply(`${finalMessage}`);
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefire'];

// Comandos que activan este manejador
handler.command = ['listacuatro'];

// Exporta el manejador para su uso en otros módulos
export default handler;

// Función para seleccionar un elemento aleatorio de una lista
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Lista global de mensajes
global.lista = [
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🐉💚\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n\n       *PRIMER ESCUADRA* 🐉\n\n🏆\n💚 \n💚 \n💚 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 🌍💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n\n       *PRIMER ESCUADRA* 🌍\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 📖❤️\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n\n       *PRIMER ESCUADRA* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE VS*_ 📈💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n\n       *PRIMER ESCUADRA* 📈\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.'
];
