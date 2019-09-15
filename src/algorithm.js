const bdo = require("./handlers/blackdesert")
const webhook = require("./handlers/webhook")

var currentBoss = -1;
var states = [ false, false, false ] //1h, 30m, 5m

function updateBossStatus() {
    sendTodayMessage()

    if(currentBoss == -1) {
        currentBoss = bdo.getNextBossId()

        const dateDiff = getCurrentDateDiff()
        const diffHours = Math.floor(dateDiff / 3600000 % 24)
        const diffMinutes = Math.floor(dateDiff / 60000 % 60)

        console.log("[*] Detected Next Boss = " + currentBoss + " - " + bdo.getBossById(currentBoss) + " - " + getStringDateDiff(diffHours, diffMinutes))
        return
    }

    const dateDiff = getCurrentDateDiff()
    const diffHours = Math.floor(dateDiff / 3600000 % 24)
    const diffMinutes = Math.floor(dateDiff / 60000 % 60)

    //check if the boss spawned
    const nextBoss = bdo.getNextBossId()
    if(currentBoss != nextBoss) {
        sendMessage(true, getStringDateDiff(diffHours, diffMinutes))
        console.log("\n[*] Last Boss Spawned, Next One = " + currentBoss + " - " + bdo.getBossById(currentBoss))

        states = [ false, false, false ] //reset the states
        return
    }

    //verifies if the next message should be sent
    var sendMessage = false
    if(diffHours == 1 && diffMinutes == 0 && !states[0]) {
        sendMessage = true
        states[0] = true
    }else if(diffHours == 0 && diffMinutes == 30 && !states[1]) {
        sendMessage = true
        states[1] = true
    }else if(diffHours == 0 && diffMinutes == 5 && !stats[2]) {
        sendMessage = true
        states[2] = true
    }

    if(!sendMessage) return
    
    sendMessage(false, getStringDateDiff(diffHours, diffMinutes))
    console.log("[-] Sent time left to discord, current status = " + states[0] + ", " + state[1], + ", " + state[2])
}

function getCurrentDateDiff() {
    const date = new Date()
    const nextBoss = bdo.getBossAsDate(currentBoss)

    return Math.abs(date.getTime() - nextBoss.getTime())
}

function getStringDateDiff(diffHours, diffMinutes) {
    return diffHours + (diffHours == 1 ? " hora" : " horas") + " e " + diffMinutes + " " + (diffMinutes == 1 ? "minuto" : "minutos")
}

var today = false
function sendTodayMessage() {
    var date = new Date()
    if(date.getHours() != 0) {
        today = false
        return
    }
    if(today) return
    today = true

    webhook.publishMessage(":game_die: Os bosses de hoje serão: ``" + bdo.getDailyBosses(date.getDay()) + "``")
    console.log("[*] Sent today bosses to discord")
}

function sendMessage(spawned, timeLeft) {
    var bossName = bdo.getBossById(currentBoss)

    if (spawned) {
        if (bossName.includes("&")) {
            webhook.publishMessage(":game_die: Os bosses ``" + bossName + "`` irão spawnar em instantes!")
            return
        }
        webhook.publishMessage(":game_die: O boss ``" + bossName + "`` irá spawnar em instantes!")
        return
    }

    if (bossName.includes("&")) {
        webhook.publishMessage(":game_die: Os bosses ``" + bossName + "`` irão spawnar em ``" + timeLeft + "``")
        return
    }

    webhook.publishMessage(":game_die: O boss ``" + bossName + "`` irá spawnar em ``" + timeLeft + "``")
}

module.exports.updateBossStatus = updateBossStatus