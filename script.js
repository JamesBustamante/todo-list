// Select your elements from the DOM
var todoList = document.getElementById('todo-list');
var addItemBtn = document.getElementById('add-item');
var inputBox = document.getElementById('input-task');
var removeItemBtn = document.getElementById('remove-item');
var updateItemBtn = document.getElementById('update-item');


// Handle the removing of elements
var binClassBtn = document.getElementsByClassName('fa fa-trash');
handleHideTasks();
function handleHideTasks() {
    var i;
    for (i = 0; i < binClassBtn.length; i++) {
        binClassBtn[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

console.log(binClassBtn)

removeItemBtn.addEventListener('click', function () {
    var firstElement = todoList.firstElementChild;

    todoList.removeChild(firstElement);
});

updateItemBtn.addEventListener('click', function () {
    var firstElement = todoList.firstElementChild;
    updatedNode = createNewNode();

    if (updatedNode != null || updatedNode != undefined) //Error handling
        todoList.replaceChild(updatedNode, firstElement);
    handleHideTasks();
});

// Add an event listener to button : press enter
inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});

// Add an event listener to button : onclick
addItemBtn.addEventListener('click', addListItem);

function createNewNode() {
    var inputBox = document.getElementById('input-task');
    if (inputBox.value.length <= 0) {
        alert('Please enter the name of the task')
        return;
    }

    var count = todoList.childElementCount;
    var newListElement = document.createElement('li');
    var newIdiomElement = document.createElement('i');

    // Manipulate the DOM
    newListElement.appendChild(document.createTextNode(inputBox.value));
    newListElement.appendChild(newIdiomElement);
    // Change element properties
    newListElement.id = "list-item-" + (count + 1);
    newListElement.className = "list-group-item";
    newIdiomElement.className = "fa fa-trash";

    return newListElement;
}

// Create new tasks based on input entered into textbox
// TODO - Refactor function - use createNewNode
function addListItem() {
    var inputBox = document.getElementById('input-task');
    if (inputBox.value.length <= 0) {
        alert('Please enter the name of the task')
        return;
    }

    var count = todoList.childElementCount;
    var newListElement = document.createElement('li');
    var newIdiomElement = document.createElement('i');

    // Manipulate the DOM
    newListElement.appendChild(document.createTextNode(inputBox.value));
    newListElement.appendChild(newIdiomElement);
    // Change element properties
    newListElement.id = "list-item-" + (count + 1);
    newListElement.className = "list-group-item";
    newIdiomElement.className = "fa fa-trash";

    // Insert at the beginning at the list
    //var firstItem = todoList.firstElementChild;
    //todoList.insertBefore(newListElement, firstItem);
    todoList.appendChild(newListElement); // append to todo list

    inputBox.value = "";

    handleHideTasks();
}