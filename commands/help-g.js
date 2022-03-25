const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-g',
    description: "simple help command",
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - General")
        .setDescription("kd!ping: checking if the bot is alive i guess lmao \n \n kd!thisdog: hm? \n \n kd!cat: sends a randomly selected cat picture \n \n kd!woof: sends a randomly selected dog picture \n \n kd!avatar: Sends a photo of your current avatar. \n \n kd!invite: sends a link to invite the bot to your own server \n \n kd!ratio: do it, i dare you. \n \n");
        message.channel.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong...`)
        })
    }
}