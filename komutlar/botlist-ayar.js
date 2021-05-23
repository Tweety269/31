const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**`);
	if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setFooter(`Eğer Hata Alırsanız Destek Sunucumuza Katılın`)
                                           .setDescription(`
<:registericon:821856430852145192> **Atalantis-Bot Botlist Sistemi**

__Botlist Sistemini Kullanırken Botun Rolünü En Yukarı Taşıyın__

**Kanal Ayarlama**

> <:800376453395906570:818477652573945856> \`!botlist-ayarla botekle-kanal [#AyarlanacakKanal]\`
> <:800376453395906570:818477652573945856> \`!botlist-ayarla botlog-kanal [#AyarlanacakKanal]\`
> <:800376453395906570:818477652573945856> \`!botlist-ayarla başvurugiden-kanal [#AyarlanacakKanal]\`

**Yetkili Rolü Ayarlama**

> \`!botlist-ayarla yetkili [@YetkiliRol]\`

**Botlist Komutları**

> <:798583340562382858:819210306391506954> \`!bot-ekle <id> <prefix> <dbldurum>\`
> <:798583340562382858:819210306391506954> \`!bot-reddet <bot-id> <sebep> <sahip-id>\`
> <:798583340562382858:819210306391506954> \`!bot-onayla <bot-id> <sahip-id>\`

**Eğer Sıfırlamak İstiyorsanız**

> \`!botlist-ayar sıfırla\``)
                                          .setColor(message.guild.me.displayColor)
                                          )
  if(args[0] === "botekle-kanal"){
    if(db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistem Zaten Ayarlanmış! Sıfırlamak İçin:** `!botlist-ayar sıfırla`")
    let botekle = message.mentions.channels.first();
    if(!botekle) return message.channel.send("<:795084193209909289:816287005184098314> **Lütfen Bir Kanal Ayarlayın** `!botlist-ayarla botekle-kanal [#AyarlanacakKanal]`")
    db.set(`bot-ekle_${message.guild.id}`, botekle.id)
    message.channel.send("<:788152753888952391:816286093405454358> **Bot Ekleme Kanalınız** `Başarıyla` **Ayarlandı**")
  }
   if(args[0] === "botlog-kanal"){
     if(db.has(`bot-log_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistem Zaten Ayarlanmış! Sıfırlamak İçin:** `!botlist-ayar sıfırla`")
     let botlog = message.mentions.channels.first();
     if(!botlog) return message.channel.send("<:795084193209909289:816287005184098314> **Lütfen Bir Kanal Ayarlayın** `!botlist-ayarla botlog-kanal [#AyarlanacakKanal]`")
     db.set(`bot-log_${message.guild.id}`, botlog.id)
     message.channel.send("<:788152753888952391:816286093405454358> **Bot Log Kanalınız** `Başarıyla` **Ayarlandı**")
  }
   if(args[0] === "başvurugiden-kanal"){
     if(db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Bu Sistem Zaten Ayarlanmış! Sıfırlamak İçin:** `!botlist-ayarla sıfırla`")
     let basvurukanal = message.mentions.channels.first();
     if(!basvurukanal) return message.channel.send("<:795084193209909289:816287005184098314> **Lütfen Bir Kanal Ayarlayın** `!botlist-ayarla başvurugiden-kanal [#AyarlanacakKanal]`")
     db.set(`basvuruk_${message.guild.id}`, basvurukanal.id)
     message.channel.send("<:788152753888952391:816286093405454358> **Başvuru Giden Kanalınız** `Başarıyla` **Ayarlandı**")}
  if(args[0] === "yetkili"){
    if(db.has(`byetkili_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Yetkili Zaten Ayarlanmış**")
    let yetkilirol = message.mentions.roles.first();
    if(!yetkilirol) return message.channel.send("<:795084193209909289:816287005184098314> **Lütfen Bir Yetkili Rolü Ayarlayın** `!botlist-ayarla yetkili [@Rolünüz]`")
    db.set(`byetkili_${message.guild.id}`, yetkilirol.id)
    message.channel.send("<:788152753888952391:816286093405454358> **Yetkili Rolününüz** `Başarıyla` **Ayarlandı**")
  }
   if(args[0] === "sıfırla"){
     if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Kanallarınız Önceden** `Ayarlanmış`")
     if(!db.has(`bot-log_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Kanallarınız Önceden** `Ayarlanmış`")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Kanallarınız Önceden** `Ayarlanmış`")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("<:795084193209909289:816287005184098314> **Rolünüz Önceden** `Ayarlanmış`")
     db.delete(`basvuruk_${message.guild.id}`)
     db.delete(`bot-log_${message.guild.id}`)
     db.delete(`bot-ekle_${message.guild.id}`)
     db.delete(`byetkili_${message.guild.id}`)
     message.channel.send("<:788152753888952391:816286093405454358> `Başarıyla sıfırlandı`")
     

   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlist-ayar", "botlist-sistemi",],
  permLevel: 0,
};

exports.help = {
  name: 'botlist-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};