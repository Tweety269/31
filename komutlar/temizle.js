const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!").then(m => m.delete(8000))
if(!args[0]) return message.channel.send("<:810431321947373578:818477688176115795> **Lütfen Kaç `Mesaj` Silineceğini Yazın Not:** `100` **Fazla Mesaj Silemezsiniz**").then(m => m.delete(8000))
message.channel.bulkDelete(args[0]).then(() => {
  const embed = new Discord.MessageEmbed()
       .setDescription(`Mesajlar Başarıyla Temizlendi.`)
        .setImage(`https://cdn.discordapp.com/attachments/818916050296111105/819249515366318110/images.jpg`)
        .setFooter(`${message.author.username} Tarafından istendi.`)
        .setColor("GREEN")
        .setTimestamp()
message.channel.send({ embed }).then(m => m.delete(8000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['patlat','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  time: '10 saniye',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'patlat '
};
