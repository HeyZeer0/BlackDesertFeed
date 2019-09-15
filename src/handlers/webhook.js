const config = require("../../data/config.json")["webhook"]
const https = require("https")

const discordWebhook = {
    hostname: "discordapp.com",
    path: config["path"],
    method: "POST",
}

async function publishMessage(message) {
    var webhookData = {
        "username": config["username"],
        "avatar_url": config["avatar_url"],
        "content": message
    }

    discordWebhook["headers"] = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(webhookData))
    }

    console.log(" - Sending Discord WebHook (" + message + ")")

    var request = https.request(discordWebhook)
    request.write(JSON.stringify(webhookData))
    await request.end()
}

module.exports.publishMessage = publishMessage