import { canLevelUp, xpRange } from '../lib/levelling.js'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    // Verificar si el usuario está definido en la base de datos
    if (!global.db.data.users[who]) return m.reply(`El usuario no está registrado en la base de datos!`)

    // Acceder a las propiedades del usuario
    let user = global.db.data.users[who]
    let health = user.health
    let armor = user.armor
    let ardurability = user.armordurability
    let sword = user.sword
    let sdurability = user.sworddurability
    let pickaxe = user.pickaxe
    let pdurability = user.pickaxedurability
    let axe = user.axe
    let adurability = user.axedurability
    let rod = user.fishingrod
    let rdurability = user.fishingroddurability

    //Minerales
    let emerald = user.emerald
    let red_diamond = user.red_diamond
    let diamond = user.diamond
    let gold = user.gold
    let iron = user.iron
    let stone = user.rock
    let tminerals = emerald + red_diamond + diamond + gold + iron + stone

    //Madera
    let wood = user.wood

    //Frutas
    let strawberry = user.strawberry
    let watermelon = user.watermelon
    let grape = user.grape
    let kiwi = user.kiwi

    //Peces
    let blowfish = user.blowfish
    let tropicalfish = user.tropicalfish
    let commonfish = user.commonfish

    //Cofres
    let common = user.common
    let uncommon = user.uncommon
    let mythic = user.mythic
    let legendary = user.legendary
    let pet = user.pet

    //Mascotas
    let fox = user.fox
    let _fox = user.foxexp
    let dog = user.dog
    let _dog = user.dogexp
    let cat = user.cat
    let _cat = user.catexp
    let horse = user.horse
    let _horse = user.horseexp
    let loro = user.loro
    let _loro = user.loroexp

    //Otros
    let seed = user.seed
    let potion = user.potion
    let chest = user.chest
    let string = user.string
    let box = user.box
    let trash = user.trash

    let money = user.money

    let { name, exp, cookie, lastclaim, registered, regTime, age, level, role } = user
    let { min, xp, max } = xpRange(level, global.multiplier)

    if (global.db.data.users[who] == undefined) return m.reply(`El usuario no está registrado en la base de datos!`)

    let inv = `*Inventario de @${m.sender.split`@`[0]}*

*❤ Vida:* ${health}
*💵 Dinero:* ${shortNum(money)}
*🍪 Galletas:* ${cookie}
*📈 Nivel:* ${level}
*✨ Exp:* ${exp}

\t\t*᭥🛡️᭢ 𝔼ℚ𝕌𝕀ℙ𝔸𝕄𝕀𝔼ℕ𝕋𝕆*

*👕 Armadura de:* ${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'cuero' : '' || armor == 2 ? 'hierro' : '' || armor == 3 ? 'oro' : '' || armor == 4 ? 'diamante' : '' || armor == 5 ? 'esmeralda': '' || armor == 6 ? ' olimpo' : '' || armor == 7 ? 'obsidiana' : '' || armor == 8 ? 'abisal' : '' || armor == 9 ? 'de dragón' : '' || armor == 10 ? 'celestial' : '' || armor == 11 ? 'hacker' : ''}
*🔹 Durabilidad:* ${ardurability}%

*🗡️ Espada de:* ${sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': ''|| sword == 6 ? 'diamante' : ''|| sword == 7 ? 'esmeralda' : '' || sword == 8 ? 'obsidiana' : '' || sword == 9 ? 'abisal' : '' || sword == 10 ? 'samurai sagrada' : '' || sword == 11 ? 'hacker' : ''}
*🔹 Durabilidad:* ${sdurability}%

*⛏️ Pico de:* ${pickaxe == 0 ? 'No tiene' : '' || pickaxe == 1 ? 'madera' : '' || pickaxe == 2 ? 'piedra' : '' || pickaxe == 3 ? 'hierro' : '' || pickaxe == 4 ? 'oro' : '' || pickaxe == 5 ? 'cobre': '' || pickaxe == 6 ? 'diamante' : '' || pickaxe == 7 ? 'esmeralda' : '' || pickaxe == 8 ? 'obsidiana' : '' || pickaxe == 9 ? 'netherite' : '' || pickaxe == 10 ? 'hacker' : '' || pickaxe == 11 ? 'dioses' : ''}
*🔹 Durabilidad:* ${pdurability}%

*🎣 Caña:* ${rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : ''}
*🔹 Durabilidad:* ${rdurability}%


\t\t*᭥🎒️᭢ 𝕀𝕋𝔼𝕄𝕊*

──────────────
*_► ⛰️ ◜Minerales◞_*
──────────────
*💎 • Diamante:* ${diamond}
*🍀 • Esmeralda:* ${emerald}
*🔩 • Hierro:* ${iron}
*🪙 • Oro:* ${gold}
*🪨 • Piedra:* ${stone}

──────────────
*_► 🫐 ◜Frutas◞_*
──────────────
*🍓 • Fresa:* ${strawberry}
*🍉 • Sandía:* ${watermelon}
*🍇 • Uva:* ${grape}
*🥝 • Kiwi:* ${kiwi}

──────────────
*_► 🐋 ◜Peces◞_*
──────────────
*🐠 • Tropical:* ${tropicalfish}
*🐡 • Globo:* ${blowfish}
*🐟 • Comun:* ${commonfish}
*🦀 • Cangrejo:* 
*🦞 • Langosta:*
*🦐 • Camarón:*
*🦑 • Calamar:*
*🐙 • Pulpo:*

──────────────
*_► 📦 ◜Cofres◞_*
──────────────
*🥡 • Común:* ${common}
*📦 • Poco común:* ${uncommon}
*🎁 • Mítico:* ${mythic}
*🧰 • Legendario:* ${legendary}
*🐾 • Caja de mascotas:* ${pet}

──────────────
*_► 🍱 ◜Otros items◞_*
──────────────
*🪵 • Madera:* ${wood}
*🧪 • Poción:* ${potion}
*🪢 • Cuerda:* ${string}
*🗑️ • Basura:* ${trash}

\t\t*᭥📊᭢ ℙℝ𝕆𝔾ℝ𝔼𝕊𝕆*
╭──────────────
│👤 *◜Tu nivel◞* ${level} ➯ ${level + 1}
│Exp: ${exp} -> ${max <= 0 ? `\n│Use ${usedPrefix}levelup para subir de nivel!` : `${max}`}
╰──────────────
╭──────────────
│🦊 *◜Zorro◞* ${fox == 0 ? 'No tiene' : '' || fox > 0 && fox < 5 ? `nivel ${fox} ➯ ${fox + 1}\n│Exp: ${_fox} -> ${fox * 100}` : '' || fox == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐺 *◜Lobo◞* ${dog == 0 ? 'No tiene' : '' || dog > 0 && dog < 5 ? `nivel ${dog} ➯ ${dog + 1}\n│Exp: ${_dog} -> ${dog * 100}` : '' || dog == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐱 *◜Gato◞* ${cat == 0 ? 'No tiene' : '' || cat > 0 && cat < 5 ? `nivel ${cat} ➯ ${cat + 1}\n│Exp: ${_cat} -> ${cat * 100}` : '' || cat == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐎 *◜Caballo◞* ${horse == 0 ? 'No tiene' : '' || horse > 0 && horse < 5 ? `nivel ${horse} ➯ ${horse + 1}\n│Exp: ${_horse} -> ${horse * 100}` : '' || horse == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🦜 *◜Loro◞* ${loro == 0 ? 'No tiene' : '' || loro > 0 && loro < 5 ? `nivel ${loro} ➯ ${loro + 1}\n│Exp: ${_loro} -> ${loro * 100}` : '' || loro == 5 ? 'Nivel maximo' : ''}
╰──────────────
`

    let buttonMessage= {
    'document': { url: `https://github.com/ALBERTO9883` },
    'mimetype': `application/pdf`,
    'fileName': `🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
    'forwardingScore': 200,
    'isForwarded': true,
    'externalAdReply': {
    'mediaUrl': 'https://github.com/ALBERTO9883',
    'mediaType': 2,
    'previewType': 'pdf',
    'title': `🎒₊• ̥ 𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢  •̥₊🎒`,
    'body': ``,
    'thumbnail': global.imginv,
    'sourceUrl': 'https//wa.me/50499698072' }},
    'mentions': [m.sender],
    'caption': inv,
    'footer': `\n${global.saludo}`,
    'buttons':[
    {buttonId: `${usedPrefix}shop`, buttonText: {displayText: 'Tienda⛺'}, type: 1}],
    'headerType': 6 }

    conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inv|inventario)$/i

handler.restrict = true

export default handler

function reText(text) {
    return text.replace(/a/g, 'α')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function shortNum(num) {
    return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function priceNum(num) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num).replace('.00', '').replace(/,/g, '.')
}
