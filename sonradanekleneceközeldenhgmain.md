// ÖZELDEN HOŞGELDİN //

client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`BLUE`)
    .setImage(`https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif`)
    .addField(`<a:sagok:660737869576667137> **Sunucuya Hoşgeldin !**`, `<a:sagok:660737869576667137> Bu Sunucu "SyreX Bot" Kullanıyor !`)
    .setFooter(`Botu Davet Etmek İçin : !davet | Sitemiz İçin : !site`)
  member.send(e);
});

// ÖZELDEN HOŞGELDİN //