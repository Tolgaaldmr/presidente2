const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`:(`, `Biride çıkıp demiyor ki ; Presidente iyi ki varsın.`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['presidente','presidente'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "presidente",
  description: "presidente",
  usage: "presidente"
};
