const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`Çevrimiçi Üyeler`, `${message.guild.members.filter(o => o.presence.status === 'online').size} `, true)
  .addField(`Boşta Olan Üyeler`, `${message.guild.members.filter(i => i.presence.status === 'idle').size} `, true)
  .addField(`R. Etme Üyeler`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} `, true)
  .addField(`Çevrimdışı Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} `, true)
  
  
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-durum",
  description: "üye-durum",
  usage: "üye-durum"
};
