const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.aşk`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`🙀 **20 Saniye Sonra Tekar Dene**`));
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`<:email150497_640:825344482777235456> **Sevdiğini Etiketlemeyi Unuttun**`)).then(a => a.delete({timeout: 10000}))
var gifler = ['12', '0', '4', '17', '24', '27', '29', '40', '37', '54', '67', '78', '74', '84', '81', '94', '93', '99', '101'];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];

message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Sevgilin İle Aranda** \`%${resimler}\` **Sevginiz Var** 🥰\nYaniii Bu Güzel Bence :)`));
message.delete({timeout:20000});

data.set(`slm.${message.author.id}.${message.guild.id}.aşk`, 'codare');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.aşk`)
}, 1);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'aşk'
};