const Discord = require('discord.js')
const ms = require("ms");
const data = require("quick.db");

exports.run = async (client, message, args) => {//chimp ᵈ♡#0110
const mb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`Komut Başarıyla Kullanıldı`)
.setTimestamp()

const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`Komut Başarıyla Kullanıldı`)
.setTimestamp()

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(mb.setDescripton(`Bu komutu kullanabilmek için yetkiniz yetersiz.`))
let codare = message.mentions.channels.first()
if(!args[0]) return message.channel.send(mb.setDescription(`<:795084193209909289:816287005184098314> **Bir Kanalı Etiketlemelisiniz**`))
if(!codare) return message.channel.send(mb.setDescription(`<:795084193209909289:816287005184098314> **#${args[0]}, Kanalı Bu Sunucuda Yok.**`))
  
if(!args[1]) return message.channel.send(mb.setDescription(`<:795084193209909289:816287005184098314> **Ne Kadar Süre Kilitli Kalacağını Belirtmediniz**\n\n__Süre Örnekleri:__\`[1d,1s,1m,1h,]\``))
let süre = args[1];
  
let kanal = message.guild.channels.cache.get(codare.id);
let role = message.guild.roles.cache.find(c => c.name === '@everyone');

kanal.createOverwrite(role, { 'SEND_MESSAGES': false })
kanal.send(emb.setDescription(`<:793774692762255382:819210252749635604> **Bu Kanal** ${message.author} Tarafından ${süre.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat')} **Boyunca Kilitlendi**`)).then(m => {
setTimeout(async () =>{  
kanal.createOverwrite(role, { 'SEND_MESSAGES': null })
m.edit(emb.setDescription(`<:784481007742091305:819210234857259038> **Kanal Kilidi Başarıyla Açıldı!**`))
}, ms(süre))
})
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kanal-kilitle'
};// codare