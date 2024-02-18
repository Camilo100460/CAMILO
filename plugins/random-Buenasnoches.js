const handler = async (m, { conn, text, command }) => {
  const buenos_noches = global.buenasnoches;
  const url = buenos_noches[Math.floor(Math.random() * buenos_noches.length)];
  conn.sendMessage(m.chat, { image: { url: url }, caption: '_*¡Buenas noches! Descansa*_ 🛌' }, { quoted: m });
};
handler.command = /^(buenasnoches|descansa|mimir|dormir)$/i;
handler.tags = ['fun'];
handler.help = ['buenasnoches', 'descansa'];
export default handler;

global.buenasnoches = [
  'https://i.ibb.co/CvCBW0n/Whats-App-Image-2024-02-18-at-5-11-51-PM-1.jpg',
  'https://i.ibb.co/sR99HhX/Whats-App-Image-2024-02-18-at-5-11-51-PM-2.jpg',
  'https://i.ibb.co/swMGvXT/Whats-App-Image-2024-02-18-at-5-11-51-PM-3.jpg',
  'https://i.ibb.co/SdVfZCC/Whats-App-Image-2024-02-18-at-5-11-51-PM.jpg',
  'https://i.ibb.co/TMTqxdT/Whats-App-Image-2024-02-18-at-5-11-52-PM-1.jpg',
  'https://i.ibb.co/2v07BXf/Whats-App-Image-2024-02-18-at-5-11-52-PM-3.jpg',
  'https://i.ibb.co/k0jF2zR/Whats-App-Image-2024-02-18-at-5-11-52-PM-4.jpg',
  'https://i.ibb.co/N1g2Zrc/Whats-App-Image-2024-02-18-at-5-11-52-PM-5.jpg',
  'https://i.ibb.co/JtVPrjZ/Whats-App-Image-2024-02-18-at-5-11-52-PM.jpg',
  'https://i.ibb.co/F8wKf4B/Whats-App-Image-2024-02-18-at-5-11-53-PM-1.jpg',
  'https://i.ibb.co/9h3ks7b/Whats-App-Image-2024-02-18-at-5-11-53-PM-2.jpg',
  'https://i.ibb.co/SVTX39w/Whats-App-Image-2024-02-18-at-5-11-53-PM-3.jpg',
  'https://i.ibb.co/dmSSjSF/Whats-App-Image-2024-02-18-at-5-11-53-PM-4.jpg',
  'https://i.ibb.co/0X3Nbjt/Whats-App-Image-2024-02-18-at-5-11-53-PM.jpg',
];
