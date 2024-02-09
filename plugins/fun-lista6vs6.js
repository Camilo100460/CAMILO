const handler = async (m, {conn, text}) => {
  let horario = '';
  let color = '';
  
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en horario y color
    const parts = text.split('/');
    
    if (parts.length > 1) {
      horario = parts[0].trim();
      color = parts[1].trim();
    } else {
      horario = text.trim();
    }
  }
  
  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.lista41);
  
  // Insertar el horario y el color dentro del mensaje predeterminado
  const finalMessage = randomMessage.replace("*HORARIOS:*", `*HORARIOS:* ${horario}`).replace("*COLOR*:", `*COLOR:* ${color}`);
  
  // Responder con el mensaje final
  m.reply(`${finalMessage}`);
};

handler.tags = ['freefire4'];
handler.command = ['lista6vs6'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.lista41 = [
  '_*LISTA DE 6VS6*_ 🦅💙\n\n⏰ *HORARIOS:* \n\n               *JUGADORES* 🦅\n\n👑\n💙 \n💙 \n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 6VS6*_ 🐉💚\n\n⏰ *HORARIOS:* \n\n               *JUGADORES* 🐉\n\n🏆\n💚 \n💚 \n💚 \n💚 \n💚 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 6VS6*_ 🌍💙\n\n⏰ *HORARIOS:* \n\n               *JUGADORES* 🌍\n\n🏆\n💙 \n💙 \n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 6VS6*_ 📖❤️\n\n⏰ *HORARIOS:* \n\n               *JUGADORES* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n❤️ \n❤️ \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE 6VS6*_ 📈💙\n\n⏰ *HORARIOS:* \n\n               *JUGADORES* 📈\n\n🏆\n💙 \n💙 \n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.'
];
