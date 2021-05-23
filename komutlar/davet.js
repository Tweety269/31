const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
                      .setDescription(
    `
<:783664196453138432:821699908226121728> **Atalantis - Bot Davet**

> __Yetkili Davet (8perm)__ [Tıkla Ve Git](https://discord.com/oauth2/authorize?client_id=813407970750496828&scope=bot&permissions=8)
> __Yetkisiz Davet (0perm)__ [Tıkla Ve Git](https://discord.com/oauth2/authorize?client_id=813407970750496828&scope=bot&permissions=0)

<:749291091605586002:818477579547312170>  **Atalantis - Diğer**

> __Destek Sunucum:__ [Tıkla Ve Git](https://discord.gg/mz2ryMzjPP)
> __Oy Vermek:__ [Tıkla Ve Git](https://top.gg/bot/813407970750496828/vote)
`)
    .setFooter(`${message.author.tag} Tarafından Komut Başarıyla Kullanıldı.`, message.author.avatarURL())
  
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};