var questions = [
    {
        question: "Css stand for_____" ,
        options: ["css", "Cascade styling sheet", "CSS"],
        correctAnswer: "Cascade styling sheet" 
    },
    {
        question: "Js stand for_____" ,
        options: ["css", "JavaScript", "Js"],
        correctAnswer: "JavaScript" 
    },
    {
        question: "Html stand for_____" ,
        options: ["css", "HTML", "jS"],
        correctAnswer: "HTML"
    },
    {
        question: "Html stand for_____" ,
        options: ["css" , "Hyper Text Markup Language", "jS"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Dom stand for_____",
        options: ["css", "HTML", "Document Object Model"],
        correctAnswer: "Document Object Model"
    }
];



var sawal = document.getElementById("question")
var currentQuestion = document.getElementById("currentQuestion")
var totalQuestions = document.getElementById("totalQuestions")
var answerParent = document.getElementById("answerParent")
var indexNumber = 0;
var Score = 0;

function startQuiz() {
    sawal.innerHTML = questions[indexNumber].question;
    answerParent.innerHTML = " ";
    for (var i = 0; i < questions[indexNumber].options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-6 py-2">
        <button onclick="checkQuestion(this,'${questions[indexNumber].correctAnswer}')" class="btn w-100 btn-info">${questions[indexNumber].options[i]}</button>
        </div>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1;
}


function checkQuestion(elem , correctOption) {
    var userOption = elem.innerHTML;
    var correctOption = questions[indexNumber].correctAnswer;
    if (userOption == correctOption) {
        Score = Score + 1;
    }
    console.log(Score);
   var allOptionBtns = answerParent.getElementsByTagName("button");
   for(var i = 0; i < allOptionBtns.length; i++){
    allOptionBtns[i].disabled = true;
    if(allOptionBtns[i].innerHTML == correctOption){
        allOptionBtns[i].classList.add( "bg-success");
    }else{
        allOptionBtns[i].classList.add( "bg-danger");
    }
   }
};

startQuiz();
function nextQuestion() {
    if (indexNumber + 1 == questions.length) {
        alert("quiz completed !" + " and your score is " + Score);
    } else {
        indexNumber = indexNumber + 1;
        startQuiz();
    }
};
