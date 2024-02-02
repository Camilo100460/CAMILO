import fetch from 'node-fetch';

const handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙷𝙰𝙱𝙻𝙰𝚁 𝙲𝙾𝙽 𝚂𝙸𝙼𝚂𝙸𝙼𝙸 𝙾 𝙴𝙻 𝙱𝙾𝚃*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} Hola bot*`;

  try {
    const simiApi = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    if (simiApi.ok) {
      const resSimi = await simiApi.json();
      m.reply(resSimi.success);
    } else {
      console.error('Error en la petición a SimSimi:', simiApi.status, simiApi.statusText);
      throw `*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾́𝙽 𝙰 𝚂𝙸𝙼𝚂𝙸𝙼𝙸*`;
    }
  } catch (error) {
    console.error('Error en el primer bloque catch:', error);
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`;
  }

  try {
    if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
    if (text.includes('hola')) text = text.replace('hola', 'Hello');
    if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');

    const translateApi = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
    if (translateApi.ok) {
      const resu = await translateApi.json();
      const nama = m.pushName || '1';

      const brainshopApi = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      if (brainshopApi.ok) {
        const res = await brainshopApi.json();

        const translateBackApi = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
        if (translateBackApi.ok) {
          const resu2 = await translateBackApi.json();
          m.reply(resu2[0][0][0]);
        } else {
          console.error('Error en la traducción de vuelta:', translateBackApi.status, translateBackApi.statusText);
          throw `*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝚃𝚁𝙰𝙳𝚄𝙲𝙲𝙸𝙾́𝙽 𝙰 𝚂𝙴𝚂𝙸𝙾́𝙽 𝙰𝙿𝙸*`;
        }
      } else {
        console.error('Error en la petición a BrainShop:', brainshopApi.status, brainshopApi.statusText);
        throw `*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾́𝙽 𝙰 𝙱𝚁𝙰𝙸𝙽𝚂𝙷𝙾𝙿*`;
      }
    } else {
      console.error('Error en la traducción inicial:', translateApi.status, translateApi.statusText);
      throw `*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝚃𝚁𝙰𝙳𝚄𝙲𝙲𝙸𝙾́𝙽 𝙳𝙴 𝙰𝙻𝙶𝙾 𝙹𝙾𝚂𝙴𝙿𝙷*`;
    }
  } catch (error) {
    console.error('Error en el segundo bloque catch:', error);
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`;
  }
};

handler.help = ['simi', 'bot'].map((v) => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;

export default handler;
