const Discord = require("discord.js");

  exports.run = async(client, message, args) => {
    
  const motion = new Discord.MessageEmbed()
.setColor('YELLOW')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setFooter(`Moderasyon Komutu Başarıyla Kullanıldı`)
  .setDescription(`
 **Atalantis-Bot Moderasyon Menüsüne Hoşgeldiniz**

:snail: __!slowmode__ 
\`\`\`Sunucunuzda Slowmodeyi Aktif Eder\`\`\`
<:793774692762255382:819210252749635604> __!kanal-kilitle__
\`\`\`Belirttiğiniz Kanalı Kilitler\`\`\`
<:Nuclear_symbol:821853579622744125> __!nuke__
\`\`\`Belirttiğiniz Kanalı Siler Tekar Oluşturur\`\`\`
:broom: __!temizle__
\`\`\`Belirttiğiniz Kadar Mesaj Siler\`\`\`
<:sharelinkgeneratorlogo1:821854355325059072> __!sunucutanıt__
\`\`\`Basit Sunucutanıt Komutudur\`\`\`
<:personwearingturbanemojibygoogle:823271836334293064> __!sa-as__
\`\`\`Sunucunuz İçin Sa-As Komutudur\`\`\`
<:800376352254984192:818477639961542696> __!duyuru__
\`\`\`Embedli Duyuru Yaparsınız\`\`\`
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
  name: "moderasyon",
  description: "",
  usage: ""
};
