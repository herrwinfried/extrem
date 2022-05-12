const Discord = require("discord.js")
const {MessageEmbed, WebhookClient} = Discord
var data = global.testJsondata1ex
const prefix = data.bot.prefix;
module.exports = async(client1) => {
    client1.user.setStatus('dnd');
  };