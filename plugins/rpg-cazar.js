const handler = async (m, { conn, usedPrefix, command, groupMetadata, participants, isPrems }) => {
    const date = global.db.data.users[m.sender].monster_hunt + 3600000; // 3600000 = 1 hora
    if (new Date - global.db.data.users[m.sender].monster_hunt < 3600000) {
        return m.reply(`🏹 *La Reina May te convocó para cazar a un enorme gigante que amenaza nuestras tierras.*/n/n ⏰ • *Aventura próxima:* ${msToTime(date - new Date())}`);
    }

    const monsters = [
        { name: 'Duende Maligno 🧝', story: 'Viajaste a través de un bosque oscuro y misterioso para enfrentarte al Duende Maligno que había estado aterrorizando a los aldeanos.' },
        { name: 'Espectro del Pantano 👻', story: 'Navegaste a través de un pantano sombrío y siniestro para enfrentarte al Espectro del Pantano que había estado atormentando a los aldeanos con sus lamentos y susurros fantasmales.' },
        { name: 'Gigante de las Montañas 🏔️', story: 'Escalaste las imponentes montañas para enfrentarte al Gigante de las Montañas, cuyos pasos retumbantes y rugidos ensordecedores habían llenado de temor los corazones de los aldeanos.' },
        { name: 'Basilisco de la Caverna 🐍', story: 'Te adentraste en una oscura caverna para enfrentarte al Basilisco, una criatura con la mirada petrificante que había convertido a los habitantes cercanos en estatuas de piedra.' },
        { name: 'Fénix de la Llama Eterna 🔥', story: 'iajaste a través de un desierto ardiente para encontrar al Fénix de la Llama Eterna, un pájaro legendario cuyas llamas devastadoras habían amenazado con consumir todo a su paso.' },
        { name: 'Leviatán de las Profundidades 🌊', story: 'Navegaste por aguas peligrosas para enfrentarte al Leviatán de las Profundidades, una criatura marina colosal cuyas embestidas habían causado estragos en los barcos de los pescadores locales.' },
        { name: 'Kraken del Abismo 🦑', story: 'Te aventuraste en lo más profundo del océano para enfrentarte al Kraken del Abismo, una bestia tentacular cuyo abrazo era capaz de aplastar los barcos más grandes.' },
        { name: 'Ogro Despiadado 🦍', story: 'Te adentraste en las montañas rocosas para desafiar al Ogro Despiadado que había estado causando estragos en las caravanas comerciales.' },
        // Agrega aquí el resto de los monstruos con sus respectivas historias...
    ];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    const exp = Math.floor(Math.random() * 1000) + 500; // Experiencia entre 500 y 1500
    const diamonds = Math.floor(Math.random() * 5) + 1; // Diamantes entre 1 y 5
    const coins = Math.floor(Math.random() * 500) + 100; // Monedas entre 100 y 600

    const success = Math.random() < 0.5; // 50% de probabilidad de éxito

    global.db.data.users[m.sender].monster_hunt = new Date * 1;

    if (success) {
        conn.reply(m.chat, `🎉 *${monster.story} Has cazado al enorme ${monster.name} y tu recompensa fue: ${exp} de experiencia, ${diamonds} 💎 diamantes y ${coins} 💰 monedas!*`, m);
        global.db.data.users[m.sender].exp += exp;
        global.db.data.users[m.sender].diamonds += diamonds;
        global.db.data.users[m.sender].coins += coins;
    } else {
        const lostExp = Math.floor(Math.random() * 200) + 100; // Pérdida de experiencia entre 100 y 300
        conn.reply(m.chat, `😢 *¡Intentaste cazar al enorme ${monster.name}, pero fue demasiado fuerte y perdiste ${lostExp} de experiencia!*`, m);
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
