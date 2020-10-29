const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`<a:davet:741456445387702463> **Davet Sistemi** <a:davet:741456445387702463>`)
        .setDescription(`\`${ayarlar.prefix}davet-kanal\` \`${ayarlar.prefix}davet-kanal-sıfırla\` \`${ayarlar.prefix}davet-ekle\` \`${ayarlar.prefix}davet-sil\` \`${ayarlar.prefix}davet-sıfırla\` \`${ayarlar.prefix}davet-stokla\` \`${ayarlar.prefix}davetlerim\` \`${ayarlar.prefix}davetsay\` \`${ayarlar.prefix}davet-oluştur\`\n\n▬▬▬▬▬▬▬▬ **\`Rütbe Sistemi\`** ▬▬▬▬▬▬▬▬\n\n \`${ayarlar.prefix}rütbe-ekle\` \`${ayarlar.prefix}rütbe-sil\` \`${ayarlar.prefix}rütbe-liste\``)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736000132985782383&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/9KysPKR) **|** `)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`President | Bot Sürümü : v2 | Varsayılan Prefix : p!`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsistemi', 'davet-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'davetsistemi',
  description: '',
  usage: ''
};