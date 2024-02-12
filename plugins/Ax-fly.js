let handler = async (m, { conn, command, args }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    
    // Verificamos si el usuario proporcionó una URL personalizada como argumento
    let url = args[0] || "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; // URL predeterminada si no se proporciona una URL personalizada
    
    conn.sendFile(m.chat, url, 'error.jpg', `May te desea mucha suerte`, m)
    //conn.sendButton(m.chat, `🥵 ♥ PIES ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}

handler.help = ['reglasx-fly']
handler.tags = ['internet']
handler.command = /^(reglasx-fly)$/
handler.exp = 50
handler.level = 0

export default handler
