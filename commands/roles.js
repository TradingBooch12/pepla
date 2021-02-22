const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "roles",
    description: "Roles on this Server",

    async run(message, args) {
        const roles = new MessageEmbed();

        roles.setTitle("Roles");
        roles.addField("High Priest", "Has all permissions, is highest rank on the Council of Peppa", false);
        roles.addField("Priest", "Has most permissions, Peppa is proud of you.  Also a part of the Council of Peppa", false);
        roles.addField("Cultist", "Has limited permissions, is very devoted to peppa.  Also a part of the Council of Peppa", false);
        roles.addField("Dedicated Worshiper", "Is dedicated to Peppa Pig", false);
        roles.addField("Worshiper", "Worships, but only a little", false);
        roles.addField("Doesn't Worship Enough", "People who don't worship Peppa enough", false);
        roles.addField("WeirdChamp People", "Weird people who dont worship", false);
        roles.addField("Sinner", "People who sin by breaking the rules of this server", false);
        roles.setColor(0xff50d1);
        
        message.channel.send(roles);
    }
}