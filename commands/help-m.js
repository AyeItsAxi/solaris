const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-m',
    description: "A help command for moderation commands.",
    execute(message, args){
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - Moderation")
        .setDescription("s!ban: Bans a user \n \ns!kick: Kicks a user \n \ns!mute: Mutes a user \n \ns!unmute: Unmutes a currently muted member")
        message.author.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong while I tried to send you a DM!`)
        })
        message.channel.send("I am sending you a DM with the moderation help page!")
    }
}