const handler = async (m, {conn, text}) => {
  m.reply(`🤔 • *${pickRandom(global.curiosidades)}*`);
};
handler.tags = ['frases'];
handler.command = ['curiosidad'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.curiosidades = [
  "¿Sabías que una libélula puede volar a 40 km/h (25mph)?",
  "¿Sabías que todas las lechuzas ponen huevos blancos?",
  "¿Sabías que Hawái se convirtió oficialmente en parte de los EE. UU. el 14 de junio de 1900?",
  "¿Sabías que la persona promedio se ríe 10 veces al día?",
  "¿Sabías que el diámetro de Júpiter es de 152,800 km (88,700 millas)?",
  "¿Sabías que el color de cepillo de dientes más popular es el azul?",
  "¿Sabías que los tigres tienen rayas y pelaje?",
  "¿Sabías que las polillas no tienen estómago?",
  "¿Sabías que la hamburguesa se inventó en 1900?",
  "¿Sabías que la aicmofobia es el miedo a las agujas y objetos puntiagudos?",
  "¿Sabías que las uñas de las manos crecen más rápido que las de los pies?",
  "¿Sabías que la palabra 'casi' es la más larga en inglés con todas las letras en orden alfabético?",
  "¿Sabías que la iatrofobia es el miedo a los médicos?",
  "¿Sabías que cerrar la puerta de tu auto fue ilegal en Suiza?",
  "¿Sabías que el mamífero más pequeño del mundo es el murciélago abejorro de Tailandia?",
  "¿Sabías que los leones se alimentan cada 3 o 4 días?",
  "¿Sabías que la cáscara es el 12% del peso de un huevo?",
  "¿Sabías que el erizo promedio tiene 30,000 espinas?",
  "¿Sabías que el pomelo recibe su nombre de la forma en que crece en racimos como las uvas en una vid?",
  "¿Sabías que el 45% de las personas usa enjuague bucal todos los días?",
  "¿Sabías que la vida útil de una ardilla es de 9 años?",
  "¿Sabías que puedes saber el sexo de un caballo por sus dientes (la mayoría de los machos tienen 40, las hembras 36)?",
  "¿Sabías que el 10% del suministro de alimentos del mundo es consumido por insectos?",
  "¿Sabías que las nubes vuelan más alto durante el día que durante la noche?",
  "¿Sabías que el Empire State Building de Nueva York pesa más de 365,000 toneladas?",
  "¿Sabías que la Antártida está formada por un 98% de hielo y un 2% de roca estéril?",
  "¿Sabías que el 90% de las personas dependen de su despertador para despertarse?",
  "¿Sabías que el café es la bebida más popular en todo el mundo con más de 400 mil millones de tazas consumidas cada año?",
  "¿Sabías que a la Tierra le cae un rayo más de 100 veces cada segundo?",
  "¿Sabías que la persona promedio tiene 10,000 gustos?",
  "¿Sabías que los glóbulos rojos se producen en la médula ósea?",
  "¿Sabías que el 11% de las personas son zurdas?",
  "¿Sabías que cada año el sol pierde 360 millones de toneladas?"
];
