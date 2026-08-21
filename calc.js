function calculator(a, b, callback) {
  return callback(a, b);
  } 
function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    function multiply(a, b) {
      return a * b;
    }

    function divide(a, b) {
      if (b === 0) return "Error: Division by zero!";
      return a / b;
    }

    console.log("Add:", calculator(10, 5, add));         
    console.log("Subtract:", calculator(10, 5, subtract)); 
    console.log("Multiply:", calculator(10, 5, multiply)); 
    console.log("Divide:", calculator(10, 5, divide));     