module.exports = {
    name: 'serverinfo',
    description: 'serverinfo is pretty cool ngl',
    execute(message, client){
        const Discord = require('discord.js')
        let ownerTag = message.guild.ownerID

        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#2f3134')
            .setTitle('server information')
            .setAuthor('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
            .setDescription('some basic server information')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                {name: '꒰server name: ', value: `${message.guild.name}`},
                {name: '꒰members: ', value: `${message.guild.memberCount}`},
                {name: '꒰owner: ', value: `<@!${ownerTag}>`},
                {name: '꒰created at: ', value: `${message.guild.createdAt}`},
            )
            .setTimestamp()
            .setFooter('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
        
        message.channel.send(serverEmbed)

    },

};