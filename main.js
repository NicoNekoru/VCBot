const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./auth.json');
require(`./eventloader.js`)(client)
client.login(settings.token);