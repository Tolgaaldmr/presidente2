const Discord = require('discord.js');
const botadi = "SyreX"
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`<a:kayit:741456448994934795> Kayıt Sistemi <a:kayit:741456448994934795>`)
.setTimestamp()
.addField('Erkek Kayıt', `Erkekleri Kayıt Yaparsınız.\nKullanım: **${ayarlar.prefix}erkek <@Kişi> <İsim> <Yaş>**`)
.addField('Bayan Kayıt', `Bayanları Kayıt Yaparsınız.\nKullanım: **${ayarlar.prefix}bayan <@Kişi> <İsim> <Yaş>**`)
.addField('Bayan Rol Ayarla', `Bayan Rolu Belirler.\nKullanım: **${ayarlar.prefix}bayan-rol <@rol>**`)
.addField('Erkek Rol Ayarla', `Erkek Rolu Belirler.\nKullanım: **${ayarlar.prefix}erkek-rol <@rol>**`)
.addField('Kayıtsız Rol Ayarla', `Kayıtsız Rolünu Ayarlarsınız.\nKullanım: **${ayarlar.prefix}kayıtsız-rol <@rol>**`)
.addField('Üye Rol Ayarla', `Kayıt Edildikten Sonra Verilen Rolü Ayarlarsınız.\nKulanım: **${ayarlar.prefix}üye-rol <@rol>**`)
.addField('Yetkili Rol Ayarla', `Kayıtı Yapan Rolu Belirler.\nKullanım: **${ayarlar.prefix}yetkili-rol <@rol>**`)
.setFooter(`Developer : Rewaron`, client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kayıtsistemi', 'kayıt-yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};