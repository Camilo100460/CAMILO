let handler = async (m, { conn, command }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    
    // Aquí puedes cambiar la URL por la que desees usar
    let url = "URL_PERSONALIZADA"; // Cambia "URL_PERSONALIZADA" por la URL que deseas utilizar
    
    conn.sendFile(m.chat, url, 'imagen.jpg', `May te desea mucha suerte`, m)
    //conn.sendButton(m.chat, `🥵 ♥ PIES ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}

handler.help = ['reglas-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/
handler.exp = 50
handler.level = 0

export default handler
