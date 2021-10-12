const usersList = document.querySelector('#users-list');
const elTemplate = document.querySelector('#template');

function renderUsers(renderArr, element){
    renderArr.forEach(elem =>{
        let cloneTemplate = elTemplate.cloneNode(true);
        console.log(elem.id);

        cloneTemplate.querySelector('.users-item').dataset.uuid = elem.id;
        cloneTemplate.querySelector('.name-title').textContent = elem.name;
        cloneTemplate.querySelector('.phone-text').textContent = elem.phone;
        cloneTemplate.querySelector('.email-text').textContent = elem.email;
        cloneTemplate.querySelector('.user-name').textContent = elem.username;
        cloneTemplate.querySelector('.web-text').textContent = elem.website;
        
    

        element.appendChild(cloneTemplate);
    })
}


try{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json =>  {    
        renderUsers(json, usersList);
    })
}catch(e){
    alert(`Error message: ${e.message}`)
}