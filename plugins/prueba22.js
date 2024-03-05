import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import * as fs from 'fs';

const handler = async (m, {conn, text, participants, isOwner, isAdmin}) => {
  try {
    const q = m.quoted ? m.quoted : m || m.text || m.sender;
    const c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender;
    const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, {[m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : {text: '' || c}}, {quoted: m, userJid: conn.user.id}), text || q.text, conn.user.jid);
    await conn.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
  } catch {
    const htextos = `${text ? text : '*Hola soy May-Bot*'}`;
    if (htextos) {
      await conn.relayMessage(m.chat, {extendedTextMessage: {text: `${htextos}\n`}}, {});
    }
  }
};

handler.command = /^(camilo|cami|camilin|camilito)$/i;
handler.group = true;
handler.admin = true;

export default handler;
