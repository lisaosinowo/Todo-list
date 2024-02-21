// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // Creating a todo div
    const todoDiv = document.createElement("div"); // This creates a div element in the HTML
    todoDiv.classList.add("todo"); // This adds a class of 'todo' to the div that was created

    // Creating the LI (List) for the new div
    const newTodo = document.createElement("li"); // This creates an li element in the HTML
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item"); // This adds a class to the li element on line 18
    todoDiv.appendChild(newTodo); // This adds the li element inside the todo DIV

    // Adding a check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Adding a delete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to the list
    todoList.appendChild(todoDiv); // This adds the todo div that has the list items and buttons to the main todo list div
    todoInput.value = ""; // This clears the input box once someone has been added to the list
}

function deleteCheck(del_ITEM){
    const item = del_ITEM.target;
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement; 
        todo.remove();
        // This function is associated with the todo-list on line 8
    }

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}