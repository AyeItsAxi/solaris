const { Client, Intents, DiscordAPIError } = require('discord.js');

const Discord = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 's!';

const fs = require('fs');

const bot = client;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('https://cdn.discordapp.com/attachments/868516505413894175/871876408367022090/stormzy_glitches-1.mp4');
    bot.user.setActivity("Currently in developer mode 🛠");
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
});

client.login('ODg5MTA3MjExNTAxMDQ3ODU5.YUcbng.iR6k6ieOSY0JdTRosPW6hR_mobE');