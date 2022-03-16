const http = require("http");
const qrcode = require('qrcode-terminal');
const {Client} = require('whatsapp-web.js');

const telefono = 528261730871;
const mensaje = "hola, feliz cumpleaños!!";

const client = new Client();
client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    let chatId = telefono + "@c.us";
    client.sendMessage(chatId, mensaje)
    .then(response => {
        if (response.id.fromMe) 
        {
            console.log("Your message was sent");
        }
    })
});S