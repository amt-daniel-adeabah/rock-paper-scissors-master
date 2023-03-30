let gamemode = "standard"
const gamemodeParams = {
    "standard":{
        "rules": "./images/image-rules.svg",
        "changeToGamemode":"altgame",
        "gamemodeButtonText": "Bonus!",
        "oldgameDivName": ".altGame"
    },
        "altgame":{
        "rules": "./images/image-rules-bonus.svg",
        "changeToGamemode":"standard",
        "gamemodeButtonText": "Main!",
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

///show game rules
const showRules = function() {
    const rulesButtons = document.querySelector(".rulesBtn")
    const wrapper = document.querySelector(".wrapper")
    rulesButtons.addEventListener("click", ()=>{
        const rulesDiv = document.createElement("div")
        rulesDiv.className = "rulesDiv"
        const rulesTitle = document.createElement("p")
        rulesTitle.innerText = "RULES"
        const rules = document.createElement("img")
        rules.className = "rules"
        rules.src = gamemodeParams[gamemode]["rules"]
        const exitRules = document.createElement("img")
        exitRules.className = "exitRules"
        exitRules.src = "./images/icon-close.svg"
        rulesDiv.append(rulesTitle, rules, exitRules)
        wrapper.append(rulesDiv)
        exitRules.addEventListener("click", ()=>{
            rulesDiv.remove()
        })
    })
}

//start alternative game mode if button clicked
const altGameListiner = function(){
    const altGame = document.querySelector(".altGameBtn")
    altGame.addEventListener("click", ()=>{
        if(gamemode === "standard"){
            gamemode = gamemodeParams[gamemode]["changeToGamemode"]
            altGame.innerText = gamemodeParams[gamemode]["gamemodeButtonText"]
            stepAltGame()
            document.querySelector(gamemodeParams[gamemode]["oldgameDivName"]).remove()
        }else if(gamemode === "altgame"){
            gamemode = gamemodeParams[gamemode]["changeToGamemode"]
            altGame.innerText = gamemodeParams[gamemode]["gamemodeButtonText"]
            stepZero()
            document.querySelector(gamemodeParams[gamemode]["oldgameDivName"]).remove()
        }
    })
}

const stepAltGame = function(){
    gamemode = "altgame"
    const gamename = document.querySelector(".gamename")
    gamename.innerText = "rock paper scissors lizard spock"
    try{
       const oldGame = document.querySelector(".gameTwo")
       oldGame.remove() 
        const oldannoncement = document.querySelector(".annoncement")
        oldannoncement.remove()
        const oldplayAgain = document.querySelector(".playAgain")
        oldplayAgain.remove()
    }catch(err){
    }
    const newAltGame = document.createElement("div")
    newAltGame.className = "altGame"
    const pentagon = document.createElement("img")
    pentagon.className = "pentagon"
    pentagon.src = "./images/bg-pentagon.svg"
    const paper = document.createElement("div")
    paper.className = "altpaper"
    const paperImg = document.createElement("img")
    paperImg.src = "./images/icon-paper.svg"
    paper.append(paperImg)
    const rock = document.createElement("div")
    rock.className = "altrock"
    const rockImg = document.createElement("img")
    rockImg.src = "./images/icon-rock.svg"
    rock.append(rockImg)
    const scissors = document.createElement("div")
    scissors.className = "altscissors"
    const scissorsImg = document.createElement("img")
    scissorsImg.src = "./images/icon-scissors.svg"
    scissors.append(scissorsImg)
    const lizard = document.createElement("div")
    lizard.className = "altlizard"
    const lizardImg = document.createElement("img")
    lizardImg.src = "./images/icon-lizard.svg"
    lizard.append(lizardImg)
    const spock = document.createElement("div")
    spock.className = "altspock"
    const spockImg = document.createElement("img")
    spockImg.src = "./images/icon-spock.svg"
    spock.append(spockImg)

    newAltGame.append(pentagon, paper, rock, scissors, lizard, spock)
    const gameDiv = document.querySelector(".wrapper")
    const rulesButtons = document.querySelector(".rulesBtn")
    gameDiv.insertBefore(newAltGame, rulesButtons)
    stepOne()
}

const stepOne = function() {
    if(gamemode === "standard"){
        const allActionButtons = document.querySelectorAll(".game div")
        allActionButtons.forEach(a => a.addEventListener("click", ()=>{
            stepTwo(a.className)
            document.querySelector(".altGameBtn").style.display = "none"
        }))
    } else if(gamemode === "altgame"){
        const allActionButtons = document.querySelectorAll(".altGame div")
        allActionButtons.forEach(a => a.addEventListener("click", ()=>{
            stepTwo(a.className)
            document.querySelector(".altGameBtn").style.display = "none"
        }))
    }
}

const stepTwo = function(chosen) {
    const wrapper = document.querySelector(".wrapper")
    let gamediv
    if(gamemode === "standard"){
        gamediv = document.querySelector(".game")
    }else if(gamemode === "altgame"){
        gamediv = document.querySelector(".altGame")
    }
    
    const rulesButtons = document.querySelector(".rulesBtn")
    gamediv.remove()
    const gameTwo = document.createElement("div")
    gameTwo.className = "gameTwo"
    const playerPick = document.createElement("div")
    playerPick.className = chosen
    playerPick.id = "PlayerPick"
    const playerPickImg = document.createElement("img")
    playerPickImg.src = icons[chosen]
    playerPick.append(playerPickImg)
    const housePick = document.createElement("div")
    housePick.className = "housePick"
    housePick.id = "housePick"
    gameTwo.append(playerPick, housePick)
    wrapper.insertBefore(gameTwo, rulesButtons)
    stepThree()
}

const stepThree = async function() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    let choices
    if(gamemode === "standard"){
        choices = ["rock", "paper", "scissors"]
    }else if(gamemode === "altgame"){
        choices = ["altrock", "altpaper", "altscissors", "altlizard", "altspock"]
    }
    
    let housePickNumber = Math.floor(Math.random() * choices.length)
    const housePickdiv = document.querySelector(".housePick")
    housePickdiv.className = choices[housePickNumber]
    const housePickImg = document.createElement("img")
    housePickImg.src = icons[choices[housePickNumber]]
    housePickdiv.append(housePickImg)
    stepFour()
}

const stepFour = function() {
    const playerPick = document.getElementById("PlayerPick").className
    document.getElementById("PlayerPick").append(document.createElement("div"))
    document.getElementById("housePick").append(document.createElement("div"))
    playerbackground = document.getElementById("PlayerPick").querySelector("div")
    housebackground = document.getElementById("housePick").querySelector("div")
    const HousePick = document.getElementById("housePick").className
    const playerScore = scoringTable[playerPick][HousePick]
    let annoncementText
    let currentScore = Number(document.querySelector(".score").innerText)
    if(playerScore === 1){
        annoncementText = "YOU WIN"
        currentScore++
        playerbackground.style.boxShadow = "0 0 0 0px hsl(0, 0%, 100%, 0.07),0 0 0 20px hsl(0, 0%, 100%, 0.05),0 0 0 45px hsl(0, 0%, 100%, 0.03),0 0 0 75px hsl(0, 0%, 100%, 0.013)"
    }else if(playerScore === -1) {
        annoncementText = "YOU LOSE"
        currentScore--
        housebackground.style.boxShadow = "0 0 0 0px hsl(0, 0%, 100%, 0.07),0 0 0 20px hsl(0, 0%, 100%, 0.05),0 0 0 45px hsl(0, 0%, 100%, 0.03),0 0 0 75px hsl(0, 0%, 100%, 0.013)"
    }else{
        annoncementText = "IT'S A DRAW"
        playerbackground.style.boxShadow = "0 0 0 0px hsl(0, 0%, 100%, 0.07),0 0 0 20px hsl(0, 0%, 100%, 0.05),0 0 0 45px hsl(0, 0%, 100%, 0.03),0 0 0 75px hsl(0, 0%, 100%, 0.013)"
        housebackground.style.boxShadow = "0 0 0 0px hsl(0, 0%, 100%, 0.07),0 0 0 20px hsl(0, 0%, 100%, 0.05),0 0 0 45px hsl(0, 0%, 100%, 0.03),0 0 0 75px hsl(0, 0%, 100%, 0.013)"
    }
    document.querySelector(".score").innerText = currentScore
    const gameDiv = document.querySelector(".wrapper")
    const annoncement = document.createElement("p")
    annoncement.innerText = annoncementText
    annoncement.className = "annoncement"
    const playAgain = document.createElement("div")
    playAgain.className = "playAgain"
    playAgain.innerText = "PLAY AGAIN"
    const rulesButtons = document.querySelector(".rulesBtn")
    gameDiv.insertBefore(annoncement, rulesButtons)
    gameDiv.insertBefore(playAgain, rulesButtons)

    playAgain.addEventListener("click", ()=> {
        
        if(gamemode === "standard"){
            stepZero()
        } else if(gamemode === "altgame"){
            stepAltGame()
        }
        document.querySelector(".altGameBtn").style.display = "initial"
    })    
}

const stepZero = function() {
    const gamename = document.querySelector(".gamename")
    gamename.innerText = "rock paper scissors"
    try{
       const oldGame = document.querySelector(".gameTwo")
       oldGame.remove() 
        const oldannoncement = document.querySelector(".annoncement")
        oldannoncement.remove()
        const oldplayAgain = document.querySelector(".playAgain")
        oldplayAgain.remove()
    }catch(err){
    }
    const newGame = document.createElement("div")
    newGame.className = "game"
    const triangle = document.createElement("img")
    triangle.className = "triangle"
    triangle.src = "./images/bg-triangle.svg"
    const paper = document.createElement("div")
    paper.className = "paper"
    const paperImg = document.createElement("img")
    paperImg.src = "./images/icon-paper.svg"
    paper.append(paperImg)
    const rock = document.createElement("div")
    rock.className = "rock"
    const rockImg = document.createElement("img")
    rockImg.src = "./images/icon-rock.svg"
    rock.append(rockImg)
    const scissors = document.createElement("div")
    scissors.className = "scissors"
    const scissorsImg = document.createElement("img")
    scissorsImg.src = "./images/icon-scissors.svg"
    scissors.append(scissorsImg)
    newGame.append(triangle, paper, rock, scissors)
    const gameDiv = document.querySelector(".wrapper")
    const rulesButtons = document.querySelector(".rulesBtn")
    gameDiv.insertBefore(newGame, rulesButtons)
    stepOne()
}


stepZero()
showRules()
altGameListiner()