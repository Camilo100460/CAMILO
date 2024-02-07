// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, { isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe) return !0; // Ignorar mensajes del propio bot
    if (m.isGroup) return !1; // No bloquear mensajes en grupos
    if (!m.message) return !0; // Ignorar mensajes sin contenido
    // Ignorar mensajes que contienen ciertas palabras clave
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !1;
    // Bloquear automáticamente mensajes privados al bot si no es el propietario o el propietario principal
    if (!isOwner && !isROwner) {
        const tiempoAleatorio = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;
        await new Promise(resolve => setTimeout(resolve, tiempoAleatorio));
        return !0; // Bloquear el mensaje
    }
    return !1; // No bloquear otros mensajes privados al bot
}

// Manejador para banear chats con el comando ".banchat"
const handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = true;
    m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export { handler };
