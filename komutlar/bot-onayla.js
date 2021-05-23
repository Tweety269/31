const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {
  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
  if (!message.member.roles.cache.has(yetkili)) return message.channel.send('<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yeterli Yekiye\`] **Sahip Değilsiniz!.**')
    let botisim = args[0]
  let sahip = args[1]
  
    let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!basvuru) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  if(!kanal) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistemi Kullanabilmek İçin** `Botlist Sisteminin` **Ayarlı Olması Gerekiyor**")
  const onay = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`:innocent: Sunucucumuzda Bir Bot Onaylandı\n\n __Bilgilendirme__\n\n **Onaylanan Bot:** [<@${botisim}>]\n **Botun Sahibi** [<@${sahip}>] \n**Onaylayan yetkili** [${message.author}]`)
    
    if (!botisim) return message.channel.send(`<:795084193209909289:816287005184098314> **Onaylanacak Botun idsini yazmalısın.**\n *Doğru Kullanım:* \`!botonayla <bot-id> <sahip-id>\``).then(msg => msg.delete(10000))
  message.delete()
        client.channels.cache.get(log).send(onay)      
  message.channel.send(`<:788152753888952391:816286093405454358> **Botu Başarıyla** \`Onayladınız\``).then(msg => msg.delete(1000))
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};