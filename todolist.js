var userInputFormDOM = document.querySelector('#userListForm')
var userInput = document.querySelector('#userInput')
var ulDOM = document.querySelector('ul')
var listNodes = document.querySelectorAll('li')
var listAddButtonDOM = document.querySelector('#listAddButton')
var listRemoveButtonDOM = document.getElementsByClassName('remove');

//form handler 
userInputFormDOM.addEventListener('submit', formHandler)

for (let i = 0; i < listRemoveButtonDOM.length; i++) {
    listRemoveButtonDOM[i].addEventListener('click', removeListElement)
}

for (let i = 0; i < listRemoveButtonDOM.length; i++) {
    listNodes[i].addEventListener('click', listElementClick)
}
//form handler fonksiyonu
function formHandler(event) {
    event.preventDefault()
    if (userInput.value) {
        addListElement(userInput.value)
        userInput.value = ""
    } else {
        // alertFunction('Kullanıcı adı ve not bilgisi boş olamaz!', 'warning')        
        alert('Girilen not boş olamaz!')
    }
}

function removeListElement() {
    console.log("liste eleman silme butonu tıklandı")
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function listElementClick() {
    this.classList.toggle('text-decoration-line-through')
    this.classList.toggle('text-black-50')
    console.log("liste eleman tıklandı: ", this.textContent)
}

function addListElement(userInput) {
    //liste elemanı oluşturup text değerini ve class bilgilerini ekliyoruz
    var liDOM = document.createElement('li')
    liDOM.classList.add("list-group-item", "list-group-item-action")
    liDOM.appendChild(document.createTextNode(userInput))

    //liste silme butonu oluşurup class bilgilerini ekliyoru<
    var buttonDOM = document.createElement('button')
    buttonDOM.classList.add("btn-close", "remove", "float-end")

    //yeni oluşturulan li ve button elemanlarına click event listener ekliyoruz
    liDOM.addEventListener('click', listElementClick)
    buttonDOM.addEventListener('click', removeListElement)

    //oluşturduğumuz li ve button elemanlarını listeye ekliyoruz
    liDOM.appendChild(buttonDOM)
    ulDOM.appendChild(liDOM)
}
/*
let userInput = document.querySelector('#userInput')
let userListFormDOM = document.querySelector("#userListForm")
let listDOM = document.querySelector("#userList")
let listNode = document.getElementsByTagName('LI')
let listAddButtonDOM = document.querySelector("#listAddButton")

let listRemoveButtonDOM = document.getElementsByClassName('close')
console.log("silinebilecek eleman sayısı: ", listRemoveButtonDOM.length + 1, listRemoveButtonDOM)
console.log(listRemoveButtonDOM)

//close button ekleniyor
for (let i = 0; i < listNode.length; i++) {
    console.log("liste elemanlarına silme butonu eklendi:", listNode[i]);
    listNode[i].innerHTML += `<button type="button" class="btn-close close float-end" aria-label="Close"></button>`
}
userListFormDOM.addEventListener('submit', formHandler)

console.log("sayfa yüklendi:", listNode)
console.log("silinebilecek eleman sayısı: ", listRemoveButtonDOM.length + 1, listRemoveButtonDOM)

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
    <button type="button" class="btn-close close float-end" aria-label="Close"></button>
    `
    listDOM.append(listItemDOM)
    listRemoveButtonDOM = document.getElementsByClassName('close')
    console.log("listeye eleman eklendi:", listNode, "eleman sayısı: ", listNode.length + 1)

    console.log("silinebilecek eleman sayısı: ", listRemoveButtonDOM.length + 1, listRemoveButtonDOM)
}

//liste elemanlarının üzerini çiziyor
listDOM.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('text-decoration-line-through')
    }
}, false)

//liste elemanlarını silmek
// let listRemoveButtonDOM = document.getElementsByClassName('close')

for (let i = 0; i < listRemoveButtonDOM.length; i++) {
    listRemoveButtonDOM[i].onclick = function () {
        console.log("silinebilecek eleman sayısı: ", listRemoveButtonDOM.length + 1, listRemoveButtonDOM)
        var div = this.parentElement;
        div.style.display = "none";
        
        console.log("listeden eleman silindi: ", this.parentElement.textContent);
    }
}


console.log(listRemoveButtonDOM)
*/