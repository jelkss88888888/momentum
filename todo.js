const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList")


const TODO_LS = "todo";

const todoArray = [];

function saveArrayToLS() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArray));
}

function makeTodo(currentValue) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = currentValue;
    li.id = todoArray.length + 1;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);

    const todoObject = {
        text : currentValue,
        id : todoArray.length + 1
    };
    todoArray.push(todoObject);
    saveArrayToLS();
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = todoInput.value;
    makeTodo(currentValue);
    todoInput.value = "";
}

function loadTodo() {
    const todo = localStorage.getItem(TODO_LS);
    const parsedToDo = JSON.parse(todo);
    if(todo !== null){
    parsedToDo.forEach(function(todo) {
        makeTodo(todo.text);
    });
}
    
    //console.log(parsedToDo);

}



function init() {
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}
init();