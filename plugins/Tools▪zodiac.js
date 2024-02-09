let horoscopos = {
    "Capricornio": ["Hoy será un gran día para ti.", "Deberías evitar tomar decisiones importantes hoy."],
    "Acuario": ["Hoy encontrarás algo que has estado buscando.", "Hoy es un buen día para aprender algo nuevo."],
    "Piscis": ["Hoy te sentirás inspirado para crear.", "Hoy es un buen día para relajarte y disfrutar."],
    "Aries": ["Hoy es un buen día para empezar un nuevo proyecto.", "Hoy es un buen día para hacer ejercicio y cuidar tu salud."],
    "Tauro": ["Hoy es un buen día para pasar tiempo con seres queridos.", "Hoy es un buen día para cuidar de ti mismo y relajarte."],
    "Geminis": ["Hoy es un buen día para aprender algo nuevo.", "Hoy es un buen día para expresar tus sentimientos a alguien especial."],
    "Cancer": ["Hoy es un buen día para hacer algo creativo.", "Hoy es un buen día para cuidar de tu salud y bienestar."],
    "Leo": ["Hoy es un buen día para enfrentar un desafío.", "Hoy es un buen día para pasar tiempo con amigos."],
    "Virgo": ["Hoy es un buen día para organizar y planificar.", "Hoy es un buen día para tomar un descanso y relajarte."],
    "Libra": ["Hoy es un buen día para resolver conflictos.", "Hoy es un buen día para disfrutar de las artes."],
    "Scorpion": ["Hoy es un buen día para enfrentar tus miedos.", "Hoy es un buen día para compartir tus sentimientos con alguien cercano."],
    "Sagitario": ["Hoy es un buen día para una aventura.", "Hoy es un buen día para aprender algo nuevo."]
}

function agregarHoroscopo(signo, horoscopo) {
    horoscopos[signo].push(horoscopo);
}

function obtenerHoroscopo(signo) {
    let horoscoposSigno = horoscopos[signo];
    let indiceAleatorio = Math.floor(Math.random() * horoscoposSigno.length);
    return horoscoposSigno[indiceAleatorio];
}

let handler = (m, { usedPrefix, command, text }) => {
    if (!text) throw `Ejemplo:\n${usedPrefix + command} 2003 02 25`

    const date = new Date(text)
    if (date == 'Fecha invalida, prueba con el siguiente formato AAAA MM DD Ejemplo: 2003 02 07 ') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `${age} - Feliz cumpleaños 🥳` : age

    const horoscopo = obtenerHoroscopo(zodiac)

    const teks = `
Edad : ${cekusia}
Signo zodical : ${zodiac}
Horoscopo : ${horoscopo}
`.trim()
    m.reply(teks)
}

handler.help = ['zodiac *2002 02 25*']
handler.tags = ['tools']

handler.command = /^zodia[kc]$/i

export default handler

const zodiak = [
    ["Capricornio", new Date(1970, 0, 1)],
    ["Acuario", new Date(1970, 0, 20)],
    ["Piscis", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Tauro", new Date(1970, 3, 21)],
    ["Geminis", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpion", new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
