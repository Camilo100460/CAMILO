const handler = async (m, {conn, text}) => {
  let horario = '';
  let color = '';
  
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en horario y color
    const parts = text.split('/');
    
    horario = parts[0].trim();
    
    // Si se proporciona un color, se establece
    if (parts.length > 1) {
      color = parts[1].trim();
    }
  }
  
  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.lista30);
  
  // Insertar el horario y el color dentro del mensaje predeterminado
  const finalMessage = randomMessage.replace("*HORARIOS:*", `*HORARIOS:* ${horario}`).replace("*COLOR*:", `*COLOR:* ${color}`);
  
  // Responder con el mensaje final
  m.reply(`${finalMessage}`);
};

handler.tags = ['freefire4'];
handler.command = ['lista4vs4'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.lista30 = [
  '_*LISTA DE 4vs4*_ 🦅💙\n\n⏰ *HORARIOS:* \n\n                  *JUGADORES* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 4vs4*_ 🐉💚\n\n⏰ *HORARIOS:* \n\n                  *JUGADORES* 🐉\n\n🏆\n💚 \n💚 \n💚 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 4vs4*_ 🌍💙\n\n⏰ *HORARIOS:* \n\n                  *JUGADORES* 🌍\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 4vs4*_ 📖❤️\n\n⏰ *HORARIOS:* \n\n                  *JUGADORES* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 4vs4*_ 📈💙\n\n⏰ *HORARIOS:* \n\n                  *JUGADORES* 📈\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.'
];
