const Discord = require("discord.js");

  exports.run = async(client, message, args) => {
    
  const motion = new Discord.MessageEmbed()
.setFooter(`Eğer Hata Alırsanız Destek Sunucumuza Katılın`)
.setDescription(`
:space_invader: **Atalantis-Bot Rol Verme Sistemi**

__Botlist Sistemini Kullanırken Botun Rolünü En Yukarı Taşıyın__

**Rol Ayarlama**

> <:749291091605586002:818477579547312170> \`!rol-verme-yetkilisi [@Rolünüz]\`
> <:749291091605586002:818477579547312170> \`!verilecek-rol-ayarla [@Rolünüz]\`

**Kanal & Rol Verme**

> :ringed_planet: \`!rol-log-kanal-ayarla [#Kanalınız]\`
> :ringed_planet: \`!rol-ver [@Üye]\`
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
  name: "rol-verme-sistemi",
  description: "",
  usage: ""
};
