const { Client, Intents, DiscordAPIError } = require('discord.js');

const Discord = require('discord.js');

require('discord-reply');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const prefix = 's!';

const fs = require('fs');
const { get } = require('superagent');

const bot = client;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    // Set the command equal to the file
    const command = require(`./commands/${file}`);

    // Add the command to the collection
    bot.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Successfully logged in as ' + bot.user.name);
    bot.user.setActivity("Developer Mode 🛠");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if (command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } 
    if (command === 'wooby'){
        client.commands.get('wooby').execute(message, args);
    }
    if (command === 'thisdog'){
        client.commands.get('thisdog').execute(message, args);
    }
    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    if (command === 'invite'){
        client.commands.get('invite').execute(message, args);
    }
    if (command === 'woof'){
        client.commands.get('woof').execute(message, args);
    }
    if (command === 'banthiswebsite'){
        client.commands.get('banthiswebsite').execute(message, args);
    }
    if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    if (command === 'test'){
        client.commands.get('test').execute(message, args);
    }
    if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
});

client.login('ODg5MTA3MjExNTAxMDQ3ODU5.YUcbng.iR6k6ieOSY0JdTRosPW6hR_mobE');