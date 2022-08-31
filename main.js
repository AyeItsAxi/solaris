const { Client, Intents, DiscordAPIError } = require('discord.js');
const { interaction } = require("discord.js");
const Discord = require('discord.js');
require('discord-reply');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]});
const serverCompileDef = 'public';
console.log("server compile definiton set as '" + serverCompileDef + "'.")
var prefix = "s!";
var activities = [`you`, `for s!help`], i = 0;
if (serverCompileDef == 'proto'){
    prefix = "sp!";
    activities = [`you`, `for sp!help`], i = 0;
} if (serverCompileDef == 'devtest'){
    prefix = "kd!";
    activities = [`you`, `for kd!help`], i = 0;
} 
console.log("set command prefix to " + prefix)
const fs = require('fs');
const { get } = require('superagent');
const bot = client;
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { rest } = require("@discordjs/rest");
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
    console.log('client is ready.');
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'WATCHING'
    }), 5000);
});
client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
});
client.on('messageCreate', message =>
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
        client.commands.get('invite').execute(message, args, serverCompileDef);
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
    if (command === 'findmydad')
    {
        client.commands.get('findmydad').execute(message, args);
    }
    if (command === 'autoplay')
    {
        client.commands.get('autoplay').run(client, message, args);
    }
    if (command === 'leave')
    {
        client.commands.get('leave').run(client, message, args);
    }
    if (command === 'pause')
    {
        client.commands.get('pause').run(client, message, args);
    }
    if (command === 'playskip')
    {
        client.commands.get('playskip').run(client, message, args);
    }
    if (command === 'previous')
    {
        client.commands.get('previous').run(client, message, args);
    }
    if (command === 'queue')
    {
        client.commands.get('queue').run(client, message, args);
    }
    if (command === 'resume')
    {
        client.commands.get('resume').run(client, message, args);
    }
    if (command === 'seek')
    {
        client.commands.get('seek').run(client, message, args);
    }
    if (command === 'shuffle')
    {
        client.commands.get('shuffle').run(client, message, args);
    }
    if (command === 'skip')
    {
        client.commands.get('skip').run(client, message, args);
    }
    if (command === 'stop')
    {
        client.commands.get('stop').run(client, message, args);
    }
    if (command === 'volume')
    {
        client.commands.get('volume').run(client, message, args);
    }
    if (command === 'play')
    {
        client.commands.get('play').run(client, message, args);
    }
});
if (serverCompileDef == 'proto'){
    client.login(config.protolaristoken);
    console.log("successfully logged into Protolaris client (Protolaris#8772)");
} if (serverCompileDef == 'devtest'){
    client.login(config.devtesttoken);
    console.log("successfully logged into DevTest client (Solaris DevTest#7068)");
}  if (serverCompileDef == 'public'){
    client.login(config.publictoken);
    console.log("successfully logged into public client (Solaris#2422)");
}