//////////MAIN UI ELEMENTS 
var quizTitle = document.querySelector("#quiz-card-header");
var startBtnContainer = document.querySelector("#btn-start-container");
var startBtn = document.querySelector("#btn-start");
var quizTxt1 = document.querySelector("#quiz-question-card-text-1");
var quizTxt2 = document.querySelector("#quiz-question-card-text-2");
var quizTxt3 = document.querySelector("#quiz-question-card-text-3");
var quizQuestArea = document.querySelector("#quiz-question");
var quizList = document.querySelector("#quiz-list-group");
var quizQuitArea = document.querySelector("#quiz-quit-area");
var quitBtn = document.querySelector("#btn-quit");
var ans0Btn = document.querySelector("#quiz-btn-0");
var ans1Btn = document.querySelector("#quiz-btn-1");
var ans2Btn = document.querySelector("#quiz-btn-2");
var ans3Btn = document.querySelector("#quiz-btn-3");

////////MODAL ELEMENTS
var playerNameInput = document.querySelector("#quiz-modal-playername");
var modalMsgArea = document.querySelector("#quiz-modal-msgarea");
var btnModalLvlEasy = document.querySelector("#quiz-modal-btn-lvleasy");
var btnModalLvlNormal = document.querySelector("#quiz-modal-btn-lvlnormal");
var btnModalLvlHard = document.querySelector("#quiz-modal-btn-lvlhard");
var btnModalQuit = document.querySelector("#quiz-modal-btn-quit");
var modalTimer = document.querySelector("#modal-timer");

/////EXIT MODAL ELEMENTS
var exitModalMsgArea = document.querySelector("#exit-modal-msgarea");
var exitModalDialog = document.querySelector("#exit-modal");

////EventListeners
startBtn.addEventListener("click",clickStartBtn);
quitBtn.addEventListener("click",clickQuitBtn);
ans0Btn.addEventListener("click",clickAns0Btn);
ans1Btn.addEventListener("click",clickAns1Btn);
ans2Btn.addEventListener("click",clickAns2Btn);
ans3Btn.addEventListener("click",clickAns3Btn);
btnModalLvlEasy.addEventListener("click",clickModalEasy);
btnModalLvlNormal.addEventListener("click",clickModalNormal);
btnModalLvlHard.addEventListener("click",clickModalHard);
btnModalQuit.addEventListener("click",clickModalQuit);
exitModalDialog.addEventListener("click",clickExitModalDialog);

