let currentInput = "0"; // Initialize the current input as "0"
let operator = null; // Initialize the operator as null
let prevInput = null;

// Function to handle button clicks
function handleclick(value) {
    if (value === "=") {
        // Handle the "=" button to perform calculations
        if (operator && prevInput) {
            currentInput = calculateResult(parseFloat(prevInput), parseFloat(currentInput), operator);
            operator = null;
            prevInput = null;
        }
    } else if (value === "AC") {
        // Handle the "AC" button to clear the calculator
        currentInput = "0";
        operator = null;
        prevInput = null;
    } else if (["+", "-", "*", "/"].includes(value)) {
        // Handle operators
        if (prevInput && operator) {
            // If an operator and previous input exist, calculate the result
            currentInput = calculateResult(parseFloat(prevInput), parseFloat(currentInput), operator);
            operator = value;
            prevInput = currentInput;
        } else {
            operator = value;
            prevInput = currentInput;
        }
    } else {
        // Handle numeric input
        if (currentInput === "0" || prevInput === "=") {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }

    // Update the display
    document.querySelector(".screen").textContent = currentInput;
}

// Function to calculate the result
function calculateResult(num1, num2, operator) {
    switch (operator) {
        case "+":
            return (num1 + num2).toString();
        case "-":
            return (num1 - num2).toString();
        case "*":
            return (num1 * num2).toString();
        case "/":
            if (num2 === 0) {
                return "Error";
            }
            return (num1 / num2).toString();
        default:
            return "Error";
    }
}