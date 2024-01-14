// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`_*HOLA USUARIO BIENVENIDO*_  👋\n\n_Si deseas comprar o probar el bot, lo puedes hacer en nuestro canal de *ayuda al cliente*. Si tienes alguna sugerencia o consejo, también puedes realizarlo contactándote con nuestro creador o un administrador del grupo._\n\n📚 •  *Mi creador:* wa.me/573178454976\n\n👥 •  *Grupo de ayuda:* https://chat.whatsapp.com/KXkX5ZzZp3mFWYt5comZHr\n\n⚠️ *Está prohibido enviarle mensajes al privado del bot, por lo cual serás bloqueado.*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
