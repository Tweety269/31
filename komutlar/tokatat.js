const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply(":speak_no_evil: **Kimi Tokatlayacağımı Bilmiyorum Lütfen `Etiketle`**")
      .catch(console.error);

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setColor("0x808080")
    .setDescription(
      message.author.username + ` ${user}` + "**Adlı Kullanıcıyı Tokat Manyağı Yaptı🖐️**"
    )
    .setImage("https://media0.giphy.com/media/deKWTyMOYLkje/giphy.gif")
.setTimestamp()

message.channel.send(EmbedFwhyCode);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at", "tokatat"],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Belirtilen kişiyi, Tokatlar!",
  usage: "tokat"
};