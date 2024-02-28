//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, { conn, usedPrefix, command, groupMetadata, participants, isPrems }) => {
    const date = global.db.data.users[m.sender].monster_hunt + 3600000; // 3600000 = 1 hora
    if (new Date - global.db.data.users[m.sender].monster_hunt < 3600000) {
        return m.reply(`*La Reina May te convocó para cazar a un enorme gigante que amenaza nuestras tierras. Aventura próxima:* ${msToTime(date - new Date())}`);
    }

    const monsters = ['Duende Maligno', 'Ogro Despiadado', 'Esqueleto Aterrador', 'Dragón Devastador', 'Demonio Infernal', 'Rey de los Duendes', 'Reina de las Hadas', 'Hidra Devoradora', 'Minotauro Furioso', 'Cíclope Colosal', 'Quimera Monstruosa', 'Vampiro Inmortal', 'Licántropo Salvaje', 'Fantasma Espeluznante', 'Espectro Siniestro', 'Bruja Malévola', 'Dragón de Fuego', 'Gigante Titánico', 'Kraken Devorador', 'Fénix Resplandeciente'];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    const exp = Math.floor(Math.random() * 1000) + 500; // Experiencia entre 500 y 1500
    const diamonds = Math.floor(Math.random() * 5) + 1; // Diamantes entre 1 y 5
    const coins = Math.floor(Math.random() * 500) + 100; // Monedas entre 100 y 600

    const success = Math.random() < 0.5; // 50% de probabilidad de éxito

    global.db.data.users[m.sender].monster_hunt = new Date * 1;

    if (success) {
        conn.reply(m.chat, `*¡Has cazado a un ${monster} y has ganado ${exp} de experiencia, ${diamonds} diamantes y ${coins} monedas!*`, m);
        global.db.data.users[m.sender].exp += exp;
        global.db.data.users[m.sender].diamonds += diamonds;
        global.db.data.users[m.sender].coins += coins;
    } else {
        const lostExp = Math.floor(Math.random() * 200) + 100; // Pérdida de experiencia entre 100 y 300
        conn.reply(m.chat, `*¡Intentaste cazar a un ${monster}, pero fue demasiado fuerte y perdiste ${lostExp} de experiencia!*`, m);
        global.db.data.users[m.sender].exp -= lostExp;
    }
}

handler.help = ['cazar'];
handler.tags = ['xp'];
handler.command = /^(monstruos)$/i;
handler.register = true;
handler.group = true;

export default handler;

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + " horas " + minutes + " minutos";
}
