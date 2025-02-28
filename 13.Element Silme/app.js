
const todoList=document.querySelector(".list-group");
const todos=document.querySelectorAll(".list-group-item");

// todos[0].remove();

// todos[todos.length-1].remove();

// let todo1=todos[0];

// todoList.removeChild(todo1);

todoList.removeChild(todoList.lastElementChild);

