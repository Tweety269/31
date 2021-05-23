const Discord = require('discord.js')
exports.run = function(client, message, args) {

let user = message.author
const embed = new Discord.MessageEmbed()
.setTimestamp()
.setDescription(`:joy: **${user.username} Tokenim Aşşağıda Kullanabilirsin**`)
.setImage('https://cdn.discordapp.com/attachments/756466201105924108/757574229901181048/ekC59Fi-sC3B6zlC3BCk-yazarC4B1yC4B1m-buradakiler-beni-eleC59Ftiremez_836814.png')
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["token"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'token'
  };