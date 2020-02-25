const { readdirSync } = require("fs");

module.exports = (bot) => {
    const load = (dir, commands) => {
        for(let file of commands) {
            const command = require(`../commands/${dir}/${file}`);
            bot.commands.set(command.config.name, command);
            if(command.config.aliases) command.config.aliases.forEach(alias => bot.aliases.set(alias, command.config.name));
        }
    }
    [""].forEach(dir => {
        const commands = readdirSync(`./commands/${dir}`).filter(d => d.endsWith(`.js`));
        load(dir, commands);
    });
}