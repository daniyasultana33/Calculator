let currentInput = ""; 
let result = null;
function handleclick(value) {
  if (value === "AC") {
    // Clear the input and result
    currentInput = "";
    result = null;
  } else if (value === "=") {
    try {
      // Evaluate the expression and store the result
      result = eval(currentInput);
    } catch (error) {
         // Handle any errors that occur during evaluation
      result = "Error";
    }
    currentInput = result.toString(); 
  } else {
    currentInput += value;
  }

  // Update the screen with the current input or result
  updateScreen(currentInput);
}

// Function to update the screen with the current input or result
function updateScreen(value) {
  const screen = document.querySelector(".screen");
  screen.textContent = value;
}
