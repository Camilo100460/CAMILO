const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `🎌 *Escriba su reporte*\n\nEjemplo, .${command} el comando .infobot no funciona*`;
  if (text.length < 10) throw `🚩 *Mínimo 10 caracteres para hacer el reporte*`;
  if (text.length > 1000) throw `🚩 *Máximo 1000 caracteres para hacer el reporte.*`;
  const teks = `⚠️ *Reporte* ⚠️\n\n⬡ *Numero*\nWa.me/${m.sender.split`@`[0]}\n\n⬡ *Mensaje*\n${text}`;
  conn.reply('573239900113@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`🚩 *El reporte se envió a mi creador, tendrá una respuesta más tarde*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
