let handler = async (m, { usedPrefix, command, text }) => {
    if (!text) throw `Ejemplo:\n${usedPrefix + command} 2003-02-25`

    const [year, month, day] = text.split('-').map(Number)
    const date = new Date(year, month - 1, day)

    if (isNaN(date)) throw `Fecha inválida, por favor usa el siguiente formato: AAAA-MM-DD. Por ejemplo: ${usedPrefix + command} 2003-02-25`

    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth() + 1
    const currentDay = today.getDate()

    const birth = [year, month, day]
    const horoscopo = getHoroscopo(month, day)

    const ageD = new Date(today - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const isBirthday = month === currentMonth && day === currentDay
    const ageText = isBirthday ? `${age} - ¡Feliz cumpleaños! 🥳` : age

    const replyText = `
Fecha de nacimiento: ${birth.join('-')}
Edad: ${ageText}
Signo horóscopo: ${horoscopo}
`.trim()

    m.reply(replyText)
}

handler.help = ['horóscopo <YYYY-MM-DD>']
handler.tags = ['tools']
handler.command = /^hor[oó]scopo$/i

const horoscopos = [
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
].reverse()

function getHoroscopo(month, day) {
    const dateToCheck = new Date(1970, month - 1, day)
    return horoscopos.find(([_, date]) => dateToCheck >= date)[0]
}

export default handler
