import fetch from 'node-fetch';
import axios from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fs from 'fs';
import yts from 'yt-search';

// Constantes y configuración
const limit_a1 = 50;
const limit_a2 = 400;
const limit1 = 100;
const limit2 = 400;

const handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) {
    throw `_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Hace falta el título o enlace del video de YouTube.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
  }

  try {
    const yt_play = await search(args.join(' '));
    let additionalText = command === 'play' ? 'audio' : 'vídeo';

    const texto1 = `_*< DESCARGAS - PLAY />*_\n\n▢ *Título:* ${yt_play[0].title}\n\n▢ *Publicado:* ${
      yt_play[0].ago
    }\n\n▢ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n\n▢ *Vistas:* ${`${MilesNumber(
      yt_play[0].views
    )}`}\n\n▢ *Autor:* ${yt_play[0].author.name}\n\n▢ *ID:* ${yt_play[0].videoId}\n\n▢ *Tipo:* ${
      yt_play[0].type
    }\n\n▢ *Enlace:* ${yt_play[0].url}\n\n▢ *Canal:* ${yt_play[0].author.url}\n\n*[ ℹ️ ] Se está enviando el ${additionalText}. espere...*`.trim();

    conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m });

    if (command === 'play') {
      await descargarAudio(conn, m, yt_play[0]);
    } else if (command === 'play2') {
      await descargarVideo(conn, m, yt_play[0]);
    }
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*';
  }
};

handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({ query, hl: 'es', gl: 'ES', ...options });
  return search.videos;
}

async function descargarAudio(conn, m, videoInfo) {
  try {
    const audio = await global.API('CFROSAPI', `/api/v1/ytmp3?url=${videoInfo.url}`);
    const ttl = videoInfo.title;
    const buff_aud = await getBuffer(audio);
    const fileSizeInMB = buff_aud.byteLength / (1024 * 1024);

    if (fileSizeInMB >= limit_a2) {
      await conn.sendMessage(m.chat, { text: `*[ ✔ ] Descargue su audio en ${audio}*` }, { quoted: m });
    } else {
      const tipoMensaje = fileSizeInMB >= limit_a1 && fileSizeInMB <= limit_a2 ? 'document' : 'audio';

      await conn.sendMessage(m.chat, { [tipoMensaje]: buff_aud, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error al descargar el audio. Por favor, inténtalo de nuevo más tarde.*';
  }
}

async function descargarVideo(conn, m, videoInfo) {
  try {
    const video = await global.API('CFROSAPI', `/api/v1/ytmp4?url=${videoInfo.url}`);
    const ttl2 = videoInfo.title;
    const buff_vid = await getBuffer(video);
    const fileSizeInMB2 = buff_vid.byteLength / (1024 * 1024);

    if (fileSizeInMB2 >= limit2) {
      await conn.sendMessage(m.chat, { text: `_*< DESCARGAS - PLAY />*_\n\n*[ ✔ ] Descargue su vídeo en ${video}*` }, { quoted: m });
    } else {
      const tipoMensaje = fileSizeInMB2 >= limit1 && fileSizeInMB2 <= limit2 ? 'document' : 'video';

      await conn.sendMessage(m.chat, { [tipoMensaje]: buff_vid, mimetype: 'video/mp4', fileName: `${ttl2}.mp4` }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error al descargar el vídeo. Por favor, inténtalo de nuevo más tarde.*';
  }
}

async function getBuffer(url, options) {
  try {
    options = options || {};
    const res = await axios({
      method: 'get',
      url,
      headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 },
      ...options,
      responseType: 'arraybuffer',
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error al obtener el buffer. Por favor, inténtalo de nuevo más tarde.*';
  }
}

function MilesNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return `${d > 0 ? d + (d === 1 ? 'd ' : 'd ') : ''}${h > 0 ? h + (h === 1 ? 'h ' : 'h ') : ''}${
    m > 0 ? m + (m === 1 ? 'm ' : 'm ') : ''
  }${s > 0 ? s + (s === 1 ? 's' : 's') : ''}`;
}
