//UI QUERY SELECTORS
var scoreBtn = document.querySelector("#score-btn");
var clearBtn = document.querySelector("#clear-btn");
var mockBtn = document.querySelector("#mock-btn");
var scoreTblHeader = document.querySelector("#score-table-header");
var scoreTblBody = document.querySelector("#score-table-body");

//EVENT LISTENERS
scoreBtn.addEventListener("click",clickScoreBtn);
clearBtn.addEventListener("click",clickClearBtn);
mockBtn.addEventListener("click",clickMockBtn);

var score = {
    "mode" : 0,
    "array" : [], 

    resetUI: function () {
        score.mode = 0;
        scoreTblHeader.style.display = "none";
        scoreTblBody.style.display = "none";
        scoreTblBody.innerHTML = "";
        //scoreTbl.style.display = "none"; hide
        //scoreTbl.style.display = ""; show
    },

    showAllScores: function () {
        //console.log("ALLLL");
        var buffer = JSON.parse(localStorage.getItem('scoreEntry'));

        buffer.sort(function(a,b){
            return b.quiz_score - a.quiz_score;
        });

        scoreTblBody.innerHTML = "";
        var i = 0;
        if(buffer.length) {
            while(i<buffer.length){
                if(!(i%2))  {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class","table-primary");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = buffer[i].player_name;
                    tr.append(td0);

                    var td1 = document.createElement("td");
                    td1.textContent = buffer[i].quiz_level;
                    tr.append(td1);

                    var td2 = document.createElement("td");
                    td2.textContent = buffer[i].quiz_score;
                    tr.append(td2);
                }
                else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("scope","row");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = buffer[i].player_name;
                    tr.append(td0);
                    
                    var td1 = document.createElement("td");
                    td1.textContent = buffer[i].quiz_level;
                    tr.append(td1);
                    
                    var td2 = document.createElement("td");
                    td2.textContent = buffer[i].quiz_score;
                    tr.append(td2);
                }
                i++;
                scoreTblBody.append(tr);
                console.log(tr);
            }
            scoreTblHeader.style.display = "";
            scoreTblBody.style.display = "";
        }
        else {
            scoreTblHeader.style.display = "none";
            scoreTblBody.style.display = "none";            
        }
        return 0;
    },

    showHardModeScores: function () {
        //console.log("HARD");
        var buffer = JSON.parse(localStorage.getItem('scoreEntry'));
        
        var h_buff = [];
        for(var i=0; i<buffer.length; i++) {
            if(buffer[i].quiz_level === "hard") {
                h_buff.push(buffer[i]);
            }
        }
        h_buff.sort(function(a,b){
            return b.quiz_score - a.quiz_score;
        });
        //console.log(h_buff);

        scoreTblBody.innerHTML = "";
        var i = 0;
        if(h_buff.length) {
            while(i<h_buff.length){
                if(!(i%2))  {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class","table-primary");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = h_buff[i].player_name;
                    tr.append(td0);

                    var td1 = document.createElement("td");
                    td1.textContent = h_buff[i].quiz_level;
                    tr.append(td1);

                    var td2 = document.createElement("td");
                    td2.textContent = h_buff[i].quiz_score;
                    tr.append(td2);
                }
                else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("scope","row");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = h_buff[i].player_name;
                    tr.append(td0);
                    
                    var td1 = document.createElement("td");
                    td1.textContent = h_buff[i].quiz_level;
                    tr.append(td1);
                    
                    var td2 = document.createElement("td");
                    td2.textContent = h_buff[i].quiz_score;
                    tr.append(td2);
                }
                i++;
                scoreTblBody.append(tr);
                //console.log(tr);
            }
            scoreTblHeader.style.display = "";
            scoreTblBody.style.display = "";
        }
        else {
            scoreTblHeader.style.display = "none";
            scoreTblBody.style.display = "none";            
        }
        return 0;
    },

    showNormalModeScores: function () {
        //console.log("NORMAL");
        var buffer = JSON.parse(localStorage.getItem('scoreEntry'));

        var n_buff = [];
        for(var i=0; i<buffer.length; i++) {
            if(buffer[i].quiz_level === "normal") {
                n_buff.push(buffer[i]);
            }
        }
        n_buff.sort(function(a,b){
            return b.quiz_score - a.quiz_score;
        });
        //console.log(n_buff);

        scoreTblBody.innerHTML = "";
        var i = 0;
        if(n_buff.length) {
            while(i<n_buff.length){
                if(!(i%2))  {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class","table-primary");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = n_buff[i].player_name;
                    tr.append(td0);

                    var td1 = document.createElement("td");
                    td1.textContent = n_buff[i].quiz_level;
                    tr.append(td1);

                    var td2 = document.createElement("td");
                    td2.textContent = n_buff[i].quiz_score;
                    tr.append(td2);
                }
                else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("scope","row");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = n_buff[i].player_name;
                    tr.append(td0);
                    
                    var td1 = document.createElement("td");
                    td1.textContent = n_buff[i].quiz_level;
                    tr.append(td1);
                    
                    var td2 = document.createElement("td");
                    td2.textContent = n_buff[i].quiz_score;
                    tr.append(td2);
                }
                i++;
                scoreTblBody.append(tr);
                //console.log(tr);
            }
            scoreTblHeader.style.display = "";
            scoreTblBody.style.display = "";
        }
        else {
            scoreTblHeader.style.display = "none";
            scoreTblBody.style.display = "none";            
        }
        return 0;
    },

    showEasyModeScores: function () {
        //console.log("EASYYYY");
        var buffer = JSON.parse(localStorage.getItem('scoreEntry'));

        var e_buff = [];
        for(var i=0; i<buffer.length; i++) {
            if(buffer[i].quiz_level === "easy") {
                e_buff.push(buffer[i]);
            }
        }
        e_buff.sort(function(a,b){
            return b.quiz_score - a.quiz_score;
        });
        //console.log(e_buff.length);

        scoreTblBody.innerHTML = "";
        var i = 0;
        if(e_buff.length) {
            while(i<e_buff.length){
                if(!(i%2))  {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class","table-primary");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = e_buff[i].player_name;
                    tr.append(td0);

                    var td1 = document.createElement("td");
                    td1.textContent = e_buff[i].quiz_level;
                    tr.append(td1);

                    var td2 = document.createElement("td");
                    td2.textContent = e_buff[i].quiz_score;
                    tr.append(td2);
                }
                else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("scope","row");

                    var th = document.createElement("th");
                    th.setAttribute("scope","row");
                    th.textContent = i + 1;
                    tr.append(th);

                    var td0 = document.createElement("td");
                    td0.textContent = e_buff[i].player_name;
                    tr.append(td0);
                    
                    var td1 = document.createElement("td");
                    td1.textContent = e_buff[i].quiz_level;
                    tr.append(td1);
                    
                    var td2 = document.createElement("td");
                    td2.textContent = e_buff[i].quiz_score;
                    tr.append(td2);
                }
                i++;
                scoreTblBody.append(tr);
                //console.log(tr);
            }
            scoreTblHeader.style.display = "";
            scoreTblBody.style.display = "";
        }
        else {
            scoreTblHeader.style.display = "none";
            scoreTblBody.style.display = "none";            
        }
        return 0;
    },
};

