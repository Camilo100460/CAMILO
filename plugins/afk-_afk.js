export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  _*[❗𝐈𝐍𝐅𝐎❗] DEJASTE DE ESTAR INACTIVO (AFK)${user.afkReason ? ' DESPUES DE ESTAR INACTIVO (AFK) POR EL MOTIVO: ' + user.afkReason : ''}*_
  
  _*⏰•  TIEMPO DE INACTIVIDAD (AFK): ${(new Date - user.afk).toTimeString()}*_
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 [❗]*

_*🧑‍💻•  EL USUARIO QUE USTED ETIQUETO ESTA INACTIVO (AFK)*_     
_*📝•  ${reason ? 'MOTIVO DE INACTIVIDAD (AFK): ' + reason : 'MOTIVO DE INACTIVIDAD (AFK): _EL USUARIO NO ESPECIFICO UN MOTIVO_'}*_
_*⏰•  TIEMPO TRANSCURRIDO DE INACTIVIDAD (AFK): ${(new Date - afkTime).toTimeString()}*_
  `.trim());
  }
  return true;
}
