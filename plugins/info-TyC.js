const handler = async (m, {conn}) => {
  m.reply(global.terminos);
};
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|TYC|Términos y condiciones/i;
handler.command = new RegExp;
export default handler;

global.terminos = `
*=> El desconocimiento de lo que aqui se menciona exime al propietario del Bot, Sub Bot o usuario del bot de la sanciones que se puedan derivar❗*

*⚠️ Términos de uso*

_1.- No nos hacemos responsables de un mal uso que se le pueda dar al Bot_
_2.- No nos hacemos responsables de la ignorancia y/o desconocimiento del tema_
_3.- El Bot no esta activo las 24 horas al menos de que el propietario decida lo contrario_
_4.- No nos hacemos responsables de los números que se puedan ir a soporte por el uso del Bot, es aconsejable siempre usar números virtuales para usos de Bots_
_5.- El creador del BOT no se hace responsable de las acciones de terceros que vendan, distribuyan o promocionen la aplicación. Cualquier transacción o interacción con terceros es responsabilidad exclusiva del usuario, y el creador de la aplicación no asume ninguna responsabilidad por cualquier problema_

*⁉️ Te quedaron dudas?*
_- Si todavía tienes alguna duda o reclamo de lo mencionado aqui o referente al Bot, contáctame a mi numero personal +573145699786 al cual estaré respondiendo lo antes posible para brindarte una solución y/o hacerme responsable de alguna reclamación_`;
