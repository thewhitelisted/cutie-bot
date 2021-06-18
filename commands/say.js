module.exports = {
    name: "say",
    description: "bot says whatever the user inputs",
    execute(message, args) {
        message.channel.send(args.join(' '))
    }
}