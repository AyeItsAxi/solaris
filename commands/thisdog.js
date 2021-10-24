module.exports = {
    name: 'thisdog',
    description: "hm?",
    execute(message, args){
        const thisdogEmbed = new Discord.MessageEmbed()
            .setColor("#03cafc")
            .setTitle("this dog")
            .setImage('https://cdn.discordapp.com/emojis/886686240013959208.png?size=1024')
            .setFooter("thisdog for " + message.author.username)
            .setDescription("hm?")
            message.channel.send({embeds: [thisdogEmbed]})
    }
}