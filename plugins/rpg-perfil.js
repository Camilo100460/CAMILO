import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/06cc652844ea19e8aed1c.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `         |• _*PERFIL INFO*_ •| 📖
    
📝• _*NOMBRE:*_ ${username} ${registered ? '(' + name + ') ': ''}
📞• _*NUMERO:*_ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗• _*LINK:*_ wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
🚧• _*LIMITE:*_ ${limit}  _usos_
📔• _*REGISTRADO:*_ ${registered ? 'Si': 'No'}
🌟• _*PREMIUM:*_ ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
🧮• _*NUMERO DE SERIE:*_ 
${sn}
★ ━━━━━━━━━━━━━━━━━━ ★`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
export default handler;
