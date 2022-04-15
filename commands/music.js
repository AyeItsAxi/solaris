const { CommandInteraction, Client, MessageEmbed, Message } = require("discord.js");
const { interaction } = require("discord.js");

module.exports = {
    name: "music",
    description: "yea",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "play",
            description: "yes",
            type: "SUB_COMMAND",
            options: [{ name: "query", description: "Provide a name or a url for the song", type: "STRING", required: true}]
        },
        {
            name: "volume",
            description: "adsjfhgk",
            type: "SUB_COMMAND",
            options: [{ name: "percent", description: "10 = 10% etc", type: "NUMBER", required: true}]
        },
        {
            name: "settings",
            description: "asuidhsauif",
            type: "SUB_COMMAND",
            options: [{ name: "options", description: "Select an option", type: "STRING", required: true,
        choices: [
            {name: "queue", value: "queue"},
            {name: "skip", value: "skip"},
            {name: "pause", value: "pause"},
            {name: "resume", value: "resume"},
            {name: "stop", value: "stop"},
        ]}]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction, client){
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;

        if(!VoiceChannel)
        return interaction.reply({content: "You must be in a voice channel to be able to use the music commands.", ephemeral: true});
        if(guild.me.voice.channelID && VoiceChannel.id !== guild.me.voice.channelID)
        return interaction.reply({content: `I am already playing music in <#${guild.me.voice.channelID}>`, ephemeral: true});
        try{
            switch(options.getSubcommand()){
                case "play": {
                    client.distube.playVoiceChannel(VoiceChannel, options.getString("query", { textChannel: channel, member: member} ));
                    return interaction.reply({content: "🎶 Request recieved."});
                }
                case "volume": {
                    const Volume = options.getNumber("percent");
                    if(Volume > 100 || Volume < 1)
                    return interaction.reply({content: "You have to specify a number between 1 and 100!"});

                    client.distube.setVolume(VoiceChannel, Volume);
                    return interaction.reply({conent: `🔊 Volume has been set to \`${Volume}%\``});
                }
                case "settings" : {
                    const queue = await client.distube.getQueue(VoiceChannel);

                    if(!queue)
                    return interaction.reply({content: "⛔ There is no queue."});

                    switch(options.getString("options")) {
                        case "skip" : 
                        await queue.skip(VoiceChannel);
                        return interaction.reply({content: "⏭️ Song has been skipped."})
                        case "stop" :
                        await queue.stop(VoiceChannel);
                        return interaction.reply({content: "⏹️ Music has been stopped."})
                        case "pause" :
                        await queue.pause(VoiceChannel);
                        return interaction.reply({content: "⏸️ Song has been paused."})
                        case "resume" :
                        await queue.resume(VoiceChannel);
                        return interaction.reply({content: "⏯️ Song has been resumed."})
                        case "queue" :
                            return interaction.reply({embeds: [new MessageEmbed()
                            .setColor("PURPLE")
                        .setDescription(`${queue.songs.map(
                            (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                        )}`)]});
                    }
                    return;
                }
            }
        }
        catch (e){
            const errorEmbed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`⛔ Alert: ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }
    }
}