/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

const handler = async (m, {conn, text}) => {
  m.reply(`💐• *${pickRandom(global.piropo)}*`);
};
handler.tags = ['frases'];
handler.command = ['piropo'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.piropo = [
   'Me gustaría ser papel para poder envolver ese bombón.',
  'Eres como wifi sin contraseña, todo el mundo te busca',
  'Quién fuera bus para andar por las curvas de tu corazón.',
  'Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.',
  'Quisiera ser mantequilla para derretirme en tu arepa.',
  'Si la belleza fuera pecado vos ya estarías en el infierno.',
  'Me gustaría ser un gato para pasar 7 vidas a tu lado.',
  'Robar está mal pero un beso de tu boca sí me lo robaría.',
  'Qué hermoso es el cielo cuando está claro pero más hermoso es el amor cuando te tengo a mi lado.',
  'Eres como un libro de matemáticas, difícil de entender pero imposible de olvidar.',
  'Si fueras una fruta, serías una piña colada.',
  'Eres como una canción en español, me tienes loco y no te entiendo.',
  'Eres como mi tarjeta de crédito, porque siempre estás en mi mente.',
  'Eres como el café, me quitas el sueño pero me encantas.',
  'Si fueras una ecuación, serías perfecta.',
  'Eres como un código fuente, porque te tengo abierto todo el día.',
  'Si fueras una variable, serías mi constante.',
  'Si la belleza fuera tiempo, tú serías la eternidad.',
  'Eres como un sueño del que no quiero despertar.',
  'Si fueras un mar, yo sería el navegante perdido en tus aguas.',
  'Tus ojos son dos luceros que iluminan mi camino.',
  'Eres la melodía que le da ritmo a mi corazón.',
  'Si la perfección fuera un pecado, definitivamente estarías en el infierno.',
  'En el jardín de la vida, eres la flor más hermosa.',
  'Si el amor fuera un crimen, estaría dispuesto a cumplir cadena perpetua contigo.',
  'Tus labios son la poesía que quiero recitar cada día.',
  'Eres la respuesta a todas mis oraciones.',
  'Si la luna fuera tan hermosa como tú, la noche sería el día.',
  'Eres como un arco iris en mi cielo gris.',
  'Si fueras un helado, serías el sabor más dulce.',
  'Eres la chispa que enciende la llama de mi corazón.',
  'En el juego del amor, tú eres mi jugada perfecta.',
  'Si el sol fuera tan brillante como tu sonrisa, necesitaríamos gafas de sol todo el tiempo.',
  'Eres el sueño que nunca supe que tenía.',
  'Si fueras una estrella, serías la más brillante del firmamento.',
  'Eres la razón por la que las canciones de amor tienen sentido.',
  'Si el amor fuera una obra de arte, tú serías la obra maestra.',
  'En el libro de mi vida, tú eres la página más hermosa.',
  'Eres como un café fuerte en un día frío, siempre reconfortante.',
  'Si fueras una canción, serías la melodía que nunca me cansaría de escuchar.'  
  'Bonita, camina por la sombra, el sol derrite los chocolates.',
  'Si fuera un correo electrónico serías mi contraseña.',
  'Quisiera que fueses monte para darte machete',
  'Perdí mi número de teléfono ¿Me das el tuyo?',
  '¿Cómo te llamas para pedirte de regalo a Santa Claus?',
  'En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.',
  '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?',
  'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza',
  'Si hablamos de matemáticas eres la suma de todos mis deseos.',
  'Pareces Google porque tienes todo lo que yo busco.',
  'Mi café favorito, es el de tus ojos.',
  'Quiero ser photoshop para retocarte todo el cuerpo.',
  'Quisiera que fueras cereal, para cucharearte en las mañanas.',
  'Quien fuera hambre, para darte tres veces al día.'
];
