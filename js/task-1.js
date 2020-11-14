const selectCategoriesById = document.querySelector('#categories');
// console.log(selectCategoriesById);

const amountOfCategories = selectCategoriesById.children.length;
console.log(`В списке ${amountOfCategories} категории`);

const mainListItem = document.querySelectorAll('.item');
// console.log(itemListRef);

mainListItem.forEach(elem =>
  console.log(
    `Категория: ${elem.firstElementChild.textContent}\nКоличество элементов:${elem.lastElementChild.children.length}`,
  ),
);
