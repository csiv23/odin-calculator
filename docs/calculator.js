const add = function (firstNum, secondNum) {
    return firstNum + secondNum;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };
  
  const sum = function (...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = add(sum, nums[i]);
    }
    return parseInt(sum);
  };
  
  const multiply = function (...nums) {
    let product = 0;
    for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
  
    return parseInt (product);
  };

