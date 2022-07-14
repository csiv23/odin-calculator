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
var firstNum = null;
var secondNum = null;

var plusPressed, minusPressed, timesPressed, dividePressed;

var chosenOperator;

const add = function (a, b) {
  console.log(`added ${a} and ${b} `);
  return a + b;
};

const subtract = function (a, b) {
  console.log(`subtracted ${b} from ${a}`);
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

function setScreen(num) {
  screen.textContent = `${num}`;
  screenContent = `${num}`;
}

function removeFirstNum() {
  if(screen.textContent == firstNum) {
    resetScreen();
  }
}

function setFirstNum() {
  if (firstNum == null) {
    firstNum = parseInt(screenContent);
    resetScreen();
  }
  else if (secondNum == null) {
    secondNum = parseInt(screenContent);
    firstNum = operate(chosenOperator, firstNum, secondNum);
    secondNum = null;
    resetScreen();
    setScreen(firstNum);
  }
  
  console.log(`the firstNum is ${firstNum}`);
  console.log(`the secondNum is ${secondNum}`);
  console.log("");
  
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
  var result = "";
  if (firstNum == null) {
    screen.textContent = `${result}`;
    screenContent = `${result}`;
  }
  else if(secondNum == null) {
    secondNum = parseInt(screenContent)
    result = operate(chosenOperator, firstNum, secondNum);
  }
  else {
    result = firstNum;
  }
  screen.textContent = `${result}`;
  screenContent = `${result}`;
})

clearbutton.addEventListener("click", function() {
  resetScreen();
  firstNum = null; 
  secondNum = null;
  chosenOperator = null;
}) 

zerobutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "0";
  screenContent += "0";
}) 

  onebutton.addEventListener("click", function() {
    removeFirstNum();
   screen.textContent += "1";
   screenContent += "1";
}) 

twobutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "2";
  screenContent += "2";
}) 

threebutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "3";
  screenContent += "3";
}) 

fourbutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "4";
  screenContent += "4";
}) 

fivebutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "5";
  screenContent += "5";
}) 

sixbutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "6";
  screenContent += "6";
}) 

sevenbutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "7";
  screenContent += "7";
}) 

eightbutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "8";
  screenContent += "8";
}) 

ninebutton.addEventListener("click", function() {
  removeFirstNum();
  screen.textContent += "9";
  screenContent += "9";
}) 







