module.exports = {
    name: 'cutiegang',
    description: 'cute uwu',
    execute(message){
        if (message.author.id === '435576752283058187' || message.author.id === '643822649297862697') {
            message.channel.send('CUTIE GANG UWU');
        } else{
            message.channel.send("AYO YOU AREN'T IN THE CUTIE GANG >:(")
        }
    },

};