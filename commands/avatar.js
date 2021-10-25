const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['pfp'],
    description: 'asdsadfswdcd',
    execute(message, args, client, Discord) {
        const Target = message.mentions.user.first() || message.author;

        const avatarEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${Target.tag}\s avatar`)
        .setImage(Target.displayAvatarURL({dynamic: true}))

        message.reply({embed: [avatarEmbed]});
    }
}