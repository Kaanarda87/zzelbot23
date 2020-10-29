const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== ayarlar.sahip) return message.channel.send("🚫 Bu komutu sadece sahibim kullanabilir.")
     
    message.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`Yeniden Başlatma İşlemi Gerçekleştirilecek`);
    process.exit(0);
  })
     
           
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenile"],
  permLevel: 4
};

module.exports.help = {
name: 'reboot'
};