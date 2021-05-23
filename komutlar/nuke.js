const discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send("<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**")
  }
  let pos = message.channel.position
  
  message.channel.clone().then(c => {
    message.channel.delete()
    c.setPosition(pos)
    c.send("Bu Kanal İçin Patlatma Tamamlandı\nhttps://imgur.com/LIyGeCR")
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturu işte',
  usage: 'nuke'
};