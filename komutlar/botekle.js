const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
	let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
	if(!log) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!basvuru) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!kanal) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  
  if (message.channel.id !== kanal) return message.channel.send(`<:795084193209909289:816287005184098314> **Bu komutu sadece** <#${kanal}> **Kanalında Kullanabilirsiniz!**`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`<:795084193209909289:816287005184098314> **Botunuzun** \`İD\` **Girmeyi Unuttunuz**`).then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send(`<:795084193209909289:816287005184098314> **Botunuzun** \`PREFİX\` **Girmeyi Unuttunuz**`).then(msg => msg.delete(10000))
  if (!onaylımı) return message.channel.send(`<:795084193209909289:816287005184098314> **Botunuzun** \`DBL-DURUM\` **Girmeyi Unuttunuz**`).then(msg => msg.delete(10000))
  message.delete()
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`:small_red_triangle: *Sisteme Bir Bot Eklendi*\n\n**» Botunu Sisteme Ekleyen Kullanıcı** [${message.author}]\n\n **Eklenen Bot ID & ETİKET** [<@${botid}>]\n\n:partying_face: Yetkililer Botunuzu En Kısa Sürede Kontrol Edeceklerdir`)
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Hey Kontrol Ekibi Bu Davet Linki 8 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`, true)
  .setDescription(`[Hey Kontrol Ekibi Bu Davet Linki 0 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Atalantis - Bot Ekleme Sistemi")
  .addField("Discord Botunun Sahibi", message.author.tag)
  .addField("Discord Botunun Kimliği", botid)
  .addField("Discord Botunun Öneği", prefix)
  .addField("Botun Dbl Tarafından Onay Durumu", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`<:788152753888952391:816286093405454358> **Bot Ekleme İsteğiniz** \`Başarıyla\` **İletildi**`).then(msg => msg.delete(1000))
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};

