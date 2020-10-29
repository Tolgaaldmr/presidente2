const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                 .setColor("BLUE")
                                                                            .setTitle(`İzin Hatası`)
                                                                      .setDescription('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.'))          
if(args[0] === "kapat") {
db.delete(`yetkilirol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('BLUE')
                      .setDescription(`Yetkili Rolü Başarıyla Kapatıldı!`))

} else {
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  if (!yetkilirol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Yetkili Rolünü Belirlemelisiniz.`))
  db.set(`yetkilirol_${message.guild.id}`, yetkilirol.id)
  if (!message.guild.roles.get(yetkilirol.id)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('BLUE')
                      .addField('Durum', `:white_check_mark: Başarılı!`)
                      .addField(`Ayarlanan Yetkili Rolü`, `${yetkilirol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkili-rol', 'yetkilirol'],
    permLevel: 0
}

exports.help = {
    name: 'yetkili-rol',
    description: 'Kayıtı Yapacak Rolü Belirler.',
    usage: 'yetkili-rol'
}
