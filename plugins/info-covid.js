import fetch from 'node-fetch';

const handler = async (m, {text, usedPrefix, command}) => {
  try {
    if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙿𝙰𝙸𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 ${usedPrefix + command} Mexico*`;

    const res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)));
    if (!res.ok) throw await res.text();

    const json = await res.json();
    if (!json.confirmed) throw 'País?';

    m.reply(`
🌏 País : ${text}
✅ Confirmado : ${json.confirmed.value}
📉 Curado : ${json.recovered.value}
☠️ Muertes : ${json.deaths.value}
💌 Info Actualizada : ${json.lastUpdate}
`.trim());
  } catch (error) {
    m.reply(`Ha ocurrido un error: ${error}`);
  }
};

handler.help = ['covid'].map((v) => v + ' <país>');
handler.tags = ['info'];
handler.command = /^(corona|covid|covid19)$/i;

export default handler;
