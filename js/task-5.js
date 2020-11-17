const userInputRef = document.querySelector('input[type="text"]');
const placeOutputRef = document.querySelector('#name-output');

userInputRef.addEventListener('input', event => {
  userInputRef.value.trim() === ''
    ? (placeOutputRef.textContent = 'Незнакомец')
    : (placeOutputRef.textContent = event.target.value.trim());
});
