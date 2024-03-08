import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const rtime = (neww - old).toFixed(7);
  const wm = 'May-Bot';
  const info = `           _*INFO - ESTADO*_

👥•  _*Propi:*_ ANNA Y CAMILO
📞•  _*WA:*_ +573239900113
💳•  _*PayPal:*_ www.paypal.me/camildaza  
https://www.paypal.me/MayGarcia772

🏓•  _*Ping:*_ ${rtime}
⏱️•  _*Uptime:*_ ${uptime}
⚙️•  _*Prefijo:*_ ${usedPrefix}
🔒•  _*Modo:*_ ${self ? "privado" : "público"}
👤•  _*Usuarios regs:*_ ${totalusrReg}
👥•  _*Usuarios totales:*_ ${totalusr}
🤖•  _*Tipo de bot:*_ ${(conn.user.jid == global.conn.user.jid ? '' : `Sub-bot de:\n ▢ +${global.conn.user.jid.split`@`[0]}`) || 'No es sub-bot'}
 
💬•  _*Chats privados:*_ ${chats.length - groups.length}
👥•  _*Grupos:*_ ${groups.length}
💬•  _*Chats totales:*_ ${chats.length}
 
👀•  _*Autoread:*_ ${autoread ? "activo" : "desactivado"}
🔒•  _*Restrict:*_ ${restrict ? "activo" : "desactivado"}
💻•  _*Pconly:*_ ${pconly ? "activado" : "desactivado"}
👥•  _*Gponly:*_ ${gconly ? "activado" : "desactivado"}
🔒•  _*AntiPrivado:*_ ${antiprivado ? "activado" : "desactivado"}
📵•  _*AntiLlamada:*_ ${antiCall ? "activado" : "desactivado"}
🤖•  _*ModeJadiBot:*_ ${modejadibot ? "activado" : "desactivado"}`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `Documento`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com",
        mediaType: 2,
        previewType: "pdf",
        title: "May - Bot",
        body: "Repositorio - GitHub",
        thumbnail: imagen1,
        sourceUrl: "https://github.com",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(ping|info|status|estado|infobot|INFOBOT)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
