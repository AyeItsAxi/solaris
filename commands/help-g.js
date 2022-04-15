const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help-g',
    description: "simple help command",
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor("#03cafc")
        .setTitle("Help page - General")
        .setDescription("kd!ping: checking if the bot is alive i guess lmao \n \n kd!thisdog: hm? \n \n kd!cat: sends a randomly selected cat picture \n \n kd!woof: sends a randomly selected dog picture \n \n kd!avatar: Sends a photo of your current avatar. \n \n kd!invite: sends a link to invite the bot to your own server \n \n kd!ratio: do it, i dare you. \n \n kd!play: plays any song (name or URL) \n \n kd!pause: pauses any currently playing song \n \n kd!skip: skips the currently playing song \n \n kd!playskip: combines play and skip, overrides queue \n \n kd!autoplay: enables autoplay \n \n kd!previous: plays the previous song in the queue \n \n kd!seek: seek to any point of the song in seconds \n \n kd!shuffle: shuffle the current queue \n \n kd!stop: stops any currently playing song, clears the queue, and leaves the voice channel it is currently in \n \n kd!volume: sets the volume to any number 1-100 \n \n");
        message.channel.send({embeds: [helpEmbed]}).catch(error => {
            message.channel.send(`Something went wrong...`)
        })
    }
}