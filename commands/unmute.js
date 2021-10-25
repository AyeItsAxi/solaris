module.exports = {
    name: 'unmute',
    description: 'gfsajdhsaekrf',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'mebers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Butthead');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`welcome back`);
        } else{
            message.channel.send('type it right next time');
        }
    }
}