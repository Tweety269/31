let Discord = require("discord.js");
let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Verilecek Rol Ayarlanmamış**`
    );
  if (!abonelog)
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Log Kanalı Ayarlanmamış**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Yetkili Rolü Ayarlanmamış**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Ayarlanan Yetkili Rolüne\`] **İhtiyacın var.**`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`<:795084193209909289:816287005184098314> **Bir** \`Üye\` **Etiketleyin**`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .addField(
      `Rolü Veren Kişi:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `Rol Verilen Kişi`,
      `${user}`,
      true
    )
   .addField(
     ` Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
    .setColor(`GREEN`)
    .setFooter(`Komut Başarıyla Kullanıldı!`);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-ver"],
  perm: 0
};
exports.help = {
  name: "rolver"
};

exports.play = {
  kullanım: "!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};

//CodeWorld Yunus Emre
