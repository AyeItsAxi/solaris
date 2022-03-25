const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-m',
    description: "A help command for moderation commands.",
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - Moderation")
        .setDescription("kd!ban: Bans a user \n \nkd!unban: Unbans a currently banned user \n \nkd!kick: Kicks a user \n \nkd!mute: Mutes a user \n \nkd!unmute: Unmutes a currently muted member")
        message.channel.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong...`)
        })
    }
}