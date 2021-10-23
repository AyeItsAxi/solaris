const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require('discord.js');
const embed = ('catEmbed');
module.exports = {
    name: 'wooby',
    description: 'random wooby image',
    cooldown: 2,
    aliases: ['randomwooby'],
    async execute(message) {
        const msg = await message.channel.send("generating a wooby image...")

        let { body } = await superagent.get("https://aws.random.cat/meow")
        if(!{ body }) return message.reply("this is awkward.. i couldnt get a wooby image...")

        const catEmbed = new Discord.MessageEmbed()
            .setColor("#03cafc")
            .setTitle("wooby cat")
            .setImage(body.file)
            .setFooter("random wooby for " + message.author.username)
            .setDescription("cat cat")

        message.channel.send({embeds: [catEmbed]})
        msg.delete()
    },
};