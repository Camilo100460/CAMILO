const axios = require('axios');
const fs = require('fs');

const handler = async (m, { conn, text }) => {
    const [command, url] = text.trim().split(/ +/);

    if (command.toLowerCase() === '.reglasx-fly') {
        if (!url) {
            if (global.db.data.urls[m.chat]) {
                const filename = global.db.data.urls[m.chat];
                conn.sendFile(m.chat, filename, 'imagen.jpg', 'Mensaje de ejemplo', m);
            } else {
                m.reply('No se ha configurado ninguna URL de imagen.');
            }
        } else {
            try {
                const response = await axios.get(url, { responseType: 'arraybuffer' });
                if (response.status === 200) {
                    const buffer = Buffer.from(response.data, 'binary');
                    const ext = url.split('.').pop();
                    const filename = `imagen_${Date.now()}.${ext}`;
                    fs.writeFileSync(filename, buffer);
                    global.db.data.urls[m.chat] = filename;
                    m.reply('Imagen guardada correctamente.');
                } else {
                    m.reply('Error al descargar la imagen.');
                }
            } catch (error) {
                console.error(error);
                m.reply('Error al descargar la imagen.');
            }
        }
    }
};

handler.help = ['.reglasx-fly <URL>', '.reglasx-fly'];
handler.tags = ['internet'];
handler.command = ['reglasx-fly'];
handler.admin = true;

export default handler;
