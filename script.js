// Select your elements from the DOM
var todoList = document.getElementById('todo-list');
var addItemBtn = document.getElementById('add-item');
var inputBox = document.getElementById('input-task');

// Add an event listener to button : press enter
inputBox.addEventListener('keyup', function (e) { 
    if (e.keyCode === 13) { 
        addListItem();
    }
});


// Add an event listener to button : onclick
addItemBtn.addEventListener('click', addListItem);

// Create new tasks based on input entered into textbox
function addListItem() { 
    var inputBox = document.getElementById('input-task');
    console.log("here");
    if (inputBox.value.length <= 0) { 
        alert('Please enter the name of the task')
        return;
    }

    var count = todoList.childElementCount;
    var newListElement = document.createElement('li');
    // Manipulate the DOM
    newListElement.appendChild(document.createTextNode(inputBox.value));
    // Change element properties
    newListElement.id = "list-item-" + (count + 1); 
    newListElement.className = "list-group-item";
    console.log(newListElement); // Print to console

    // Insert at the beginning at the list
    //var firstItem = todoList.firstElementChild;
    //todoList.insertBefore(newListElement, firstItem);
    todoList.appendChild(newListElement); // append to todo list

    inputBox.value = "";
}