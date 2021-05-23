const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {
  	if (!message.guild) return
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Komutu Kullanabilmek İçin** \`Suncuyu Yönet\` **Yetkisine Sahip Olmalısınız**")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanit.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.MessageEmbed()
  .setDescription("<:793774721631387678:819210265114443786> **Atalantis | Sunucu-Tanıt Sistemi**\n\n[`!sunucutanıt`] __Başarıyla Kullandınız Komutu 24 Saate Bir Kullanabilirsiniz__")
  .setColor('GREEN')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
      .setAuthor('Atalantis | Sunucu-Tanıt  Sistemi', client.user.avatarURL())
      .addField(`Bağlantı`, invite.url, true)
            .setColor('BLUE')
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('823900443582529596').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanit.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.reply("<:793774687791349760:819210246475218994> **Bu Özellik** [`24`] **Saat içinde yalnızca [`1`] kez Kullanılabilir**")
  }
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucutanıt'],
    permLevel: 0,
}

exports.help = {
    name: 'sunucunutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}
