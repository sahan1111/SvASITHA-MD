const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=yrRXlBDZ#ZrwliUSh_ufoVOlBwO-yKt9oF_7Mc9XzVErMp0J24nU",
MONGODB: process.env.MONGODB || "mongodb+srv://rush:20041025sa@cluster0.ysi6dsf.mongodb.net/",//enter mongo db url
};
