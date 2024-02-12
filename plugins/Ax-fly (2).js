const axios = require('axios');
const fs = require('fs');

const handler = async (m, { conn, text }) => {
    // Comprobamos si el comando es .reglasx-fly
    if (text && /^.reglasx-fly/i.test(text)) {
        const url = text.split(' ')[1]; // Extraemos la URL de la imagen de la entrada del usuario
        
        if (url) {
            try {
                const response = await axios.get(url, { responseType: 'arraybuffer' });
                if (response.status === 200) {
                    const buffer = Buffer.from(response.data, 'binary');
                    const filename = `imagen_${Date.now()}.jpg`; // Nombre de archivo único
                    fs.writeFileSync(filename, buffer); // Guardamos la imagen en el sistema de archivos

                    global.db.data.urls[m.chat] = filename; // Guardamos el nombre del archivo en la base de datos
                    m.reply('Imagen guardada correctamente.');
                } else {
                    m.reply('Error al descargar la imagen.');
                }
            } catch (error) {
                console.error(error);
                m.reply('Error al descargar la imagen.');
            }
            return;
        } else {
            m.reply('Por favor, proporciona una URL de imagen después de `.reglasx-fly`.');
            return;
        }
    }
    
    // Si el comando no es .reglasx-fly, se busca la URL guardada
    const filename = global.db.data.urls[m.chat];
    if (filename) {
        conn.sendFile(m.chat, filename, 'imagen.jpg', `Mensaje de ejemplo`, m);
    } else {
        m.reply('No se ha configurado ninguna URL de imagen.');
    }
};

handler.help = ['.reglasx-fly <URL>', '.reglasx-fly'];
handler.tags = ['internet'];
handler.command = ['reglasx-fly'];
handler.admin = true;

export default handler;
