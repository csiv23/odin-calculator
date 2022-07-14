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

const pointbutton = document.getElementById("point");
const equalsbutton = document.getElementById("equals");
const clearbutton = document.getElementById("clear");


var screenContent = "";
var firstNum = null;
var secondNum = null;

var invalidCalculation;

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
  if (b == 0) {
    alert("Diving by zero will cause an error!");
    invalidCalculation = true
  }
  else {
    return (a / b).toFixed(3);
  }
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

function numPressed(num) {
  if (screen.textContent == firstNum) {
    resetScreen();
  }
  screen.textContent += `${num}`;
  screenContent += `${num}`;
}

function initNums() {
  if (firstNum == null) {
    if (screenContent != "") {
      firstNum = parseFloat(screenContent);
      resetScreen();
    }
  }
  else if (secondNum == null) {
    secondNum = parseFloat(screenContent);
    firstNum = operate(chosenOperator, firstNum, secondNum);
    secondNum = null;
    resetScreen();
    setScreen(firstNum);
  }
}

function pointPressed() {
  if (!screen.textContent.includes(".")) {
    screen.textContent += ".";
    screenContent += ".";
  }
}

function operationPressed(operator) {
  initNums();
  chosenOperator = operator;
}

document.addEventListener("keydown", function (event) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let operations = ["+", "-", "/", "x"]

  const key = event.key; // const {key} = event; ES6+
  console.log(key);
  if (key == ".") {
    pointPressed();
  }

  if(digits.includes(key)) {
    numPressed(key);
  }

  if (operations.includes(key)) {
    var operator;
    if (key == "+") operator = add;
    else if (key == "-") operator = subtract;
    else if (key == "*" || key == "x") operator = multiply;
    else if (key == "/") operator = divide;
    operationPressed(operator);
  }
  
  if (key === "Backspace" || key === "Delete") {
    screen.textContent = screen.textContent.slice(0, -1);
    screenContent = screenContent.slice(0, -1);
  }
});

plusbutton.addEventListener("click", function () {
  operationPressed(add);
})

minusbutton.addEventListener("click", function () {
  operationPressed(subtract);
})

timesbutton.addEventListener("click", function () {
  operationPressed(multiply);
})

dividebutton.addEventListener("click", function () {
  operationPressed(divide);
})

equalsbutton.addEventListener("click", function () {
  var result = "";

  if (firstNum == null) {
    screen.textContent = `${result}`;
    screenContent = `${result}`;
  }
  else if (secondNum == null) {
    secondNum = parseFloat(screenContent)
    result = operate(chosenOperator, firstNum, secondNum);
  }
  else {
    result = firstNum;
  }
  screen.textContent = `${result}`;
  screenContent = `${result}`;
})

clearbutton.addEventListener("click", function () {
  resetScreen();
  firstNum = null;
  secondNum = null;
  chosenOperator = null;
})

pointbutton.addEventListener("click", function () {
pointPressed();
})

zerobutton.addEventListener("click", function () {
  numPressed(0);
})

onebutton.addEventListener("click", function () {
  numPressed(1);
})

twobutton.addEventListener("click", function () {
  numPressed(2);
})

threebutton.addEventListener("click", function () {
  numPressed(3);
})

fourbutton.addEventListener("click", function () {
  numPressed(4);
})

fivebutton.addEventListener("click", function () {
  numPressed(5);
})

sixbutton.addEventListener("click", function () {
  numPressed(6);
})

sevenbutton.addEventListener("click", function () {
  numPressed(7);
})

eightbutton.addEventListener("click", function () {
  numPressed(8);
})

ninebutton.addEventListener("click", function () {
  numPressed(9);
})







