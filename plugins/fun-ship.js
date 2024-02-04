let handler = async (m, { conn, command, text, isPrepa }) => {
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘿𝙊𝙎 𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙎 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙐 𝘼𝙈𝙊𝙍`
    
    let [text1, ...text2] = text.split(' ')
    text2 = (text2 || []).join(' ')
    
    if (!text2) throw `⚠️ 𝙁𝘼𝙇𝙏𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼`

    // Verificar si el temporizador ya está en marcha
    if (isPrepa) return m.reply("_⌛ Tiempo de uso del comando agotado. Por favor, vuelve a intentarlo más tarde._");

    let love = `_❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻_ 
    `.trim()

    // Enviar la respuesta del "shippeo"
    m.reply(love, null, { mentions: conn.parseMention(love) })

    // Marcar que el temporizador está en marcha
    conn.updatePresence(m.chat, '⏳ En espera... (30s)', 'unavailable')
    m.reply("_⏳ Esperando 30 segundos antes de permitir otro uso._")

    // Activar el temporizador de 30 segundos (puedes ajustar el tiempo según tus necesidades)
    conn.send3Button(m.chat, "_⌛ El temporizador está en marcha. Por favor, espera 30 segundos antes de volver a usar el comando._", '⚠️ ¡Espera!', '❌ Cancelar', '.wait', '.cancelar', { contextInfo: { mentionedJid: conn.parseMention("_⌛ El temporizador está en marcha. Por favor, espera 30 segundos antes de volver a usar el comando._") } })

    // Marcar que el temporizador está en marcha
    conn.updatePresence(m.chat, '⏳ En espera... (30s)', 'unavailable')

    // Activar el temporizador de 30 segundos (puedes ajustar el tiempo según tus necesidades)
    setTimeout(() => {
        // Restablecer el estado del temporizador
        conn.updatePresence(m.chat, '¡Listo para usar!', 'chat')
    }, 30000); // 30 segundos
}

handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^ship|shippear$/i

export default handler
export default handler

