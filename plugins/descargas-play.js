import axios from 'axios';
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
    const additionalText = command === 'play' ? 'audio' : 'vídeo';

    const texto1 = `_*< DESCARGAS - PLAY />*_\n\n▢ *Título:* ${yt_play[0].title}\n\n▢ *Publicado:* ${
      yt_play[0].ago
    }\n\n▢ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n\n▢ *Vistas:* ${`${MilesNumber(
      yt_play[0].views
    )}`}\n\n▢ *Autor:* ${yt_play[0].author.name}\n\n▢ *ID:* ${yt_play[0].videoId}\n\n▢ *Tipo:* ${
      yt_play[0].type
    }\n\n▢ *Enlace:* ${yt_play[0].url}\n\n▢ *Canal:* ${yt_play[0].author.url}\n\n*[ ℹ️ ] Se está enviando el ${additionalText}. espere...*`.trim();

    conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m });

    if (command === 'play') {
      await descargarArchivo(conn, m, yt_play[0].url, '3', 'mp3', limit_a1, limit_a2);
    } else if (command === 'play2') {
      await descargarArchivo(conn, m, yt_play[0].url, '4', 'mp4', limit1, limit2);
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

async function descargarArchivo(conn, m, url, tipo, extension, limiteInf, limiteSup) {
  try {
    const archivo = await global.API(`CFROSAPI/api/v1/ytmp${tipo}?url=${url}`);
    const ttl = videoInfo.title;
    const buff_archivo = await getBuffer(archivo);
    const fileSizeInMB = buff_archivo.byteLength / (1024 * 1024);

    if (fileSizeInMB >= limiteSup) {
      await conn.sendMessage(m.chat, { text: `*[ ✔ ] Descargue su ${tipo} en ${archivo}*` }, { quoted: m });
    } else {
      const tipoMensaje = fileSizeInMB >= limiteInf && fileSizeInMB <= limiteSup ? 'document' : tipo;

      await conn.sendFile(
        m.chat,
        buff_archivo,
        `${ttl}.${extension}`,
        `*< DESCARGAS - PLAY />*\n\n▢ *Título:* ${yt_play[0].title}`,
        m,
        false,
        { mimetype: `audio/${extension}` }
      );
    }
  } catch (error) {
    console.error(error);
    throw `_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error al descargar el ${tipo}. Por favor, inténtalo de nuevo más tarde.*`;
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
    throw '_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Ocurrió un error al obtener el buffer.
