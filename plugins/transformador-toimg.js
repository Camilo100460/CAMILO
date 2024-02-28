var handler = async (m, { conn, usedPrefix, command }) => {

    const notStickerMessage = `*⚠️ RESPONDA CON ${usedPrefix + command} AL STICKER QUE DESEE CONVERTIR EN IMAGEN*`
    if (!m.quoted) throw notStickerMessage 
    const q = m.quoted || m
    let mime = q.mimetype || ''
    if (!/image\/webp/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await conn.toBuffer(media)
    await conn.sendFile(m.chat, out, 'imagen.png', 'Aquí está tu imagen convertida', m)

}
handler.help = ['toimg']
handler.tags = ['transformador']
handler.command = ['toimg4', 'jpg4', 'jpge4', 'png4']

handler.limit = true

export default handler
