const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('736000132985782383') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`<a:tolga:731670099081297931> Presidente Yardım Menüsü <a:tolga:731670099081297931>`)
        .setDescription(`<a:davet:741456445387702463> **Davet sistemi Komutları (${ayarlar.prefix}davetsistemi)** \n\`Davet Sistemi Hakkında Bütün Bilgileri Listelersiniz.\`\n\n <a:moderasyon:741456441361301534> **Moderasyon Komutları** \n\`${ayarlar.prefix}ban\` \`${ayarlar.prefix}kick\` \`${ayarlar.prefix}unban\` \`${ayarlar.prefix}kanal-kilit\` \`${ayarlar.prefix}mute\` \`${ayarlar.prefix}takma-ad\` \`${ayarlar.prefix}rol-ver\` \`${ayarlar.prefix}rol-al\` \`${ayarlar.prefix}reklam-taraması\` \`${ayarlar.prefix}yavasmod\` \`${ayarlar.prefix}temizle\` \`${ayarlar.prefix}çek @kişi\` \`${ayarlar.prefix}kullanıcı-bilgi @kişi\`\n\n <a:sistem:741456446537072680> **Sistem Komutları**\n\`${ayarlar.prefix}korumasistemi\` \`${ayarlar.prefix}otorolsistemi\` \`${ayarlar.prefix}sayaçsistemi\` \`${ayarlar.prefix}ototagsistemi\` \`${ayarlar.prefix}sa-as\` \`${ayarlar.prefix}hg-bb\`\n\n <a:bot:741456446847451146> **Bot Komutları** \n\`${ayarlar.prefix}bot-bilgi\` \`p!talep\` \`${ayarlar.prefix}yapımcım\` \`${ayarlar.prefix}satınal\` \`${ayarlar.prefix}presidente\` \`${ayarlar.prefix}site\` \`${ayarlar.prefix}avatar\`\n\n <a:premium:741456440937545850> **Premium Komutları** \n\`${ayarlar.prefix}pre-günlük\` \`${ayarlar.prefix}pre-puan\` \`${ayarlar.prefix}pre-market\`\n\n <a:oyun:741456442976108605> **Oyun Komutları** \n\`${ayarlar.prefix}kelime-tahmini\` \`${ayarlar.prefix}adamasmaca\` \`${ayarlar.prefix}sayı-tahmini\` \`${ayarlar.prefix}aşkölçer @kisi\` \`p!kaçcm\`\n\n <a:kayit:741456448994934795> **Kayıt Sistemi Komutları (${ayarlar.prefix}kayıtsistemi)** \n\`Ayarlanabilir Gelişmiş Kayıt Sisteminin Komutlarını Listelersiniz.\`\n\n <a:yenilik:741470103669047398> **Yenilikler** \n\`p!yenilikler\``)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736000132985782383&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/9KysPKR) **|** `)
        .setFooter(`Presidente | Bot Sürümü : v2 | Varsayılan Prefix : p!`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};