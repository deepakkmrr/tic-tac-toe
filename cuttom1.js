var currentPlayer="1";
var currentGameScenario = {};

const matchingPoints = [
    ["B1","B4","B7"],
    ["B2","B5","B8"],
    ["B3","B6","B9"],
    ["B1","B2","B3"],
    ["B4","B5","B6"],
    ["B7","B8","B9"],
    ["B1","B5","B9"],
    ["B3","B5","B7"]
];

const currentPlayerName = () => (currentPlayer === "1")?"Player 1":"Player 2";
const currentValue = () =>  (currentPlayer === "1")?"X":"O";
const toggleCurrentPlayer = () =>  {currentPlayer = ((currentPlayer === "1")?"0":"1")};

const buttonTapped = (id) => {
    if(Object.keys(currentGameScenario).length === 0){
        addHistory( currentPlayerName() + " started the game!");
    }

    if(!(id in currentGameScenario)){
        document.getElementById(id).value = currentValue();
        addHistory(currentPlayerName() + " filled " + currentValue());
        currentGameScenario[id] = currentValue();
        checkResult(id);
        toggleCurrentPlayer();
    }
}

function getWiningPoints(matchingPoint) {
    return function(element) {
        return element.indexOf(matchingPoint) >= 0;
    }
}

const checkResult = (buttonTapped) => {
    let anyoneWon=false;
    
    var winingPoints = matchingPoints.filter(getWiningPoints(buttonTapped));
    if(winingPoints.length > 0){
        for(point of winingPoints){
            if(currentGameScenario[point[0]] === currentGameScenario[point[1]] && currentGameScenario[point[1]] === currentGameScenario[point[2]]){
                anyoneWon = true;
                for(p of point){
                    document.getElementById(p).style.backgroundColor="green";
                }
                break;
            }
         }
    }

    if(anyoneWon){
        disableAllButtons();
        addHistory(currentPlayerName() + " Won!");
    }
    else if(Object.keys(currentGameScenario).length === 9){
        disableAllButtons();
        addHistory("Match Tie!");
    }
}

const disableAllButtons = () => {
    let playingTabs = document.getElementsByClassName("playtab");
     for(tab of playingTabs){
        tab.disabled=true;
     }
}

const addHistory = (description) => {
    let text = document.getElementById("dvHistory").innerHTML;
    text += description + "<br/>";
    document.getElementById("dvHistory").innerHTML = text;
}

const reset = () => {
    let playingTabs = document.getElementsByClassName("playtab");
    for(tab of playingTabs){
        tab.value  = "";
        tab.style.backgroundColor="white";
        tab.disabled  = false;
     }

    currentPlayer="1";
    currentGameScenario = {};
    document.getElementById("dvHistory").innerHTML = "";
}
