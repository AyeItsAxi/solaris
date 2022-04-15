const Discord = require('discord.js');
const distube = require("distube");
module.exports = 
{
    name: 'ratio',
    description: 'i dare you',
    execute(message, args)
    {
        if (message.guild.id = "954669147437031494")
        {
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("That command is disabled in this server!")
            message.channel.send({embeds: [errEmbed]})
        }
        else
        {
        try 
        {
            const member = message.author
            const memberTarget = message.guild.members.cache.get(member.id);
            const permissionTrue = (message.member.permissions.has("MANAGE_MESSAGES"))
            if(permissionTrue)
            {
                message.channel.send('fuck off')
            } 
                else
                {
                    memberTarget.ban();
                    message.channel.send('counter')
                }
            } 
            catch(err) 
            {
                const errEmbed = new Discord.MessageEmbed()
                .setColor("#AB0000")
                .setTitle("ur weird")
                message.channel.send({embeds: [errEmbed]})
            }
        }
    }
}