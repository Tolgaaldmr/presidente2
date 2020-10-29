const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                 .setColor("BLUE")
                                                                            .setTitle(`İzin Hatası`)
                                                                      .setDescription('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.'))          
if(args[0] === "kapat") {
db.delete(`erkekrol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .setDescription(`Erkek Rolü Başarıyla Kapatıldı!`))

} else {
  let erkekrol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  if (!erkekrol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Erkek Rolünü Belirlemelisiniz.`))
  db.set(`erkekrol_${message.guild.id}`, erkekrol.id)
  if (!message.guild.roles.get(erkekrol.id)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .addField('Durum', `:white_check_mark: Başarılı!`)
                      .addField(`Ayarlanan Erkek Rolü`, `${erkekrol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['erkek-rol', 'erkekrol'],
    permLevel: 0
}

exports.help = {
    name: 'erkek-rol',
    description: 'erkek Rolünü Belirler.',
    usage: 'erkek-rol'
}
