const listCategoriesById = document.querySelector('#categories');
// console.log(listCategoriesById);

const mainListItem = document.querySelectorAll('.item');
console.log(mainListItem);

const amountOfCategories = `В списке ${mainListItem.length} категории`;
console.log(amountOfCategories);

mainListItem.forEach(elem =>
  console.log(
    `Категория: ${elem.firstElementChild.textContent}\nКоличество элементов: ${elem.lastElementChild.children.length}`,
  ),
);
