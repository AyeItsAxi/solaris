const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'sajdhsaekrf',
    execute(message, args){
        const target = message.mentions.users.first();
        const ratio = (!message.member.permissions.has("MUTE_MEMBERS"))
        const permissionTrue = (message.member.permissions.has("MUTE_MEMBERS"))
        if(target, permissionTrue){
            try{
            {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mebers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Butthead');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(memberTarget.permissions.has("MANAGE_MESSAGES"))
            {
                const errEmbed = new Discord.MessageEmbed()
                    .setColor("#AB0000")
                    .setTitle("Hold on!")
                    .setDescription("Hey, thats a staff member! nice try.")
                console.log(message.author + ' tried to mute a staff member >:(')
                message.channel.send({embeds: [errEmbed]})
            } else{
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            let muted = true
            module.exports = { muted }
            const muteEmbed = new Discord.MessageEmbed()
            .setColor("#656565")
            .setTitle("Successfully muted!")
            .setDescription("The target user has been successfully muted!")
            message.channel.send({embeds: [muteEmbed]})
            console.log(memberTarget + " has been muted by " + message.author);
            }
            }
            if(target, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("You do not have permission to use this command!")
            .setFooter(message.author + ' tried to mute ' + target + ' but they do not have the permission to!')
            console.log(message.author + ' tried to mute a user but they do not have permission to!')
            message.channel.send({embeds: [permEmbed]})
            }
        } catch(err) {
            const fatalErrEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("A fatal error occured!")
            .setDescription("Contact 1 24 9-ette#9999 for assistance")
            console.log(message.author + ' tried to ban a user but a fatal error occured.')
            message.channel.send({embeds: [fatalErrEmbed]})
        }
    }
}
}    