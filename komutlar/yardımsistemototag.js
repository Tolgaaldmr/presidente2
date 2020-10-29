const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`<a:oyun:741456442976108605> Presidente Tag Sistemi <a:oyun:741456442976108605>`)
        .setDescription(`\`${ayarlar.prefix}ototag\` \`${ayarlar.prefix}oto-tag-isim\` \`${ayarlar.prefix}oto-tag-sıfırla\``)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736000132985782383&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/9KysPKR) **|** `)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ototagsistemi','ototag-sistemi','tagsistemi','tag-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'ototagsistemi',
  description: '',
  usage: ''
};