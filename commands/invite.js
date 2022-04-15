module.exports = {
    name: 'invite',
    description: "Invite this bot to your server!",
    execute(message, args)
    {
        message.channel.send('This bot is closed beta, instead here is the invite to KiannaBot\'s public version:https://discord.com/api/oauth2/authorize?client_id=889107211501047859&permissions=0&scope=bot');
    }
}