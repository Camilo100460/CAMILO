/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

const handler = async (m, {conn, text}) => {
  m.reply(`*╔═.✵.════════════════╗*\n💐•  *"${pickRandom(global.piropo)}"*\n*╚════════════════.✵.═╝*`);
};
handler.tags = ['frases'];
handler.command = ['piropo'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.piropo = [
  'Me gustaría ser papel para poder envolver ese bombón.🏖️',
  'Eres como wifi sin contraseña, todo el mundo te busca🏖️',
  'Quién fuera bus para andar por las curvas de tu coraz🏖️ón.',
  'Quiero volar sin alas y salir de este universo, entrar 🏖️en el tuyo y amarte en silencio.',
  'Quisiera ser mantequilla pa🏖️ra derretirme en tu arepa.',
  'Si la belleza fuera pecado vo🏖️s ya estarías en el infierno.',
  'Me Gustaría Ser Un Gato Para Pa🏖️sar 7 Vidas A Tu Lado.',
  'Robar Está Mal Pero Un Beso De Tu🏖️ Boca Sí Me Lo Robaría.',
  'Qué Hermoso Es El Cielo Cuando Está🏖️ Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.',
  'Bonita, Camina Por La Sombra, El Sol 🏖️Derrite Los Chocolates.',
  'Si Fuera Un Correo Electrónico Serías Mi Contraseña.',
  'Quisiera que fueses monte para darte ma🏖️chete',
  'Perdí mi 🏖️número de teléfono ¿Me das el tuyo?',
  '¿Cómo te ll🏖️amas para pedirte de regalo a Santa Claus?',
  'En el cielo h🏖️ay muchas estrellas, pero la más brillante está en la Tierra y eres tú.',
  '¿Acaba de salir🏖️ el sol o es la sonrisa que me regalas hoy?',
  'No es el ron ni l🏖️a cerveza, eres tú quien se me ha subido a la cabeza',
  'Si hablamos de mate🏖️máticas eres la suma de todos mis deseos.',
  'Pareces Google porque🏖️ tienes todo lo que yo busco.',
  'Mi café favorito, es el🏖️ de tus ojos.',
  'Quiero ser photoshop para🏖️ retocarte todo el cuerpo.',
  'Quisiera que fueras cereal,🏖️ para cucharearte en las mañanas.',
  'Quien fuera hambre, para dart🏖️e tres veces al día.'
];
