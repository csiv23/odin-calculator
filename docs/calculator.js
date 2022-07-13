const screen = document.getElementById("screen");

const plusbutton = document.getElementById("add");
const minusbutton = document.getElementById("subtract");
const timesbutton = document.getElementById("multiply");
const dividebutton = document.getElementById("divide");


const zerobutton = document.getElementById("zero");
const onebutton = document.getElementById("one");
const twobutton = document.getElementById("two");
const threebutton = document.getElementById("three");
const fourbutton = document.getElementById("four");
const fivebutton = document.getElementById("five");
const sixbutton = document.getElementById("six");
const sevenbutton = document.getElementById("seven");
const eightbutton = document.getElementById("eight");
const ninebutton = document.getElementById("nine");

const equalsbutton = document.getElementById("equals");
const clearbutton = document.getElementById("clear");

var screenContent = "";
var firstNum, secondNum;

var plusPressed, minusPressed, timesPressed, dividePressed;

var chosenOperator;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b)
}

function resetScreen() {
  screen.textContent = "";
  screenContent = "";
}

function setFirstNum() {
  if (secondNum != null) {
    firstNum = operate(chosenOperator, firstNum, secondNum);
    secondNum = parseInt(screenContent);
  }
   else {
    firstNum = parseInt(screenContent);
  }  
  console.log(firstNum);
  console.log(secondNum);
  console.log("");
  resetScreen();
}

plusbutton.addEventListener("click", function(){
  setFirstNum();
  chosenOperator = add;
})

minusbutton.addEventListener("click", function(){
  setFirstNum();
  chosenOperator = subtract;
})

timesbutton.addEventListener("click", function(){
  setFirstNum();
  chosenOperator = multiply;
})

dividebutton.addEventListener("click", function(){
  setFirstNum();
  chosenOperator = divide;
})

equalsbutton.addEventListener("click", function(){
  var result;
  secondNum = parseInt(screenContent);
  result = operate(chosenOperator, firstNum, secondNum);
  screen.textContent = `${result}`;
  screenContent = `${result}`;
})

clearbutton.addEventListener("click", function() {
  resetScreen();
  firstNum, secondNum = null;
  chosenOperator = null;
}) 

zerobutton.addEventListener("click", function() {
  screen.textContent += "0";
  screenContent += "0";
}) 

  onebutton.addEventListener("click", function() {
   screen.textContent += "1";
   screenContent += "1";
}) 

twobutton.addEventListener("click", function() {
  screen.textContent += "2";
  screenContent += "2";
}) 

threebutton.addEventListener("click", function() {
  screen.textContent += "3";
  screenContent += "3";
}) 

fourbutton.addEventListener("click", function() {
  screen.textContent += "4";
  screenContent += "4";
}) 

fivebutton.addEventListener("click", function() {
  screen.textContent += "5";
  screenContent += "5";
}) 

sixbutton.addEventListener("click", function() {
  screen.textContent += "6";
  screenContent += "6";
}) 

sevenbutton.addEventListener("click", function() {
  screen.textContent += "7";
  screenContent += "7";
}) 

eightbutton.addEventListener("click", function() {
  screen.textContent += "8";
  screenContent += "8";
}) 

ninebutton.addEventListener("click", function() {
  screen.textContent += "9";
  screenContent += "9";
}) 







