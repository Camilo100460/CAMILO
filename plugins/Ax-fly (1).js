let lastUsed = 0;

let handler = async (m, { conn, command, text }) => {
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙐 𝘾𝙊𝘾𝙄𝙀𝙉𝙏𝙊 𝙌𝙐𝙊𝘾𝙄𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝙊`
    
    let [text1, ...text2] = text.split(' ')
    text2 = (text2 || []).join(' ')
    
    if (!text2) throw `⚠️ 𝙁𝘼𝙇𝙏𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼`

    // Obtener el tiempo actual en milisegundos
    let currentTime = Date.now();

    // Verificar si ha pasado al menos 30 segundos desde el último uso
    if (currentTime - lastUsed < 30000) {
        m.reply("_⌛ Tiempo de uso del comando agotado. Por favor, vuelve a intentarlo más tarde._");
        return;
    }

    // Actualizar el tiempo del último uso
    lastUsed = currentTime;

    let iq = `_🧠 *${text1}* tu coeficiente intelectual es de *${Math.floor(Math.random() * 200)}* 👩🏻‍🎓_ 
    `.trim()

    // Enviar la respuesta del "shippeo"
    m.reply(iq, null, { mentions: conn.parseMention(iq) })
}

handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^iqtest$/i

export default handler
