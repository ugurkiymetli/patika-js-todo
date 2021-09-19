var userInputFormDOM = document.querySelector('#userListForm')
var userInput = document.querySelector('#userInput')
var ulDOM = document.querySelector('ul')
var listNodes = document.querySelectorAll('li')
var listAddButtonDOM = document.querySelector('#listAddButton')
var listRemoveButtonDOM = document.getElementsByClassName('remove');
var alertDOM = document.querySelector('#liveAlertPlaceholder')

function alertFunc(message, type) {
    alertDOM.innerHTML = ''
    var wrapper = document.createElement('div')
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    alertDOM.append(wrapper)
}

//form handler 
userInputFormDOM.addEventListener('submit', formHandler)

for (let i = 0; i < listRemoveButtonDOM.length; i++) {
    listRemoveButtonDOM[i].addEventListener('click', removeListElement)
    listNodes[i].addEventListener('click', listElementClick)
}
//form handler fonksiyonu
function formHandler(event) {
    event.preventDefault()
    if (userInput.value) {
        addListElement(userInput.value)
        userInput.value = ""
    } else {
        alertFunc('Listeye boş eleman eklenemez!', 'warning')
    }
}

function removeListElement() {
    console.log("liste eleman silme butonu tıklandı")
    this.parentNode.parentNode.removeChild(this.parentNode);
    alertFunc('Eleman silindi!', 'primary')
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
    alertFunc('Listeye eleman eklendi!', 'success')
}