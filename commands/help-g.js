const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-g',
    description: "simple help command",
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - General")
        .setDescription("s!ping: checking if the bot is alive i guess lmao \n \n s!thisdog: hm? \n \n s!cat: sends a randomly selected cat picture \n \n s!woof: sends a randomly selected dog picture \n \n s!avatar: Sends a photo of your current avatar. \n \n s!invite: sends a link to invite the bot to your own server \n \n s!ratio: do it, i dare you. \n \n");
        message.channel.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong...`)
        })
    }
}