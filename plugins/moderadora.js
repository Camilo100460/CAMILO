let handler = async (m, { conn, args }) => {
    let don = `
╭━━━━━━━━━━━━━━━━━╮
             [ *𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍𝘼* ]      

 *🗳️ ɴᴏᴍʙʀᴇ* : 𝘈𝘕𝘈
𝙉𝙧𝙤 : 
📚 wa.me/573239900113
ᴇʟʟᴀ ᴇꜱ ᴍɪ ᴍᴏᴅ
💫 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙧 𝙘𝙤𝙣 𝙚𝙡𝙡𝙖 
𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙞𝙣𝙘𝙤𝙣𝙛𝙤.
𝙤 𝙥𝙧𝙤𝙗𝙡𝙚𝙢𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙗𝙤𝙩

╰━━━━━━━━━━━━━━━━━╯
`
    let img = 'https://i.ibb.co/cFWtf5J/Imagen-de-Whats-App-2024-03-08-a-las-23-07-21-681f880d.jpg'
    conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['moderadora', 'md', 'mod'] 

export default handler
