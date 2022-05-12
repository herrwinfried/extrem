//const Discord = require('discord.js');
let fs = require('fs');
var fse = require("fs-extra");
var path = require("path")
function on(){
  var fos = `${__dirname}`
    fs.readFile('./config/data.json', (err, data) => {
        if (err) return
        let student = JSON.parse(data);
        data = student
    /////////////////////////////////////////
global.testJsondata1ex = data
    const Discord = require('discord.js');
    const { Client, Intents, Collection } = require('discord.js');
    const token = data.bot.token;
    
    // Create a new client instance
      const client1 = new Client({
        partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT'],
        intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING', 'GUILDS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_INVITES', 'GUILD_INVITES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'GUILD_PRESENCES', 'GUILD_SCHEDULED_EVENTS', 'GUILD_VOICE_STATES', 'GUILD_WEBHOOKS']
      });
    
    const files = fs.readdirSync(path.join(fos, "./events")).filter(file => file.endsWith(".js"));
    for (const file of files) {
      const eventName = file.split(".")[0];
      const event = require(path.join(fos, `./events/${file}`));
   
      client1.on(eventName, event.bind(null, client1));
    }

    client1.commands = new Discord.Collection();
    client1.aliases = new Discord.Collection();
    const commands = fs.readdirSync(path.join(fos, "./commands")).filter(file => file.endsWith(".js"));
    for (const file of commands) {
      const commandName = file.split(".")[0];
      const command = require(path.join(fos, `./commands/${file}`));
      if (command.conf.enabled === true) {
        client1.commands.set(commandName, command);
        command.conf.aliases.forEach(alias => {
          client1.aliases.set(alias, command.help.name);
        });
      }
    }
  
    client1.login(token);

    //
    });
}

module.exports = {
on
}