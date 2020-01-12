var button = document.getElementById("start-quiz");
button.addEventListener("click", function(){
  counterClock();
  insertContent();
  hideBtn();
});

function hideBtn() {
  document.getElementById('intro').classList.add('hide');
  };

  function insertContent() {
    var quizQuestions = document.getElementById("show-question");
    var quizChoices = document.getElementsByClassName("question");
    for (var i = 0; i < questions.length; i++) {
      quizQuestions.innerHTML += ('<div class = "question">' + questions[i].title + '</div>');
      for (var j = 0; j < questions[i].choices.length; j++) {
        quizChoices[i].innerHTML += '<button>' + questions[i].choices[j] + '</button>';
      };
    };
  };

function counterClock() {
  var clock = document.getElementById("display-countdown");
  var counter = 75;
  var timer = setInterval(countdown, 1000);
  function countdown() {
    if(counter < 0){
    clearInterval(timer);
   } else {	
    clock.innerHTML = "Time: " + counter + " seconds left";
    counter--;
   };
  };
}


/*function insertContent(){
    var fullQuiz = document.getElementById('quizBody');
    for (var i = 0; i < questions.length; i++) {
      //var node = document.createElement("div");
      fullQuiz.innerHTML += ('<div class="question'+(i+1)+'">' + questions[i].title +'</div>');
      for (var j = 0; j < questions[i].choices.length; j++) {
        quizQuestion = document.getElementsByClassName('question' + (i+1));
        console.log(quizQuestion[0]);
        quizQuestion[0].innerHTML += '<button>'+ questions[i].choices[j]+'</button>';
      }
    }
  }

  ​
  function showHideQuiz(event){
    question1 = document.getElementsByClassName(question1);
    if(document.getElementsByClassName(question1)){
      question1.style.display = "block";
    } else {
      //style.display = "none";
    }
    event.preventDefault();
  } */