module.exports = {
    name: 'help',
    description: 'help me',
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = 'c!';

        // help embed for help command
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#2f3134')
            .setTitle('help page')
            .setAuthor('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
            .setDescription('You can find commands here')
            .addFields(
            // add extra text here, use same format
                {name: '꒰ ' + prefix + 'serverinfo', value: 'puts some basic server information into the chat'},
                {name: '꒰ ' + prefix + 'help', value: 'lists commands, you can also use special additional help commands'},
                {name: '꒰ ' + prefix + 'suggest', value: 'use this to suggest new features, or to report bugs to the dev team. do not add extra args'},
                {name: '꒰ fun commands', value: 'use ' + prefix + 'help fun', inline: true},
                {name: '꒰ gif commands', value: 'use ' + prefix + 'help gifs', inline: true},
            )
            .setTimestamp()
            .setFooter('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
                
        const funEmbed = new Discord.MessageEmbed()
            .setColor('#2f3134')
            .setTitle('Help page - Fun Commands')
            .setAuthor('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
            .setDescription('Help for fun commands')
            .addFields(
                {name: '꒰ ' + prefix + 'ping', value: 'pong'},
                {name: '꒰ ' + prefix + 'goodadvice', value: 'get good advice here'},
                {name: '꒰ ' + prefix + 'roll', value: 'rolls numbers, use second argument'},
                {name: '꒰ ' + prefix + 'lenny', value: 'outputs lenny face'},
            )
            .setTimestamp()
            .setFooter('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
        
        const gifEmbed = new Discord.MessageEmbed()
            .setColor('#2f3134')
            .setTitle('Help page - Gifs/images')
            .setAuthor('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')
            .setDescription("Help for gif/image commands")
            .addFields(
                {name: '꒰ ' + prefix + 'cutiegif', value: "Outputs a cutie gif to show your friends that you're a cutie"},
                {name: '꒰ ' + prefix + 'ezclapgif', value: "Outputs ez clap for when you want to flex on your friends when you get that victory royale"},
                {name: '꒰ ' + prefix + 'poggies', value: "Use this as a pog thingy"},
                {name: '꒰ ' + prefix + 'peepoclap', value: "Peepoclap is very noice"},
                {name: '꒰ ' + prefix + 'pain', value: "Puts some pain in the chat"},
                {name: '꒰ ' + prefix + 'peeposad', value: "sadeness"},
                {name: '꒰ ' + prefix + 'valentines', value: "don't use this or ill eat you alive"},
                {name: '꒰ ' + prefix + 'arrive', value: "Arrival gif. That's all it is"},
                {name: '꒰ ' + prefix + 'depart', value: "Departure gif. That's all it is"},
            )
            .setTimestamp()
            .setFooter('Cutie Bot', 'https://cdn.discordapp.com/attachments/834258628457267204/842443403115757598/pfp.png')

        if (!args.length){
            // general help command, see help embed
            return message.channel.send(helpEmbed)
        }
        else if (args[0] == 'gifs'){
            return message.channel.send(gifEmbed)
        }
        else if (args[0] == 'fun'){
            return message.channel.send(funEmbed)
        }
    },

};