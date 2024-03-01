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
  // Eliminado el código relacionado con el envío de documentos
  const Message = {
    // document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    // mimetype: `application/${docType}`,
    // fileName: `Documento`,
    // fileLength: 99999999999999,
    // pageCount: 0,
    contextInfo: {
      forwardingScore: 0,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com",
        mediaType: 2,
        previewType: "pdf",
        title: "May - Bot",
        body: "Repositorio - GitHub",
        thumbnail: imagen1, // Manteniendo la línea del thumbnail
        sourceUrl: "https://github.com",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(JUEGO)$/i;
export default handler;
