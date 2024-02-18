const handler = async (m, { conn, text, command }) => {
  const buenos_noches = global.buenas_noches;
  const url = buenos_noches[Math.floor(Math.random() * buenos_noches.length)];
  conn.sendMessage(m.chat, { image: { url: url }, caption: '¡Buenas noches! Descansa 😴' }, { quoted: m });
};
handler.command = /^(buenasnoches|descansa)$/i;
handler.tags = ['fun'];
handler.help = ['buenasnoches', 'descansa'];
export default handler;

global.buenas_noches = [
  'https://example.com/buenasnoches1.jpg',
  'https://example.com/buenasnoches2.jpg',
  'https://example.com/buenasnoches3.jpg',
  // Añade más URLs de imágenes de "buenas noches" aquí
];
