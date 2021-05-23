const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .setDescription(`<:678748626960384043:818477550744371272> **Toplam Çevrilenrilen Kod Sayısı** \`${çevrilenkod}\``)
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["çevirilen-kod"],
    permLevel: 0
}

exports.help = {
    name: "çevrilenkod",
    description: "kodçevirme",
    usage: "kodçevirme"
}