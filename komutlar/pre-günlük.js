const Discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let cooldown = 1.728e8,
    amount = Math.floor(Math.random() * 10) + 200;

  let lastDaily = await db.fetch(`son_${message.author.id}`);
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));

    const embed = new Discord.RichEmbed()
      .setTitle("Hata!")
      .setColor("BLUE")
      .setDescription(
        `Günlük premium ödülünü zaten aldın!\nYeniden almana: **${timeObj.hours} saat ${timeObj.minutes} dakika**!`
      );
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .setTitle("Günlük Pre Puanın!")
      .setDescription(`Günlük Premium Puanın: **${amount}** puan!`)
      .setColor("BLUE");
    message.channel.send(embed);

    db.set(`son_${message.author.id}`, Date.now());

    db.add(`prepara_${message.author.id}`, amount);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "pre-günlük",
  description: "Günlük ödül alırsınız.",
  usage: "pre-günlük"
};
