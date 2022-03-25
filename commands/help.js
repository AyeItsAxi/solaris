const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "simple help command",
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - Select")
        .setDescription("kd!help-g: displays the general help page \n \nkd!help-m: displays the moderation help page");
        message.channel.send({embeds: [helpEmbed]})
    }
}