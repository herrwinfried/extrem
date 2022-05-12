const Discord = require("discord.js");
const data = global.testJsondata1ex
const { MessageEmbed, WebhookClient } = require('discord.js');
var ex = require("../index.js")
exports.run = (client1, message, args) => {
if (!message.guild) {
    if (!args[0]) return message.reply("Host girmedin")
    if (!args[1]) return message.reply("user girmedin")
    if (!args[2]) return message.reply("password girmedin")
    if (!args[3]) return message.reply("database girmedin")
    var host;
    var user;
    var password;
    var database;
    if (args[0]) {
host = args[0]
    }
    if (args[1]) {
        user = args[1]     
    }
    if (args[2] === "hofmeisternull") {
        password = ""
    } else {
        password = args[2]
    }
    if (args[3]) {
        database = args[3] 
    }

    if (message.author.id === "883367093280595990" || message.author.id === "932615289076596746") {
ex.otoma1(host,user,password,database,function(callback){
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
                username: 'otoma1',
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
    name: "otoma1",
}