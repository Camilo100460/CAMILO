// By https://github.com/elrebelde21

const handler = async (m, {conn, text}) => {
  let customMessage = '';
  let horarios = '';
  
  // Verifica si se proporcionó texto junto con el comando
  if (text) {
    // Dividir el texto proporcionado en mensaje y horarios
    const parts = text.split('HORARIOS:');
    
    if (parts.length > 1) {
      customMessage = parts[0].trim();
      horarios = 'HORARIOS: ' + parts[1].trim();
    } else {
      customMessage = text.trim();
    }
  }
  
  // Mensaje predeterminado de la lista global
  const randomMessage = pickRandom(global.lista);
  
  // Concatenar el mensaje personalizado (si existe) con el mensaje aleatorio
  const finalMessage = `${customMessage} ${horarios} ${randomMessage}`;
  
  // Responder con el mensaje final
  m.reply(`💬• ${finalMessage}`);
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
global.lista = [
  'LISTA DE VS 🦅💙\n\n⏰HORARIOS:\n\nPRIMER ESCUADRA🦅\n\n👑\n💙\n💙\n💙\n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  'LISTA DE VS 🦅💙\n\n⏰HORARIOS:\n\nPRIMER ESCUADRA🦅\n\n👑\n💙\n💙\n💙\n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  'LISTA DE VS 🦅💙\n\n⏰HORARIOS:\n\nPRIMER ESCUADRA🦅\n\n👑\n💙\n💙\n💙\n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  'LISTA DE VS 🦅💙\n\n⏰HORARIOS:\n\nPRIMER ESCUADRA🦅\n\n👑\n💙\n💙\n💙\n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD',
  'LISTA DE VS 🦅💙\n\n⏰HORARIOS:\n\nPRIMER ESCUADRA🦅\n\n👑\n💙\n💙\n💙\n\nMUCHA RESPONSABILIDAD CON LOS HORARIOS. 15 MINUTOS ANTES EN DISCORD'
];
