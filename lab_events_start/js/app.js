document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

let titleText = '';
let authorText = '';
let categorySelected = '';

const handleTitleInput = function(event){
    titleText = event.target.value;
    console.log(titleText);
    // const bookTitle = document.querySelector('#title');
    // bookTitle.textContent = inputText;
};

const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', handleTitleInput);

const handleAuthorInput = function(event){
    authorText = event.target.value;
    console.log(authorText);
};

const authorInput = document.querySelector('#author');
authorInput.addEventListener('input', handleAuthorInput);

const handleCategorySelect = function(event){
  categorySelected = event.target.value;
  console.log(categorySelected);
};

const categorySelect = document.querySelector('#category');
categorySelect.addEventListener('change', handleCategorySelect);

const addBook = function(){
  const newListItem = document.createElement('li');
  const bookList = document.querySelector('#books');
  newListItem.innerHTML = `<p>${titleText}</p><p>${authorText}</p><p>${categorySelected}</p>`;
  bookList.appendChild(newListItem);

};

const handleFormSubmit = function(event){
  event.preventDefault();
  addBook();
  form.reset();
};

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);

}) // end main block
