module.exports = {
    name: 'ping',
    description: "this is a ping command (no shit axi)",
    execute(message, args)
    {
        message.channel.send('pong~');
    }
}