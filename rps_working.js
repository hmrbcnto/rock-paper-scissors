///Variable names are wonky, please excuse them.


//function to decide computer's choice
function computerChoice(){
		//Picks a random value between 0 to 2 and chooses returns the corresponding value from the choice array
		return cChoice[Math.floor(Math.random()*cChoice.length)]
	}


//function to play a round of rock, paper, scissors
function playRound(cChoicee, pChoicee){
	//converts all input to lowercase
	ccChoice = cChoicee.toLowerCase();
	pChoice = pChoicee.toLowerCase();


	//decides who wins
	if (ccChoice === pChoice){
		return 5;
	}
	else if (ccChoice === 'paper' && pChoice === 'rock'){
		return 0;
	}
	else if (ccChoice === 'rock' && pChoice === 'scissors'){
		return 0;
	}
	else if (ccChoice ==='scissors' && pChoice ==='paper'){
		return 0;
	}
	else if (ccChoice === 'paper' && pChoice === 'scissors'){
		return 1;
	}
	else if (ccChoice === 'rock' && pChoice === 'paper'){
		return 1;
	}
	else if (ccChoice ==='scissors' && pChoice ==='rock'){
		return 1;
	}

}

//function adds score to computer
const addCompScore = (score) => {
	//selects html element with id of cScore
	const comScore = document.querySelector("#cScore");

	//changes element's value to value passed into function
	comScore.innerHTML = score
	
}

const addPlayScore = (score) => {
	//select html element with id of pScore
	const plyScore = document.querySelector("#pScore");

	//changes element's value to value passed into function
	plyScore.innerHTML = score
}

const deactivateButtons = () => {
	const buttons = document.querySelectorAll(".choiceButton");

	buttons.forEach((button) => {
		button.disabled = true;
	})
}

//array from which computerChoice takes its corresponding result
const cChoice = ['Rock','Paper','Scissors'];

//selects all button elements in html
const btn = document.querySelectorAll("button")


//score trackers
let compScore = 0;
let playScore = 0;



//iterates through each entry in btn query list and performs given function
//in this case it adds an event listener to each button
btn.forEach((button) => {

	//performs listed function when event 'click' happens
	button.addEventListener('click', () => {

		//takes id of button pressed and inputs it as player choice
		ppChoice = button.id;

		//takes random computer choice using computerChoice function
		ccChoice = computerChoice();

		//runs playRound function and saves result as res
		let res = playRound(ccChoice, ppChoice);

		//translates results of res into human readable info
		switch(res){

			//displays computer wins the round then adds to computer's score
			case 0:
				console.log("Computer wins!");
				compScore += 1;
				addCompScore(compScore);
				break;

			//displays player wins the round then adds to computer's score
			case 1:
				console.log("Player wins!");
				playScore += 1
				addPlayScore(playScore);
				break;

			//displays draw
			default:
				console.log("It's a draw!");
		}


		//once someone reaches a score of 5, declares winner and disables buttons
		if(compScore === 5){
			const winner = document.querySelector("#winner");
			winner.innerHTML = "Computer wins the game!"
			deactivateButtons()
		}
		else if (playScore === 5){
			const winner = document.querySelector("#winner");
			winner.innerHTML = "Player wins the game!"
			deactivateButtons()
		}



	})
})


	
