const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] EL USUARIO\n ${conn.getName(m.sender)} ESTARA INACTIVO (𝙰𝙵𝙺), POR FAVOR NO LO ETIQUETEN* \n\n*📝• MOTIVO DE LA INACTIVIDAD (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
