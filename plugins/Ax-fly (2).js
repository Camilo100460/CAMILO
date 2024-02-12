let handler = async (m, { conn, text, usedPrefix }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    
    let url = text // La URL de la imagen se proporciona después del comando
    if (url) {
        // Si se proporciona una URL, guardarla en la base de datos
        db.data.urls[m.chat] = url
        conn.reply(m.chat, 'URL de imagen guardada con éxito.', m)
        db.save()
        return
    }

    // Si no se proporciona una URL, buscar en la base de datos la URL guardada
    url = db.data.urls[m.chat]
    if (!url) {
        // Si no hay ninguna URL guardada, enviar un mensaje indicando que no hay URL guardada
        return conn.reply(m.chat, `No se ha guardado ninguna URL de imagen. Para guardar una URL, usa ${usedPrefix}reglasx-fly <URL>.`, m)
    }

    // Envía la imagen utilizando la URL guardada
    conn.sendFile(m.chat, url, 'imagen.jpg', `Mensaje de ejemplo`, m)
}

handler.help = ['reglasx-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/i
handler.exp = 50
handler.level = 0

module.exports = handler
