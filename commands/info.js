const { MessageEmbed } = require("discord.js"); 

module.exports = {
    name: "info",
    description: "Information about the bot",

    async run(message, args) {
        const info = new MessageEmbed();

        const memory = process.memoryUsage().heapUsed / 1024 / 1024;

        info.setTitle("Pepla Bot Information");
        info.setDescription("I am a bot that was sent by Peppa");
        info.addField("Version:", "v1.1.0", false);
        info.addField("Named by:", "<@731583599400190012>", false);
        info.addField("Created by: ", "<@627426891288018944> and <@532009975359471616>", false);
        info.addField("Memory Usage", Math.round(memory * 100) / 100 + " MB");
        info.addField("Node.js Version: ", process.version);
        info.addField("Discord Application Programming Interface: ", "[discord.js](https://discord.js.org/#/)", false);
        info.setColor(0xff50d1);
        
        message.channel.send(info);
    }
}