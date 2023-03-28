let gamemode = "standard"
const gamemodeParams = {
    "standard":{
        "rules": "./images/image-rules.svg",
        "changeToGamemode":"altgame",
        "gamemodeButtonText": "spice it up!",
        "oldgameDivName": ".altGame"
    },
        "altgame":{
        "rules": "./images/image-rules-bonus.svg",
        "changeToGamemode":"standard",
        "gamemodeButtonText": "take me to mama!",
        "oldgameDivName": ".game"
    }
}

const icons = {
    "rock": "./images/icon-rock.svg",
    "paper": "./images/icon-paper.svg",
    "scissors": "./images/icon-scissors.svg",
    "altrock": "./images/icon-rock.svg",
    "altpaper": "./images/icon-paper.svg",
    "altscissors": "./images/icon-scissors.svg",
    "altlizard": "./images/icon-lizard.svg",
    "altspock": "./images/icon-spock.svg"
}

const scoringTable = {
    "rock": {"rock": 0, "paper": -1, "scissors": 1},
    "paper": {"rock": 1, "paper": 0, "scissors": -1},
    "scissors": {"rock": -1, "paper": 1, "scissors": 0},
    "altrock": {"altrock": 0, "altpaper": -1, "altscissors": 1, "altlizard": 1, "altspock": -1},
    "altpaper": {"altrock": 1, "altpaper": 0, "altscissors": -1, "altlizard": -1, "altspock": 1},
    "altscissors": {"altrock": -1, "altpaper": 1, "altscissors": 0, "altlizard": 1, "altspock": -1},
    "altlizard": {"altrock": -1, "altpaper": 1, "altscissors": -1, "altlizard": 0, "altspock": 1},
    "altspock": {"altrock": 1, "altpaper": -1, "altscissors": 1, "altlizard": -1, "altspock": 0}
}