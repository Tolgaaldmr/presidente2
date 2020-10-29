const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`<a:koruma:741467888371761293> Presidente Koruma Sistemi <a:koruma:741467888371761293>`)
        .setDescription(`\`${ayarlar.prefix}rol-koruma\` \`${ayarlar.prefix}rol-koruma-sıfırla\` \`${ayarlar.prefix}kanal-koruma\` \`${ayarlar.prefix}kanal-koruma-sıfırla\` \`${ayarlar.prefix}reklam-engel\` \`${ayarlar.prefix}ever-engel\``)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736000132985782383&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/9KysPKR) **|** `)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma','korumasistemi','koruma-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma',
  description: '',
  usage: ''
};