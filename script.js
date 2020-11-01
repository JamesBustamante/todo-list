// Select your elements from the DOM
var todoList = document.getElementById('todo-list');
var addItemBtn = document.getElementById('add-item');




// Add an event listener to button : onclick
addItemBtn.addEventListener('click', function () { 
    var count = todoList.childElementCount;
    var newListElement = document.createElement('li');
    // Manipulate the DOM
    newListElement.appendChild(document.createTextNode('List Item ' + (count + 1)));
    // Change element properties
    newListElement.id = "list-item-" + (count + 1); 
    newListElement.className = "list-group-item";
    console.log(newListElement); // Print to console

    var firstItem = todoList.firstElementChild;

    todoList.insertBefore(newListElement, firstItem);
    //todoList.appendChild(newListElement) // append to todo list
});