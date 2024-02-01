const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝚃𝙸𝙴𝙽𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙴𝙻 𝚄𝚂𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*';
  
  // Obtén la lista de participantes
  const groupMembers = participants.map(participant => participant.jid);
  
  // Selecciona un miembro al azar
  const randomMember = groupMembers[Math.floor(Math.random() * groupMembers.length)];
  
  // Asegúrate de no eliminar al bot o al usuario que invoca el comando
  if ([conn.user.jid, m.sender].includes(randomMember)) return;
  
  // Elimina al miembro seleccionado
  await conn.groupParticipantsUpdate(m.chat, [randomMember], 'remove');
};

handler.command = /^(pazar)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
