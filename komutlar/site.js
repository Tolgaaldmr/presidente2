const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`İnternet sitemiz ;`, `Aşağıda bulunan \`İnternet Sitemiz\` Butonuna basarak internet sitemize yönelebilirsiniz.`)
    .addField(`» Sitemiz`, `[İnternet Sitemiz](https://presidente-int-site.glitch.me/)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site','internet'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "site",
  description: "internet sitesi",
  usage: "site"
};
