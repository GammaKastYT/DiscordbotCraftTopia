const { Collection, Client, Discord, MessageEmbed, Intents, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });
const config = require('./config.json')

client.login(config.token)

client.on("ready", async () => {

    console.log(`${client.user.tag} is now online!`)
    client.user.setActivity("Aant gluren bij CraftTopia", {Type: "PLAYING"});

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = config.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}ip`){
        return message.channel.send(" `Play.CraftTopia.nl` ");
    }

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = config.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}commands`){
        return message.channel.send(" `We hebben tot nu toe 3 commands *Ip en *Commands en *hallo`");
    }

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = config.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}hallo`){
        return message.channel.send(" `Ewa Neef` ");
    }

});

bot.login(process.env.token);