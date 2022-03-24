var boardSize = 8;
var numShips = 2;
var shipLength = 1;
var shipsSunk = 0;
var ships =  [
		{ locations: [""], hits: [""]},
		{ locations: [""], hits: [""]}
	];
var guesses = 0;
var total_guesses = 20;

window.onload = init;

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;


	generateShipLocations();
}


function generateShipLocations(){
	var locations;
	for (var i = 0; i < numShips; i++) 
	{
     locations = generateShip();
     ships[i].locations = locations;
	}
	console.log(this.ships);

}


function generateShip(){
	var row, col;
	col = createRandom(boardSize);
	row = createRandom(boardSize);
	var newShipLocations = [];
	for (var i = 0; i < shipLength; i++) 
	{
		newShipLocations.push(row + "" + col);
	}
	return newShipLocations;
}	


function createRandom(num) {
  var rand = Math.floor(Math.random() * num);
  return rand;
}


function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}


function handleFireButton () {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	processGuess(guess);
	guessInput.value = "";
}


function processGuess(guess){
	if(guesses < total_guesses)
	{
		if (shipsSunk === numShips) 
		{
						displayMessage("You Hit all the boats, in " + guesses + " guesses.",0);
		}
		else
		{
			var location = parseGuess(guess);
			if (location) {
				guesses++;
				var hit = fire(location);
				if (hit && shipsSunk === numShips) {
					displayMessage("You Hit all the boats, in " + guesses + " guesses.",0);
				}
			}
		}
		
	}
	else
	{
		displayMessage("You completed " + this.guesses + " guesses.",0);
	}
}


function fire(guess)
{
	for (var i = 0; i < this.numShips; i++) 
	{
		var ship = ships[i];
		var index = ship.locations.indexOf(guess);
		if (ship.hits[index] === "hit") 
		{
			displayMessage("Oops, you already hit that location!",0);
			return true;
		} 
		else if (index >= 0) 
		{

			ship.hits[index] = "hit";
			displayHit(guess);
			displayMessage("HIT!",0);
			if (this.isSunk(ship)) 
			{
				displayMessage("You Hit the boat!",0);
				shipsSunk++;
			}
			return true;
		}
	}
	find_distance(ships,guess);
	displayMiss(guess);
	return false;
}


function displayMessage(msg,hit_or_miss) {
	var messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
	if(hit_or_miss==0)
	{
		messageArea.classList.add('hitmessage');
	}
	else if(hit_or_miss==1)
	{
		messageArea.classList.add('missmessage');
	}
	
}


function displayHit(location) {
	var cell = document.getElementById(location);
	cell.setAttribute("class", "hit");
}


function displayMiss(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
}


function parseGuess(guess) {

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter any two numbers on the board.");
	} 
	else 
	{
		var row = guess.charAt(0);
		var column = guess.charAt(1);

		if (row < 0 || row >= boardSize ||
		           column < 0 || column >= boardSize) 
		{
			alert("Oops, that's off the board!");
		} 
		else 
		{
			return row + column;
		}
	}
	return null;
}


function isSunk(ship) {
	for (var i = 0; i < shipLength; i++)  {
		if (ship.hits[i] !== "hit") {
			return false;
		}
	}
	return true;
}


function find_distance(ships,guess)
{
	var res =0;
	var result;
	var location;
	for (var i = 0; i < numShips; i++)  {
			for (var j=0; j<shipLength; j++)
			{
				location=ships[i].locations[j];
				var x1 = location.charAt(0);
				var y1 = location.charAt(1);

				var x2 = guess.charAt(0);
				var y2 = guess.charAt(1);


				result=Math.abs(x1-x2) + Math.abs(y1-y2);

				if(res==0 || res>result)
					res=result;
			}
	}
	if(res==1 || res==2)
	displayMessage("You Missed the boat! - hotter!",1);
  else if(res==3 || res==4)
  displayMessage("You Missed the boat! - warmer!",1);
  else
  displayMessage("You Missed the boat! - colder",1);
}

	





