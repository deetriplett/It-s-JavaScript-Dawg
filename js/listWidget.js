const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/employees.json');
xhr.onreadystatechange = handleResponse;
xhr.send();

function handleResponse() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    addEmployeesToPage(employees)
  }
};


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



function generateUnorderedList(listItems) {
    return '<ul class="bulleted">' + listItems +  '</ul>';
}

function addEmployeesToPage(employees) {
    document.getElementById('employeeList').innerHTML = generateUnorderedList(generatListItems(employees));
}


ajaxPromise.then(generatListItems)
            .then(generateUnorderedList)
            .then(addEmployeesToPage)
            .catch(function(error){
                console.log(error); 
            });















