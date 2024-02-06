// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  // Verificar condiciones existentes
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;

  // Verificar configuración global y aplicar acciones
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    // Configuración anti-privado habilitada, enviar mensaje aleatorio y bloquear
    const randomMessages = [
      `_*< ANTI-PRIVADO />*_\n\n*[ ℹ️ ] La función antiprivado está habilitada, por lo tanto serás bloqueado.*`,
      // Agrega otros dos mensajes similares pero diferentes aquí
      // Ejemplo:
      `Otro mensaje aleatorio 1`,
      `Otro mensaje aleatorio 2`
    ];

    // Selecciona un mensaje aleatorio
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    // Envia el mensaje aleatorio y bloquea
    await m.reply(randomMessage, false, { mentions: [m.sender] });
    await this.updateBlockStatus(m.chat, 'block');
  }

  return !1;
}
