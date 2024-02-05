// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return true;

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
        'Hola, gracias por contactarme. ¿Hay algo específico en lo que pueda asistirte?',
        'Hola! ¿Existe algo específico con lo que pueda asistirte hoy?',
        'Buen día! ¿Hay algo con lo que pueda ayudarte?',
        '¡Hola! ¿En qué puedo ayudarte en este momento?',
        '¡Saludos! ¿Cómo puedo asistirte hoy?',
        '¡Hola! ¿Hay alguna pregunta que pueda responder por ti?',
        '¡Bienvenido! ¿Cómo puedo asistirte hoy?',
        '¡Hola! ¿Existe algún tema en particular en el que estés interesado?',
        '¡Hola! ¿Hay algo en lo que pueda ayudarte en este momento?',
        '¡Saludos! ¿Hay alguna información específica que estés buscando?'
        // Agrega más respuestas según sea necesario
      ];

      // Selecciona un mensaje aleatorio
      const respuestaAleatoria = respuestasAleatorias[Math.floor(Math.random() * respuestasAleatorias.length)];

      // Responde al usuario con el mensaje seleccionado
      try {
        await conn.sendMessage(m.chat, respuestaAleatoria, 'conversation', { quoted: m, mentions: [m.sender] });
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
      }

      // Bloquea al usuario después de responder
      try {
        await conn.contactBlock(m.sender, 'add');
      } catch (error) {
        console.error('Error al bloquear contacto:', error);
      }
    }
  }

  return false;
}
