//  Selecting Grand Parent

const grandParent = document.querySelector('#grand-parent');

grandParent.style.color = 'red';

// Selecting and Modifying Parent One through grandParent selection
const parentOne = grandParent.children[0];
parentOne.style.color = 'green';

// Selecting and Modifying Parent Two through Parent One
parentTwo = parentOne.nextElementSibling;
parentTwo.style.color = 'orange';

// Selecting & Modifying Children from Parent
const childOne = parentOne.children[0];
const childTwo = childOne.nextElementSibling;

childOne.style.color = 'pink';
childTwo.style.color = 'olive';

// Children Selector
const kidOne = document.querySelector('#child-one');
kidOne.style.color = 'cyan';

// Selecting Parent & Modifying through child
guardianOne = kidOne.parentElement;
guardianOne.style.color = 'navy';

// Selecting GrandParent through Parent
grandGuardian = guardianOne.parentElement;
grandGuardian.style.color = 'maroon';
