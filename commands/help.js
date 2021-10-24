const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "simple help command",
    execute(message, args){
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - Normal")
        .setDescription("s!help: this command \n \n s!ping: checking if the bot is alive i guess lmao \n \n s!thisdog: hm? \n \n s!wooby: sends a randomly selected cat picture \n \n s!woof: sends a randomly selected dog picture");
        message.channel.send({embeds: [helpEmbed]})
    }
}