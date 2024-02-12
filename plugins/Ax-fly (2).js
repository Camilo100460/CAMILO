let handler = async (m, { conn, command, text }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB'smsContAdult'}`
    
    // Si se proporciona un texto, se asume que es una URL y se guarda en la base de datos
    if (text) {
        db.data.chats[m.chat].customUrl = text;
        m.reply('*[❗] URL configurada correctamente.*');
        return;
    }
    
    // Si no se proporciona un texto, se recupera la URL de la base de datos
    let url = db.data.chats[m.chat].customUrl;
    if (!url) {
        m.reply('*[❗] No se ha configurado ninguna URL.*');
        return;
    }
    
    conn.sendFile(m.chat, url, 'error.jpg', `May te desea mucha suerte`, m)
}

handler.help = ['reglas-fly <url>', 'reglas-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/
handler.exp = 50
handler.level = 0

export default handler
