const inputRangeRef = document.getElementById('font-size-control');
const textChange = document.getElementById('text');

// inputRangeRef.addEventListener('input', event => {
//   textChange.style.fontSize = event.currentTarget.value + 'px';
// });



//============================= второй способ ))))

inputRangeRef.addEventListener('input', () => {
  textChange.style.fontSize = inputRangeRef.value + 'px';
  textChange.style.color = 'purple';
})
