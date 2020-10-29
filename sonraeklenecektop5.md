const Discord = require('discord.js');

exports.run = async (client, message) => {
 
  if (client.guilds.size < 5) return message.reply("Bot `5` tane sunucuda bulunmuyor!")
  
const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
message.channel.send(`1. **${top[0].name}**: ${top[0].memberCount}\n2. **${top[1].name}**: ${top[1].memberCount}\n3. **${top[2].name}**: ${top[2].memberCount}\n4. **${top[3].name}**: ${top[3].memberCount}\n5. **${top[4].name}**: ${top[4].memberCount}`)
  
}

exports.conf = {
enabled: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: "top5",
description: "Top10 listesi.",
usage: "top10"
};