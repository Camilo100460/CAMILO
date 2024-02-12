import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    if (command === 'hola') { // Si el comando es .hola
        let url = "https://i.ibb.co/M71kYVG/grupo-Amarillo.jpg"; // Coloca aquí la URL que deseas enviar
        conn.sendText(m.chat, '¡Hola! ¿Cómo estás?') // Envía este mensaje
        conn.sendFile(m.chat, url, 'hello.jpg', '¡Aquí tienes una URL!', m) // Envía la URL
    } else { // Para cualquier otro comando
        if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
        let url = "https://i.ibb.co/8DpxWFc/ENFRENTAMIENTOS.jpg"; // Cambia este enlace por el que desees usar
        conn.sendFile(m.chat, url, 'error.jpg', `🥵 ♥ PIES ♥  🥵`, m)
        //conn.sendButton(m.chat, `🥵 ♥ PIES ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
    }
}

handler.help = ['x-fly', 'hola'] // Agrega el comando .hola a la lista de ayuda
handler.tags = ['internet']
handler.command = /^(x-fly|hola)$/ // Ahora el comando acepta tanto .x-fly como .hola
handler.exp = 50
handler.level = 0

export default handler
