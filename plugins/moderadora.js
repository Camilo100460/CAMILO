let handler = async (m, { conn, args }) => {
    let don = `
╭──═[ *𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍𝘼* ]═─⋆
│╭───────────────···
┴│✯ *🗳️ ɴᴏᴍʙʀᴇ* : 𝘓𝘜𝘕𝘈
✩│✯  𝙉𝙧𝙤 : 
✯│✯ wa.me/51959686495
✩│✯  ᴇʟʟᴀ ᴇꜱ ᴍɪ ᴍᴏᴅ
┬│✯ 💫 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙧 𝙘𝙤𝙣 𝙚𝙡𝙡𝙖 
││✯ 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙞𝙣𝙘𝙤𝙣𝙛𝙤. 
││✯ 𝙤 𝙥𝙧𝙤𝙗𝙡𝙚𝙢𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙗𝙤𝙩 
│╰────────────────···
╰───────────═┅═───
`
    let img = 'https://telegra.ph/file/2f4276cf4be66de812290.jpg'
    conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['moderadora', 'md', 'mod'] 

export default handler
