const Discord = require("discord.js");

module.exports = 
{
    name: 'unban',
    description: "This command unbans a member!",
    async execute(client, message, args){
        const { member, mentions} = message
        const memberTarget = message.guild.members.cache.get(member.id);
        if 
        (
            message.member.permissions.has('BAN_MEMBERS')
        )
        try
        {
       if(!args[0]) return message.channel.send("Please specify a user to unban.");{
           const user = await message.guild.members.unban(args[0]);
           message.channel.send(`The target user was unbanned!`);
           console.log(message.author + ' successfully unbanned ' + member)
       }
       } 
       catch(err) 
       {
        const errEmbed = new Discord.MessageEmbed()
        .setColor("#AB0000")
        .setTitle("A fatal error occured!")
        .setDescription("Contact 1 24 9-ette#9999 for assistance.")
        console.log(message.author + ' tried to unban a user but a fatal error occurred.')
        message.channel.send({embeds: [errEmbed]})
       }
    }
}