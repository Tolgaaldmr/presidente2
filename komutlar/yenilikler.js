const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`<a:yenilik:741470103669047398> Presidente Yenilikler <a:yenilik:741470103669047398>`)
        .setDescription(`Botun arayüzü tamamen değiştirilmiştir. Kullanıcılar için daha kolay bir menü tasarlanmıştır.\n \`Bütün kullanıcılarımıza iyi kullanımlar dileriz.\``)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736000132985782383&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/9KysPKR) **|** `)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler','yeni'],
  permLevel: 4,
};

exports.help = {
  name: 'yenilik',
  description: '',
  usage: ''
};