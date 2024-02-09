import fetch from 'node-fetch';
import {FormData, Blob} from 'formdata-node';
import {JSDOM} from 'jsdom';

async function webp2mp4(source) {
  const form = new FormData();
  const isUrl = typeof source === 'string' && /https?:\/\//.test(source);
  const blob = !isUrl && new Blob([source.toArrayBuffer()]);
  form.append('new-image-url', isUrl ? blob : '');
  form.append('new-image', isUrl ? '' : blob, 'image.webp');
  const res = await fetch('https://s6.ezgif.com/webp-to-mp4', {
    method: 'POST',
    body: form,
  });
  const html = await res.text();
  const {document} = new JSDOM(html).window;
  const form2 = new FormData();
  const obj = {};
  for (const input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value;
    form2.append(input.name, input.value);
  }
  const res2 = await fetch('https://ezgif.com/webp-to-mp4/' + obj.file, {
    method: 'POST',
    body: form2,
  });
  const html2 = await res2.text();
  const {document: document2} = new JSDOM(html2).window;
  const videoElement = document2.querySelector('div#output > p.outfile > video > source');
  if (!videoElement) {
    throw new Error('La conversión de la imagen a video falló');
  }
  return new URL(videoElement.src, res2.url).toString();
}

async function webp2png(source) {
  const form = new FormData();
  const isUrl = typeof source === 'string' && /https?:\/\//.test(source);
  const blob = !isUrl && new Blob([source.toArrayBuffer()]);
  form.append('new-image-url', isUrl ? blob : '');
  form.append('new-image', isUrl ? '' : blob, 'image.webp');
  const res = await fetch('https://s6.ezgif.com/webp-to-png', {
    method: 'POST',
    body: form,
  });
  const html = await res.text();
  const {document} = new JSDOM(html).window;
  const form2 = new FormData();
  const obj = {};
  for (const input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value;
    form2.append(input.name, input.value);
  }
  const res2 = await fetch('https://ezgif.com/webp-to-png/' + obj.file, {
    method: 'POST',
    body: form2,
  });
  const html2 = await res2.text();
  const {document: document2} = new JSDOM(html2).window;
  const imgElement = document2.querySelector('div#output > p.outfile > img');
  if (!imgElement) {
    throw new Error('La conversión de la imagen falló');
  }
  return new URL(imgElement.src, res2.url).toString();
}

export {
  webp2mp4,
  webp2png,
};
