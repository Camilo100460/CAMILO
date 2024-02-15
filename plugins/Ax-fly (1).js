let lastUsed = 0;

let iqList = ['1', '14', '23', '35', '41', '50', '67', '72', '86', '99', '150', '340', '423', '500', '676', '780', '812', '945', '1000', '¡Ilimitado!', '5000', '7500', '10000'];

let handler = async (m, { conn, command, text }) => {
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙐 𝘾𝙊𝘾𝙄𝙀𝙉𝙏𝙊 𝙌𝙐𝙊𝘾𝙄𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝙊`

    // Obtener el tiempo actual en milisegundos
    let currentTime = Date.now();

    // Verificar si ha pasado al menos 30 segundos desde el último uso
    if (currentTime - lastUsed < 30000) {
        m.reply("_⌛ Tiempo de uso del comando agotado. Por favor, vuelve a intentarlo más tarde._");
        return;
    }

    // Actualizar el tiempo del último uso
    lastUsed = currentTime;

    let iq = iqList[Math.floor(Math.random() * iqList.length)];
    let message = '';

    if (iq <= 50) {
        message = `_🧠 *${text}*, tu coeficiente intelectual es de *${iq}*. ¡No te preocupes, todos tenemos días malos! 👩🏻‍🎓_`;
    } else if (iq >= 1000) {
        message = `_🧠 *${text}*, tu coeficiente intelectual es de *${iq}*. ¡Eres un genio! 👩🏻‍🎓_`;
    } else {
        message = `_🧠 *${text}*, tu coeficiente intelectual es de *${iq}*. ¡Buen trabajo! 👩🏻‍🎓_`;
    }

    // Enviar la respuesta del "shippeo"
    m.reply(message, null, { mentions: conn.parseMention(message) })
}

handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^iqtest$/i

export default handler
