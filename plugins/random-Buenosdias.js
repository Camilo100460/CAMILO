const handler = async (m, { conn, text, command }) => {
  const buenos_noches = global.buenasnoches;
  const url = buenos_noches[Math.floor(Math.random() * buenos_noches.length)];
  conn.sendMessage(m.chat, { image: { url: url }, caption: '¡Buenas noches! Descansa 😴' }, { quoted: m });
};
handler.command = /^(buenasnoches|descansa)$/i;
handler.tags = ['fun'];
handler.help = ['buenasnoches', 'descansa'];
export default handler;

global.buenasnoches = [
  'https://i.pinimg.com/originals/d9/e0/d4/d9e0d435743e9db03cf6b1b01627830f.jpg',
  'https://i.pinimg.com/474x/ef/75/1e/ef751e617f97136f3da8d841e967449d.jpg',
  'https://i.pinimg.com/564x/5d/b0/74/5db074236b157c385a0b8511218ed3e2.jpg',
];
