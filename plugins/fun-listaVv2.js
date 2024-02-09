const handler = async (m, {conn, text}) => {
  let horario = '';
  
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    horario = text.trim();
  }
  
  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.lista21);
  
  // Insertar el horario dentro del mensaje predeterminado
  const finalMessage = randomMessage.replace("*HORARIOS:*", `*HORARIOS:* ${horario}`);
  
  // Responder con el mensaje final
  m.reply(`${finalMessage}`);
};

handler.tags = ['freefire4'];
handler.command = ['listavv2'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.lista21 = [
  '_*LISTA DE Vv2*_ 🦅💙\n\n⏰ *HORARIOS:* \n\n            *JUGADORES* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE Vv2*_ 🐉💚\n\n⏰ *HORARIOS:* \n\n            *JUGADORES* 🐉\n\n🏆\n💚 \n💚 \n💚 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE Vv2*_ 🌍💙\n\n⏰ *HORARIOS:* \n\n            *JUGADORES* 🌍\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE Vv2*_ 📖❤️\n\n⏰ *HORARIOS:* \n\n            *JUGADORES* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.',
  '_*LISTA DE Vv2*_ 📈💙\n\n⏰ *HORARIOS:* \n\n            *JUGADORES* 📈\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS.'
];
