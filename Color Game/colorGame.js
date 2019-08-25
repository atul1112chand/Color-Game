var numSquares = 6;
var color = [];
var pickedColor;
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn	= document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
messageDisplay.classList.add("displayMessage");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares=6;
		reset(); 
});	
}
}
	
function setupSquares(){
	for(var i = 0;i<squares.length;i++){
	squares[i].addEventListener("click",function(){
	var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!!";
		}
	});
}
}
function reset(){
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = color[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}
resetButton.addEventListener("click",function(){
	reset();
});


function changeColors(color){
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}
function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr[i] = randomColor();
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b+")";
}