//1.  Select All elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// 2. Submit a form Add a new Element on list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log(input.value);

  // 1. Create a new Item
  const item = document.createElement('div');
  item.innerText = input.value;
  item.classList.add('list-item');
  console.log(item);
  // 2. Add that Item to the list
  list.appendChild(item);
  // 3. Clear Input
  input.value = '';
  // 4. Setup event listener to delete Item when clicked
  item.addEventListener('click', () => {
    // Method I to remove an Item
    // list.removeChild(item);
    // Method II to remove an Item
    item.remove();
  });
});
//
