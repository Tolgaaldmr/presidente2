const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                 .setColor("BLUE")
                                                                            .setTitle(`İzin Hatası`)
                                                                      .setDescription('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.'))
                                                                                   
if(args[0] === "kapat") {
db.delete(`kayıtlırol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('BLUE')
                      .setDescription(`Kayıtlı Rolü Başarıyla Kapatıldı!`))

} else {
  let kayıtlırol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
let ilkRole;
  let ikirole;
  if (!kayıtlırol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Kayıtlı Rolünü Belirlemelisiniz.`))
  else ilkRole = message.mentions.roles.first().id
  let kayıtlızrol = await db.set(`kayıtlırol_${message.guild.id}`, ilkRole)
  if (!message.guild.roles.get(ilkRole)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('BLUE')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('BLUE')
                      .addField('Durum', `:white_check_mark: Başarılı!`)
                      .addField(`Ayarlanan Kayıtlı Rolü`, `${kayıtlırol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtlırol', 'kayıtlı-rol'],
    permLevel: 0
}

exports.help = {
    name: 'üye-rol',
    description: 'Kayıt Yapıldıktan Sonra Verilecek Rolü Ayarlar.',
    usage: 'üye-rol'
}
