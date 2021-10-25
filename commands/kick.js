module.exports = {
    name: 'kick',
    description: 'sajpodasfrcewds',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('The user has been kicked!');
        } else{
            message.channel.send('Invalid user!');
        }
    }
}