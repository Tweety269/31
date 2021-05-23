const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const synex = new Discord.MessageEmbed()

.setColor("PINK")
.setImage("https://pbs.twimg.com/media/Ej5ZGPkXkAEC56f.jpg")

  message.channel.send(synex);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["napim"],
  permLevel: `Yok`
};

exports.help = {
  name: "napim",
  description: "herşeye napim",
  usage: "napim"
};
