module.exports = async (bot, message) => {
    if(message.author.bot || message.channel.type === "dm") return;
    let args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    
    if(!message.content.startsWith(bot.prefix)) return;
    let commandFile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(commandFile) commandFile.run(bot, message, args);
}