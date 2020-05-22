var playerNameLbl = document.querySelector("#quiz-card-title");
var playerScoreLbl = document.querySelector("#quiz-card-subtitle");
var startBtn = document.querySelector("#btn-start");
var quizList = document.querySelector("#quiz-list-group");
var quizQuitArea = document.querySelector("#quiz-quit-area");
var quitBtn = document.querySelector("#btn-quit");

startBtn.addEventListener("click", clickStartBtn);
quitBtn.addEventListener("click", clickQuitBtn);


var quiz = {


    initializeQuiz: function() {
        playerNameLbl.style.display = "block";
        playerScoreLbl.style.display = "block";
        quizQuitArea.style.display = "block";
        quizList.style.display = "block";
        playerNameLbl.textContent = "Player's Name:";
        playerScoreLbl.textContent = "Score: 0";

        return 0;
    }

};

function initialState() {
    playerNameLbl.style.display = "none";
    playerScoreLbl.style.display = "none";
    quizQuitArea.style.display = "none";
    quizList.style.display = "none";

    return 0;
}

function clickStartBtn() {
    var q = Object.create(quiz);
    if(!q.initializeQuiz()) {
        
    }
    
    return 0;
}

function clickQuitBtn() {
    initialState();

    return 0;
}

/// when page loads everything is hidden
initialState();
