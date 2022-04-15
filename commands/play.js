const { playVoiceChannel } = require('@discordjs/voice');
module.exports = {
  name: 'play',
  aliases: ['p'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    const queue = client.distube.getQueue(message)
    if (!string) return message.channel.send(`Please enter a song url or query to search.`)
    try{
      if(message.member.voice.channel == null){
        message.channel.send("Please join a voice channel!");
      }
      else if(message.member.voice.channel != null){
      client.distube.playVoiceChannel(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
    if(queue){
      message.channel.send("Song added to queue!");
    }
    
    else {
      message.channel.send(`Now playing!`);
    }
  }
  }
  catch {
    message.channel.send("You are not in a voice channel!");
  }
  }
}