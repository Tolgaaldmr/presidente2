const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  let kayıtlızrol = await db.fetch(`kayıtlırol_${message.guild.id}`)
  let erkekzrol = await db.fetch(`erkekrol_${message.guild.id}`)
  let kayıtszrol = await db.fetch(`kayıtsızrol_${message.guild.id}`)
  let yetkilizrol = await db.fetch(`yetkilirol_${message.guild.id}`)
  let kayıtkanal = await db.fetch(`kayıtkanaly_${message.guild.id}`)
  if(!yetkilizrol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor("BLUE")
                                              .setTitle(`Rol Hatası`)
                                              .setDescription(`Bu komutu kullanmak için <@&${yetkilizrol}> rolüne sahip olmanız gerekir.`))  
if(!message.member.roles.has(yetkilizrol)) {
  return message.channel.send(new Discord.RichEmbed()
                                              .setColor("BLUE")
                                              .setTitle(`Rol Hatası`)
                                              .setDescription(`Bu komutu kullanmak için <@&${yetkilizrol}> rolüne sahip olmanız gerekir.`))  
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
    
  const hata1 = new Discord.RichEmbed() //kişi hata
  .setColor(`BLUE`)
  .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
  .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}üye @Üye İsim Yaş\``)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  if (!member) return message.channel.send(hata1)
    
    const m = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
    
  const hata2 = new Discord.RichEmbed() //nick hata
  .setColor(`BLUE`)
  .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
  .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}üye @Üye İsim Yaş\``)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  if (!nick) return message.channel.send(hata2)
    
  const hata3 = new Discord.RichEmbed()
  .setColor(`BLUE`)
  .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
  .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}üye @Üye İsim Yaş\``)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  if (!yas) return message.channel.send(hata3)
    
    m.addRole(kayıtlızrol)
    m.addRole(erkekzrol)
    m.removeRole(kayıtszrol)
    m.setNickname(`${nick} | ${yas}`)
    
    const embed = new Discord.RichEmbed()
    .setColor(`BLUE`)
  .setTitle(`:white_check_mark: Kayıt İşlemi Başarılı!`)
  .addField(`Kayıt Edilen Kişi:`, `${member}`)
  .addField(`Kayıt İşleminde Verilen Rol:`, `<@&${kayıtlızrol}> , <@&${erkekzrol}>`)
  .addField(`Kayıt İşleminde Alınan Rol:`, `<@&${kayıtszrol}>`)
  .addField(`Belirlenen İsim:`, `${nick} | ${yas}`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek', 'erkek','erkek','erkek','e'],
  permLevel: 0
};

exports.help = {
  name: 'erkek',
  usage: 'erkek',
  description: 'erkek Kayıt Yapar.'
};;