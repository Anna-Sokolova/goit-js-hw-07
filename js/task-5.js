const userInput = document.querySelector('input[type="text"]');
const placeOutput = document.querySelector('#name-output');

userInput.addEventListener('input', event => {
  userInput.value === ''
    ? (placeOutput.textContent = 'Незнакомец')
    : (placeOutput.textContent = event.target.value);
});
