const cooldownsReglas = {};

const handler = async (m, { conn, text, isROwner, isOwner, command }) => {
  const userId = m.sender; 
  
  if (cooldownsReglas[userId] && cooldownsReglas[userId] > Date.now()) { 
    const remainingTime = (cooldownsReglas[userId] - Date.now()) / 1000; 
    m.reply(`Debes esperar ${remainingTime.toFixed(1)} segundos antes de volver a usar este comando.`);
    return;
  }
  
  cooldownsReglas[userId] = Date.now() + 60000; 
  
  if (!db.data.chats[m.chat].modohorny && m.isGroup && command === 'reglasx-fly') throw 'Mensaje de error que deseas mostrar si no se cumple la condición';
  let url = "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; 
  conn.sendFile(m.chat, url, 'error.jpg', `te desea mucha suerte`, m)
};

handler.help = ['reglasx-fly'];
handler.tags = ['internet'];
handler.command = /^(reglasx-fly)$/;
handler.exp = 50;
handler.level = 0;

export default handler;
