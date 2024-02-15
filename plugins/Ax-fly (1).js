let lastUsed = 0;

let handler = async (m, { conn, command, text }) => {
    if (command === "iqtest") {
        if (!text) throw `⚠️ Debes mencionar a una persona para hacer el test de IQ.`;
        let iq = Math.floor(Math.random() * 200) + 1; // Genera un IQ aleatorio entre 1 y 200
        m.reply(`El IQ de ${text} es: ${iq}`);
        return;
    }

    let currentTime = Date.now();

    if (currentTime - lastUsed < 30000) {
        m.reply("_⌛ Tiempo de uso del comando agotado. Por favor, vuelve a intentarlo más tarde._");
        return;
    }

    lastUsed = currentTime;
}

handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^iqtest$/i

export default handler
