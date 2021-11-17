const Discord = require('discord.js');

const client = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'shgbhdgds',
    execute(message, args){
        const member = message.mentions.users.first();
        const ratio = (!message.member.permissions.has("BAN_MEMBERS"))
        const permissionTrue = (message.member.permissions.has("BAN_MEMBERS"))
        try{
        if(member, permissionTrue){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            const banEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("The user has been banned!")
            .setDescription(memberTarget + " has been banned!")
            .setFooter('User banned by ' + message.author)
            const adminBanEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("You have banned " + memberTarget + '!')
            .setDescription(memberTarget + " has been banned!")
            .setFooter('You banned another scrub! (get good noob ggez)')
            console.log(message.author + ' successfully banned ' + memberTarget)
            message.author.send({embeds: [adminBanEmbed]}).catch(error => {
                message.channel.send(`Something went wrong while I tried to send you a log DM!`)
            })
            message.channel.send({embeds: [banEmbed]})
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("Invalid user! (Maybe the user is not in the server?)")
            .setFooter(`Contact <@756164525035749529> for assistance.`)
            console.log(message.author + ' tried to ban a user but something went wrong!')
            message.channel.send({embeds: [errEmbed]})
        } if(member, ratio){
            const permEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("You do not have permission to use this command!")
            console.log(message.author + ' tried to ban a user but they do not have permission to!')
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