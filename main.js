const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
require('discord-reply');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const prefix = 'kd!';
const fs = require('fs');
const { get } = require('superagent');
const bot = client;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}
const config = require('./config.json');
client.once('ready', () => 
{
    console.log('Successfully logged in as KiannaBot DevTest#5546');
    var activities = [`you`, 'for kd!help'], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'WATCHING'
    }), 5000);
});
client.on('message', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    } 
    if (command === 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    } 
    if (command === 'cat')
    {
        client.commands.get('cat').execute(message, args);
    }
    if (command === 'thisdog')
    {
        client.commands.get('thisdog').execute(message, args);
    }
    if (command === 'help-g')
    {
        client.commands.get('help-g').execute(message, args);
    }
    if (command === 'invite')
    {
        client.commands.get('invite').execute(message, args);
    }
    if (command === 'woof')
    {
        client.commands.get('woof').execute(message, args);
    }
    if (command === 'banthiswebsite')
    {
        client.commands.get('banthiswebsite').execute(message, args);
    }
    if (command === 'clear')
    {
        client.commands.get('clear').execute(message, args);
    }
    if (command === 'kick')
    {
        client.commands.get('kick').execute(message, args);
    }
    if (command === 'ban')
    {
        client.commands.get('ban').execute(message, args);
    }
    if (command === 'mute')
    {
        client.commands.get('mute').execute(message, args);
    }
    if (command === 'unmute')
    {
        client.commands.get('unmute').execute(message, args);
    }
    if (command === 'unban')
    {
        client.commands.get('unban').execute(client, message, args);
    }
    if (command === 'help-m')
    {
        client.commands.get('help-m').execute(message, args);
    }
    if (command === 'help')
    {
        client.commands.get('help').execute(message, args);
    }
    if (command === 'avatar')
    {
        client.commands.get('avatar').run(client, message, args);
    }
    if (command === 'ratio')
    {
        client.commands.get('ratio').execute(message, args);
    }  
    if (command === 'play')
    {
        client.commands.get('play').execute(message, args);
    }
    if (command === 'findmydad')
    {
        client.commands.get('findmydad').execute(message, args);
    }
});
client.login(config.token);