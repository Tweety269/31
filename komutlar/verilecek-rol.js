let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<:795084193209909289:816287005184098314> **Bir** \`rol\` **etiketlemen Gerekmekte** \`${ayarlar.prefix}verilecek-rol-ayarla @rol\``)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<:788152753888952391:816286093405454358> **Rol** [${rol}] **Olarak Atandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['verilecek-rol-ayarla'],
  perm: 0
}
exports.help = {
  name: 'verilecek-rol-ayarla'
}

exports.play = {
  kullanım: '!verilecek-rol-ayarla @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}