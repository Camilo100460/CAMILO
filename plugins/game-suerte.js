let toM = a => '@' + a.split('@')[0];

async function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let b = ps[Math.floor(Math.random() * ps.length)]; // Selecciona aleatoriamente a un participante

    let message;
    if (m.text.includes('eliminafeo')) {
        message = 'serás eliminado por ser el más feo';
    } else if (m.text.includes('eliminainfiel')) {
        message = 'serás eliminado por ser una persona infiel';
    } else if (m.text.includes('eliminafea')) {
        message = 'serás eliminado por ser una persona fea';
    } else if (m.text.includes('eliminabot')) {
        message = 'serás eliminado por ser un bot';
    } else if (m.text.includes('eliminacachona')) {
        message = 'serás eliminado por ser una persona cachona';
    } else if (m.text.includes('eliminagay')) {
        message = 'serás eliminado por ser una persona gay';
    } else if (m.text.includes('eliminafiel')) {
        message = 'serás eliminado por ser fiel';
    }

    // Envía el mensaje primero
    m.reply(`${toM(b)} ${message}`, null, {
        mentions: [b]
    });

    // Espera 1 segundo (puedes ajustar este tiempo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Elimina al participante después de enviar el mensaje
    await conn.groupParticipantsUpdate(m.chat, [b], 'remove');
}

handler.help = ['eliminafeo', 'eliminainfiel', 'eliminafea', 'eliminapersonabot', 'eliminacachona', 'eliminagay', 'eliminafiel'];
handler.tags = ['fun'];
handler.command = ['eliminafeo', 'eliminainfiel', 'eliminafea', 'eliminapersonabot', 'eliminacachona', 'eliminagay', 'eliminafiel'];
handler.group = true;

export default handler;
