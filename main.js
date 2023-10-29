const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config")

bot.commands = new Discord.Collection()
bot.color = "#56ec85"

bot.login(config.token)
loadEvents(bot)
loadCommands(bot)

process.on("unhandledRejection", (err, reason, p) => {
    if (err.code == 10062 || err.code === 10005 || err.code === 40060 || err.code === 50001 || err.code === 10008 || err.code === 50013)
      return;
    else {
      console.error(err, reason, p);
    }
  });
  
  process.on("uncaughtException", (err, origin) => {
    if (err.message === "Missing Access" || err.message === "Missing Permissions")
      return;
    else {
      console.error(err, origin);
    }
  });