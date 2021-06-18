module.exports = {
    name: 'schools',
    description: 'pog.',
    execute(message){
        const fs = require('fs');
        var textFile = fs.readFileSync('./commands/schools.txt', {"encoding": "utf-8"})
        message.channel.send(textFile, { split: true });
    }

};