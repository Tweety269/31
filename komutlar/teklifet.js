const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send(':x: **Çıkma Teklif Edeceğin Kişiyi Bulamadım Lütfen Etiketle**');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setTitle('Birsinden Çıkma Teklifi Aldınız❤️')
    .addField('Bana Sorarsan Kabul Etmelisin', `Ama Senin Kararın`)
    .addField('Size Çıkma Teklifi Eden:', `@${message.author.username}`)
    .setFooter('ATALANTİS BOT')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❤️ **Etiketlediğin** `Kişiye` **Özelden Çıkma Teklifi Ettin**')
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};
