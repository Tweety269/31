const Discord = require("discord.js");

  exports.run = async(client, message, args) => {
    
  const motion = new Discord.MessageEmbed()
.setColor('YELLOW')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setFooter(`Ayarlamalı Komutu Başarıyla Kullanıldı`)
  .setDescription(`
 **Atalantis-Bot Ayarlamalı Menüsüne Hoşgeldiniz**
 
<:c2b5a5eb4a5d6e83e30eb0c8e40fa622:821847721198616578> __!botlist-sistemi__ 
\`\`\`Botlist Sunucuları İçin Botlist Sistemini Gösterir\`\`\`
:busts_in_silhouette: __!rol-verme-sistemi__
\`\`\`Rol Ver Sistemidir Sadece 1 Rol Hakkınız Vardır\`\`\`
:newspaper: __!kayıt-sistemi__
\`\`\`Sunucunuz İçin Kayıt Sistemini Gösterir\`\`\`
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
  name: "ayarlamalı",
  description: "",
  usage: ""
};
