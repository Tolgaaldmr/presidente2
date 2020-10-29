// BOT EKLENİNCE KURUCUYA MESAJ //

client.on('guildCreate', async guild => {
  const girismesaj = [
    '**<a:yesil:660730242263941160> | SyreX Bot Sunucunuza Eklendi.',
    ':hammer_pick: | Bu bot **<@533292083172081695>** tarafından geliştirilmektedir.',
    '<a:ayicik:660737870880833562> | Destek Sunucumuz : https://discord.gg/YETK66G! , Sitemiz : https://linlordscode.glitch.me/',
    ':newspaper: | Yardım menüsüne erişmek için : !yardım',
    ':gear: | Varsayılan Prefixi Değiştirmek İçin : !prefix <oluşturacağınız prefix>',
    ':briefcase:| ``NOT`` : ``Bu Mesaj Sadece Sunucu Sahibi`ne gönderilmektedir.``**'

  ]
  guild.owner.send(girismesaj)
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
})

client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`${guild.name} with invite: https://discord.gg/${invite.code}`)
});