import { xpRange } from '../lib/levelling.js'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    if (!global.db.data.users[who]) return m.reply(`El usuario no está registrado en la base de datos!`)

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

    // Resto de las propiedades del usuario...

    let money = user.money

    let { name, exp, cookie, level } = user
    let { min, xp, max } = xpRange(level, global.multiplier)

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
*► ⛰️ Minerales*
──────────────
*💎 • Diamante:* ${user.diamond}
*🍀 • Esmeralda:* ${user.emerald}
*🔩 • Hierro:* ${user.iron}
*🪙 • Oro:* ${user.gold}
*🪨 • Piedra:* ${user.rock}

*► 🫐 Frutas*
──────────────
*🍓 • Fresa:* ${user.strawberry}
*🍉 • Sandía:* ${user.watermelon}
*🍇 • Uva:* ${user.grape}
*🥝 • Kiwi:* ${user.kiwi}

*► 🐋 Peces*
──────────────
*🐠 • Tropical:* ${user.tropicalfish}
*🐡 • Globo:* ${user.blowfish}
*🐟 • Comun:* ${user.commonfish}

*► 📦 Cofres*
──────────────
*🥡 • Común:* ${user.common}
*📦 • Poco común:* ${user.uncommon}
*🎁 • Mítico:* ${user.mythic}
*🧰 • Legendario:* ${user.legendary}
*🐾 • Caja de mascotas:* ${user.pet}

*► 🍱 Otros items*
──────────────
*🪵 • Madera:* ${user.wood}
*🧪 • Poción:* ${user.potion}
*🪢 • Cuerda:* ${user.string}
*🗑️ • Basura:* ${user.trash}

*᭥📊᭢ ℙℝ𝕆𝔾ℝ𝔼𝕊𝕆*
👤 *Tu nivel* ${level} ➯ ${level + 1}
Exp: ${exp} -> ${max <= 0 ? `\nUse ${usedPrefix}levelup para subir de nivel!` : `${max}`}

🦊 *Zorro* ${user.fox == 0 ? 'No tiene' : '' || user.fox > 0 && user.fox < 5 ? `nivel ${user.fox} ➯ ${user.fox + 1}\nExp: ${user._fox} -> ${user.fox * 100}` : '' || user.fox == 5 ? 'Nivel máximo' : ''}

🐺 *Lobo* ${user.dog == 0 ? 'No tiene' : '' || user.dog > 0 && user.dog < 5 ? `nivel ${user.dog} ➯ ${user.dog + 1}\nExp: ${user._dog} -> ${user.dog * 100}` : '' || user.dog == 5 ? 'Nivel máximo' : ''}

🐱 *Gato* ${user.cat == 0 ? 'No tiene' : '' || user.cat > 0 && user.cat < 5 ? `nivel ${user.cat} ➯ ${user.cat + 1}\nExp: ${user._cat} -> ${user.cat * 100}` : '' || user.cat == 5 ? 'Nivel máximo' : ''}

🐎 *Caballo* ${user.horse == 0 ? 'No tiene' : '' || user.horse > 0 && user.horse < 5 ? `nivel ${user.horse} ➯ ${user.horse + 1}\nExp: ${user._horse} -> ${user.horse * 100}` : '' || user.horse == 5 ? 'Nivel máximo' : ''}

🦜 *Loro* ${user.loro == 0 ? 'No tiene' : '' || user.loro > 0 && user.loro < 5 ? `nivel ${user.loro} ➯ ${user.loro + 1}\nExp: ${user._loro} -> ${user.loro * 100}` : '' || user.loro == 5 ? 'Nivel máximo' : ''}`

    conn.reply(m.chat, inv, m)
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inv|inventario)$/i

handler.restrict = true

export default handler
