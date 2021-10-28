const Discord = require('discord.js');

module.exports = {
    name: 'unban',
    description: 'shgbhdgds',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            let userID = message.mentions.users.first().id
            message.guild.members.unban(userID)
            const unbanEmbed = new Discord.MessageEmbed()
            .setColor("#51FF00")
            .setTitle("The user has been unbanned!")
            .setDescription(memberTarget + " has been unbanned!")
            .setFooter('User unbanned by' + message.author)
            console.log(message.author + ' successfully unbanned this user!')
            message.channel.send({embeds: [unbanEmbed]})
        } else{
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("An error occured!")
            .setDescription("This command does not currently work!")
            .setFooter('Allow <@756164525035749529> some time to get the command working.')
            console.log(message.author + ' tried to unban a user but the command currently is not finished!')
            message.channel.send({embeds: [errEmbed]})
        }
    }
}