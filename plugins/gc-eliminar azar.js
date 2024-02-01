const handler = async (m, {conn, participants}) => {
  const groupMembers = participants.map(participant => participant.jid);
  const randomMember = groupMembers[Math.floor(Math.random() * groupMembers.length)]
  if ([conn.user.jid, m.sender].includes(randomMember)) return;
  await conn.groupParticipantsUpdate(m.chat, [randomMember], 'remove');
};

handler.command = /^(eliminarazar)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
