var quizTitle = document.querySelector("#quiz-card-header");
var startBtn = document.querySelector("#btn-start");
var playerNameInput = document.querySelector("#quiz-modal-playername");
var modalMsgArea = document.querySelector("#quiz-modal-msgarea");
var btnModalLvlEasy = document.querySelector("#quiz-modal-btn-lvleasy");
var btnModalLvlNormal = document.querySelector("#quiz-modal-btn-lvlnormal");
var btnModalLvlHard = document.querySelector("#quiz-modal-btn-lvlhard");
var btnModalQuit = document.querySelector("#quiz-modal-btn-quit");
var modalTimer = document.querySelector("#modal-timer");
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
    "quiz_level": "",
    showCtrlsUI: function() {
        quizQuitArea.style.display = "block";
        quizList.style.display = "block";
    },

    resetCtrlsUI: function () {
        quizTitle.textContent = "Js Quiz App";
        quizQuitArea.style.display = "none";
        quizList.style.display = "none";
    },

    resetModalUI: function() {
        btnModalLvlEasy.style.display = "block";
        btnModalLvlNormal.style.display = "block";
        btnModalLvlHard.style.display = "block";
        playerNameInput.value = ""; 
        modalMsgArea.value = "";
        modalMsgArea.style.backgroundColor = "white";
    },

    disableModalBtn: function() {
        btnModalLvlEasy.style.display = "none";
        btnModalLvlNormal.style.display = "none";
        btnModalLvlHard.style.display = "none";
    },

    setLvlEasy: function () {
        quiz.quiz_level = "easy";
    },

    setLvlNormal: function () {
        quiz.quiz_level = "normal";
    },

    setLvlHard: function () {
        quiz.quiz_level = "hard";
    },

    setLvlQuit: function () {
        quiz.quiz_level = "quit";
    },

    startQuiz: function() {
        var start = false;

        ///CONFIGURES UI FOR QUIZ MODE
        if(quiz.quiz_level === "easy") {
            quizTitle.textContent = "Easy Test";
            start = true;
        }
        else if (quiz.quiz_level === "normal") {
            quizTitle.textContent = "Normal Test";
            start = true;
        }
        else if (quiz.quiz_level === "hard") {
            quizTitle.textContent = "Hard Test";
            start = true;
        }
        else if (quiz.quiz_level === "quit") {
            start = false;
        }
        else {
            console.log("Not Applicable");
        }

        if(Boolean(start)) {
            this.showCtrlsUI();      
            return 0;
        }
        else {
            this.resetModalUI();
            this.resetCtrlsUI();
            return 1;
        }
    },

    modalExitTimer: function() {
        var lblmsg = modalMsgArea.value;
        var countdown = 6;
        var display_countdown = 0;
        if(this.player_name.length) {
            var secondInterval = setInterval(function() {
                    display_countdown = countdown-1;  
                    if(display_countdown>0){
                        modalMsgArea.value = lblmsg + "\n..... " + display_countdown;
                    }
                    else {
                        modalMsgArea.value = "QUIZ BEGINS!!!!!!";
                        modalMsgArea.style.backgroundColor = "green";
                    }
                    
                    if((countdown === 0)|| (quiz.quiz_level === "quit")) {
                        //// TIMER EXIT CONDITION
                        quiz.resetModalUI();
                        $("#quiz-modal").modal("hide");
                        quiz.startQuiz();
                        clearInterval(secondInterval);
                        return 0;
                    }
                    countdown--;
            }, 1000);
        }
    },

    getPlayerName: function() {
        this.player_name = playerNameInput.value;
        if(Boolean(this.player_name.length)) {
            //NAME IS OKAY
            return 0;
        }
        else {
            //NO NAME SUBMITTED
            return 1;
        }
    },

    initializeQuiz: function() {
        quiz.resetModalUI();
        $("#quiz-modal").modal("show");
        return 0;
    }
};

var jstest = Object.create(quiz);

function initialState() {
    jstest.resetModalUI();
    $("#quiz-modal").modal("hide");
    jstest.resetCtrlsUI();
}

function clickModalEasy(event) {
    event.preventDefault();
    if(!jstest.getPlayerName()) {
        modalMsgArea.style.color = "black";
        modalMsgArea.value = "EASY MODE\n10 MIN. QUIZ TIME";
        jstest.setLvlEasy();
        jstest.disableModalBtn();
        if(!jstest.modalExitTimer()) {
            return 0;
        } 
    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value = "WRITE YOUR NAME";
    }
}

function clickModalNormal(event) {
    event.preventDefault();
    if(!jstest.getPlayerName()) {
        modalMsgArea.style.color = "black";
        modalMsgArea.value = "NORMAL MODE\n8 MIN. QUIZ TIME";
        jstest.setLvlNormal();
        jstest.disableModalBtn();
        if(!jstest.modalExitTimer()) {
            return 0;
        } 
    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value = "WRITE YOUR NAME";
    }
}

function clickModalHard(event) {
    event.preventDefault();
    if(!jstest.getPlayerName()) {
        modalMsgArea.style.color = "black";
        modalMsgArea.value = "HARD MODE\n5 MIN. QUIZ TIME";
        jstest.setLvlHard();
        jstest.disableModalBtn();
        if(!jstest.modalExitTimer()) {
            return 0;
        } 
    }
    else {
        modalMsgArea.style.color = "red";
        modalMsgArea.value = "WRITE YOUR NAME";
    }
}

function clickModalQuit(event) {
    event.preventDefault();
    jstest.setLvlQuit();
    jstest.resetModalUI();
    $("#quiz-modal").modal("hide");
    initialState();
}

function clickStartBtn(event) {
    event.preventDefault();
    jstest.initializeQuiz();
}

function clickQuitBtn(event) {
    event.preventDefault();
    initialState();
}

initialState();
