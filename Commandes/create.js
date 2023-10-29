const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "create",
  description: "Creer un fichier texte pour les stocks",
  utilisation: "+create",
  permission: Discord.PermissionFlagsBits.Administrator,
  dm: false,
  category: "Gen",
  options: [],

  async run(bot, message, args) {
    
    if(args.length < 1) {
        return message.reply("Veuillez indiquer le type de services apres le +create.")
    }

    const keyword = args.join(' ');

    const fileName = keyword.toLowerCase().replace(/ /g, '_') + '.txt';

    const filePath = `./stock/${fileName}`;

    const files = fs.readdirSync('./stock');

    const existingFile = files.find(file => file.toLowerCase() === fileName.toLowerCase());

    if (existingFile) {
      message.reply(`Le fichier "${existingFile}" existe déjà.`);
      return;
    }

    if (fs.existsSync(filePath)) {
      message.reply(`Le fichier ${keyword} existe déjà.`);
      return;
    }

    fs.writeFileSync(filePath, '', 'utf-8');
    message.reply(`Le fichier ${keyword} a été créé.`);
  }
}