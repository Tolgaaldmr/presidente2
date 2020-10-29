const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  const sessions = new Set();
  const msg = message;
    if(sessions.has(msg.channel.id)) return msg.channel.send('Bu kanalda zaten oyun oynanıyor.');
    try{
        const thatNumber = Math.floor(Math.random()*100);
        let progres = 10;
        let isWin = false;
        let ans = '❓ Tahmin başladı!';
        while(progres > 0 && !isWin){
            await msg.channel.send(`${ans}\nŞimdi \`${progres}\` şansın var!`);
            const filter = msgs => (msgs.content.toLowerCase === 'bitir' || !isNaN(msgs.content)) && msgs.author.id === msg.author.id;
            const response = await msg.channel.awaitMessages(filter, { max: 1, time: 15000 });
            if(!response.size){
                await msg.channel.send('⏱️ Üzgünüm zamanın **doldu.**');
                break;
            }
            if(response.first().content.toLowerCase === 'bitir') break;
            const choice = parseInt(response.first().content, 10);
            if(choice < thatNumber) ans = '🔺 Bu sayıdan daha **yüksek!**';
            if(choice > thatNumber) ans = '🔻 Bu sayıdan daha **düşük!**';
            if(choice === thatNumber) isWin = true;
            progres--;
        }
        if(isWin) return msg.channel.send(`**Kazandın!** Tuttuğum sayı \`${thatNumber}\``);
        return msg.channel.send(`**Kaybettin!** Tuttuğum sayı \`${thatNumber}\``);
    }catch(e){
        sessions.delete(msg.channel.id);
        return msg.channel.send(`Bir hata ile **karşılaştık.**`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['st'],
  permLevel: 0
};

exports.help = {
  name: 'sayı-tahmini',
  description: '',
  usage: ''
};