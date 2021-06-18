module.exports = {
    name: 'roll',
    description: 'random number generator',
    execute(message, args) {
        message.channel.send(Math.round(Math.random() * args))
    }
}