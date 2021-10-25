module.exports = {
    name: 'ban',
    description: 'shgbhdgds',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('The user has been banned!');
        } else{
            message.channel.send('Invalid user!');
        } 
    }
}