let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Bu komutu kullanabilmek için** [\`Yönetici\`] **yetkisine sahip olmalısın.**`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `<:795084193209909289:816287005184098314> **Bir** \`rol\` **etiketlemen Gerekmekte** \`${ayarlar.prefix}rol-verme-yetkilisi @rol\``
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `<:788152753888952391:816286093405454358> **Rol Yetkilisi** [${rol}] **Olarak Atandı!**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-verme-yetkilisi"],
  perm: 0
};
exports.help = {
  name: "rol-verme-yetkilisi"
};

exports.play = {
  kullanım: "y!rol-verme-yetkilisi @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};
