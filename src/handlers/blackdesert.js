//1 = 02:00 | 2 = 11:00 | 3 = 16:00 | 4 = 18:00 | 5 = 20:00 | 6 = 23:30 -> bosses
//0 = Sunday | 1 = Monday | 2 = Tuesday | 3 = Wednesday | 4 = Thursday | 5 = Friday | 6 = Saturday -> days
const data = {
    0: {
        1: "Nouver", 2: "Nouver & Kutum", 3: "Karanda & Kzarka", 4: "Vell",
        5: "Karanda & Nouver", 6: "Offin",
    },
    1: {
        1: "Karanda & Kzarka", 2: "Nouver", 3: "Kutum & Kzarka", 4: null,
        5: "Nouver & Kutum", 6: "Garmoth",
    },
    2: {
        1: "Kutum", 2: "Kzarka", 3: "Nouver & Kutum", 4: null,
        5: "Karanda & Kzarka", 6: "Offin",
    },
    3: {
        1: "Kzarka", 2: "Kutum & Karanda", 3: "Kzarka & Nouver", 4: null,
        5: "Quint & Muraka", 6: "Garmoth",
    },
    4: {
        1: "Karanda & Kutum", 2: "Nouver & Karanda", 3: "Kutum & Kzarka", 4: null,
        5: "Nouver & Kutum", 6: "Offin",
    },
    5: {
        1: "Karanda", 2: "Nouver", 3: "Kutum & Kzarka", 4: null,
        5: "Nouver & Kzarka", 6: "Garmoth",
    },
    6: {
        1: "Kzarka", 2: "Kzarka & Karanda", 3: "Nouver & Kutum", 4: null,
        5: "Quint & Muraka", 6: null,
    }
}

function getBossById(id) {
    var date = new Date()

    return data[date.getDay()][id]
}

function getCorrectDay() {
    var date = new Date()

    var day = date.getDay();
    if (date.getHours() >= 23 && date.getMinutes() >= 30) {
        if (day + 1 > 6) day = 0
        else day += 1
    }

    return day
}

function getNextBossId() {
    var result = 1

    var day = data[getCorrectDay()]

    if (date.getHours() >= 23 && date.getMinutes() >= 30) result = 1
    else if (date.getHours() > 20) result = 6
    else if (date.getHours() > 18) result = 5
    else if (date.getHours() > 16) result = 4
    else if (date.getHours() > 11) result = 3
    else if (date.getHours() > 2) result = 2

    if (day[result] == null) {
        if (result + 1 > 6) result = 1
        else result += 1
    }

    return result
}

function getBossAsDate(bossId) {
    var date = new Date()

    if (bossId == 1) return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 2)
    else if (bossId == 2) return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11)
    else if (bossId == 3) return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16)
    else if (bossId == 4) return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18)
    else if (bossId == 5) return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20)

    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 30)
}

module.exports.getBossAsDate = getBossAsDate
module.exports.getNextBossId = getNextBossId
module.exports.getBossById = getBossById