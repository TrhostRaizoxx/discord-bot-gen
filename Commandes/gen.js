const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  name: 'gen',
  description: 'Génère le compte que vous avez demandé.',
  permission: Discord.PermissionFlagsBits.Administrator,
  dm: false,
  category: "Gen",
  options: [],
  
  async run(bot, message, args) {
    
    if(message.channel.id !== "1168226407676121260") return message.reply("Cette commande n'est utilisable uniquement dans le salon <#1168226407676121260>.")

    if (args.length !== 1) {
        message.reply('Utilisation incorrecte. Utilisez `+gen <service>`.');
        return;
      }
  
      const serviceName = args[0];
      const stockFolder = './stock';
  
      const filePath = path.join(stockFolder, `${serviceName}.txt`);
  
      if (!fs.existsSync(filePath)) {
        message.reply(`Le service ${serviceName} n'existe pas.`);
        return;
      }
  
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContents.split('\n').filter(Boolean);
  
      if (lines.length === 0) {
        message.reply(`Aucun compte n'est disponible pour le service ${serviceName}.`);
        return;
      }
  
      const lastLine = lines[lines.length - 1];

      const replyEmbed = new Discord.EmbedBuilder()
      .setDescription(`<@${message.author.id}> je t'ai envoyé en MP ton compte, si tu n'as pas reçu, débloque tes MP !`)
  
      message.reply({embeds: [replyEmbed]});

      function getFormattedDateTime() {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      
        return `${day}/${month}/${year} ${hours}:${minutes}`;
      }
  
      const embed = new EmbedBuilder()
        .setTitle("Compte généré")
        .setColor(0x56ec85)
        .setDescription(`**Service :** \`${serviceName}\`\n**Compte :** \`${lastLine}\``)
        .setFooter({text: getFormattedDateTime()})
  
      message.author.send({ embeds: [embed] })
      .then(() => {
        if (lines.length > 0) {
          lines[lines.length - 1] = "";
          const updatedFileContents = lines.join('\n');
          fs.writeFileSync(filePath, updatedFileContents, 'utf-8');
        }
      })
      .catch((error) => {
        console.error(`Erreur lors de l'envoi en MP : ${error}`);
        message.author.send("Une erreur s'est produite lors de l'envoi en MP. Veuillez vérifier vos paramètres de messagerie.");
      });
    }
};
