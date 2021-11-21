const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require('discord.js');
const embed = ('dogEmbed');
module.exports = {
    name: 'woof',
    description: 'random pupper image',
    cooldown: 2,
    aliases: ['randomdog'],
    async execute(message) {
        try{
        const msg = await message.channel.send("generating a pupper image...")

        let { body } = await superagent.get("https://random.dog/woof.json")
        if(!{ body }) return message.reply("this is awkward.. i couldnt get a pupper image...")

        const dogEmbed = new Discord.MessageEmbed()
            .setColor("#03cafc")
            .setTitle("good pupper")
            .setImage(body.url)
            .setFooter("random pupper for " + message.author.username)
            .setDescription("woof bark")
        message.channel.send({embeds: [dogEmbed]})
        msg.delete()
        } catch(err) {
            const fatalErrEmbed = new Discord.MessageEmbed()
            .setColor("#AB0000")
            .setTitle("A fatal error occured!")
            .setDescription("Contact 1 24 9-ette#9999 for assistance")
            console.log(message.author + ' tried to ban a user but a fatal error occured.')
            message.channel.send({embeds: [fatalErrEmbed]})
        }
    }
}