const Discord = require("discord.js")
const {MessageEmbed, WebhookClient} = Discord
var data = global.testJsondata1ex
const prefix = data.bot.prefix;
module.exports = async(client1, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client1.commands Enmap
    const cmd = client1.commands.get(command) || client1.commands.get(client1.aliases.get(command));
     // If that command doesn't exist, silently exit and do nothing
     if (!cmd) return;
    // Run the command
    try {
        cmd.run(client1, message, args);
    }
catch (error) {
    return
}

  };