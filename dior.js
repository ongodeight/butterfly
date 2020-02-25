const {Client, Collection} = require('discord.js');
const bot = new Client();

let { token } = require('./config/settings.json');

["aliases", "commands"].forEach(c => bot[c] = new Collection());
["command", "event"].forEach(h => require(`./handlers/${h}`)(bot));

bot.prefix = "-";
bot.login(token);