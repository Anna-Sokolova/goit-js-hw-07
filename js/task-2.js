const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsById = document.getElementById('ingredients');

const createItemIngredient = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;

  return itemRef;
};

const ingredientCard = ingredients.map(ingredient =>
  createItemIngredient(ingredient),
);

listIngredientsById.append(...ingredientCard);

console.log(listIngredientsById);
