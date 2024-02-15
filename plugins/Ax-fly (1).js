const handler = async (m, {conn, text}) => {
  const name = text.trim();
  const iqMessage = `El coeficiente intelectual de ${name} es: ${pickRandom(global.iq)}`;
  m.reply(iqMessage);
};
handler.tags = ['frases'];
handler.command = ['iqtest'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.iq = [
  '1',
  '14',
  '23',
  '35',
  '41',
  '50',
  '67',
  '72',
  '86',
  '99',
  '150',
  '340', 
  '423',
  '500',
  '676',
  '780',
  '812',
  '945',
  '1000',
  '¡Ilimitado!',
  '5000',
  '7500',
  '10000',
];
