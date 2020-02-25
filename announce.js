const {RichEmbed} = require("discord.js");
const {red, custom} = require("../util/colours.json");

module.exports = {
    config: {
        name: "announce",
        description: "Announce a message.",
        category: "Administrative",
        usage: "-announce",
        accessableby: "Admins",
        aliases: ["ac", "bc", "broadcast"]
    },
    run: async (bot, message, args) => {
        let member = message.member;
        let channel = message.mentions.channels.first();
        if(member.hasPermission("MANAGE_CHANNELS")) {
            if(channel) {
                let msg = args.slice(1).join(" ");
                let embed = new RichEmbed()
                .setTitle(`ANNOUNCEMENT`)
                .setColor(custom)
                .setDescription(msg)
                .setFooter(`dior | ${member.user.tag}`, bot.user.avatarURL);
                await message.delete();
                await channel.send(embed);
            } else {
                let msg = args.join(" ");
                let embed = new RichEmbed()
                .setTitle(`ANNOUNCEMENT`)
                .setColor(custom)
                .setDescription(msg)
                .setFooter(`dior | ${member.user.tag}`, bot.user.avatarURL);
                await message.delete();
                await message.channel.send(embed);
            }
        } else {
            let embed = new RichEmbed()
                .setTitle("No Permission!")
                .setColor(red)
                .setDescription("You do not have permission to use this command.")
                .setFooter(`dior | ${member.user.tag}`, bot.user.avatarURL);
            await message.delete();
            await message.channel.send(embed).then(m => m.delete(5000));
        }
    }
}