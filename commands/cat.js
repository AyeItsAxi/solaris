const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require('discord.js');
const embed = ('catEmbed');
module.exports = 
{
    name: 'cat',
    description: 'random wooby image',
    cooldown: 2,
    aliases: ['randomcat', 'meow'],
    async execute(message) 
    {
        try
        {
        const msg = await message.channel.send("generating a wooby image...")

        let { body } = await superagent.get("https://aws.random.cat/meow")
        if(!{ body }) return message.reply("this is awkward.. i couldnt get a wooby image...")

        const catEmbed = new Discord.MessageEmbed()
            .setColor("#03cafc")
            .setTitle("🐈")
            .setImage(body.file)
            .setFooter("random cat for " + message.author.username)
            .setDescription("cat cat")
        message.channel.send({embeds: [catEmbed]})
        msg.delete()
        } 
        catch(err) 
        {
            const fatalErrEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("A fatal error occured!")
            .setDescription("Contact 1 24 9-ette#9999 for assistance")
            console.log(message.author + ' tried to get a random cat image but a fatal error occured.')
            message.channel.send({embeds: [fatalErrEmbed]})
        }
    }
}