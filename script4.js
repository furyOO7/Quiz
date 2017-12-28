// Without using IIFE(Immediately Invoked Function Expression)

// Function Constructor 

var Question = function(question, answers, correct_answer){
	this.question =  question;
	this.answers = answers;
	this.correct_answer = correct_answer;
}

//Displaying random question and answers using prototype
Question.prototype.selectRandomques = function() {
	console.log(this.question);
	for (var i = 0; i < this.answers.length; i++) {
		console.log(i + ': ' + this.answers[i]);
	}
};
 

//function to check correct answer using proto	
Question.prototype.checkCorrectAnswer = function(ans , callback) {
	var score;
	if(ans>=0 && ans<=9){
		if(this.correct_answer === ans){
			console.log("Correct Answer");
			score = callback(true);// calling the keepScore which has stored score func in it
		}
		else{
			console.log("Wrong Answer!! Try again");
			score = callback(false);
		}
	}
	else{
		console.log("You have entered a incorrect option!!");
	}
	this.displayScore(score);
}

// creation object instances of question
var ques_1 = new Question(
	"Is Bruce Wayne BATMAN?",
	['Yes', 'No'],
	0,
	);

var ques_2 = new Question(
	"Will IRON MAN die in infinity war?",
	['Yes', 'No'],
	0,
	);

var ques_3 = new Question(
	"IRON MAN real name?",
	['Tom Hanks', 'Jonny Dep' ,'Robert Downey Jr'],
	2,
	);

//function to keep track of score
function score(){
	var sc = 0;
	return function(correct){
		if(correct){ //if correct then update teh score
			sc++;
		}
		return sc;
	}
}
var keepScore = score(); // store func score in keepScore variable using closure

Question.prototype.displayScore = function(score){
	console.log("-------------------------------")
	console.log("Your score is: " +score);
	console.log("-------------------------------")
}

function displayNextQuestion(){
	//Selection random question from array
	var random_ques = Math.floor((Math.random() * questions.length));
	questions[random_ques].selectRandomques();
	var storingCorrectAnswer = prompt("Please enter the correct answer");
	if(storingCorrectAnswer != "exit"){
		questions[random_ques].checkCorrectAnswer(parseInt(storingCorrectAnswer), keepScore);
		displayNextQuestion();
	}

};

//function storeQuestion()
var questions = [ques_1, ques_2, ques_3];
displayNextQuestion();





