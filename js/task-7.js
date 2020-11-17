const inputRef = document.getElementById('font-size-control');
const textChange = document.getElementById('text');

inputRef.addEventListener('input', event => {
  textChange.style.fontSize = event.currentTarget.value + 'px';
});
