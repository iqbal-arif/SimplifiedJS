//  Selecting Grand Parent

const grandParent = document.querySelector('#grand-parent');

grandParent.style.color = 'red';

// Selecting and Modifying Parent One through grandParent selection
const parentOne = grandParent.children[0];
parentOne.style.color = 'green';

// Selecting and Modifying Parente
