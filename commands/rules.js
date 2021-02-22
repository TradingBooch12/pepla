const { MessageEmbed } = require("discord.js"); 

module.exports = {
    name: "rules",
    description: "Peppa Worshipers Cult Rules",

    async run(message, args) {
        const rules = new MessageEmbed();

        rules.setTitle("Peppa Worshipers Rules");
        rules.addField("1. Worship Peppa Pig", "Worship Peppa", false);
        rules.addField("2. Keep Bot Commands in their Channel", "To prevent spam", false);
        rules.addField("3. No NSFW", "It will disappoint Peppa", false);;
        rules.addField("4. No Peppa with 4 eyes", "It's very direspectful", false);
        rules.addField("5. No Insults", "You can insult eachother just don't insult Peppa Pig", false);
        rules.addField("6. Keep Off Topic things in #off-topic", "Try to keep #general for worshiping Peppa", false);
        rules.addField("7. Never Disrespect Peppa", "Just don't", false);
        rules.setColor(0xff50d1);

        message.channel.send(rules);
    }
}