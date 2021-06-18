module.exports = {
    name: 'ping',
    description: 'pong uwu',
    execute(message){
        message.channel.send(`pong is ${Date.now() - message.createdTimestamp}ms.`);

    },

};