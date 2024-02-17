let lastUsed = 0;

let iqList = {
    '1': '¡No te preocupes, todos tenemos días malos!',
    '14': '¡Sigue intentándolo, la práctica hace al maestro!',
    '23': '¡No te desanimes, cada día es una oportunidad para aprender algo nuevo!',
    '35': '¡Recuerda, el fracaso es solo la oportunidad de comenzar de nuevo de manera más inteligente!',
    '41': '¡No te preocupes, el tamaño del cerebro no determina la inteligencia!',
    '50': '¡Sigue adelante, cada pequeño paso cuenta!',
    '67': '¡Buen trabajo, sigue así!',
    '72': '¡Estás progresando, sigue así!',
    '86': '¡Estás haciendo un gran trabajo, sigue así!',
    '99': '¡Impresionante, estás en el camino correcto!',
    '150': '¡Excelente, estás superando las expectativas!',
    '340': '¡Increíble, tu inteligencia es asombrosa!',
    '423': '¡Eres un genio, sigue brillando!',
    '¡Ilimitado!': '¡Tu inteligencia no tiene límites, eres extraordinario!'
};

let handler = async (m, { conn, command, text }) => {
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙐 𝘾𝙊𝘾𝙄𝙀𝙉𝙏𝙊 𝙌𝙐𝙊𝘾𝙄𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝙊`

    // Obtener el tiempo actual en milisegundos
    let currentTime = Date.now();

    // Verificar si ha pasado al menos 30 segundos desde el último uso
    if (currentTime - lastUsed < 30000) {
        m.reply("_⌛ Tiempo de uso del comando agotado. Por favor, vuelve a intentarlo más tarde._");
        return;
    }

    // Actualizar el tiempo del último uso
    lastUsed = currentTime;

    let iqKeys = Object.keys(iqList);
    let iq = iqKeys[Math.floor(Math.random() * iqKeys.length)];
    let message = `_🧠 *${text}*, tu coeficiente intelectual es de *${iq}*. ${iqList[iq]} 👩🏻‍🎓_`;

    // Enviar la respuesta del "shippeo"
    m.reply(message, null, { mentions: conn.parseMention(message) })
}

handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^iqtest$/i

export default handler
