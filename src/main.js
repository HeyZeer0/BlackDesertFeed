const algorithm = require("./algorithm")
const config = require("../data/config.json")

function startAlgorithm() {
    algorithm.updateBossStatus()
}

console.log("[-] Black Desert Feed - Successfully Initiated")
setInterval(startAlgorithm, config["update_delay"])