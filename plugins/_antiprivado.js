// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;

  const bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    const userKey = `user_${m.sender}`;
    global.db.data.users[userKey] = global.db.data.users[userKey] || { interacted: false };

    if (!global.db.data.users[userKey].interacted) {
      global.db.data.users[userKey].interacted = true;

      const respuestasAleatorias = [
        '¡Bienvenido! Gracias por tu mensaje. ¿En qué puedo ayudarte hoy?',
        'Hola, ¿cómo estás? Estoy aquí para responder tus preguntas.',
        'Saludos. ¿Necesitas ayuda o información sobre el bot?',
        'Hola, gracias por contactarme. ¿Hay algo específico en lo que pueda asistirte?'
        // Agrega más respuestas según sea necesario
      ];

      // Selecciona un mensaje al azar
      const respuestaAleatoria = respuestasAleatorias[Math.floor(Math.random() * respuestasAleatorias.length)];

      // Genera un tiempo de espera aleatorio entre 2 y 10 segundos
      const tiempoEspera = Math.floor(Math.random() * (10 - 2 + 1) + 2) * 1000;

      // Espera el tiempo aleatorio antes de responder
      setTimeout(async () => {
        // Responde al usuario con el mensaje seleccionado después del tiempo de espera
        await m.reply(respuestaAleatoria);

        // Bloquea al usuario después de responder
        await this.updateBlockStatus(m.chat, 'block');
      }, tiempoEspera);
    }
  }

  return !1;
}
