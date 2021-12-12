const Discord = require('discord.js');

module.exports = 
{
    name: 'ratio',
    description: 'i dare you',
    execute(message, args)
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