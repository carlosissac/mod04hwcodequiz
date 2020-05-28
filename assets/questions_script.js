let questionContainer = [
    //q00
    {
        "question_content" : "Why so JavaScript and Java have similar name?",
        "question_score" : 5,
        "question_penalty" : 20,
        "answer_content" : ["JavaScript is a stripped-down version of Java","JavaScript's syntax is loosely based on Java's","They both originated on the island of Java","None of the above"],
        "answer_correct" : 1    
    },
    //q01
    {
        "question_content" : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        "question_score" : 10,
        "question_penalty" : 30,
        "answer_content" : ["The User's machine running a Web browser","The Web server","A central machine deep within Netscape's corporate offices","None of the above"],
        "answer_correct" : 0    
    },
    //q02
    {
        "question_content" : "__________ JavaScript is also called server-side JavaScript.",
        "question_score" : 15,
        "question_penalty" : 40,
        "answer_content" : ["Microsoft","Navigator","LiveWire","Native"],
        "answer_correct" : 2
    },
    //q03
    {
        "question_content" : "______ JavaScript is also called client-side JavaScript.",
        "question_score" : 5,
        "question_penalty" : 10,
        "answer_content" : ["Microsoft","Navigator","LiveWire","Native"],
        "answer_correct" : 1    
    },
    //q04
    {
        "question_content" : "What are variables used for in JavaScript Programs?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks","None of the above"],
        "answer_correct" : 0    
    },
    //q05
    {
        "question_content" : " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["Client-side","Server-side","Local","Native"],
        "answer_correct" : 0    
    },
    //q06
    {
        "question_content" : "Which of the following can't be done with client-side JavaScript?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["Validating a form","Sending a form's contents by email","Storing the form's contents to a database file on the server","None of the above"],
        "answer_correct" : 2    
    },
    //q07
    {
        "question_content" : "Which of the following are capabilities of functions in JavaScript?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Return a value","Accept parameters and Return a value","Accept parameters","None of the above"],
        "answer_correct" : 2    
    },
    //q08
    {
        "question_content" : "Which of the following is not a valid JavaScript variable name?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["2names","_first_and_last_names","FirstAndLast","None of the above"],
        "answer_correct" : 0    
    },
    //q09
    {
        "question_content" : " ______ tag is an extension to HTML that can enclose any number of JavaScript",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["<SCRIPT>","<BODY>","<HEAD>","<TITLE>"],
        "answer_correct" : 0    
    },
    //q10
    {
        "question_content" : "How does JavaScript store dates in a date object?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["The number of milliseconds since January 1st, 1970","The number of days since January 1st, 1900","The number of seconds since Netscape's public stock offering.","None of the above"],
        "answer_correct" : 0    
    },
    //q11
    {
        "question_content" : "Which of the following attribute can hold the JavaScript version?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["The number of milliseconds since January 1st, 1970","The number of days since January 1st, 1900","The number of seconds since Netscape's public stock offering.","None of the above"],
        "answer_correct" : 0    
    },
    //q12
    {
        "question_content" : "Which of the following attribute can hold the JavaScript version?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["LANGUAGE","SCRIPT","VERSION","None of the above"],
        "answer_correct" : 2    
    },
    //q13
    {
        "question_content" : "What is the correct JavaScript syntax to write \"Hello World\"?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["System.out.println(\"Hello World\")","println (\"Hello World\")","document.write(\"Hello World\")","response.write(\"Hello World\")"],
        "answer_correct" : 2    
    },
    //q14
    {    
        "question_content" : "Inside which HTML element do we put the JavaScript?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["<js>","<scripting>","<script>","<javascript>"],
        "answer_correct" : 2    
    },
    //q15
    {
        "question_content" : "What is the correct syntax for referring to an external script called \"abc.js\"?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["<script href=\"abc.js\">","<script name=\"abc.js\">","<script src=\"abc.js\">","None of the above"],
        "answer_correct" : 2    
    },
    //q16
    {
        "question_content" : "Which types of image maps can be used with JavaScript?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Server-side image maps","Client-side image maps","Server-side image maps and Client-side image maps","None of the above"],
        "answer_correct" : 2    
    },
    //q17
    {
        "question_content" : "Which of the following navigator object properties is the same in both   Netscape and IE?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["navigator.appCodeName","navigator.appName","navigator.appVersion","None of the above"],
        "answer_correct" : 0    
    },
    //q18
    {
        "question_content" : "Which is the correct way to write a JavaScript array?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["var txt = new Array(1:\"tim\",2:\"kim\",3:\"jim\")","var txt = new Array:1=(\"tim\")2=(\"kim\")3=(\"jim\")","var txt = new Array(\"tim\",\"kim\",\"jim\")","var txt = new Array=\"tim\",\"kim\",\"jim\""],
        "answer_correct" : 1    
    },
    //q19
    {
        "question_content" : "What does the <noscript> tag do?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Enclose text to be displayed by non-JavaScript browsers.","Prevents scripts on the page from executing.","Describes certain low-budget movies.","None of the above"],
        "answer_correct" : 0    
    },
    //q20
    {
        "question_content" : "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["\"New Text\"?","para1.value=\"New Text\"","para1.firstChild.nodeValue=\"New Text\";","para1.nodeValue=\"New Text\";"],
        "answer_correct" : 1    
    },
    //q21
    {
        "question_content" : "JavaScript entities start with _______ and end with _________.",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["Semicolon, colon","Semicolon, Ampersand","Ampersand, colon","Ampersand, semicolon"],
        "answer_correct" : 3    
    },
    //q22
    {    
        "question_content" : "Which of the following best describes JavaScript?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["a low-level programming language.","a scripting language precompiled in the browser.","a compiled scripting language.","an object-oriented scripting language."],
        "answer_correct" : 3    
    },
    //q23
    {
        "question_content" : "Choose the server-side JavaScript object?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["FileUpLoad","Function","File","Date"],
        "answer_correct" : 2    
    },
    //q24
    {
        "question_content" : "Choose the client-side JavaScript object?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["Database","Cursor","Client","FileUpLoad"],
        "answer_correct" : 3    
    },
    //q25
    {
        "question_content" : "Choose the server-side JavaScript object?",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["FileUpLoad","Function","File","Date"],
        "answer_correct" : 2    
    },
    //q26
    {
        "question_content" : "Which of the following is not considered a JavaScript operator?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["new","this","delete","typeof"],
        "answer_correct" : 1    
    },
    //q27
    {
        "question_content" : " ______method evaluates a string of JavaScript code in the context of the specified",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["Eval","ParseInt","ParseFloat","Efloat"],
        "answer_correct" : 0    
    },
    //q28
    {
        "question_content" : "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["onfocus","onblur","onclick","ondblclick"],
        "answer_correct" : 1    
    },
    //q29
    {
        "question_content" : "The syntax of Eval is ________________",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["[objectName.]eval(numeriC.","[objectName.]eval(string)","[EvalName.]eval(string)","[EvalName.]eval(numeriC."],
        "answer_correct" : 1   
    },
    //q30
    {
        "question_content" : "JavaScript is interpreted by _________",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["Client","Server","Object","None of the above"],
        "answer_correct" : 0
    },
    //q31
    {
        "question_content" : "Using _______ statement is how you test for a specific condition",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Select","If","Switch","For"],
        "answer_correct" : 1   
    },
    //q32
    {   
        "question_content" : "Which of the following is the structure of an if statement?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["if (conditional expression is true) thenexecute this codeend if","if (conditional expression is true)execute this codeend if","if (conditional expression is true)   {then execute this code>->}","if (conditional expression is true) then {execute this code}"],
        "answer_correct" : 2  
    },
    //q33
    {
        "question_content" : " How to create a Date object in JavaScript?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["dateObjectName = new Date([parameters])","dateObjectName.new Date([parameters])","dateObjectName := new Date([parameters])","dateObjectName Date([parameters])"],
        "answer_correct" : 0    
    },
    //q34
    {
        "question_content" : "The _______ method of an Array object adds and/or removes elements from an array",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Reverse","Shift","Slice","Splice"],
        "answer_correct" : 3    
    },
    //q35
    {
        "question_content" : "Which tag(s) can handle mouse events in Netscape?",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["<IMG>","<A>","<BR>","None of the above"],
        "answer_correct" : 1    
    },
    //q36
    {
        "question_content" : "To set up the window to capture all Click events, we use which of the following statement?",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["window.captureEvents(Event.CLICK)","window.handleEvents (Event.CLICK);","window.routeEvents(Event.CLICK );","window.raiseEvents(Event.CLICK );"],
        "answer_correct" : 0    
    },
    //q37
    {
        "question_content" : "____________ is the tainted property of a window object.",
        "question_score" : 10,
        "question_penalty" : 20,
        "answer_content" : ["Pathname","Protocol","Defaultstatus","Host"],
        "answer_correct" : 2  
    },
    //q38
    {
        "question_content" : "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language",
        "question_score" : 15,
        "question_penalty" : 30,
        "answer_content" : ["a wrapper","a link","a cursor","a form"],
        "answer_correct" : 0
    },
    //q39
    {
        "question_content" : "To enable data tainting, the end user sets the _________ environment variable",
        "question_score" : 5,
        "question_penalty" : 40,
        "answer_content" : ["ENABLE_TAINT","MS_ENABLE_TAINT","NS_ENABLE_TAINT","ENABLE_TAINT_NS"],
        "answer_correct" : 2    
    }
];


var questionHandler = {
    
    "qc" : questionContainer,
    "buffer" : [],
    "obj" : "",

    questionBuffer: function() {
        let i=0;
        while(i<10) {
            this.buffer[i] = this.qc[Math.floor(Math.random()*40)];
            i++;
        }
        //console.log(this.buffer);
        return 0;
    },
    popQuestionBuffer() {
        if(this.buffer.length) {
            this.obj = this.buffer.pop();
            return 0;
        }
        else {
            return 1;
        }    
    },
    getQuestionBufferLenght() {
        return this.buffer.length;
    },
    getQuestionContent: function() {
        return this.obj.question_content;
    },
    getQuestionPenalty: function() {
        return this.obj.question_penalty;
    },
    getQuestionScore: function() {
        return this.obj.question_score;
    },
    getAnswerContent0: function() {
        return this.obj.answer_content[0];
    },
    getAnswerContent1: function() {
        return this.obj.answer_content[1];
    },
    getAnswerContent2: function() {
        return this.obj.answer_content[2];
    },
    getAnswerContent3: function() {
        return this.obj.answer_content[3];
    },
    getAnswerCorrect: function() {
        return this.obj.answer_correct;
    }
};

var qhand = questionHandler;


