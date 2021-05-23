const Discord = require("discord.js");

  exports.run = async(client, message, args) => {
    
  const motion = new Discord.MessageEmbed()
.setColor('YELLOW')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setFooter(`Kullanıcı Komutu Başarıyla Kullanıldı`)
  .setDescription(`
 **Atalantis-Bot Kullanıcı Menüsüne Hoşgeldiniz**

:crystal_ball: __!istatistik__ 
\`\`\`Atalantis Botun İstatistiklerini Gösterir\`\`\`
<:ico_pro01:821851126902292532> __!profil__
\`\`\`Discord Profilinizi Gösterir\`\`\`
<:inviting_friends_694352:821851488501628979> __!davet__
\`\`\`Botu Davet Etmek İçin Link Gönderir\`\`\`
:detective: __!avatar__
\`\`\`Profil Fotoğrafınızı Gösterir\`\`\`
:question: __!çevrilenkod__
\`\`\`V11tov12 Kaç Kod Çevirilmiş Gösterir\`\`\`
<:690489172942651403:818477565916348466> __!v11tov12__
\`\`\`V11 Kodlarınızı V12 Yapar\`\`\`
<:1091093730_findthedataregulatory:823888838949732382> __!kurallar__
\`\`\`Klasik Discord Sunucu Kurallarını Atar\`\`\`
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
  name: "kullanıcı",
  description: "",
  usage: ""
};
