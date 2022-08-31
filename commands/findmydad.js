const Discord = require("discord.js");

module.exports = {
    name: 'findmydad',
    description: "oh?",
    execute(message, args)
    {
        const rndInt = Math.floor(Math.random() * 2) + 1
        if (args != ""){
            message.channel.send("Nobody will find your body.")
            console.log(message.author + " is skunked + fat 💀")
        }
        if (args == "" && rndInt == 1)
        {
            const fatherless = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("LOSER!!!!")
                .setImage("https://i.imgur.com/B9wpeB9.png")
                .setFooter("just another fatherless child...")
            message.channel.send({embeds: [fatherless]})
        }
        if (args == "" && rndInt == 2)
        {
            const fatherful = new Discord.MessageEmbed()
                .setColor("#14FF00")
                .setTitle("fatherful!")
                .setImage("https://th.bing.com/th/id/OIP.Wxuo6Ickq4LqpMeCgtGuxAHaFH?pid=ImgDet&rs=1")
                .setFooter("what a great dad")
            message.channel.send({embeds: [fatherful]})
        }
    }
}