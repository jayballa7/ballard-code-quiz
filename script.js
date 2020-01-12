var questionsEl = document.getElementById("show-question");
var counter = 50;
        
function start() {
            //Start clock
           var timer = setInterval("countdown()", 1000);
}
function countdown(){
            if(counter > 0){
                counter--;
                document.getElementById('display-countdown').innerHTML = "Time Remaining: " + counter + " seconds";
            }
            else {
                //Stop clock
                clearInterval(timer);
            }
  };



/*function counterClock() {
  var timer = setInterval(function(){
    counter--;
    countdown.textContent = "Time Remaining: " + counter + " seconds";
    if(counter === 0){
        clearInterval(timer);
        //document.querySelector('.Score').style.display='block';
        //document.querySelector(".Time").style.display='none';
        //document.querySelector('.questions-rendered').style.display='none';
        //highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
    }
}, 1000);
  }; */

var button = document.getElementById("start-quiz");
button.addEventListener("click", function(){
  start();
  button.style.display = "none";
  document.getElementById("intro").style.display = "none";
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
                alert("Correct!");
                insertContent(questionIndex++);
            }
            else{
                alert("Wrong!");
                insertContent(questionIndex++);
                counter -= 10;
            }
            
        });
        if (questionIndex == questions.length) {
            clearInterval(timer);
            //document.querySelector('.Score').style.display='block';
            //document.querySelector(".Time").style.display='none';
            //highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
            //return;
        };
        questionDiv.appendChild(userChoices);
    };
    questionsEl.appendChild(questionDiv);
};