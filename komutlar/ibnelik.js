exports.run = async (client, msg, args) => {
    let ask=[
      "İbneliğini %3 Gösteriyor.",
      "İbneliğini %6 Gösteriyor.",
      "İbneliğini %9 Gösteriyor.",
      "İbneliğini %12 Gösteriyor.",
      "İbneliğini %18 Gösteriyor.",
      "İbneliğini %20 Gösteriyor.",
      "İbneliğini %23 Gösteriyor.",
      "İbneliğini %26 Gösteriyor.",
      "İbneliğini %29 Gösteriyor.",
      "İbneliğini %30 Gösteriyor.",
      "İbneliğini %40 Gösteriyor.",
      "İbneliğini %50 Gösteriyor.",
      "İbneliğini %60 Gösteriyor.",
      "İbneliğini %70 Gösteriyor.",
      "İbneliğini %73 Gösteriyor.",
      "İbneliğini %76 Gösteriyor.",
      "İbneliğini %79 Gösteriyor.",
      "İbneliğini %82 Gösteriyor.",
      "İbneliğini %85 Gösteriyor.",
      "İbneliğini %88 Gösteriyor.",
      "İbneliğini %90 Gösteriyor.",
      "İbneliğini %91 Gösteriyor.",
      "İbneliğini %92 Gösteriyor.",
      "İbneliğini %93 Gösteriyor.",
      "İbneliğini %94 Gösteriyor.",
      "İbneliğini %95 Gösteriyor.",
      "İbneliğini %96 Gösteriyor.",
      "İbneliğini %97 Gösteriyor.",
      "İbneliğini %98 Gösteriyor.",
      "İbneliğini %99 Gösteriyor.",
      "İbneliğini %100 Gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 İbne Birini etiketlemelisin..')
  }});



    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }


  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'ibnelikölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'ibnelikölçer'
   }
