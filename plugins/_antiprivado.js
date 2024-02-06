// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    if (bot.antiPrivate && !isOwner && !isROwner) {
        // Generamos un tiempo aleatorio entre 3 y 10 segundos en milisegundos
        const tiempoAleatorio = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

        // Esperamos el tiempo aleatorio antes de bloquear al usuario
        await new Promise(resolve => setTimeout(resolve, tiempoAleatorio));

        // Luego, bloqueamos al usuario
        await this.updateBlockStatus(m.chat, 'block');
    }
    return !1;
}
