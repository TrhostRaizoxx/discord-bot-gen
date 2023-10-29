const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

module.exports = {
  name: 'stock',
  description: 'Affiche les services stockés.',
  dm: false,
  category: "Gen",
  permission: "Aucune",
  options: [],

  async run(bot, message, args) {

    if (message.channel.type !== Discord.ChannelType.GuildText) {

      return;
    }

    const stockFolder = './stock';

    // Liste des fichiers dans le dossier "stock"
    const files = fs.readdirSync(stockFolder);

    if (files.length === 0) {
      message.reply('Il n\'y a pas de services stockés pour le moment.');
      return;
    }
    let serviceInfo = '';

    for (const file of files) {
      const serviceName = path.parse(file).name; // Récupérez le nom du fichier sans l'extension ".txt"
      const filePath = path.join(stockFolder, file);

      // Comptez le nombre de lignes dans chaque fichier
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContents.split('\n').filter(Boolean);
      const lineCount = lines.length;

      serviceInfo += `**_${serviceName}_** : \`${lineCount}\`\n`;
    }
    const embed = new Discord.EmbedBuilder()
      .setTitle(`BlueGen #COMEBACK a ${files.length} services`)
      .setColor('#0099ff')
      .setDescription(serviceInfo)

    message.channel.send({embeds: [embed]});
  }
};