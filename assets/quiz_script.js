var quizTitle = document.querySelector("#quiz-card-header");
var startBtn = document.querySelector("#btn-start");
var playerNameInput = document.querySelector("#quiz-modal-playername");
var modalMsgArea = document.querySelector("#quiz-modal-msgarea");
var btnModalLvlEasy = document.querySelector("#quiz-modal-btn-lvleasy");
var btnModalLvlNormal = document.querySelector("#quiz-modal-btn-lvlnormal");
var btnModalLvlHard = document.querySelector("#quiz-modal-btn-lvlhard");
var btnModalQuit = document.querySelector("#quiz-modal-btn-quit");
var quizList = document.querySelector("#quiz-list-group");
var quizQuitArea = document.querySelector("#quiz-quit-area");
var quitBtn = document.querySelector("#btn-quit");


startBtn.addEventListener("click", clickStartBtn);
quitBtn.addEventListener("click", clickQuitBtn);
btnModalLvlEasy.addEventListener("click",clickModalEasy);
btnModalLvlNormal.addEventListener("click",clickModalNormal);
btnModalLvlHard.addEventListener("click",clickModalHard);
btnModalQuit.addEventListener("click",clickModalQuit);

var quiz = {

    "player_name": "",
    "level": "",

    getPlayerName: function() {
        this.player_name = playerNameInput.value;
        if(Boolean(this.player_name.length)) {
            //NOT EMPTY
            return 0;
        }
        else {
            //EMPTY
            return 1;
        }
    },

    resetCtrlsUI: function () {
        $("#quiz-modal").modal("hide");
        quizTitle.textContent = "Js Quiz App";
        quizQuitArea.style.display = "none";
        quizList.style.display = "none";
    },

    showCtrlsUI: function() {
        quizQuitArea.style.display = "block";
        quizList.style.display = "block";
    },

    initializeQuiz: function() {
        $("#quiz-modal").modal("show");
        modalMsgArea.value="";
        //if name is validated and test was not quit proceed
        //show controls in UI

        return 0;
    }

};

var exam = Object.create(quiz);

function clickModalEasy() {
    if(!exam.getPlayerName()) {

    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value="YOU NEED TO WRITE YOUR NAME";
    }
}

function clickModalNormal() {
    if(!exam.getPlayerName()) {

    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value="YOU NEED TO WRITE YOUR NAME";
    }
}

function clickModalHard() {
    if(!exam.getPlayerName()) {

    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value="YOU NEED TO WRITE YOUR NAME";
    }
}

function clickModalQuit() {
    $("#quiz-modal").modal("hide");
    initialState();
}

function initialState() {
    $("#quiz-modal").modal("hide");
    exam.resetCtrlsUI();
}

function clickStartBtn() {
    if(!exam.initializeQuiz()) {
        
    }

}

function clickQuitBtn() {
    initialState();
}

initialState();
