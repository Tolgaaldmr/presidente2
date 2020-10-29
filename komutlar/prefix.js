const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = args.slice(0).join(" ");
  if (!prefix) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`Lütfen bir prefix belirtiniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.set(`prefix_${message.guild.id}`, prefix)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};
