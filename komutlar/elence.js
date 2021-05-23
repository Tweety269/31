const Discord = require("discord.js");

  exports.run = async(client, message, args) => {
    
  const motion = new Discord.MessageEmbed()
.setColor('YELLOW')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setFooter(`Eğlence Komutu Başarıyla Kullanıldı`)
  .setDescription(`
 **Atalantis-Bot Eğlence Menüsüne Hoşgeldiniz**

:heart: __!aşk__ 
\`\`\`Etiketiketlediğiniz Kişi İle Aşkınızı Ölçer\`\`\`
:detective: __!token__
\`\`\`Botun Tokenini Atar\`\`\`
:hand_splayed: __!tokatat__
\`\`\`Etiketlediğiniz Kişiye Tokat Atar\`\`\`
:man_shrugging: __!napim__
\`\`\`Dene Ve Gör\`\`\`
<:fbiidblankpsd454340:825359748366729248> __!fbi__
\`\`\`Fbi Gifi Atar\`\`\`
:couple_with_heart_woman_man: __!çıkma-teklifi-et__
\`\`\`Çıkma Teklifi Edersiniz\`\`\`
<:mvoen8wq3w831:825353269253636097> __!nitro__
\`\`\`Bedava Nitro Kodu Atar\`\`\`
<:maxresdefault:825353710455881738> __!taksimdayı__
\`\`\`Taksim Dayi Gifi Atar\`\`\`
`)
  
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "",
  usage: ""
};
