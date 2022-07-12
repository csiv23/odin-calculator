const plusbutton = document.getElementById("add");;
const onebutton = document.getElementById("one");


const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
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

onebutton.addEventListener("click", function() {
   document.getElementById("screen").textContent = "1";
})



