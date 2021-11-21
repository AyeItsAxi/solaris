const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-g',
    description: "simple help command",
    execute(message, args){
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - General")
        .setDescription("s!help: this command \n \n s!ping: checking if the bot is alive i guess lmao \n \n s!thisdog: hm? \n \n s!wooby: sends a randomly selected cat picture \n \n s!woof: sends a randomly selected dog picture \n \n s!avatar: gets your avatar. (currently does not work for other users)");
        message.channel.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong while I tried to send you a DM!`)
        })
    }
}