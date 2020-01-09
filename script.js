var button = document.getElementById("start-quiz");
button.addEventListener("click", function(){
  insertContent();
  hideBtn();
});

function hideBtn() {
  document.getElementById('intro').classList.add('hide');
  };

function insertContent () {
  var node = document.createElement("div");
  for (var i = 0; i < questions.length; i++) {
    var textNode = document.createTextNode(questions[i].title);
    node.appendChild(textNode); 
    document.getElementById("show-question").appendChild(node);
  
  };
};




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
  function showHideQuiz(evt){
    question1 = document.getElementsByClassName(question1);
    if(document.getElementsByClassName(question1)){
      question1.style.display = "block";
    } else {
      //style.display = "none";
    }
    evt.preventDefault();
  }
  ​
  insertContent();*/