var sb = score;
var m = 0;

function btnFunction(mode) {
    if(localStorage.getItem('scoreEntry')){
        if(mode === 0) {
            scoreBtn.textContent = "Scoreboard - ALL Scores";
            sb.showAllScores();
        }
        else if (mode === 1) {
            scoreBtn.textContent = "Scoreboard - Hard Mode";
            sb.showHardModeScores();
        }
        else if (mode === 2) {
            scoreBtn.textContent = "Scoreboard - Normal Mode";
            sb.showNormalModeScores();
        }
        else if (mode === 3) {
            scoreBtn.textContent = "Scoreboard - Easy Mode";
            sb.showEasyModeScores();
        }
        else {
            console.log("btnFunction : Not Applicable");
        }
    }
    else {
        scoreBtn.textContent = "NO RECORDS AVAILABLE";
        m=-1;
    }
}

function initialState() {
    sb.resetUI();
    btnFunction(0);
    return 0;
}

function clickScoreBtn(event) {
    event.preventDefault();
    if(m>2) {
        m = 0;
    }
    else {
        m++;
    }
    btnFunction(m);
    $(window).scrollTop(0);
}

function clickClearBtn(event) {
    event.preventDefault();
    m=0;
    localStorage.clear();
    sb.resetUI();
}

function clickMockBtn(event) {
    event.preventDefault();
    localStorage.clear();
    var ls = [{"timestamp":1590561597789,"quiz_level":"hard","player_name":"1111111111","quiz_score":15},{"timestamp":1590561623834,"quiz_level":"normal","player_name":"2222222222","quiz_score":35},{"timestamp":1590561654512,"quiz_level":"easy","player_name":"3333333333","quiz_score":65},{"timestamp":1590561690658,"quiz_level":"hard","player_name":"unnooooooo","quiz_score":95},{"timestamp":1590561741364,"quiz_level":"normal","player_name":"doooooooss","quiz_score":125},{"timestamp":1590561772614,"quiz_level":"easy","player_name":"tresssssss","quiz_score":170},{"timestamp":1590561808883,"quiz_level":"easy","player_name":"qowueoquyw","quiz_score":240},{"timestamp":1590561843358,"quiz_level":"hard","player_name":"8970987098","quiz_score":260},{"timestamp":1590561881717,"quiz_level":"easy","player_name":"uyouytouyo","quiz_score":265},{"timestamp":1590561909222,"quiz_level":"hard","player_name":"iuiuytiuyt","quiz_score":285},{"timestamp":1590561953323,"quiz_level":"easy","player_name":"jashdfkhjs","quiz_score":300}];
    localStorage.setItem('scoreEntry', JSON.stringify(ls));
    sb.resetUI();
}

initialState();


