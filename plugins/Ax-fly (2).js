let handler = async (m, { conn, text }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    
    let url = text // La URL de la imagen se proporciona después del comando
    if (!url) {
        // Si no se proporciona una URL, se envía un mensaje indicando cómo usar el comando
        return conn.reply(m.chat, 'Por favor, proporciona una URL de imagen después del comando.', m)
    }
    
    // Envía la imagen utilizando la URL proporcionada
    conn.sendFile(m.chat, url, 'imagen.jpg', `Mensaje de ejemplo`, m)
}

handler.help = ['reglasx-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/i
handler.exp = 50
handler.level = 0

export default handler
