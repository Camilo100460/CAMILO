let handler = async (m, { conn, command }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
    let url = "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; // Cambia este enlace por el que desees usar
    conn.sendFile(m.chat, url, 'error.jpg', `🥵 ♥ PIES ♥  🥵`, m)
    //conn.sendButton(m.chat, `🥵 ♥ PIES ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}

handler.help = ['x-fly']
handler.tags = ['internet']
handler.command = /^(x-fly)$/
handler.exp = 50
handler.level = 0

export default handler
