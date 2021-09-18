let listDOM = document.querySelector("#userList")
let listAddButtonDOM = document.querySelector("#listAddButton")
let userListFormDOM = document.querySelector("#userListForm")
let userInput = document.querySelector('#userInput')
userListFormDOM.addEventListener('submit', formHandler)

console.log(userInput)


/* 
    <a href="#" class="list-group-item list-group-item-action disabled" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
        </div>
    </a>
*/

function formHandler(event) {
    event.preventDefault()
    if (userInput.value) {
        addItem(userInput.value)
        userInput.value = ""
    } else {
        // alertFunction('Kullanıcı adı ve not bilgisi boş olamaz!', 'warning')        
        alert('veri boş olamaz!')
    }
}

const addItem = (userInput) => {
    let listItemDOM = document.createElement('li');
    listItemDOM.classList.add("list-group-item", "list-group-item-action")
    listItemDOM.innerHTML = `
    ${userInput}
    <button type="button" class="btn-close float-end" aria-label="Close"></button>
    `
    listDOM.append(listItemDOM)
}

listDOM.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('text-decoration-line-through')
    }
}, false)