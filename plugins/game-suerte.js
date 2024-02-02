let toM = a => '@' + a.split('@')[0];

async function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let b = ps[Math.floor(Math.random() * ps.length)]; // Selecciona aleatoriamente a un participante

    // Envía el mensaje primero
    m.reply(`${toM(b)} serás eliminado`, null, {
        mentions: [b]
    });

    // Espera 1 segundo (puedes ajustar este tiempo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Elimina al participante después de enviar el mensaje
    await conn.groupParticipantsUpdate(m.chat, [b], 'remove');
}

handler.help = ['suerte'];
handler.tags = ['fun'];
handler.command = ['suerte'];
handler.group = true;

export default handler;
