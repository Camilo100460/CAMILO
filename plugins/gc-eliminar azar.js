const handler = async (m, {conn, participants}) => {
  // Obtén la lista de participantes
  const groupMembers = participants.map(participant => participant.jid);
  
  // Selecciona un miembro al azar
  const randomMember = groupMembers[Math.floor(Math.random() * groupMembers.length)];
  
  // Asegúrate de no eliminar al bot o al usuario que invoca el comando
  if ([conn.user.jid, m.sender].includes(randomMember)) return;
  
  // Elimina al miembro seleccionado
  await conn.groupParticipantsUpdate(m.chat, [randomMember], 'remove');
};

handler.command = /^(eliminarazar)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
