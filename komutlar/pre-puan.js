const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let kişi;
  if (!message.mentions.users.first()) {
    kişi = message.author;
  } else {
    kişi = message.mentions.users.first();
  }
  let para = await db.fetch(`prepara_${kişi.id}`);
  if (para == null) {
    const embed = new Discord.RichEmbed()
      .setTitle("Puanın!")
      .setDescription("Hiç puanın yok!")
      .setColor("BLUE")
      .setFooter(kişi.username, kişi.avatarURL);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setTitle("Puanın!")
      .setDescription(para + ` Puan!`)
      .setColor("BLUE")
      .setFooter(kişi.username, kişi.avatarURL);
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prepuan"],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "pre-puan",
  description: "pre-puan",
  usage: "pre-puan"
};
