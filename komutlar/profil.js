
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
             .setColor("GREEN")         .setDescription(`
<:750393872894525620:818477587394592808> **Atalantis Profil Sistemi**

\`İsim:\` ${message.author.username}
\`Kimlik:\` ${message.author.id}
\`Son Mesajı\` ${message.author.lastMessage}
\`Bu Bir Botmu\` ${message.author.bot ? ':white_check_mark:' : ':negative_squared_cross_mark:'}
\`Son Mesaj İd\` ${message.author.lastMessageID}
             `)
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "profil",
  description: "",
  usage: ""
};