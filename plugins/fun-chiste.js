let handler = async (m, { conn, text }) => {
  m.reply(`\n*${pickRandom(global.chiste).trim()}*\n\n                         *${conn.getName(m.sender).trim()}*`);
};

handler.tags = ['humor'];
handler.command = ['chiste'];

export default handler;

function pickRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  const chosenChiste = list[randomIndex];
  return chosenChiste.split("\n").map(line => ` ${line}`).join("\n");
}

global.chiste = [
  "El marido está revisando las facturas y le dice a su mujer: Si supieses cocinar nos ahorraríamos un dineral en la cocinera. Pues si tú supieses hacer el amor nos ahorraríamos un dineral en el jardinero.",
  "¿De qué color le compra las bragas un sordomudo a su novia? Transparentes, para poder leerle los labios.",
  "Hoy le pregunté a mi teléfono: ‘Siri, ¿por qué estoy soltero?’ y abrió la cámara frontal",
  "Estaba bebiendo un martini y la camarera gritó: ‘¿Alguien sabe RCP?’. Y yo dije: ‘Me sé todo el alfabeto’. Todos nos reímos. Bueno… menos una persona",
  "Nunca serás completamente inútil. Siempre puedes ser utilizado como un mal ejemplo.",
  "¿Cuántos niños emo se necesitan para poner una bombilla? Ninguno, todos se sientan en la oscuridad y lloran.",
  "Un pez le pregunta a otro pez: ¿qué hace tu mamá? Este le contesta: Nada, ¿y la tuya qué hace? Nada también.",
  "¿Cuál es el colmo de Aladdín? Tener mal genio",
  "El profesor le dice al estudiante después de haberle corregido la tarea: Tu trabajo me ha conmovido. El estudiante, sorprendido, le pregunta: ¿Y eso por qué profesor? El profesor con cara de burla le dice: Porque me dio mucha pena.",
  "Le dice el niño a la madre: Mamá, no quiero jugar más con Pedrito. La madre le pregunta al niño: ¿Por qué no quieres jugar más con él? Porque cuando jugamos a los tacos de madera y le pego con uno en la cabeza, de repente se pone a llorar.",
  "A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.",
  "Hijo, me veo gorda, fea y vieja. ¿Qué tengo hijo, qué tengo? Mamá, tienes toda la razón.",
  "¿Cómo se dice pelo sucio en chino? Chin cham pu.",
  "Había una vez un niño tan, tan, tan despistado que... ¡da igual, me he olvidado del chiste!",
  "Una amiga le dice a otra amiga: ¿Qué tal va la vida de casada? Pues no me puedo quejar, dice ella. ¿O sea que va muy bien, no? No, no me puedo quejar porque mi marido está aquí al lado.",
  "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!",
  "Camarero, ese filete tiene muchos nervios. Pues normal, es la primera vez que se lo comen.",
  "¿Cómo se llama el primo de Bruce Lee? Broco Lee.",
  "Una madre le dice a su hijo: Jaimito, me ha dicho un pajarito que te drogas. La que te drogas eres tú, que hablas con pajaritos."
];








