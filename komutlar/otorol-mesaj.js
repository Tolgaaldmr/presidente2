const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLUE")
.setFooter(bot.user.username, bot.user.avatarURL)
    message.channel.send(embed);
    return;
  }

  let msj = args.slice(0).join(" ");
  if (!msj) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir mesaj belirtiniz!\n\nDeğişkenler:\n-uye- = Üyenin adını atar.\n-uyetag- = Üyeyi taglar.\n-sunucu- = Sunucu adını atar.\n-rol- = Rolü etiketler.`
        )
        .setColor("BLUE")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(`Otorol mesajı; ${msj} olarak ayarlandı!`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed)

  db.set(`otorolmsj_${message.guild.id}`, msj);
};

module.exports.conf = {
  aliases: ["otorol-mesaj"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol-mesaj",
  description: "otorol-mesaj",
  usage: "oto-rol-mesaj"
};
