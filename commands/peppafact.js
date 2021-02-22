var peppaFacts = ["TradingBooch12 is very cool", "S*zy Sheep Sucks", "Peppa Pig first aired on May 31, 2004", "There are 303 episodes of Peppa Pig", "Peppa's #2 humble servent is also cool", "S*zy Sheep is pretty much satan", "brapo might be cool as well idk", "Peppa doesn't like politics", "Peppa has been to Australia and Paris", "Microwave is a S*zy Sheep follower, bully them please", "Sayowi Pig is pretty cool"];

module.exports = {
    name: "peppafact",
    description: "Fact about Peppa Pig",

    async run(message, args) {
        var index = Math.floor(Math.random() * peppaFacts.length);

        message.channel.send(peppaFacts[index]);
    }
}