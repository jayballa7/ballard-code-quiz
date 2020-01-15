var questionsEl = document.querySelector("#show-question");
var counter = 75;
var displayTimer = document.querySelector("#display-countdown");
var score = 0;
var resultEl = document.querySelector("#result");
var scoreEl = document.querySelector(".scoreboard");
var highScoreEl = document.querySelector(".highScore");
var scorePage = document.querySelector(".highscorePage");
var submitBtn = document.querySelector("#submit");
var initialInput = document.querySelector("#initials");
var scoreList = document.querySelector("#scoreList");
var scoreForm = document.querySelector("#score-form");
var refresh = document.querySelector("#again");
var userInitials = [];

//scoreboard is hidden
scoreEl.style.display="none";
scorePage.style.display="none";

function countdown(){
    timer = setInterval(function(){
        displayTimer.innerHTML = "Time Remaining: " + counter + " seconds";
        counter--;
        if(counter === 0){
            clearInterval(timer);
            scoreEl.style.display= "block";
            displayTimer.style.display="none";
            questionsEl.style.display = "none";
            highScoreEl.textContent = "Your score is: " + score;
            resultEl.style.display = "none";
        }
    }, 1000);
};

var button = document.getElementById("start-quiz");
button.addEventListener("click", function(){
  countdown(); //start countdown
  document.querySelector(".homepage").style.display="none";  
  button.style.display = "none";  //hide button
  insertContent(questionIndex);
});

var questionIndex = 0;

function insertContent(){
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("h2");
    questionText.textContent = question.title;
    questionDiv.appendChild(questionText);
    
    for (var i=0; i < question.choices.length; i++) {
        var userChoices = document.createElement("button");
        userChoices.textContent = question.choices[i];
        userChoices.setAttribute("class", "btn btn-primary text-left");
        userChoices.style.display = "block";
        userChoices.addEventListener("click", function(e) {
            var choiceClicked = (e.target.innerHTML);
            if(choiceClicked === questions[questionIndex].answer){
                insertContent(questionIndex++);
                score += 10;
                resultEl.innerHTML = "Correct!";
            }
            else{
                insertContent(questionIndex++);
                score -= 10;
                counter -= 10;
                resultEl.innerHTML = "Incorrect!";
            }           
        });
     
        if ((questionIndex + 1) == questions.length) {
            clearInterval(timer);
            scoreEl.style.display="block";
            questionsEl.style.display="none";
            highScoreEl.textContent = "Your score is: " + score;
            resultEl.style.display = "none";
        };
        questionDiv.appendChild(userChoices);
    };
    questionsEl.appendChild(questionDiv);
};

function showScores(){
    scoreList.innerHTML = "";

    for (var x = 0; x < userInitials.length; x ++){
        var letters = userInitials[x];
        
        var li = document.createElement("li");
        li.textContent = letters;
        li.setAttribute("data-index", x);

        var clearBtn = document.createElement("button");
        clearBtn.textContent = "Clear";
        
        li.appendChild(clearBtn);
        scoreList.appendChild(li);
    };
};

function initialize() {
    var storedScores = JSON.parse(localStorage.getItem("userInitials"));
    
    if(storedScores !==null) {
        userInitials = storedScores;
    }
    
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function() {
        event.preventDefault();
        
        var initialText = initialInput.value.trim();
        
        if (initialText === ""){
            return;
        }
        userInitials.push(initialText + " " + score);
        console.log(userInitials);
        initialInput.value = "";
        
        scoreEl.style.display="none";
        scorePage.style.display="block";
        
        store();
        showScores();
        
    });
}

function store(){
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
}

scoreList.addEventListener("click", function(event){
    var element = event.target;
    
    if (element.matches("button")=== true){
        var index = element.parentElement.getAttribute("data-index");
        userInitials.splice(index, 1);
        
        store();
        showScores();
    }
});

refresh.addEventListener("click", function(){
    location.reload();
});

initialize();