import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

const handler = async (m, { conn, command }) => {
    if (command === 'consejo') {
        const consejo = consejos[Math.floor(Math.random() * consejos.length)];
        const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀🌟 *Consejo del día* 🌟\n\n❥ ${consejo}\n\n╰─◆────◈⚘◈─────◆─╯`;
        await m.reply(mensaje);
    }

    if (command === 'fraseromantica') {
        const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
        const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀💖 *Frase romántica* 💖\n\n❥ ${frase_romantica}\n\n╰─◆────◈⚘◈─────◆─╯`;
        await m.reply(mensaje);
    }

    if (command === 'historiaromantica') {
        const historias = [
            'Era una noche lluviosa cuando se encontraron en el parque. Sus miradas se cruzaron, y el mundo pareció detenerse. Él le ofreció su paraguas, y juntos caminaron bajo la suave lluvia. Hablaron de sueños y pasiones, descubriendo una conexión especial. Se despidieron con una promesa de volver a encontrarse. Los días pasaron, y cada encuentro fortaleció su vínculo. Pasearon por la ciudad, compartieron risas y secretos, construyendo una historia de amor única. Una tarde, mientras miraban el atardecer, él tomó su mano y le declaró su amor. Ella sonrió, sintiendo que su corazón pertenecía a él desde el primer momento. Juntos, se prometieron amor eterno bajo el cielo nublado que ahora se despejaba, revelando un brillante arcoíris que simbolizaba su amor colorido y vibrante.',
            'Ella lo amaba en silencio, observándolo desde lejos mientras él vivía su vida sin saberlo. Se encontraron por casualidad una tarde de primavera, y en ese breve instante, el mundo se detuvo. Hablaron de sueños y pasiones compartidas, pero él ya estaba comprometido con otra. A pesar del dolor, ella guardó su amor en secreto, deseando su felicidad por encima de la suya. Los años pasaron, y ella permaneció en la sombra, viendo cómo él construía una vida con otra persona. Un día, recibió una carta, era él. Confesó que siempre la había amado en silencio, pero que el destino les había sido cruel al separarlos. Con lágrimas en los ojos, ella leyó sus palabras una y otra vez, lamentando lo que pudo haber sido pero nunca fue.',
            'En un mundo devastado por la guerra, se encontraron dos almas solitarias. Él era un soldado herido, y ella una civil en busca de refugio. En medio del caos, encontraron consuelo en los brazos del otro. Durante días, vivieron en un oasis de amor en medio del infierno de la guerra. Juraron amarse por siempre, sin importar lo que el destino les deparara. Pero la guerra no perdona, y un día, un bombardeo destruyó su refugio, dejándolos atrapados bajo los escombros. Con las manos entrelazadas, se despidieron con un último beso, mientras el polvo y los escombros los sepultaban, uniendo sus almas para la eternidad.',
            'En el pintoresco pueblo de Villa Esperanza, Angie y Ali competían por el amor de Meño, un joven recién llegado. La rivalidad entre las dos creció hasta que un trágico accidente se llevó la vida de Angie. Devastada por la pérdida de su amiga y consciente de su amor por Meño, Ali se acercó a él en busca de consuelo. Juntos lloraron la pérdida de Angie y encontraron consuelo en su mutuo dolor. Con el tiempo, Ali y Meño se acercaron más, compartiendo recuerdos de Angie y construyendo su propia historia de amor. Aprendieron a valorar cada momento juntos, sabiendo que la vida era frágil y que el amor era un regalo precioso que no debía tomarse a la ligera.',
            'En un pueblo olvidado por el tiempo, Lucas y Elena vivían un amor prohibido. Él era hijo del alcalde, y ella, hija del panadero. Sus familias estaban enemistadas por viejas disputas, pero su amor era más fuerte que cualquier barrera. Una noche, decidieron fugarse juntos, lejos de los prejuicios y el odio de sus familias. Sin embargo, un trágico accidente los separó para siempre. Elena murió en sus brazos, y Lucas quedó herido y destrozado.Años después, Lucas regresó al pueblo, llevando consigo el recuerdo imborrable de su amada. Se dice que todos los días, al atardecer, visita la tumba de Elena, donde juraron amarse por siempre, recordando con amor y dolor aquel romance que desafió al destino.',
            'En un mundo donde la magia estaba prohibida, Emma y Leo se conocieron en secreto. Ella era una poderosa hechicera, y él, un joven valiente que luchaba por la libertad de su pueblo. Su amor floreció en medio de la oscuridad y el peligro. Juntos, soñaban con un futuro donde pudieran amarse libremente, sin miedo a represalias. Sin embargo, la guerra estalló, y cada uno tuvo que luchar en bandos opuestos. En una batalla final, Emma usó su magia para proteger a Leo, sacrificando su vida en el proceso. Con el corazón destrozado, Leo juró llevar su amor en su memoria y continuar la lucha por la libertad, sabiendo que en algún lugar, Emma lo esperaba con amor eterno.',
            'En una ciudad donde la música era prohibida, Eva y Alejandro encontraron su amor a través de las melodías clandestinas que él componía y ella cantaba. Su pasión por la música los unió en un mundo donde la opresión reinaba. Pero un día, las autoridades descubrieron su secreto y capturaron a Alejandro. Eva, desesperada, intentó liberarlo, pero fue atrapada en el intento. Condenados a muerte, decidieron enfrentar juntos su destino. La noche antes de su ejecución, Alejandro compuso una última canción para Eva, una melodía de amor y despedida. Mano a mano, se despidieron con la esperanza de que su amor perdurara más allá de la vida, en las notas eternas de su música prohibida.',
            'En un pequeño pueblo costero, María y Juan vivían un amor apasionado. Él era pescador y ella, hija del dueño de la posada local. A pesar de las diferencias sociales, su amor era puro y sincero. Una noche, una tormenta azotó la costa, y Juan salió a pescar para asegurar el sustento de su familia y el futuro con María. La tormenta se intensificó, y su barco naufragó. María, desesperada, esperó durante días en la costa, buscando señales de vida. Finalmente, encontraron el barco destrozado, pero no había rastro de Juan. Con el corazón roto, María se aferró a la esperanza de que algún día se reunirían en el mar eterno, donde su amor nunca conocería fronteras.',
            'En un reino dividido por la guerra, Isabella y Diego se conocieron en un baile clandestino. Él era un soldado enemigo, y ella, la hija del rey. A pesar de las diferencias, su amor floreció en secreto. Un día, durante una tregua temporal, Isabella y Diego se encontraron en un jardín secreto. Juraron amor eterno, sin saber que la tregua terminaría al amanecer. Al descubrir su amor prohibido, los reyes ordenaron la ejecución de Diego al alba. Isabella, desesperada, intentó detener la ejecución, pero llegó demasiado tarde. Con el corazón destrozado, Isabella se arrojó desde lo alto de la muralla, uniéndose a Diego en la muerte y dejando un reino dividido y un amor trágico que perduraría en la memoria de todos.',
            'En un mundo donde la magia era temida, Elara y Kael se enamoraron en secreto. Ella era una poderosa hechicera, y él, un guardia del reino. Su amor desafiaba las leyes y los prejuicios de su sociedad. Un día, un grupo de cazadores de brujas descubrió su secreto. En medio de la noche, irrumpieron en la casa de Elara y la capturaron. Kael, desesperado, intentó salvarla, pero fue herido de gravedad en el intento. Con el corazón roto, Elara fue llevada a la hoguera. En sus últimos momentos, sus ojos se encontraron con los de Kael a lo lejos. Ambos sabían que su amor era más fuerte que cualquier condena, y que, aunque sus cuerpos se separaran, sus almas estarían unidas para siempre en el reino de la magia eterna.',
            'En la bulliciosa ciudad de Nueva York, Maya y Liam se conocieron en una galería de arte. Ella era una talentosa pintora, y él, un exitoso empresario. A pesar de sus mundos diferentes, su amor creció con cada encuentro. Sin embargo, un día, Liam fue diagnosticado con una enfermedad terminal. A medida que su salud empeoraba, Maya lo cuidaba con amor y devoción, pero sabía que su tiempo juntos era limitado. En su último día juntos, Liam le pidió a Maya que pintara un último cuadro juntos. Con lágrimas en los ojos, crearon una obra maestra que capturaba su amor y su dolor. Al atardecer, Liam cerró los ojos por última vez, dejando a Maya con el recuerdo de su amor y el cuadro que sería su legado.'
        ];
        const historia = historias[Math.floor(Math.random() * historias.length)];
        const mensaje = `📖 *Historia Romántica* 📖\n\n${historia}`;
        await m.reply(mensaje);
    }
};

