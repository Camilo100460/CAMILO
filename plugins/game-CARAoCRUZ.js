 //BY: VIRUZZ-OFC

let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
    let time = global.db.data.users[m.sender].wait + 40000
    let textos = `\`\`\`CARA O CRUZ\n\nPUEDES ELEGIR LA OPCION USADO LOS COMANDO\n\n${usedPrefix + command} cara\n${usedPrefix + command} cruz\n\n\`\`\``
    if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 𝙀𝙎𝙋𝙀𝙍𝘼 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙋𝙊𝘿𝙀𝙍 𝙑𝙊𝙇𝙑𝙀𝙍  𝘼 𝙅𝙐𝙂𝘼𝙍*\n\n*𝙒𝘼𝙄𝙏 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝘾𝙊𝙉𝘿𝙎 𝘽𝙀𝙁𝙊𝙍𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙋𝙇𝘼𝙔 𝘼𝙂𝘼𝙄𝙉*`, fkontak, m)
    if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
    var astro = Math.random()
    if (astro < 0.50) {
        astro = 'cara'
    } else if (astro > 0.50){
        astro = 'cruz' 
    }
    if (text == astro) {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
        else who = m.sender 
        let name = conn.getName(who) 
        let money0 = global.db.data.users[m.sender].money += 2
        m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} 𝙆𝙖𝙩𝙖𝙨𝙝𝙞�𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
    } else if (text == 'cara') {
        if (astro == 'cara') {
            let who
            if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
            else who = m.sender 
            let name = conn.getName(who) 
            let money0 = global.db.data.users[m.sender].money += 2
            m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} 𝙆𝙖𝙩𝙖𝙨𝙝𝙞�𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ] ━━━━━⬣`)
        } else {
            let who
            if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
            else who = m.sender 
            let name = conn.getName(who) 
            let money0 = global.db.data.users[m.sender].money -= 300
            m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} 𝙆𝙖𝙩𝙖𝙨𝙝𝙞�𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ] ━━━━━⬣`)
        }
    } else if (text == 'cruz') {
        if (astro == 'cruz') {
            let who
            if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
            else who = m.sender 
            let name = conn.getName(who) 
            let money0 = global.db.data.users[m.sender].money += 100
            m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} 𝙆𝙖𝙩𝙖𝙨𝙝𝙞�𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ] ━━━━━⬣`)
        } else {
            let who
            if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
            else who = m.sender 
            let name = conn.getName(who) 
            let money0 = global.db.data.users[m.sender].money -= 300
            m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} 𝙆𝙖𝙩𝙖𝙨𝙝𝙞�𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ] ━━━━━⬣`)
        }
    }
    global.db.data.users[m.sender].wait = new Date * 1
}
handler.help = ['suerte']
handler.tags = ['games']
handler.command = /^(lanzar)$/i
export default handler
