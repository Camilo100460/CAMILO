const rulesHandler = async (m) => {
  // Responder con el mensaje "hola mundo como estas"
  m.reply("hola mundo como estas");
};

rulesHandler.tags = ['rules'];
rulesHandler.command = ['reglas'];
export default rulesHandler;
