const handler = async (m, {conn, text}) => {
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en hora, color y reglas de los líderes
    const parts = text.split('/');
    
    if (parts.length === 3) {
      const hora = parts[0].trim(); // Se extrae la hora
      const color = parts[1].trim(); // Se extrae el color
      const reglasLideres = parts[2].trim(); // Se extraen las reglas de los líderes

      // Mensaje predeterminado de la lista global
      const randomMessage = pickRandom(global.listaaaaa);
      
      // Insertar la hora, el color y las reglas de los líderes dentro del mensaje predeterminado
      const finalMessage = `${randomMessage.replace("Aqui quiero que vaya el mensaje personalizado", hora).replace("*COLOR*:", "*COLOR*: " + color).replace("*REGLAS*:", "*REGLAS*: " + reglasLideres)}`;
      
      // Responder con el mensaje final
      m.reply(`${finalMessage}`);
    } else {
      m.reply('Por favor, envía tu mensaje en el formato ".lista16vs16 hora/color/reglas líderes".');
    }
  } else {
    m.reply('Por favor, envía tu mensaje en el formato ".lista16vs16 hora/color/reglas líderes".');
  }
};

// Etiquetas que describen la función del manejador
handler.tags = ['freefire'];

// Comandos que activan este manejador
handler.command = ['lista16vs16'];

// Exporta el manejador para su uso en otros módulos
export default handler;

// Función para seleccionar un elemento aleatorio de una lista
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Lista global de mensajes
global.listaaaaa = [
  '_*LISTA DE VS*_ 🦅💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n*REGLAS*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *SEGUNDA ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *TERCER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *CUARTA ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  '_*LISTA DE VS*_ 🐉💚\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n*REGLAS*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *SEGUNDA ESCUADRA* 🐉\n\n🏆\n💚 \n💚 \n💚 \n\n       *TERCER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *CUARTA ESCUADRA* 🐉\n\n🏆\n💚 \n💚 \n💚 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  '_*LISTA DE VS*_ 🌍💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n*REGLAS*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *SEGUNDA ESCUADRA* 🌍\n\n🏆\n💙 \n💙 \n💙 \n\n       *TERCER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *CUARTA ESCUADRA* 🌍\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  '_*LISTA DE VS*_ 📖❤️\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n*REGLAS*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *SEGUNDA ESCUADRA* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n\n       *TERCER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *CUARTA ESCUADRA* 📖\n\n🏆\n❤️ \n❤️ \n❤️ \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  '_*LISTA DE VS*_ 📈💙\n\n⏰ *HORARIOS:* Aqui quiero que vaya el mensaje personalizado\n*COLOR*:\n*REGLAS*:\n\n       *PRIMER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *SEGUNDA ESCUADRA* 📈\n\n🏆\n💙 \n💙 \n💙 \n\n       *TERCER ESCUADRA* 🦅\n\n👑\n💙 \n💙 \n💙 \n\n       *CUARTA ESCUADRA* 📈\n\n🏆\n💙 \n💙 \n💙 \n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
];
