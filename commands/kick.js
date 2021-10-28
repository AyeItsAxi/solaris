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
            memberTarget.kick();
            const kickEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("The user has been kicked!")
            .setDescription(memberTarget + " has been kicked!")
            .setFooter('User kicked by' + message.author)
            console.log(message.author + ' successfully banned ' + memberTarget + '!')
            message.channel.send({embeds: [kickEmbed]})
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("Invalid user! (Maybe the user is not in the server?)")
            .setFooter(`Contact <@756164525035749529> for assistance.`)
            message.channel.send({embeds: [errEmbed]})
            console.log(message.author + ' tried to kick a user but an error occured! Maybe the target user is not in the server.');
        } if(member, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("You do not have permission to use this command!")
            .setFooter(message.author + ' tried to mute ' + member + ' but they do not have the permission to.')
            console.log(message.author + ' tried to kick a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
        }
    }
}