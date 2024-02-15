const handler = async (m, {conn, text}) => {
  m.reply(`🤔 • *${pickRandom(global.iq)}*`);
};
handler.tags = ['frases'];
handler.command = ['iqtest'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.iq = [
  'Tu coeficiente intelectual es: 1',
  'Tu coeficiente intelectual es: 14',
  'Tu coeficiente intelectual es: 23',
  'Tu coeficiente intelectual es: 35',
  'Tu coeficiente intelectual es: 41',
  'Tu coeficiente intelectual es: 50',
  'Tu coeficiente intelectual es: 67',
  'Tu coeficiente intelectual es: 72',
  'Tu coeficiente intelectual es: 86',
  'Tu coeficiente intelectual es: 99',
  'Tu coeficiente intelectual es: 150',
  'Tu coeficiente intelectual es: 340', 
  'Tu coeficiente intelectual es: 423',
  'Tu coeficiente intelectual es: 500',
  'Tu coeficiente intelectual es: 676',
  'Tu coeficiente intelectual es: 780',
  'Tu coeficiente intelectual es: 812',
  'Tu coeficiente intelectual es: 945',
  'Tu coeficiente intelectual es: 1000',
  'Tu coeficiente intelectual es: ¡Ilimitado!',
  'Tu coeficiente intelectual es: 5000',
  'Tu coeficiente intelectual es: 7500',
  'Tu coeficiente intelectual es: 10000',
];
