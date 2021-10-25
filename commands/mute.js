module.exports = {
    name: 'mute',
    description: 'sajdhsaekrf',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mebers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Butthead');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`get muted noob`);
        } else{
            message.channel.send('type it right next time');
        }
    }
}