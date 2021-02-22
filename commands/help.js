const { MessageEmbed } = require("discord.js"); 

module.exports = {
    name: "help",
    description: "Pepla Bot Help",

    async run(message, args) {
        const help = new MessageEmbed();

        help.setTitle("Pepla Bot Help");
        help.setDescription("Commands:");
        help.addField("p!help", "Help for Bot", false);
        help.addField("p!info", "Information about the Bot", false);
        help.addField("p!peppafact", "Tells you a fun fact about Peppa", false);
        help.addField("p!worship", "Worships Peppa", false);
        help.addField("p!roles", "tells you about the perms of each role", false);
        help.addField("p!rolesinfo", "tells you how to get each role", false);
        help.addField("p!rules", "tells you rules of the server", false);
        help.addField("p!invite", "gives you an invite for your friends to join the server", false);
        help.setAuthor("Created by TradingBooch12 and Meet_TheE1i");
        help.setColor(0xff50d1);

        message.channel.send(help);
    }
}