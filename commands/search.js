const Discord = require("discord.js");
const data = global.testJsondata1ex
const { MessageEmbed, WebhookClient } = require('discord.js');
var ex = require("../index.js")
exports.run = (client1, message, args) => {
if (!message.guild) {
    if (message.author.id === "883367093280595990" || message.author.id === "932615289076596746") {
        if (!args[0]) return message.reply("adres girmemişsin")
ex.search(args[0], function(callback){
    if (callback) {
        const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/974066898197155850/M0hVfSfmKlap1YjfKSAFRBFlpYRfG1PRmIThkWGbo2WE07lkxg9DWxv8bno0UtmZglJ-' });
var status = callback.status
var datax = callback.data
var downloadPage = datax.downloadPage
var fileName = datax.fileName
var array = ["Status: "+status,"downloadPage: "+downloadPage,"fileName: "+fileName]
var embed = new MessageEmbed()
.setDescription(array ? array.join("\n") : "Boş")
        webhookClient.send({
           // content: `${array.join("\n")}`,
                username: 'search',
            //	avatarURL: `${client.user.avatarURL()}`,
               embeds: [embed],
            });
    }
})
    }
}
        
}
exports.conf = {
    enabled: true,
    aliases: []
}
exports.help = {
    name: "search",
}