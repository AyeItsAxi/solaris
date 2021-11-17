const Discord = require("discord.js");

module.exports = {
    name: 'unban',
    description: "This command unbans a member!",
    async execute(client, message, args){
        const { member, mentions} = message
        if (
            message.member.permissions.has('ADMINISTRATOR') ||
            message.member.permissions.has('BAN_MEMBERS')
        )
        try{
       if(!args[0]) return message.channel.send("Please specify a user to unban.");{
           const user = await message.guild.members.unban(args[0]);
           message.channel.send(`The target user was unbanned!`);
           console.log(message.author + ' successfully unbanned ' + member)
       }
       } 
       catch(err) {
        const errEmbed = new Discord.MessageEmbed()
        .setColor("#AB0000")
        .setTitle("An error occured!")
        .setDescription("The user has no active ban.")
        console.log(message.author + ' tried to unban a user but the target user had no active ban.')
        message.channel.send({embeds: [errEmbed]})
       }
    }
}