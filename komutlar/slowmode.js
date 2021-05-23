const emran = require('discord.js');
//codarev12

exports.run = async(client, message, args) => {
              const codare = require('../ayarlar.json')
            let prefix = codare.prefix
//codarev12

              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("<:795084193209909289:816287005184098314> **Bu Komutu Kullanabilmek İçin** `Mesajları Yönet` **Yetkisine Sahip Olmalısınız**");  
//codarev12
const limit = args[0] ? args[0] : 0;//codare
  if(!limit) {//codare
              var embed = new emran.MessageEmbed()
                .setDescription(`<:795084193209909289:816287005184098314> ***Doğru Kullanım:*** \`${prefix}slowmode [0/100]\``)//codare
                .setColor('RED')
                .setTimestamp()
            message.channel.send({embed})
            return
          }//codare
if (limit > 100) {
    return message.channel.send(new emran.MessageEmbed().setDescription("<:795084193209909289:816287005184098314> **Süre limiti maksimum** `100` **Saniye Olabilir**").setColor('RED').setTimestamp());
}  
    message.channel.send(new emran.MessageEmbed().setDescription(`<:752881065324052521:818477593564807228> **Slowmode** \`${limit}\` **Olarak Ayarlanmıştır**`).setColor('GREEN').setTimestamp()).then(m => m.delete({ timeout: 5000, reason: 'Siliniyor.' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,

};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};