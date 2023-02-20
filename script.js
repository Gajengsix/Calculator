// Get the display input element
const display = document.querySelector('input[name="display"]');

// Add event listener to all calculator buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the button value
    const buttonValue = button.value;

    // Handle button clicks based on value
    switch (buttonValue) {
      case 'AC':
        // Clear the display
        display.value = '';
        break;
      case 'DE':
        // Remove the last character from the display
        display.value = display.value.slice(0, -1);
        break;
      case '=':
        // Evaluate the expression in the display
        display.value = eval(display.value);
        break;
      default:
        // Append the button value to the display
        display.value += buttonValue;
        break;
    }
  });
});
