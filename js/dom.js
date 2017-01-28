//Const Variables//
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

//Mouse Over Event for List//
for (let index = 0; index < listItems.length; index +=1) {
  listItems[index].addEventListener('mouseover', () => {
    listItems[index].textContent = listItems[index].textContent.toUpperCase();
  });
  listItems[index].addEventListener('mouseout', () => {
    listItems[index].textContent = listItems[index].textContent.toLowerCase();
  });
}

//Hide-Show Toggle for List//  
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
  toggleList.textContent = 'Show List';
  listDiv.style.display = 'none';
  }  
});

//Change List Description//
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ': ';
  descriptionInput.value = '';
});
  
//Add New List Item//
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent.addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

//Remove List Item//
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
