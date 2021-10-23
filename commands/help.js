module.exports = {
    name: 'help',
    description: "simple help command",
    execute(message, args){
        message.channel.send("s!ping - Simple ping sommand to test if the bot is working i guess");
        message.channel.send("s!youtube - displays a cool person's youtube");
        message.channel.send("s!thisdog - this dog");
        message.channel.send("s!wooby - generates a random cat photo");
    }
}