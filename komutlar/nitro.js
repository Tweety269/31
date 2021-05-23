const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/823875533221789696/825352960133169192/Ekran_Alnts.PNG")
.setTitle("<:mvoen8wq3w831:825353269253636097> Nitro Kodunu Gönderdim Kabul Et");

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nitro","nitro-ver"],
  permLevel: `Yok`
};

exports.help = {
  name: "nitro",
  description: "beleş nitro ab",
  usage: "nitro"
};