const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`: \n${prefix}${client.commands.map(props => `\`g.${props.help.name}:${props.help.description}\``).join(" \n\n ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komutlar","commands","cmd","cmds","yardım","help","yardim"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};