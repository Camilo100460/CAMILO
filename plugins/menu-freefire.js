let handler = async (m, { conn, text }) => {
  m.reply(`╭┄┄┄┄┄〔 *Menu Freefire* 〕┄⊱\n┊\n *😹 ${pickRandom(global.chiste)} 😹*\n┊\n*╰━━━⊰ 𓃠 ${conn.getName(m.sender)} ⊱━━━━დ*`);
};

handler.tags = ['humor'];
handler.command = ['Frefire'];

export default handler;

function pickRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  const chosenChiste = list[randomIndex];
  return chosenChiste.split("\n").map(line => `┊ ${line}`).join("\n");
}

global.chiste = [
  "¿Cuál es el último animal que subió al arca de Noé? El del-fin..",
  "¿Cómo se llama el primo de Bruce Lee? Broco Lee.",
  "Una madre le dice a su hijo: Jaimito, me ha dicho un pajarito que te drogas. La que te drogas eres tú, que hablas con pajaritos."
];
