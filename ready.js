module.exports = async (bot) => {
    let activities = [`twitter.com/suicide_dev`, `dior.`], i = 0;
    setInterval(() => {bot.user.setActivity(`| ${activities[i++ % activities.length]}`, {type: "WATCHING"})}, 5000);
    console.log(`Logged in as ${bot.user.tag}.`)
}