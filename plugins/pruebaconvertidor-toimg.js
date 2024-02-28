import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command, mid }) => {
    const notStickerMessage = `Por favor, responde a un sticker con el comando ${usedPrefix + command}`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/image\/webp/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'imagen.png', null, m)
}

handler.help = ['toimg (responder)']
handler.tags = ['sticker']
handler.command = ['toimg2', 'img2', 'jpg2']

export default handler
