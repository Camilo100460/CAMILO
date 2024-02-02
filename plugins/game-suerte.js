let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let b = ps[Math.floor(Math.random() * ps.length)]; // Selecciona aleatoriamente a un participante
    m.reply(`${toM(b)} serás eliminado`, null, {
        mentions: [b]
    });
    await conn.groupParticipantsUpdate(m.chat, [b], 'remove');
}

handler.help = ['suerte'];
handler.tags = ['fun'];
handler.command = ['suerte'];
handler.group = true;

export default handler;
