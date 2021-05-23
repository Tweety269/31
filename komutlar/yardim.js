const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

message.channel.send(new Discord.MessageEmbed().setFooter(`Atalantis Bot Sizin İstekleriniz İle Gelişiyor - Son Güncelleme: 26.03.2021`)
.setColor('YELLOW').setDescription(`
**Atalantis Bot Genel Yardım Menüsü**

Komutları kullanmak için Başına ! yazmanız gerekir Yoksa çalışmaz. 
Ayrıca Komutlariçin Sunucu Kurallarına Dikkat Etmeniz Gerekir
Sunucunuzu Destek Sunucumuzda Tanıtmak İçin !sunucutanıt

> • **Botun Ana Dili:**    ***Turkish***
> • **Premium Durumu:**    ***None***
> • **Kullanılan Prefix:** ***!***

:robot:       | **Yetkili Komutları** [!moderasyon]
\`slowmode\`,\`kanal-kilitle\`,\`nuke\`,\`temizle\`,\`sunucutanıt\`,\`duyuru\`,\`sa-as\`

:butterfly:   | **Kullanıcı Komutları** [!kullanıcı]
\`istatistik\`,\`profil\`,\`davet\`,\`avatar\`,\`çevrilenkod\`,\`v11tov12\`,\`kurallar\`

:file_folder:  | **Ayarlamalı Komutlar** [!ayarlamalı]
\`botlist-sistemi\`,\`rol-verme-sistemi\`,\`kayıt-sistemi\`

:busts_in_silhouette: | **Eğlence Komutlar** [!eğlence]
\`aşk,token,tokatat,napim,fbi,çıkma-teklifi-et,nitro,taksimdayı\`

> [Bana Oy Ver](https://top.gg/bot/813407970750496828/vote) | [Beni Davet Et](http://gg.gg/atalantisbot) | [Destek Sunucum](https://discord.gg/9nth7qcXe5) | [Komut Listem](https://discord.com/channels/726070815879200810/791275107351789568/824978388988198982)

`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};