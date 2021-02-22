module.exports = {
    name: "invite",
    description: "Invite for the server",

    async run(message, args) {
        message.channel.send("If you want to invite your friends or other people to the discord use this link: https://discord.gg/8UQ8QAM");
    }
}