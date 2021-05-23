const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send('<:795084193209909289:816287005184098314> **Doğru Kullanım:** Sistemimi Devreye Sokmak İçin: `!sa-as [kapat-aç]`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<:788152753888952391:816286093405454358> **Sistem Başarıyla Açıldı Artık __sa__ Diye Cevap Verildiğinde Bot __Aleyküm Selam__ Yanıtını Verecek**\n\`\`\`Kapatmak İçin: !sa-as kapat\`\`\``)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<:788152753888952391:816286093405454358> **Sistem Başarıyla Kapatıldı Artık Birisi** __sa__ **Yazdığında Bot Cevap Vermeyecek**\n\`\`\`Açmak İçin: !sa-as aç\`\`\``)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};