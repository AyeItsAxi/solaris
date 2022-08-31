module.exports = {
    name: 'invite',
    description: "Invite this bot to your server!",
    execute(message, args, serverCompileDef)
    {
        try{
        if (serverCompileDef == "public"){
            message.channel.send("The invite link to add Solaris to your server is https://discord.com/api/oauth2/authorize?client_id=889107211501047859&permissions=0&scope=bot");
        }  if (serverCompileDef == "proto"){
            message.channel.send('This bot is closed beta, instead, here is the invite to the Solaris public bot: https://discord.com/api/oauth2/authorize?client_id=889107211501047859&permissions=0&scope=bot');
        }  if (serverCompileDef == "devtest"){
            message.channel.send("This is the developer-testing version of the bot. For the much stabler version of Solaris, use https://discord.com/api/oauth2/authorize?client_id=889107211501047859&permissions=0&scope=bot to invite it into your server.")
        }
        else {
            throw err;
        }
    } catch (err){
        message.channel.send("I was unable to determine the currently running server compile definition. Expected \"public\", \"proto\", or \"devtest\" but instead got **" + serverCompileDef + "**. Due to this, I am unable to provide an invite link.")
    }
    }
}