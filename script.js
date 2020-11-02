// Select your elements from the DOM
var todoList = document.getElementById('todo-list');
var addItemBtn = document.getElementById('add-item');
var inputBox = document.getElementById('input-task');
var removeItemBtn = document.getElementById('remove-item');
var updateItemBtn = document.getElementById('update-item');
var saveItemsBtn = document.getElementById('save-items');
var resetItemsBtn = document.getElementById('reset-items');

if (localStorage.savedList === undefined) {
    // Set default list
    var defaultCount = 2;
    var newList = document.createElement('ul');
    newList.id = 'todo-list';
    newList.className = 'list-group';
    for (var i = 1; i < defaultCount + 1; i++) {
        console.log("here")
        var newListElement = document.createElement('li');
        newListElement.appendChild(document.createTextNode('List Item ' + i));
        newListElement.id = 'list-item-' + i;
        newListElement.className = 'list-group-item';
        newList.appendChild(newListElement);
    }
    console.log(newList)
} else {
    // load in list
    var rawList = JSON.parse(localStorage.savedList);
    var count = 0;
    var newList = document.createElement('ul');
    newList.id = 'todo-list';
    newList.className = 'list-group';
    for (let [key, value] of Object.entries(rawList)) {
        console.log(`${key}: ${value}`);
        var newListElement = document.createElement('li');
        var newIdiomElement = document.createElement('i');
        newListElement.appendChild(document.createTextNode(value));
        newListElement.appendChild(newIdiomElement);
        newIdiomElement.className = "fa fa-trash";
        newListElement.id = 'list-item-' + (count + 1);
        newListElement.className = 'list-group-item';
        newList.appendChild(newListElement);
        count += 1;
        todoList.replaceWith(newList);
        //todoList.replaceWith(localStorage.savedListHTML);
    }
}

// Store current todo-list into local storage
saveItemsBtn.addEventListener('click', function () {
    //console.log(todoList);
    listObj = {};
    var count = 1;
    todoList = document.getElementById('todo-list');
    for (var child = todoList.firstElementChild; child !== null; child = child.nextElementSibling) {
        console.log(child)
        console.log(child.style);
        if (child.style.display != "none") {
            console.log("CLEAR");
            listObj[count] = child.innerText;
            count += 1;
        }

    }
    // TODO : element.childnodes
    // FIX LOOP ISSUE. Problem occurs when deleting and then retriving values
    /*
    for (var i = 0; i < count; i++) {
        console.log(document.getElementById('list-item-' + (i + 1)));
        listObj[i] = document.getElementById('list-item-' + (i + 1)).innerText;
        console.log(listObj[i]);
    }*/
    localStorage.setItem('savedList', JSON.stringify(listObj));
    console.log(localStorage.savedList);
});

// Reset current todo list and reload the page
resetItemsBtn.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload(true);
});

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
    todoList = document.getElementById('todo-list');
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
    todoList = document.getElementById('todo-list');
    if (inputBox.value.length <= 0) {
        alert('Please enter the name of the task')
        return;
    }
});

// Add an event listener to button : onclick
addItemBtn.addEventListener('click', function () { 
    if (isInput())
        addListItem();
});

function createNewNode() {
    var inputBox = document.getElementById('input-task');
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
function addListItem(textValue = null) {
    var inputBox = document.getElementById('input-task');

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
// check if there is input in input-task textbox
function isInput() {
    var inputBox = document.getElementById('input-task');
    if (inputBox.value.length <= 0) {
        alert('Please enter the name of the task')
        return false;
    }
    return true;
}