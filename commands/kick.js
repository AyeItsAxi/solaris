const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'sajpodasfrcewds',
    execute(message, args){
        try
        {
        const member = message.mentions.users.first();
        const ratio = (!message.member.permissions.has("KICK_MEMBERS"))
        const permissionTrue = (message.member.permissions.has("KICK_MEMBERS"))
        if(member, permissionTrue)
        {
            const memberTarget = message.guild.members.cache.get(member.id);
            const memberTag = message.guild.members.cache.get(member.name);
            if(memberTarget.permissions.has("MANAGE_MESSAGES"))
            {
                const errEmbed = new Discord.MessageEmbed()
                    .setColor("#AB0000")
                    .setTitle("Hold on!")
                    .setDescription("Hey, thats a staff member! nice try.")
                console.log(message.author + ' tried to kick a staff member >:(')
                message.channel.send({embeds: [errEmbed]})
            } 
            else
            {
            memberTarget.kick();
            let reason = message.author.content;
            if (!reason) reason = 'No reason provided.'
            const kickEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("The user has been kicked!")
            .setDescription(memberTarget + " has been kicked by " + message.author.username + "! \nReason: " + reason)
            .setFooter('User kicked by' + message.author)
            console.log(message.author.username + ' successfully banned ' + memberTarget + '!')
            message.channel.send({embeds: [kickEmbed]})
            const moderatorkickEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("You kicked a user!")
            .setDescription(memberTarget + " has been kicked by " + message.author.username + "! \nReason: " + reason)
            .setFooter('uwu rawrr~ owo x3')
            message.author.send({embeds: [moderatorkickEmbed]})
        }
        } 
        else
        {
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            message.channel.send({embeds: [errEmbed]})
            console.log(message.author.username + ' tried to kick a user but an error occured! Maybe the target user is not in the server. If it is a permission error it will be logged below.');
        } 
        if(member, ratio)
        {
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setDescription("You do not have permission to use this command!")
            console.log(message.author.username + ' tried to kick a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
        }
    } 
    catch(err) 
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