var quiz = {
    "player_name" : "",
    "quiz_level" : "",
    "quiz_score" : 0,
    "quiz_countdown" : 0,
    "quest_count" : 0,
    "localStorage_lock" : false,
    "noPoints_lock" : false, 

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

    saveToLocalStorage: function () {
        if(!quiz.localStorage_lock) {
            quiz.localStorage_lock = true;

            array = [];
            let new_scoreEntry = {
                'timestamp' : Date.now(),
                'quiz_level' : String(quiz.quiz_level),
                'player_name' : String(quiz.player_name),
                'quiz_score' : quiz.quiz_score
            };

            var buffer = JSON.parse(localStorage.getItem('scoreEntry'));
            if(localStorage.getItem('scoreEntry')) {
                for(var i=0; i<buffer.length; i++) {
                    array.push(buffer[i]);
                }
            }
            array.push(new_scoreEntry);            
            localStorage.setItem('scoreEntry', JSON.stringify(array));
            //console.log(JSON.parse(localStorage.getItem('scoreEntry')));
        }
    },

    exitModalShow: function () {
        $("#exit-modal").modal("show");
        if(quiz.quiz_score){
        exitModalMsgArea.value = quiz.player_name + "'s Final Score is: \n" + quiz.quiz_score + " Points";
        }
        else{
            exitModalMsgArea.value = "No Points Were Scored, Try Again";
        }
    },

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
        quizTxt3.textContent = "";
        quizQuitArea.style.display = "block";
        quizList.style.display = "block";
    },

    resetCtrlsUI: function () {
        quiz.startBtnChangeStyle("initial-state");
        quiz.setLvlQuit();
        quizTitle.textContent = "Js Quiz App";
        quizQuitArea.style.display = "none";
        quizList.style.display = "none";
        quizTxt1.textContent = "Test your JS knowledge !!!!";
        quizTxt2.textContent = "Click \"START\" to begin.";
        quizTxt3.textContent = "";
        quiz.quest_count = 0;
        quiz.localStorage_lock = false;
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

    quizLoader: function() {
       //disable all nav links
        qhand.questionBuffer();
        qhand.popQuestionBuffer();
        quiz.quest_count++;
        quizTxt1.textContent = "Q" + quiz.quest_count + "." + qhand.getQuestionContent();
        ans0Btn.textContent = qhand.getAnswerContent0();
        ans1Btn.textContent = qhand.getAnswerContent1();
        ans2Btn.textContent = qhand.getAnswerContent2();
        ans3Btn.textContent = qhand.getAnswerContent3();
        quizTxt2.textContent = "Score: 00";
        quizTxt2.style.color = "white";
        
    },

    newQuestionLoad: function() {
        if(qhand.getQuestionBufferLenght()) {
            qhand.popQuestionBuffer();
            quiz.quest_count++;
            quizTxt1.textContent = "Q" + quiz.quest_count + "." + qhand.getQuestionContent();
            ans0Btn.textContent = qhand.getAnswerContent0();
            ans1Btn.textContent = qhand.getAnswerContent1();
            ans2Btn.textContent = qhand.getAnswerContent2();
            ans3Btn.textContent = qhand.getAnswerContent3();
        }
        else {
            ///QUESTIONS DONE >>> EXIT
            quiz.exitModalShow();
            quiz.saveToLocalStorage();
            quiz.resetCtrlsUI();
        }
    },

    scoreHandler: function(value) {
        if(value === qhand.getAnswerCorrect()) {
            quiz.quiz_score += qhand.getQuestionScore();
            quizTxt2.textContent = "Score: " + quiz.quiz_score;
            quizTxt2.style.color = "white";
            quizTxt3.textContent = "Correct Answer!!!!";
            quizTxt3.style.color = "white";
        }
        else {
            quiz.quiz_countdown -=  qhand.getQuestionPenalty();
            quizTxt3.textContent = "Incorrect Answer!!!! " + qhand.getQuestionPenalty() + "Sec Penalty";
            quizTxt3.style.color = "red";
            if(quiz.quiz_countdown<1) {
                quiz.quiz_countdown = 0;
            }
        }
    },

    quizTimer: function() {
        var lblmsg = modalMsgArea.value;
        var halfway = 0;
        var lock = false;
        var minutes = 0;
        var seconds = 0;
        quiz.quiz_countdown = 0;

        if(quiz.quiz_level === "easy") {
            //10 MIN
            quiz.quiz_countdown = 600;
            halfway = 300;
            lock = true;
        }
        else if (quiz.quiz_level === "normal") {
            //8 MIN
            quiz.quiz_countdown = 480;
            halfway = 240
            lock = true;
        }
        else if (quiz.quiz_level === "hard") {
            //5 MIN
            quiz.quiz_countdown = 300;
            halfway = 150;
            lock = true;
        }
        else if (quiz.quiz_level === "quit") {
            lock = false;
            return 1;
        }
        else {
            lock = false;
            console.log("quizTimer : Not Applicable");
            return 1;
        }

        if(lock) {
            var secondInterval = setInterval(function() {
                    if(quiz.quiz_countdown>0) {
                        // COUNTDOWN
                        minutes = Math.floor(quiz.quiz_countdown/60);
                        seconds = Math.floor(quiz.quiz_countdown%60);
                        startBtn.textContent = minutes + " : " + seconds;
                    }
                    if(quiz.quiz_countdown === halfway) {
                        //HALFWAY
                        quizTxt3.textContent = "HALFWAY THORUGH!!!!";
                        quizTxt3.style.color = "white";
                    }
                    if(quiz.quiz_countdown === 20) {
                        //20 SECS LEFT
                        quizTxt3.textContent = "20 SEC LEFT!!!!";
                        quizTxt3.style.color = "white";
                    }
                    if(quiz.quiz_countdown === 10) {
                        //10 SECS LEFT
                        quizTxt3.textContent = "10 SEC LEFT!!!!";
                        quizTxt3.style.color = "white";
                    }
                    if((quiz.quiz_countdown === 0)||(quiz.quiz_level === "quit")) {
                        //TIME'S UP >>> EXIT
                        if((quiz.quiz_level !== "quit") && (quiz.quiz_score)) {
                            quiz.saveToLocalStorage();
                            quiz.exitModalShow();
                        }
                        if((quiz.quiz_level !== "quit") && (!quiz.quiz_score)) {
                            quiz.exitModalShow();
                        }
                        quiz.resetCtrlsUI();
                        clearInterval(secondInterval);
                        return 0;
                    }
                    quiz.quiz_countdown--;
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
            console.log("startQuiz : Not Applicable");
        }

        if(Boolean(start)) {
            this.showCtrlsUI();
            this.quizTimer();
            this.quizLoader();
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
                    if(display_countdown>0) {
                        modalMsgArea.value = lblmsg + "\n..... " + display_countdown;
                    }
                    else {
                        modalMsgArea.value = "10 QUESTION QUIZ BEGINS!!!!!!";
                        modalMsgArea.style.backgroundColor = "white";
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
        quiz.player_name = playerNameInput.value;
        if(Boolean(quiz.player_name.length)) {
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

var jstest = quiz;

function initialState() {
    jstest.resetModalUI();
    $("#quiz-modal").modal("hide");
    jstest.resetCtrlsUI();
}

function clickExitModalDialog(event) {
    if(jstest.quiz_score) {
        window.location.href = "./scoreboard.html";
    }
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

function clickAns0Btn(event) {
    event.preventDefault();
    jstest.scoreHandler(0);
    jstest.newQuestionLoad();
}

function clickAns1Btn(event) {
    event.preventDefault();
    jstest.scoreHandler(1);
    jstest.newQuestionLoad();
}

function clickAns2Btn(event) {
    event.preventDefault();
    jstest.scoreHandler(2);
    jstest.newQuestionLoad();
}

function clickAns3Btn(event) {
    event.preventDefault();
    jstest.scoreHandler(3);
    jstest.newQuestionLoad();
}

function clickQuitBtn(event) {
    event.preventDefault();
    initialState();
    jstest.setLvlQuit();
}

initialState();
