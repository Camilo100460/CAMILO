const handler = async (m, {conn, text, participants}) => {
  const users = participants.map((u) => conn.decodeJid(u.id));
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';
  const isMedia = /image|video|sticker|audio/.test(mime);
  const more = String.fromCharCode(8206);
  const masss = more.repeat(850);
  const mensajes = ['Más vale estar solo que mal acompañado.',
'Adios rogando con el mazo dando',
'Perro ladrador poco mordedor.',
'El que anda con lobos a ahuyar aprende',
'Aunque la mona vista de seda mona queda',
'Dime con quien andas y te dire quien eres',
'A caballo regalado no le mires el diente.',
'A lo hecho, pecho.',
'Al mal tiempo, buena cara.',
'Cada loco con su tema.',
'De tal palo, tal astilla.',
'El que la hace, la paga.',
'Dinero llama dinero.',
'El mundo es un pañuelo.',
'A la tercera va la vencida.',
'Cada oveja con su pareja.',
'Más vale prevenir que lamentar.',
'Más vale tarde que nunca.',
'En boca cerrada no entran moscas.',
'Al que madruga, Dios lo ayuda.',
'El que calla otorga.',
'Amor con hambre no dura.',
'Tira la piedra y esconde la mano.',
'El que ríe el último, ríe mejor.',
'El hábito no hace al monje.',
'A palabras necias, oídos sordos.',
'Crea fama y acuéstate a dormir.',
'Del dicho al hecho, hay mucho trecho.',
'Dios aprieta pero no ahorca.',
'Donde fueres, haz lo que vieres.',
'Quien mucho abarca, poco aprieta.',
'Hombre precavido vale por dos.',
'Preguntando se llega a Roma.',
'Zapatero a sus zapatos.',
'Una golondrina no hace verano.',
'Obras son amores y no buenas razones.',
'Mucho ruido y pocas nueces.',
'En la variedad está el gusto.',
'Tanto tienes, tanto vales.',
'Nadie es profeta en su tierra.',
'¿Dónde va Vicente? Donde va la gente.',
'Dios los cría y ellos se juntan.',
'El que espera desespera.',
'Escoba nueva barre bien.',
'No hay mal que dure cien años.',
'Guerra avisada no mata gente.',
'La fe mueve montañas.',
'El que no la debe, no la teme.',
'Perro que ladra, no muerde.',
'Si te he visto, no me acuerdo.',
'No hay mal que por bien no venga.',
'Si así llueve, que no escampe.',
'Querer es poder.',
'Loro viejo no aprende a hablar.',
'Más es maña que fuerza.',
'El papel aguanta todo.',
'Barriga llena, corazón contento.',
'Casa de herrero, cuchillo de palo.',
'Poco a poco se anda lejos.',
'Jaula nueva, pájaro muerto.',
'Nunca es tarde si la dicha es buena.',
'Quien tiene boca se equivoca.',
'El poeta nace, no se hace.',
'Haz bien y no mires a quien.',
'El que se excusa, se acusa.',
'El pez grande se come al chico.',
'Lo barato sale caro.',
'A rey muerto, rey puesto.',
'Hoy por ti, mañana por mí.',
'No hay rosa sin espinas.',
'El que busca, encuentra.',
'Quien se pica, ajos come.',
'Gota a gota, el agua se agota.',
'Hierba mala nunca muere.',
'El tiempo es oro.',
'Ojo por ojo, diente por diente.',
'Quien canta, su mal espanta.',
'Del árbol caído, todos hacen leña.',
'El que a hierro mata, a hierro muere.',
'Por la boca muere el pez.',
'Palabra de piedra suelta, jamas sera devuelta',
'Ojos que no ven, corazón que no siente.',
'La excepción hace la regla.',
'Como se vive, se muere.',
'Un clavo saca otro clavo.',
'Decir refranes, es decir verdades.',
'La intención es lo que cuenta.',
'La música amansa las fieras.',
'Más claro no canta un gallo.',
'El casado, casa quiere.',
'A mala vida, mala muerte.',
'Caras vemos, corazones no sabemos.',
'Cría cuervos y te sacarán los ojos.',
'Más sabe el diablo por viejo, que por diablo.',
'Agua que no has de beber, déjala correr.',
'No es oro todo lo que reluce.',
'La cabra siempre tira al monte.',
'Siempre pagan justos por pecadores.',
'Primero es la obligación que la devoción.',
'Por un perro que maté, mataperros me llamaron.',
'Nunca digas de este agua no beberé.',
'No vendas la piel antes de cazar al oso.',
'El que roba a un ladrón tiene cien años de perdón.',
'Cada maestrillo tiene su librillo.',
'A grandes males, grandes remedios.',
'A la chita callando, hay quien se va aprovechando.',
'El ladrón juzga por su condición.',
'Cuando el gato está ausente, los ratones se divierten.',
'Cuando el río suena piedras lleva.',
'Tropezar y no caer, adelantar camino es.',
'No dejes para mañana lo que puedas hacer hoy.',
'La voz del culo no tiene remedio ni disimulo.',
'Por más vueltas que das, el culo siempre te queda atrás.',
'Hay un mundo mejor, pero es carísimo.',
'Abogado, juez y doctor, cuanto más lejos, mejor.']; // Agrega tus mensajes aquí
  
  const htextos = `${text ? text : mensajes[Math.floor(Math.random() * mensajes.length)]}`; // Elige un mensaje al azar de la lista
  if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, {image: mediax, mentions: users, caption: htextos, mentions: users}, {quoted: m});
  } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, {video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos}, {quoted: m});
  } else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, {audio: mediax, mentions: users, mimetype: 'audio/mpeg', fileName: `Hidetag.mp3`}, {quoted: m});
  } else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, {sticker: mediax, mentions: users}, {quoted: m});
  } else {
    await conn.relayMessage(m.chat, {extendedTextMessage: {text: `${masss}\n${htextos}\n`, ...{contextInfo: {mentionedJid: users, externalAdReply: {thumbnail: imagen1, sourceUrl: 'https://chat.whatsapp.com/KXkX5ZzZp3mFWYt5comZHr'}}}}}, {});
  }
};
handler.command = /^(tuComando)$/i;
export default handler;
