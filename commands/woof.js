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
    },
};