import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] _*YA ESTAS REGISTRADO*_\n\n_*¿QUIERE VOLVER A REGISTRARSE?*_\n\n 📌 USE ESTE COMANDO PARA ELIMINAR SU REGISTRO\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] FORMATO INCORRECTO*\n\n*🖥️• USO DEL COMANDO: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} May.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '[❗𝐈𝐍𝐅𝐎❗] _*DEBES PONER UN NOMBRE*_';
  if (!age) throw '[❗𝐈𝐍𝐅𝐎❗] _*LA EDAD NO PUEDE ESTAR VACIA*_';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] _*EL NOMBRE ES DEMASIADO LARGO*_';
  age = parseInt(age);
  if (age > 100) throw '*[❗] Kheee, como sigues vivo con esa edad? 👴🏻*';
  if (age < 5) throw '*[❗] Kheee, un bebé que sabe usar WhatsApp? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
const caption = `
╭━━━[ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 ]━━━━⬣
┃
┃ 📛 • _*NOMBRE:*_ ${name}
┃ 🎂 • _*EDAD:*_ ${age} años
┃ 🔢 • _*NUMERO DE SERIE:*_ 
┃ 
┃ ${sn}
┃     
╰━━━━━━━━━━━━━━━━━━⬣
`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
