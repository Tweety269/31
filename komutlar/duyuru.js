const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setDescription(`<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`⚠️ ${message.author} **Ne Yazacagımı \`Belirtin\` **`));
message.delete();
return message.channel.send(new Discord.MessageEmbed().setDescription(args[0]));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaz'],
  permLevel: 0
}

exports.help = {
  name: 'duyuru'
};
