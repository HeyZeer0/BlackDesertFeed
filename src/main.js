const algorithm = require("./algorithm")
const config = require("../data/config.json")

async function startAlgorithm() {
    await algorithm.updateBossStatus()
}

setInterval(startAlgorithm, config["update_delay"])