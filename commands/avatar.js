const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'asdsadcsf',
    async run(client, message, args) {
        let mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionMember) mentionMember = message.member;

        const avatarEmbed = new Discord.MessageEmbed()
         .setTitle(mentionMember.user.tag + "'s avatar")
         .setImage(mentionMember.user.displayAvatarURL({size: 4096, dynamic: true}));

        message.channel.send({embeds: [avatarEmbed]});
    }
}