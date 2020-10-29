const Discord = module.require('discord.js');
const client = new Discord.Client();


module.exports.run = async (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bir instagram hesabı belirt.!');
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('İnstagram Bilgileri')
    .addField(`Hesap adı: ${mesaj}`,`‏‏‏‏‏‏‏‏   `)
    .setDescription(`Hesabın linki [tıkla](https://www.instagram.com/accounts/${mesaj})`)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png")
    .setFooter('İnstagram Bot')
    
    
    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};


module.exports.help = {
  name: "instagram",
  description: "instagram",
};