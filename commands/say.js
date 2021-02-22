module.exports = {
    name: "say",
    description: "Make the bot say something (Do not abuse this or I will remove it)",

    async run(message, args) {
        message.channel.send(args);
    }
}