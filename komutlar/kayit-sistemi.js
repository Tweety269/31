const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
             .setColor("RED")         .setDescription(`:x: **Bu Komut Yetkililer Tarafından** \`Geliştiriliyor\` **Sebebiyle Bakıma Alınmış**`)
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kayıt-sistemi",
  description: "",
  usage: ""
};