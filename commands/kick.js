const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'sajpodasfrcewds',
    execute(message, args){
        const member = message.mentions.users.first();
        const ratio = (!message.member.permissions.has("KICK_MEMBERS"))
        const permissionTrue = (message.member.permissions.has("KICK_MEMBERS"))
        if(member, permissionTrue){
            const memberTarget = message.guild.members.cache.get(member.id);
            const memberTag = message.guild.members.cache.get(member.name);
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
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            message.channel.send({embeds: [errEmbed]})
            console.log(message.author.username + ' tried to kick a user but an error occured! Maybe the target user is not in the server. If it is a permission error it will be logged below.');
        } if(member, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setDescription("You do not have permission to use this command!")
            console.log(message.author.username + ' tried to kick a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
        }
    }
}