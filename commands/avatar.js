const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'asdsadcsf',
    async run(client, message, args) {
        try{
        let mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionMember) mentionMember = message.member;

        const avatarEmbed = new Discord.MessageEmbed()
         .setTitle(mentionMember.user.tag + "'s avatar")
         .setImage(mentionMember.user.displayAvatarURL({size: 4096, dynamic: true}));

        message.channel.send({embeds: [avatarEmbed]});
    
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