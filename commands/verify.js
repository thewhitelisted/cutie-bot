module.exports = {
    name: 'verify',
    description: 'verify',
    execute(message, args) {
        try{
            let userId = message.mentions.users.first();
            let member = message.guild.member(userId)
            let role = message.guild.roles.cache.get("780153134777106462");
            let role2 = message.guild.roles.cache.get(args[3]);
            let role3 = message.guild.roles.cache.get("779916768947994660");
            function func3() {
                member.roles.add(role3).catch(console.error)
            }
            function func2() {
                member.roles.add(role2).catch(console.error);
                setTimeout(func3, 100)
            }
            function func(){
                member.roles.remove(role).catch(console.error);
                setTimeout(func2, 100)
            }
            member.setNickname(args[1] + " | " + args[2]);
            setTimeout(func, 100)
        }
        catch{
            message.channel.send("invalid, just like your opinion")
        }
        
    }
}