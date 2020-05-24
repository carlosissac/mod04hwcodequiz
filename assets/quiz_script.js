//////////MAIN UI ELEMENTS 
var quizTitle = document.querySelector("#quiz-card-header");
var startBtnContainer = document.querySelector("#btn-start-container");
var startBtn = document.querySelector("#btn-start");
var quizTxt1 = document.querySelector("#quiz-question-card-text-1");
var quizTxt2 = document.querySelector("#quiz-question-card-text-2");
var quizQuestArea = document.querySelector("#quiz-question");
var quizList = document.querySelector("#quiz-list-group");
var quizQuitArea = document.querySelector("#quiz-quit-area");
var quitBtn = document.querySelector("#btn-quit");

////////MODAL ELEMENTS
var playerNameInput = document.querySelector("#quiz-modal-playername");
var modalMsgArea = document.querySelector("#quiz-modal-msgarea");
var btnModalLvlEasy = document.querySelector("#quiz-modal-btn-lvleasy");
var btnModalLvlNormal = document.querySelector("#quiz-modal-btn-lvlnormal");
var btnModalLvlHard = document.querySelector("#quiz-modal-btn-lvlhard");
var btnModalQuit = document.querySelector("#quiz-modal-btn-quit");
var modalTimer = document.querySelector("#modal-timer");

////EventListeners
startBtn.addEventListener("click", clickStartBtn);
quitBtn.addEventListener("click", clickQuitBtn);
btnModalLvlEasy.addEventListener("click",clickModalEasy);
btnModalLvlNormal.addEventListener("click",clickModalNormal);
btnModalLvlHard.addEventListener("click",clickModalHard);
btnModalQuit.addEventListener("click",clickModalQuit);

var quiz = {
    "player_name": "",
    "quiz_level": "",
    "quiz_score": 0,

    startBtnChangeStyle: function(newstyle) {
        if(newstyle === "quiz-start") {
            startBtn.setAttribute("class","btn btn-success disabled btn-lg btn-block");
            startBtn.disabled = true;
        }
        else if (newstyle === "initial-state") {
            startBtn.setAttribute("class","btn btn-primary btn-lg btn-block");
            startBtn.textContent = "START";
            startBtn.disabled = false;
        }
        else {
            console.log("startBtnChangeStyle NA");
        }
        return 0;
    },

    showCtrlsUI: function() {
        quiz.startBtnChangeStyle("quiz-start");
        startBtn.textContent = "TIME";
        quizTxt1.textContent = "";
        quizTxt2.textContent = "";
        quizQuitArea.style.display = "block";
        quizList.style.display = "block";
    },

    resetCtrlsUI: function () {
        this.startBtnChangeStyle("initial-state");
        quizTitle.textContent = "Js Quiz App";
        quizQuitArea.style.display = "none";
        quizList.style.display = "none";
        quizTxt1.textContent = "Test your JS knowledge !!!!";
        quizTxt2.textContent = "Click \"START\" to begin.";
    },

    resetModalUI: function() {
        btnModalLvlEasy.setAttribute("class","btn btn-warning");
        btnModalLvlEasy.disabled = false;
        btnModalLvlNormal.setAttribute("class","btn btn-warning");
        btnModalLvlEasy.disabled = false;
        btnModalLvlHard.setAttribute("class","btn btn-warning");
        btnModalLvlEasy.disabled = false;
        playerNameInput.value = ""; 
        modalMsgArea.value = "";
        modalMsgArea.style.backgroundColor = "white";
    },

    disableModalBtn: function() {
        btnModalLvlEasy.setAttribute("class","btn btn-warning disabled");
        btnModalLvlEasy.disabled = true;
        btnModalLvlNormal.setAttribute("class","btn btn-warning disabled");
        btnModalLvlEasy.disabled = true;
        btnModalLvlHard.setAttribute("class","btn btn-warning disabled");
        btnModalLvlEasy.disabled = true;
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

    quizTimer: function() {
        var lblmsg = modalMsgArea.value;
        var countdown = 0;
        var halfway = 0;
        var lock = false;
        var minutes = 0;
        var seconds = 0;

        if(quiz.quiz_level === "easy") {
            //10 MIN
            countdown = 600;
            halfway = 300;
            lock = true;
        }
        else if (quiz.quiz_level === "normal") {
            //8 MIN
            countdown = 480;
            halfway = 240
            lock = true;
        }
        else if (quiz.quiz_level === "hard") {
            //5 MIN
            countdown = 300;
            halfway = 150;
            lock = true;
        }
        else if (quiz.quiz_level === "quit") {
            lock = false;
            return 1;
        }
        else {
            lock = false;
            console.log("Not Applicable");
            return 1;
        }

        if(lock) {
            var secondInterval = setInterval(function() {
                    if(countdown>0) {
                        // COUNTDOWN
                        minutes = Math.floor(countdown/60);
                        seconds = Math.floor(countdown%60);
                        startBtn.textContent = minutes + " : " + seconds;
                    }
                    if(countdown === halfway) {
                        //HALFWAY
                        console.log("HALFWAYYYYYYYYY");
                    }
                    if((countdown === 0)|| (quiz.quiz_level === "quit")) {
                        //EXIT CONDITION
                        startBtn.textContent = "START";
                        clearInterval(secondInterval);
                        return 0;
                    }
                    countdown--;
            }, 1000);
        }
        else {
            return 1;
        }
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
            this.quizTimer();

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
    jstest.setLvlQuit();
}

initialState();
