const Discord = require("discord.js");

module.exports = {
  name: "server_info",
  description: "Obtenir les infos du serveur",
  permission: "Aucune",
  dm: false,
  category: "Informations",
  options: [],

  async run(bot, interaction, args, member) {
    const channels = await interaction.guild.channels.fetch();
    const serverName = interaction.guild.name;
    const serverId = interaction.guild.id;
    const serverDescription = interaction.guild.description || "Aucune Description";

    const ownerId = interaction.guild.ownerId;

    interaction.client.users.fetch(ownerId)
      .then(user => {
        const ownerUsername = user.username;

        const numberOfBoosts = interaction.guild.premiumSubscriptionCount;
        const createdTimestamp = interaction.guild.createdTimestamp;
        const creationDate = new Date(createdTimestamp).toLocaleString();
        const dndMembers = interaction.guild.members.cache.filter((member) => member.presence?.status === 'dnd').size;
        const onlineMembers = interaction.guild.members.cache.filter((member) => member.presence?.status === 'online').size - dndMembers;
        const idleMembers = interaction.guild.members.cache.filter((member) => member.presence?.status === 'idle').size;
        const offlineMembers = interaction.guild.members.cache.filter((member) => member.presence?.status === 'offline').size;
        const botMembers = interaction.guild.members.cache.filter((member) => member.user.bot).size;
        const totalMembers = interaction.guild.members.cache.size;
        const categoryCount = channels.filter((channel) => channel.type === Discord.ChannelType.GuildCategory).size;
        const voiceChannels = channels.filter((channel) => channel.type === Discord.ChannelType.GuildVoice).size;
        const textChannels = channels.filter((channel) => channel.type === Discord.ChannelType.GuildText).size;
        const announcementChannels = channels.filter((channel) => channel.type === Discord.ChannelType.GuildAnnouncement).size;
        const totalChannels = channels.size - categoryCount;
        const roleCount = interaction.guild.roles.cache.size - 1;
        const emojiCount = interaction.guild.emojis.cache.size;

        const serverEmbed = new Discord.EmbedBuilder()
          .setTitle(`Information sur le serveur ${serverName}`)
          .setColor(bot.color)
          .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 128 }))
          .setDescription(`**_Informations sur le serveur_**\n> **Nom** : \`${serverName}\`\n> **Identifiant** : \`${serverId}\`\n> **Description** : \`${serverDescription}\`\n> **Propriétaire** : \`${ownerUsername}\` <@${ownerId}>\n> **Nombre de boost(s)** : \`${numberOfBoosts}\`\n> **Date de création** : \`${creationDate}\`\n\n**_Informations sur les membres_**\n> **En ligne** : \`${onlineMembers}\`\n> **Ne pas déranger** : \`${dndMembers}\`\n> **Inactif** : \`${idleMembers}\`\n> **Hors ligne** : \`${offlineMembers}\`\n> **Robot** : \`${botMembers}\`\n> **Total de membres** : \`${totalMembers}\`\n\n**_Informations sur les statistiques_**\n> **Catégories** : \`${categoryCount}\`\n> **Annonce** : \`${announcementChannels}\`\n> **Vocal** : \`${voiceChannels}\`\n> **Textuel** : \`${textChannels}\`\n> **Total** : \`${totalChannels}\`\n> **Rôles** : \`${roleCount}\`\n> **Emojis** : \`${emojiCount}\``)
          .setFooter({ text: bot.user.tag, iconURL: bot.user.displayAvatarURL({ dynamic: true, size: 4096 })})
          .setTimestamp()
          .setImage("https://cdn.discordapp.com/attachments/1150178335159222382/1150655511063183400/IMG_1474.gif")

        interaction.reply({ embeds: [serverEmbed] });
      })
      .catch(error => {
        console.error(`Erreur : ${error}`);
      });
  },
};