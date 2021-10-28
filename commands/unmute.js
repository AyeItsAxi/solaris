const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'gfsajdhsaekrf',
    execute(message, args){
        const ratio = (!message.member.permissions.has("MUTE_MEMBERS"))
        const target = message.mentions.users.first();
        const permissionTrue = (message.member.permissions.has("MUTE_MEMBERS"))
        if(target, permissionTrue){
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
            console.log(memberTarget + " has been unmuted by " + message.author);;
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("Invalid user! (Maybe the user is not in the server?)")
            .setFooter(`Contact <@756164525035749529> for assistance.`)
            message.channel.send({embeds: [errEmbed]})
            console.log(message.author + ' tried to unmute a user but an error occured! Maybe the target user is not in the server.');
        }  if(target, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("You do not have permission to use this command!")
            console.log(message.author + ' tried to unmute a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
        }
    }
}