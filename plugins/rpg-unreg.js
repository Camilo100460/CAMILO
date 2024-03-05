import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '_*[❗𝐍𝐅𝐎❗] INGRESE SU NUMERO DE SERIE, SI NO LO RECUERDA PUEDE USAR EL COMANDO #myns*_';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] NUMERO DE SERIE INCORRECTO, 𝙲OMPRUEBE QUE LO HAYA ESCRITO CORRECTAMENTE!*\n\n*SI NO LO RECUERDA PUEDE USAR EL COMANDO #myns*';
  user.registered = false;
  m.reply(`*[ ✔ ] SE REALIZO CON EXITO, USTED YA NO ESTA REGISTRADO EN EL BOT*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
