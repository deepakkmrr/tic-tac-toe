
    var currentPlayer="1";
    var alreadyFilled=[];

    const buttonTapped = (id) => {
        if(alreadyFilled.length == 0){
            addHistory(((currentPlayer == "1")?"Player 1":"Player 2") + " started the game!");
        }

        if(alreadyFilled.indexOf(id) == -1){
            if(currentPlayer == "1"){
                document.getElementById(id).value  = "X";
            }
            else if(currentPlayer == "0"){
                document.getElementById(id).value  = "O";
            }
            addHistory(((currentPlayer == "1")?"Player 1":"Player 2") + " filled " + ((currentPlayer == "1")?"X":"O"));
            alreadyFilled.push(id);
            checkResult(id);
            currentPlayer = (currentPlayer == "1")?"0":"1";
        }
    }

    const addHistory = (description) => {
        let text = document.getElementById("dvHistory").innerHTML;
        text += description + "<br/>";
        document.getElementById("dvHistory").innerHTML = text;
    }

    const checkResult = (buttonTapped) => {
        let anyoneWon=false;
        if(buttonTapped == "B1"){
            if(check147() || check159() || check123()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B2"){
            if(check258() || check123()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B3"){
            if(check357() || check369() || check123()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B4"){
            if(check147() || check456()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B5"){
            if(check258() || check456() || check357() || check159()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B6"){
            if(check369() || check456()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B7"){
            if(check357() || check147() || check789()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B8"){
            if(check258() || check789()){
                anyoneWon = true;
            }
        }
        else if(buttonTapped == "B9"){
            if(check369() || check789() || check159()){
                anyoneWon = true;
            }
        }

        if(anyoneWon){
            disableAllButtons();
            addHistory(((currentPlayer == "1")?"Player 1":"Player 2") + " Won!");
        }
        else if(alreadyFilled.length == 9){
            disableAllButtons();
            addHistory("Match Tie!");
        }
    }

    const check147 = () => {
        let B1 = document.getElementById("B1").value;
        let B4 = document.getElementById("B4").value;
        let B7 = document.getElementById("B7").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B1 == matchWithValue && B4 == matchWithValue && B7 == matchWithValue){
            document.getElementById("B1").style.backgroundColor="green";
            document.getElementById("B4").style.backgroundColor="green";
            document.getElementById("B7").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check258 = () => {
        let B2 = document.getElementById("B2").value;
        let B5 = document.getElementById("B5").value;
        let B8 = document.getElementById("B8").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B2 == matchWithValue && B5 == matchWithValue && B8 == matchWithValue){
            document.getElementById("B2").style.backgroundColor="green";
            document.getElementById("B5").style.backgroundColor="green";
            document.getElementById("B8").style.backgroundColor="green";

            return true;
        }
        return false;
    }

    const check369 = () => {
        let B3 = document.getElementById("B3").value;
        let B6 = document.getElementById("B6").value;
        let B9 = document.getElementById("B9").value;
        
        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B3 == matchWithValue && B6 == matchWithValue && B9 == matchWithValue){
            document.getElementById("B3").style.backgroundColor="green";
            document.getElementById("B6").style.backgroundColor="green";
            document.getElementById("B9").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check123 = () => {
        let B1 = document.getElementById("B1").value;
        let B2 = document.getElementById("B2").value;
        let B3 = document.getElementById("B3").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B1 == matchWithValue && B2 == matchWithValue && B3 == matchWithValue){
            document.getElementById("B1").style.backgroundColor="green";
            document.getElementById("B2").style.backgroundColor="green";
            document.getElementById("B3").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check456 = () => {
        let B4 = document.getElementById("B4").value;
        let B5 = document.getElementById("B5").value;
        let B6 = document.getElementById("B6").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B4 == matchWithValue && B5 == matchWithValue && B6 == matchWithValue){
            document.getElementById("B4").style.backgroundColor="green";
            document.getElementById("B5").style.backgroundColor="green";
            document.getElementById("B6").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check789 = () => {
        let B7 = document.getElementById("B7").value;
        let B8 = document.getElementById("B8").value;
        let B9 = document.getElementById("B9").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B7 == matchWithValue && B8 == matchWithValue && B9 == matchWithValue){
            document.getElementById("B7").style.backgroundColor="green";
            document.getElementById("B8").style.backgroundColor="green";
            document.getElementById("B9").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check159 = () => {
        let B1 = document.getElementById("B1").value;
        let B5 = document.getElementById("B5").value;
        let B9 = document.getElementById("B9").value;


        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B1 == matchWithValue && B5 == matchWithValue && B9 == matchWithValue){
            document.getElementById("B1").style.backgroundColor="green";
            document.getElementById("B5").style.backgroundColor="green";
            document.getElementById("B9").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const check357 = () => {
        let B3 = document.getElementById("B3").value;
        let B5 = document.getElementById("B5").value;
        let B7 = document.getElementById("B7").value;

        let matchWithValue = (currentPlayer == "1")?"X":"O";
        if(B3 == matchWithValue && B5 == matchWithValue && B7 == matchWithValue){
            document.getElementById("B3").style.backgroundColor="green";
            document.getElementById("B5").style.backgroundColor="green";
            document.getElementById("B7").style.backgroundColor="green";
            return true;
        }
        return false;
    }

    const disableAllButtons = () => {
        let playingTabs = document.getElementsByClassName("playtab");
         for(tab of playingTabs){
            tab.disabled=true;
         }
    }

    const reset = () => {
        let playingTabs = document.getElementsByClassName("playtab");
        for(tab of playingTabs){
            tab.value  = "";
            tab.style.backgroundColor="#eef3f3";
            tab.disabled  = false;
         }

        currentPlayer="1";
        alreadyFilled=[];
        document.getElementById("dvHistory").innerHTML = "";
    }