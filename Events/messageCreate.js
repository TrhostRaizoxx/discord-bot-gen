const Discord = require("discord.js")
const config = require("../config")

module.exports = async (bot, message) => {

    const prefix = config.prefix;

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let command = require(`../Commandes/${commandName}`)
    if(!command) return message.reply(`La commande ${command} n'existe pas.`)
    if(commandName === "help") return message.reply("La commande help ne peux pas etre exécutée de cette façon. Merci d'utiliser cette commande de cette façon </help:1168248181918802016>.")
    command.run(bot, message, args)
}