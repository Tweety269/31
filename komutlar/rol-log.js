let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<:795084193209909289:816287005184098314> **Bir** \`Kanal\` **etiketlemen Gerekmekte** \`${ayarlar.prefix}rol-log-kanal-ayarla @kanal\``)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<:788152753888952391:816286093405454358> **Rol Log** [${log}] **Olarak Atandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-log-kanal-ayarla'],
  perm: 0
}
exports.help = {
  name: 'rol-log-kanal-ayarla'
}

exports.play = {
  kullanım: '!rol-log-kanal-ayarla #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}