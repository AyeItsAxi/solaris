module.exports = {
    name: 'invite',
    description: "Invite this bot to your server!",
    execute(message, args){
            message.channel.send('https://discord.com/api/oauth2/authorize?client_id=889107211501047859&permissions=0&scope=bot');
    }
}