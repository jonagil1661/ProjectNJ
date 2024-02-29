function myfunction(){
	document.getElementById("demo").innerHTML = "🤩Supercalifragilisticexpialidocious!!!🤩";
}

function popup(){
	alert("😭😭HELP!!😭😭");
}

function pix(){
	document.getElementById("picture").src = "images/button.png";
}





function addValues(){
	//Create a variable to Return the value of the input from input box id = firstNumber
	var num1 = document.getElementById("firstNumber").value;
	//Create a variable to Return the value of the input from input box id = secondNumber
	var num2 = document.getElementById("secondNumber").value;
	//create an equation that adds the two inputs together
	var sum = parseInt(num1) + parseInt(num2) ;
	//outputs the variable,sum, into the value of input box id = resultNumber
	document.getElementById("resultNumber").value = sum + " 😎";
}

function minusValues(){
	//Create a variable to Return the value of the input from input box id = firstNum
	var num1 = document.getElementById("firstNum").value;
	//Create a variable to Return the value of the input from input box id = secondNum
	var num2 = document.getElementById("secondNum").value;
	//create an equation that subtracts the inputs
	var sum = parseInt(num1) - parseInt(num2);
	//outputs the variable,sum, into the value of input box id = resultNum
	document.getElementById("resultNum").value = sum + " 🥳";
}
