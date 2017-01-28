const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput =document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItem');

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = 'descriptionInput.value +  ';
});
  
p.title = "List Description";
  
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == "none") {
    toggleList.textContent = "Hide List";
    listDiv.style.display = 'block';
  } else {
  toggleList.textContent = "Show List";
  listDiv.style.display = 'none';
  }
  
});
  
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContext.addItemInput.value;
   ul.appendChild(li);
});
