const Discord = require("discord.js")
const config = require("../config")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

    await loadSlashCommands(bot)

    const serverId = '1167823928601874563';
    const server = bot.guilds.cache.get(serverId);
    if (!server) {
        console.log("Serveur introuvable.");
    } else {
        const memberCount = server.memberCount;
    
        let status = [
            {
                name: "CyberStorm",
                type: Discord.ActivityType.Streaming,
                url: "https://www.twitch.tv/raizoxx__",
            },
            {
                name: `${bot.users.cache.size} utilisateurs`,
                type: Discord.ActivityType.Watching,
            },
            {
                name: "/help",
                type: Discord.ActivityType.Watching,
            },
        ]
        
        setInterval(() => {
             let random = Math.floor(Math.random() * status.length);
            bot.user.setActivity(status[random]);
        }, 6000)
    }

    let allcommands = [];
    await bot.commands.forEach(command => allcommands.push({commandName: command.name, commandUsage: command.utilisation, commandDescription: command.description}))

    console.log(`${bot.user.tag} est bien en ligne !`)
}