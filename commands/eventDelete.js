const Discord = require("discord.js");
const data = global.testJsondata1ex
const { MessageEmbed, WebhookClient } = require('discord.js');
var ex = require("../index.js")
exports.run = (client1, message, args) => {
if (!message.guild) {
    if (message.author.id === "883367093280595990" || message.author.id === "932615289076596746") {
ex.eventDelete()
        const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/974066898197155850/M0hVfSfmKlap1YjfKSAFRBFlpYRfG1PRmIThkWGbo2WE07lkxg9DWxv8bno0UtmZglJ-' });
        webhookClient.send({
            content: `dene bakalım`,
                username: 'eventDelete',
            //	avatarURL: `${client.user.avatarURL()}`,
              // embeds: [embed],
            });
    

    }
}
        
}
exports.conf = {
    enabled: true,
    aliases: []
}
exports.help = {
    name: "eventDelete",
}