const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if (!prefix) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`Prefix zaten ayarlanmamış!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`Prefix başarıyla sıfırlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.delete(`prefix_${message.guild.id}`)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};
