/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
╭━━━━━━━━━━━━━━━━━╮
             「 𝐃𝐎𝐍𝐀𝐑 」      

_*HOLA USUARIO:*_  ${name}  🏖️
_*AQUÍ ALGUNOS DATOS POR SI DESEAS AYUDAR.*_ 

👤•  _*BENEFICIARIOS:*_  Andres Camilo y Valentina Espinosa 
💰•  _*CONCEPTO:*_  APOYO                  
💳 • _*PAYPAL:*_  https://www.paypal.me/camildaza

👉🏻 *SI TIENES ALGUNA SUGERENCIA O CONSEJO:*
📚 •  MI CREADOR: wa.me/573145699786

╰━━━━━━━━━━━━━━━━━╯
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
