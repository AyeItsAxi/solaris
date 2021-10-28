const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'sajdhsaekrf',
    execute(message, args){
        const target = message.mentions.users.first();
        const ratio = (!message.member.permissions.has("MUTE_MEMBERS"))
        const permissionTrue = (message.member.permissions.has("MUTE_MEMBERS"))
        if(target, permissionTrue){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mebers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Butthead');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            const muteEmbed = new Discord.MessageEmbed()
            .setColor("#656565")
            .setTitle("Successfully muted!")
            .setDescription("The target user has been successfully muted!")
            message.channel.send({embeds: [muteEmbed]})
            console.log(memberTarget + " has been muted by " + message.author);
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("Invalid user! (Maybe the user is not in the server?)")
            .setFooter(`Contact <@756164525035749529> for assistance.`)
            message.channel.send({embeds: [errEmbed]})
            console.log(message.author + ' tried to mute a user but an error occured! Maybe the target user is not in the server.');
        } if(target, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("You do not have permission to use this command!")
            .setFooter(message.author + ' tried to mute ' + target + ' but they do not have the permission to!')
            console.log(message.author + ' tried to mute a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
        }
    }
}