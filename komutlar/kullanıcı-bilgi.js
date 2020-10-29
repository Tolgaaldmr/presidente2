const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment')
moment.locale('tr')
exports.run = async(cclient, message, args) => {

  let cuser = message.mentions.users.first() || message.author
  let cmember = message.guild.member(cuser)
  let cDurum = message.author.presence.status;
  let cdurum;
  if(cDurum === 'online') cdurum = "Çevrimiçi"
  if(cDurum === 'idle') cdurum = "Boşta"
  if(cDurum === 'dnd') cdurum = "Rahatsız Etmeyin"
  if(cDurum === 'invisible') cdurum = "Görünmez/Çevrimdışı"


  let cembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(cclient.user.username, cclient.user.avatarURL)
  .setThumbnail(cmember.user.avatarURL)
  .addField("Kullanıcı bilgileri", `İsim: **${cmember.user.tag}** \nID: **${cmember.id}** \nDurum: **${cdurum}**`)
  .addField("Tarihler", `Hesap oluşturulma tarihi: **${moment(cmember.user.createdAt).format("DD/MM/YYYY")}** \nSunucuya katılım tarihi: **${moment(cmember.joinedAt).format("DD/MM/YYYY")}**`)
  .addField("Genel bilgiler", `Sunucudaki rolleri: ${message.guild.members.get(cmember.id).roles.map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"} \nOynuyor: ${cmember.user.presence.game ? cmember.user.presence.game.name : 'Şu an oyun oynamıyor'}`)
  
  message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kb'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kullanıcı-bilgi',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };