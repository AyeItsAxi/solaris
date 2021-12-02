module.exports =
{
    name: 'play',
    description: 'asdnjskvfds',
    execute(message,args)
    {
        const connection = joinVoiceChannel({
            channelId: messagemember.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        const player = createAudioPlayer();
        const subscription = connection.subscribe(player);
        
    }
}