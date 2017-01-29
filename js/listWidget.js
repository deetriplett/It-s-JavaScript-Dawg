function getJSON(url) {
  return new Promise(function(resolve, reject){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = handleResponse;
      xhr.onerror = function(error) {reject(error);}
      xhr.send();

  function handleResponse() {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
      let employees = JSON.parse(xhr.responseText);
      resolve(employees)
      } else {
        reject(this.statusText);
    }//END if 
  }; //End handleResponse 
  };//End Promise
    });//End getJSON function

const ajaxPromise = getJSON();




//Generate List Items, Json passed into it and returned//
function generatListItems(employees)  {
    const statusHTML = '';
    for (let i=0; i<employees.length; i += 1) {
        if (employees[i].inoffice === true) {
            statusHTML += '<li class="in">';
        } else {
            statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
    }
    
    return statusHTML;
} //End Generate List Items


// Final HTML that appends to DOM//
function generateUnorderedList(listItems) {
    return '<ul class="bulleted">' + listItems +  '</ul>';
}

//
function addEmployeesToPage(unorderedList) {
    document.getElementById('employeeList').innerHTML = unorderedList;
}

getJSON('../data/employees.json')
            .then(generatListItems)
            .then(generateUnorderedList)
            .then(addEmployeesToPage)
            .catch(function(error){
                console.log(error); 
            })
          















