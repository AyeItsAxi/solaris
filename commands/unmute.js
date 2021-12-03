const Discord = require('discord.js');

module.exports = 
{
    name: 'unmute',
    description: 'gfsajdhsaekrf',
    execute(message, args)
    {
        const ratio = (!message.member.permissions.has("MUTE_MEMBERS"))
        const target = message.mentions.users.first();
        const permissionTrue = (message.member.permissions.has("MUTE_MEMBERS"))
        try
        {
        if(target, permissionTrue)
        {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mebers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Butthead');

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            const unmuteEmbed = new Discord.MessageEmbed()
            .setColor("#656565")
            .setTitle("Successfully unmuted!")
            .setDescription("The target user has been successfully unmuted!")
            message.channel.send({embeds: [unmuteEmbed]})
            console.log(memberTarget + " has been unmuted by " + message.author)
            
            if(target, ratio)
            {
            const permEmbed = new Discord.MessageEmbed()
                .setColor("#AB0000")
                .setTitle("An error occured!")
                .setDescription("You do not have permission to use this command!")
                console.log(message.author + ' tried to unmute a user but they do not have permission to!')
                message.channel.send({embeds: [permEmbed]})
            }
        }
        } catch(err) 
        {
            const fatalErrEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("A fatal error occured!")
            .setDescription("Contact 1 24 9-ette#9999 for assistance")
            console.log(message.author + ' tried to ban a user but a fatal error occured.')
            message.channel.send({embeds: [fatalErrEmbed]})
        }
    }
}
   