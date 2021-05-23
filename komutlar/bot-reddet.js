const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {

  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
if (!message.member.roles.cache.has(yetkili)) return message.channel.send('<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yeterli Yekiye\`] **Sahip Değilsiniz!.**')    
  let botisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(2).join(" ");
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!basvuru) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!kanal) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:rainbow: Malesefki Sunucumuzda Bir Bot Reddedildi\n\n __Bilgilendirme__\n\n **Botun Sahibi** [<@${sahip}>]\n**Reddedilen Bot** [<@${botisim}>]\n**Sebep** [${sebep}]\n**Reddeden yetkili** [${message.author}]`)
    
    if (!botisim) return message.channel.send(`<:795084193209909289:816287005184098314> **Reddedilecek Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`<:795084193209909289:816287005184098314> **Botu Neden Onaylamadığını Yazmalısın.**`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`<:795084193209909289:816287005184098314> **Botun Sahibinin İd'sini Yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`<:788152753888952391:816286093405454358> **Botu Başarıyla** \`Reddettiniz\``).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};