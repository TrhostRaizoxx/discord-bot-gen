const Discord = require("discord.js");
const fs = require("fs");
const sanitize = require("sanitize-filename");

module.exports = {
  name: "add",
  description: "Ajouter du stock",
  utilisation: "+add",
  permission: Discord.PermissionFlagsBits.Administrator,
  dm: false,
  category: "Gen",
  options: [],

  async run(bot, message, args, member) {
    
    if (args.length !== 2) {
        return message.reply('Utilisation incorrecte. Utilisez `+add <mot-clé> <contenu1:contenu2>`.');
    }
    
    const keyword = args[0];
    const content = args[1].split(':');
    const content1 = content[0];
    const content2 = content[1];

    const fileName = sanitize(keyword) + '.txt';

    const filePath = `./stock/${fileName}`;

    if (!fs.existsSync(filePath)) {
        message.reply(`Le fichier ${keyword} n'existe pas. Utilisez +create pour le créer.`);
        return;
    }

    fs.appendFileSync(filePath, `${content1}:${content2}\n`, 'utf-8');
    message.reply(`Contenu ajouté au fichier ${keyword}.`);
  }
}