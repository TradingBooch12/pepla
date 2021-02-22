const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "worship",
    description: "Worship Peppa Pig",

    async run(message, args) {
        const rolesInfo = new Discord.MessageEmbed();

        rolesInfo.setTitle("Roles-Info");
        rolesInfo.addField("High Priest", "Must personally know one of the other high priests (DM high priest you know)", false);
        rolesInfo.addField("Priest", "Must have Cultist rank + another application + subreddit moderator, or personally know one of the other high priests (DM high priest you know)", false);
        rolesInfo.addField("Cultist", "Must be level 30+, be on the subreddit, have posted at least once on the subreddit, and have no warnings + DM us", false);
        rolesInfo.addField("Dedicated Worshipper", "Must be level 15+ and have no 2nd warning", false);
        rolesInfo.addField("Worshiper", "Must be level 5+ and been on the server for 2 weeks", false);
        rolesInfo.addField("Doesn't Worship Enough", "You don't worship Peppa enough", false);
        rolesInfo.addField("WeirdChamp People", "When you arent active", false);
        rolesInfo.addField("Sinner", "People who break the rules by disrepecting Peppa, or not worshiping her", false);
        rolesInfo.setColor(0xff50d1);
        
        message.channel.send(rolesInfo);
    }
}