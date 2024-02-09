const axios = require('axios');

async function getDailyHoroscope(sign) {
    const options = {
        method: 'GET',
        url: `https://horoscope-astrology.p.rapidapi.com/dailyphrase/${sign}`,
        headers: {
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

let handler = async (m, { usedPrefix, command, text }) => {
    let date;
    if (!text) {
        date = new Date(); // Usa la fecha actual si no se proporciona una fecha de nacimiento
    } else {
        date = new Date(text);
        if (date == 'Invalid Date') throw `Fecha inválida, prueba con el siguiente formato AAAA MM DD Ejemplo: 2003 02 07`;
    }

    const d = new Date();
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

    const zodiac = getZodiac(birth[1], birth[2]);
    const horoscope = await getDailyHoroscope(zodiac);

    const ageD = new Date(d - date);
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear();

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)];
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `${age} - ¡Feliz cumpleaños 🥳!` : age;

    const teks = `
Fecha de nacimiento: ${birth.join('-')}
Próximo cumpleaños: ${birthday.join('-')}
Edad: ${cekusia}
Signo zodiacal: ${zodiac}
Horóscopo diario: ${horoscope}
`.trim();
    m.reply(teks);
}

handler.help = ['zodiac *2002 02 25*'];
handler.tags = ['tools'];

handler.command = /^zodia[kc]$/i;

module.exports = handler;

const zodiak = [
    ["Capricornio", new Date(1970, 0, 1)],
    ["Acuario", new Date(1970, 0, 20)],
    ["Piscis", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Tauro", new Date(1970, 3, 21)],
    ["Géminis", new Date(1970, 4, 21)],
    ["Cáncer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Escorpio", new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio", new Date(1970, 11, 22)]
].reverse();

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day);
    return zodiak.find(([_,_d]) => d >= _d)[0];
}
