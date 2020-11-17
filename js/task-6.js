const userInputRef = document.getElementById('validation-input');
const validUserInput = Number(userInputRef.dataset.length);

userInputRef.addEventListener('blur', () => {
  if (userInputRef.value.length === validUserInput) {
    userInputRef.classList.add('valid');
    userInputRef.classList.remove('invalid');
  } else {
    userInputRef.classList.toggle('invalid');
  }
});
