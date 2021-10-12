const elList = document.querySelector('#list');
const elList1 = document.querySelector('#list1');
const elList2 = document.querySelector('#list2');
const elTemplate = document.querySelector('#template').content;


function renderUser(userArr, element){
    userArr.forEach((elem) =>{

        const cloneTemplate = elTemplate.cloneNode(true);

        cloneTemplate.querySelector('.list-item').dataset.uuid = elem.id;
        cloneTemplate.querySelector('.name-title').textContent = elem.name;
        cloneTemplate.querySelector('.email-text').textContent = elem.email;
        cloneTemplate.querySelector('.phone-text').textContent = elem.phone;
        cloneTemplate.querySelector('.name').textContent = elem.username;
        cloneTemplate.querySelector('.web-text').textContent = elem.website;

        element.appendChild(cloneTemplate);
    });
}

async function fetchUsers(){

   try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log(data);
    renderUser(data, elList);
   }catch(e){
       alert(`Message:${e.message}`);
   }
}
fetchUsers()

elList.addEventListener('click', e =>{
    elList1.innerHTML = null;
    if(e.target.matches('.list-item')){
        let {uuid} = e.target.dataset;

        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            data.forEach(elem =>{
                if(elem.userId == uuid){
                    let newLi = document.createElement('li');
                    let newTitle = document.createElement('h3');
                    let newP = document.createElement('p');
                    /* =========================== */
                    newLi.classList.add('list-item-two');
                    newTitle.classList.add('post-title');
                    newP.classList.add('post-text')
                    /* =========================== */
                    newLi.dataset.uuid = elem.id;
                    newTitle.textContent = elem.title;
                    newP.textContent = elem.body;
                    /* =========================== */
                    newLi.appendChild(newTitle);
                    newLi.appendChild(newP);
                    /* =========================== */
                    elList1.appendChild(newLi);
                }
            })
        })  
    }
 
});

elList1.addEventListener('click', e =>{
    elList2.innerHTML = null;
    if(e.target.matches('.list-item-two')){
        let {uuid} = e.target.dataset;

        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => response.json())
        .then(data => {
            data.forEach(elem =>{
                
                if(elem.postId == uuid){
                    let newLi1 = document.createElement('li');
                    let newTitle1 = document.createElement('h3');
                    let newP1 = document.createElement('p');
                    let newP2 = document.createElement('p');
                    /* =========================== */
                    newLi1.classList.add('list-item-three');
                    newTitle1.classList.add('comment-title');
                    newP1.classList.add('comment-text');
                    newP2.classList.add('comment-email');
                    /* =========================== */
                    newTitle1.textContent = elem.name;
                    newP2.textContent = elem.email;
                    newP1.textContent = elem.body;
                    /* =========================== */
                    newLi1.appendChild(newTitle1);
                    newLi1.appendChild(newP2)
                    newLi1.appendChild(newP1);
                    /* =========================== */
                    elList2.appendChild(newLi1);
                }
            })
        }) 
    }
})
