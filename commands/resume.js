module.exports = {
    name: 'resume',
    aliases: ['resume', 'unpause'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
      queue.resume()
      message.channel.send("**Resumed!**")
    }
  }