handler.tags = ['frases'];
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica'];

export default handler;

global.frasesromanticas = [
  'Eres la luz que ilumina mi vida en la oscuridad.',
  'Contigo, cada día es una nueva aventura llena de amor.',
  'Tus ojos son el reflejo del cielo en el que quiero perderme.',
  'Cada latido de mi corazón lleva tu nombre.',
  'En tus brazos encontré el hogar que siempre busqué.',
  'Eres el sueño que nunca quiero despertar.',
  'El amor verdadero es estar juntos en las buenas y en las malas.',
  'No existen distancias cuando dos corazones están unidos.',
  'Tus besos son la melodía que acelera mi corazón.',
  'Amar es ver en ti lo que nadie más puede ver.',
  'En cada latido, te llevo conmigo a todas partes.',
  'El amor que siento por ti es mi fuerza y mi inspiración.',
  'Tus palabras dulces son mi alimento emocional diario.',
  'Eres el regalo más preciado que la vida me ha dado.',
  'El tiempo se detiene cuando estoy junto a ti.',
  'En tu sonrisa encuentro la felicidad que buscaba.',
  'Cada día a tu lado es una historia de amor sin fin.',
  'Nuestro amor es como un cuento de hadas hecho realidad.',
  'Tus abrazos son mi refugio en este mundo caótico.',
  'Eres la razón por la que creo en el destino.',
  'Amar es descubrir cada día algo nuevo que admiro en ti.',
  'Tu amor es el lienzo en blanco donde pinto mi felicidad.',
  'Contigo, el futuro es un camino lleno de promesas y sueños.',
  'Eres el faro que guía mi corazón en la oscuridad.',
  'La magia del amor se encuentra en cada gesto que compartimos.',
  'Nuestro amor es un baile eterno de pasión y ternura.',
  'En tus brazos, el mundo entero desaparece y solo existimos tú y yo.',
  'El amor es el idioma en el que nuestros corazones conversan.',
  'Eres el pedacito que me faltaba para completar mi alma.',
  'Amar es encontrar en ti todo lo que nunca supe que necesitaba.',
  
];
global.consejos = [
  'Acepta que los cambios son parte natural de la vida, y aprende a adaptarte a ellos.',
  'Nunca dejes de aprender; el conocimiento es una herramienta poderosa.',
  'Cuida de tu salud física y mental, son fundamentales para una vida plena.',
  'Disfruta de las pequeñas cosas, pues son ellas las que dan sentido a la vida.',
  'Aprende a perdonar, tanto a los demás como a ti mismo, para liberar tu corazón.',
  'Valora el tiempo que pasas con tus seres queridos, es el regalo más valioso que puedes dar y recibir.',
  'Sé amable y compasivo con los demás, cada acto de bondad puede marcar la diferencia en sus vidas.',
  'Aprende a decir \'no\' cuando sea necesario, y establece límites saludables.',
  'Encuentra tiempo para hacer lo que te apasiona, pues eso nutre tu alma y te hace sentir vivo.',
  'No te compares con los demás, cada persona tiene su propio camino y ritmo en la vida.',
  'Escucha a tu pareja con empatía y comprensión, la comunicación es la base de una relación sólida.',
  'No tengas miedo de expresar tus sentimientos, la honestidad es esencial en el amor.',
  'Aprende a ceder y a comprometerte, el amor requiere de sacrificio y esfuerzo mutuo.',
  'Sorprende a tu pareja de vez en cuando, mantén viva la chispa del romance.',
  'Respeta la individualidad de tu pareja y permítele crecer como persona.',
  'El amor propio es igual de importante que amar a alguien más; cuídate y valórate.',
  'Recuerda que una relación sana se basa en la confianza mutua y el respeto.',
  'Elige a alguien que te complemente y te haga ser una mejor versión de ti mismo.',
  'El amor verdadero no te hace sentir menos, te hace sentir más.',
  'Amar es un verbo, es una elección diaria que se cultiva con acciones y palabras.',
  'Encuentra un trabajo que te apasione, y nunca sentirás que estás trabajando.',
  'Sé proactivo y toma la iniciativa en tu trabajo, eso será valorado por tus superiores.',
  'Aprende de tus errores y fracasos, son oportunidades para crecer y mejorar.',
  'Mantén una actitud positiva y busca soluciones ante los desafíos laborales.',
  'Cultiva buenas relaciones con tus colegas, el trabajo en equipo es clave para el éxito.',
  'Establece metas claras y realistas, y trabaja con determinación para alcanzarlas.',
  'No tengas miedo de pedir ayuda o buscar mentoría, siempre hay algo nuevo que aprender.',
  'Reconoce y valora tus logros, celebra tus éxitos por pequeños que sean.',
  'Busca un equilibrio entre tu vida laboral y personal, ambos aspectos son importantes.',
  'El trabajo es una parte importante de tu vida, pero no es lo único que define quién eres.',
  'Cree en ti mismo y en tu capacidad para lograr lo que te propongas.',
  'Visualiza tus metas y sueños, imagina cómo te sentirás al alcanzarlos.',
  'Encuentra inspiración en aquellos que han superado obstáculos similares a los tuyos.',
  'Acepta los fracasos como parte del proceso, son oportunidades para aprender y crecer.',
  'Rodéate de personas positivas y que te impulsen hacia adelante.',
  'Mantén una mentalidad abierta y dispuesta a aprender cosas nuevas.',
  'Recuerda por qué empezaste cuando te sientas desmotivado; reconecta con tu propósito.',
  'Divide tus metas en pequeños pasos, eso hará el camino más alcanzable y menos abrumador.',
  'No tengas miedo de perseguir tus sueños, la vida es demasiado corta para vivir con arrepentimientos.',
  'Confía en que, con esfuerzo y perseverancia, puedes lograr todo lo que te propongas.',
];
