module.exports = {
    name: "ping",
    description: "Bots ping",

    async run(message, args, client, time) {
        message.channel.send("Calculating Ping...").then((result) => {
            const ping = Date.now() - time;

            result.edit("Pong!! Bot Latency: " + ping + " ms, " + "API Latency: " + client.ws.ping + " ms");
        });
    }
}