const { Console } = require("console");
const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require("./commands/" + file);

    client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);

const PREFIX = "p!";

var worship = ["All hail Peppa", "Peppa is our God", "Peppa is love, Peppa is life", "Peppa Pig is our queen", "Peppa Pig is yes"];
var worshipImages = ["./worship/worship.png", "./worship/worship1.png", "./worship/worship2.png", "./worship/worship3.png", "./worship/worship4.png"];
var images = ["./images/peppa.png", "./images/peppa1.png", "./images/peppa2.png", "./images/peppa3.png", "./images/peppa4.png", "./images/peppa5.png", "./images/peppa6.png", "./images/peppa7.png", "./images/peppa8.png", "./images/peppa9.png", "./images/peppa10.png", "./images/peppa11.png", "./images/peppa12.png", "./images/peppa13.png", "./images/peppa14.png", "./images/peppa15.png", "./images/peppa16.png", "./images/peppa17.png", "./images/peppa18.png", "./images/peppa19.png", "./images/peppa20.png"];
var emily = ["./images/emily.png", "./images/emily1.png", "./images/emily2.png", "./images/emily3.png", "./images/emily4.png", "./images/emily5.png", "./images/emily6.png", "./images/emily7.png", "./images/emily8.png", "./images/emily9.png", "./images/emily10.png", "./images/emily11.png", "./images/emily12.png", "./images/emily13.png", "./images/emily14.png", "./images/emily15.png", "./images/emily16.png", "./images/emily17.png", "./images/emily18.png", "./images/emily19.png", "./images/emily20.png", "./images/emily21.png", "./images/emily22.png"];

var idk = (50 << 9) >> (187 & 70);

client.on("ready", async () => {
    console.log("Logged in");

    client.user.setPresence({
        activity: {
            name: "All hail Peppa!!! (p!help)"
        },
        status: "online"
    });
});

client.on("message", message => {
    const msg = message.content.slice(PREFIX.length).split(" ");
    const cmd = msg.shift().toLowerCase();

    const args = message.content.slice(PREFIX.length + 3);

    if (message.channel.id === "766876212290256916") message.delete();

    if (message.channel.id === "749396998020530287" ) {
        if (message.content !== "m") message.delete();
    }

    switch (message.content) {
        case "m":
            var index = Math.floor(Math.random() * worship.length);

            if (message.channel.id !== "749396998020530287") message.channel.send(worship[index]);
        break;

        case idk.toString():
            message.channel.send("<@" + message.author + "> is really cool");
            message.delete();
        break;

        case "jnewip":
            message.channel.send("<@" + message.author + ">" + " is alright");
    	    message.delete();
        break;

        case "mnkfjcsa":
            message.channel.send("<@" + message.author + ">" + " is cool");
            message.delete();
        break;

        case "Man": message.channel.send("Ass"); break;

        case "M":
            message.channel.send("Fake m noob");
            message.delete();
        break;

        case "h":
            message.channel.send("Trash letters, disrespectful to Peppa");
            message.delete();
        break;

        case "e":
            message.channel.send("Trash letters, disrespectful to Peppa");
            message.delete();
        break;

        case "mm":
            message.channel.send("Trash letters, disrespectful to Peppa");
            message.delete();
        break;

        case "emily":
            var val = Math.floor(Math.random() * 3);
            var index = Math.floor(Math.random() * emily.length);

            if (!val == 3) {
                message.channel.send(" ", {
                    files: [
                        emily[index]
                    ]
                })
            }
        break;  

        case "suzy": message.reply("please refrain from sinning"); break;
    }

    if (!message.content.startsWith(PREFIX)) return;

    switch (cmd) {
        case "help": client.commands.get("help").run(message, args); break;
        case "rules": client.commands.get("rules").run(message, args); break;
        case "info": client.commands.get("info").run(message, args); break;
        case "roles": client.commands.get("roles").run(message, args); break;
        case "rolesinfo": client.commands.get("rolesinfo").run(message, args); break;
        case "invite": client.commands.get("invite").run(message, args); break
        case "peppa": client.commands.get("peppa").run(message, args); break;

        case "frog": 
            message.channel.send(" ", {
                files: [
                    "./images/frog.png"
                ]
            })
        break;

        case "say": 
            client.commands.get("say").run(message, args);
            message.delete();
        break;

        case "worship":
            var imageIndex = Math.floor(Math.random() * worshipImages.length);

            client.commands.get("worship").run(message, args);

            message.channel.send(" ", {
                files: [
                    worshipImages[imageIndex]
                ]
            })
        break;

        case "emilyworship":
            var imageIndex = Math.floor(Math.random() * emily.length);

            message.channel.send(" ", {
                files: [
                    emily[imageIndex]
                ]
            })
        break;

        case "image":
            var index = Math.floor(Math.random() * images.length);

            message.channel.send(" ", {
                files: [
                    images[index]
                ]
            })
        break;

        case "peppafact":
            var index = Math.floor(Math.random() * peppaFacts.length);

            client.commands.get("peppafact").run(message, args, peppaFacts[index]);
        break;
    }  

});