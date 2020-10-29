const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                 .setColor("BLUE")
                                                                            .setTitle(`İzin Hatası`)
                                                                      .setDescription('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.'))          
if(args[0] === "kapat") {
db.delete(`bayanrol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .setDescription(`Bayan Rolü Başarıyla Kapatıldı!`))

} else {
  let bayanrol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  if (!bayanrol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Bayan Rolünü Belirlemelisiniz.`))
  db.set(`bayanrol_${message.guild.id}`, bayanrol.id)
  if (!message.guild.roles.get(bayanrol.id)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .addField('Durum', `:white_check_mark: Başarılı!`)
                      .addField(`Ayarlanan Bayan Rolü`, `${bayanrol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bayan-rol', 'bayanrol'],
    permLevel: 0
}

exports.help = {
    name: 'bayan-rol',
    description: 'Bayan Rolünü Belirler.',
    usage: 'bayan-rol'
}
