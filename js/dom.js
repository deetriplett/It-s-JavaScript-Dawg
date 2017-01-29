//Const Variables//
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listUl = listDiv.querySelector('ul');


//Remove Task List items--with Remove Button//
listUl.addEventListener('click', (event) => { 
  if (event.target.tagName == "BUTTON") { 
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    }                                          
  });

//Mouse Over Event for List//
//listDiv.addEventListener('mouseover', (event) => { 
//  if (event.target.tagName == "LI") { 
//    event.target.textContent = event.target.textContent.toUpperCase();
//    }                                          
//  });
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == "LI") {
//    event.target.textContent = event.target.textContent.toLowerCase();
//    }
//  });

//When any element is clicked, it's logged
//document.addEventListener('click', (event) => {
//  console.log(event.target);
//});

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
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
  //Add remove button//
});

//Remove List Item//
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
