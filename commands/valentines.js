// https://tenor.com/view/cute-sweet-pokemon-pikachu-will-chu-be-my-valentine-gif-16326875

module.exports = {
    name: 'valentines',
    description: 'cute gif.',
    execute(message){
        let gifList = ['https://tenor.com/view/cute-sweet-pokemon-pikachu-will-chu-be-my-valentine-gif-16326875', 'https://tenor.com/view/love-love-me-yes-no-valentine-valentines-day-gif-13031150', 'https://tenor.com/view/pusheen-cat-will-you-be-mine-propose-gif-13669560']

        let variable = Math.round(Math.random() * 3)

        message.channel.send(gifList[variable]);

    },

};