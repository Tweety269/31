const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/823875533221789696/823888089423675392/dcfynqh-7e54e9e0-d60f-4544-a602-1669eea04ef3.gif'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/823875533221789696/823888089423675392/dcfynqh-7e54e9e0-d60f-4544-a602-1669eea04ef3.gif');
hook.send(`${message.guild.name} *Sunucusu Discord Kuralları*

> **Sunucu** İçerisinde **Reklam** Yasaktır 
> **Ses** Kanallarını **Trollemek** Yasaktır
> **Din, dil, ırk** Ayrımcılığı Yapmak Yasaktır
> **Cinsel** İçerik Paylaşmak Yasaktır
> **Spam,Flood,Caps** Sunucuda Yasaktır
> **Her Kural** Yazılı Olarak Belirtilmez **Doğruyu yanlışı** ayırt Edin.
> **Kişisel sorunlarınızı** sunucuya taşımak, Düzeni bozmak, Çıkan **tartışmayı uzatmak** Yasaktır.

👉 \`Sunucuya Giren Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır\`
`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};