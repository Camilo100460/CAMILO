import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import MessageType from "@whiskeysockets/baileys";
import { performance } from "perf_hooks";

const handler = async (m, { conn, usedPrefix }) => {
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const wm = 'May-Bot';
  const info = `           _*TU - CARRERA*_


`.trim();
  ];
  const Message = {
    mimetype: "text/plain",
    text: info,
    footer: wm,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(JUEGO)$/i;
export default handler;
