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
var prevOperator = null;

var isEqualsPressed = false;

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
    alert("error: diving by zero");
    invalidCalculation = true
  }
  else {
    return parseFloat((a / b).toFixed(3));
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

  if (screen.textContent.length + 1 > 15) {
    alert("overload!")
  }
  else {
    screen.textContent += `${num}`;
    screenContent += `${num}`;
  }
}

function initNums() {
  if (firstNum == null) {
    if (screenContent != "") {
      firstNum = parseFloat(screenContent);
      resetScreen();
    }
  }
  else if (secondNum == null) {
    if (isEqualsPressed == false) {
      secondNum = parseFloat(screenContent);
      firstNum = operate(chosenOperator, firstNum, secondNum);
      resetScreen();
      setScreen(firstNum);
    }
  }
  console.log(firstNum);
  console.log(secondNum);

}

function pointPressed() {
  if (!screen.textContent.includes(".")) {
    screen.textContent += ".";
    screenContent += ".";
  }
}

function clearPressed() {
  resetScreen();
  firstNum = null;
  secondNum = null;
  chosenOperator = null;
  prevOperator = null;
}

function equalsPressed() {
  var result = "";
  isEqualsPressed = true;
  if (firstNum == null) {
    screen.textContent = `${result}`;
    screenContent = `${result}`;
  }
  else {
    if (secondNum == null || (screenContent != firstNum || chosenOperator.name != prevOperator.name)) {
      secondNum = parseFloat(screenContent)
    }
    result = operate(chosenOperator, firstNum, secondNum);
    firstNum = result;
    prevOperator = chosenOperator;
  }

  screen.textContent = `${result}`;
  screenContent = `${result}`;
  isEqualsPressed = false;
}

function operationPressed(operator) {
  initNums();
  if (prevOperator == null) {
    prevOperator = operator;
  } else {
    prevOperator = chosenOperator;
  }
  chosenOperator = operator;
}

document.addEventListener("keydown", function (event) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let operations = ["+", "-", "/", "x"]

  const key = event.key; // const {key} = event; ES6+
  console.log(key);


  switch (key) {
    case "Backspace":
    case "Delete":
      screen.textContent = screen.textContent.slice(0, -1);
      screenContent = screenContent.slice(0, -1);
      break;
    case ".":
      pointPressed();
      break;
    case "c":
    case "C":
      clearPressed();
      break;
    case "Enter":
    case "=":
      equalsPressed();
      break;

  }

  if (digits.includes(key)) {
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

});
equalsbutton.addEventListener("click", equalsPressed);

clearbutton.addEventListener("click", clearPressed);

pointbutton.addEventListener("click", pointPressed);

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







