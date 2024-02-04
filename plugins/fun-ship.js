let handler = async (m, { conn, command, text }) => {
    const cooldownTime = 10000; // 10 segundos de tiempo de espera

    // Verificar si el usuario está en cooldown
    if (cooldown[m.sender]) {
        const remainingTime = cooldown[m.sender] - Date.now();
        m.reply(`Espera ${Math.ceil(remainingTime / 1000)} segundos antes de usar este comando nuevamente.`);
        return;
    }

    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘿𝙊𝙎 𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙎 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙐 𝘼𝙈𝙊𝙍`
    
    let [text1, ...text2] = text.split(' ')
    text2 = (text2 || []).join(' ')
    
    if (!text2) throw `⚠️ 𝙁𝘼𝙇𝙏𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼`

    let love = `_❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻_`.trim();
    
    m.reply(love, null, { mentions: conn.parseMention(love) });

    // Configurar el temporizador para evitar el uso frecuente del comando
    cooldown[m.sender] = Date.now() + cooldownTime;
};

handler.help = ['ship'];
handler.tags = ['fun'];
handler.command = /^ship|shippear$/i;

export default handler;
