const { MessageEmbed } = require("discord.js"); 

module.exports = {
    name: "info",
    description: "Information about the bot",

    async run(message, args) {
        const info = new MessageEmbed();

        info.setTitle("Pepla Bot Information");
        info.setDescription("I am a bot that was sent by Peppa");
        info.addField("Version:", "v1.0.1", false);
        info.addField("Named by:", "<@731583599400190012>", false);
        info.setAuthor("Created by <@627426891288018944> and <@532009975359471616>");
        info.setColor(0xff50d1);
        
        message.channel.send(info);
    }
}
