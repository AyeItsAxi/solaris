module.exports = {
    name: 'pause',
    aliases: ['pause', 'hold'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
      if (queue.resume) {
        queue.pause()
        return message.channel.send('**Paused!**')
      }
    }
  }