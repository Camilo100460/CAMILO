let toM = a => '@' + a.split('@')[0];

async function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let b = ps[Math.floor(Math.random() * ps.length)]; // Selecciona aleatoriamente a un participante

    let message;
    if (m.text.includes('eliminaelmasfeo')) {
        message = 'serás eliminado por ser el más feo';
    } else if (m.text.includes('eliminainfiel')) {
        message = 'serás eliminado por ser una persona infiel';
    } else if (m.text.includes('eliminapersonafea')) {
        message = 'serás eliminado por ser una persona fea';
    } else if (m.text.includes('eliminapersonabot')) {
        message = 'serás eliminado por ser un bot';
    } else if (m.text.includes('eliminapersonacachona')) {
        message = 'serás eliminado por ser una persona cachona';
    } else if (m.text.includes('eliminapersonagay')) {
        message = 'serás eliminado por ser una persona gay';
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

handler.help = ['eliminaelmasfeo', 'eliminainfiel', 'eliminapersonafea', 'eliminapersonabot', 'eliminapersonacachona', 'eliminapersonagay'];
handler.tags = ['fun'];
handler.command = ['eliminaelmasfeo', 'eliminapersonainfiel', 'eliminapersonafea', 'eliminapersonabot', 'eliminapersonacachona', 'eliminapersonagay'];
handler.group = true;

export default handler;
