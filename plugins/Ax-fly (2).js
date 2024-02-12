const handler = async (m, { conn, text }) => {
    // Comprobamos si el comando es .reglasx-fly
    if (text && /^.reglasx-fly/i.test(text)) {
        const url = text.split(' ')[1]; // Extraemos la URL de la imagen de la entrada del usuario
        
        if (url) {
            global.db.data.urls[m.chat] = url; // Guardamos la URL en la base de datos
            m.reply('URL de imagen guardada con éxito.');
            return;
        } else {
            m.reply('Por favor, proporciona una URL de imagen después de `.reglasx-fly`.');
            return;
        }
    }
    
    // Si el comando no es .reglasx-fly, se busca la URL guardada
    const url = global.db.data.urls[m.chat];
    if (url) {
        conn.sendFile(m.chat, url, 'imagen.jpg', `Mensaje de ejemplo`, m);
    } else {
        m.reply('No se ha configurado ninguna URL de imagen.');
    }
};

handler.help = ['.reglasx-fly <URL>', '.reglasx-fly'];
handler.tags = ['internet'];
handler.command = ['reglasx-fly'];
handler.admin = true;

export default handler;
