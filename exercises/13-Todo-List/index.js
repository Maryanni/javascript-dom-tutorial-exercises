// Your code here
let getElement = document.querySelector("#addToDo");
let lista = document.querySelector('ul');

getElement.addEventListener("keyup", (event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
        let li = document.createElement('li');
        let newSpan = document.createElement('span');
        let newI = document.createElement('i');
        newI.classList.add('fa', 'fa-trash');
        newI.addEventListener("click", function () {
            lista.removeChild(newI.parentElement.parentElement);
        })
        newSpan.appendChild(newI);
        li.appendChild(newSpan);
        let texto = document.createTextNode(event.target.value);
        li.appendChild(texto);
        lista.appendChild(li);
        getElement.value = '';
    }

});

const deleteIcons = document.querySelectorAll('.fa-trash');

deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", function () {
        lista.removeChild(deleteIcon.parentElement.parentElement);
    })
})
