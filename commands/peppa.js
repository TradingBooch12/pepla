var quotes = ["'I suppose we cant all like the same things in life' *turns radio off after everyone whining about her music* -madamgazelle",
"'Im peppa pig' -peppa pig",
"'Dinesaw' -geog"];

module.exports = {
    name: "peppa",
    description: "Peppa Quotes",

    async run(message, args) {
        var index = Math.floor(Math.random() * quotes.length);

        message.channel.send(quotes[index]);
    }
}