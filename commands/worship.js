var worship = ["All hail Peppa", "Peppa is our God", "Peppa is love, Peppa is life", "Peppa Pig is our queen", "Peppa Pig is yes"];

module.exports = {
    name: "worship",
    description: "Worship Peppa Pig",

    async run(message, args) {
        var index = Math.floor(Math.random() * worship.length);

        message.channel.send(worship[index]);
    }
}