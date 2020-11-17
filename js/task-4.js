const decrBtnRef = document.querySelector('button[data-action="decrement"]');
// console.log(decrBtnRef);
const incrBtnRef = document.querySelector('button[data-action="increment"]');
// console.log(incrBtnRef);
const valueRef = document.querySelector('#value');
// console.log(valueRef);
let counterValue = 0;

const incrementFn = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrementFn = () => {
  counterValue > 0 ? (counterValue -= 1) : (counterValue = 0);
  valueRef.textContent = counterValue;
};

decrBtnRef.addEventListener('click', decrementFn);
incrBtnRef.addEventListener('click', incrementFn);
