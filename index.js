const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

// for command handling
const fs = require('fs');

const cron = require("cron");

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// for command handling
client.commands = new Discord.Collection();

// for command handling
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// creates new prefix
const prefix = "c!"

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("c!help || userinfo command coming soon", { type: "WATCHING"})
});

let scheduledMessage = new cron.CronJob('00 11 11,23 * * *', () => {
  //This runs every day at 10:30:00, you can do anything you want
  let channel = client.channels.cache.get('780174408186200125');
  channel.send('<@&849259163329888286> 11:11 :3');
}, null, true, 'America/New_York');
scheduledMessage.start()

// when the client is on, listen for messages
// this event will only trigger when a message occurs
client.on('message', message => {
    // gets args for commands
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    // help command, see help embed
    else if (message.content.toLowerCase().startsWith(prefix + 'help')){
        command.execute(message, args);
    }

    // serverinfo command, check serverinfo.js
    else if (message.content.toLowerCase() === prefix + 'serverinfo'){
        command.execute(message, client);
    }

    // suggest command, check suggest.js
    else if (message.content.toLowerCase() === prefix + 'suggest'){
        command.execute(message);
    }

    // say command, check say.js
    else if (message.content.toLowerCase().startsWith(prefix + 'say') && message.author.id === '435576752283058187'){
        command.execute(message, args);
        message.delete({timeout: 50})
    }

    // ishleen command, see goodadvice.js
    else if (message.content.toLowerCase() === prefix + 'goodadvice'){
        command.execute(message);
    }

    // CUTIE GANG COMMAND, see cutiegang.js
    else if (message.content.toLowerCase() === prefix + 'cutiegang'){
        command.execute(message);
    }

    // fun commands check help.js
    
    // ping command, check ping.js
    else if (message.content.toLowerCase() === prefix + 'ping'){
        command.execute(message);
    }

    // roll command, check roll.js
    else if (message.content.toLowerCase().startsWith(prefix + "roll")){
        command.execute(message, args)
    }

    // lenny command, check lenny.js
    else if (message.content.toLowerCase().startsWith(prefix + "lenny")){
        command.execute(message)
    }

    // cool boi gif commands here

    else if (message.content.toLowerCase() === prefix + 'ezclapgif'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'cutiegif'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'poggies'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'peepoclap'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'pain'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'peeposad'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'valentines'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'depart'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'arrive'){
        
        command.execute(message);
    }
    else if (message.content.toLowerCase() === prefix + 'yuh') {
        command.execute(message);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'verify')) {
        command.execute(message, args);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'schools')) {
        command.execute(message);
    }
});

const mySecret = process.env['key']
// login to Discord with your app's token
client.login(mySecret);
