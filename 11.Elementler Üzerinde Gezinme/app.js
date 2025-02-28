
const todo =document.querySelector(".list-group-item");
const todoList=document.querySelector(".list-group");

const lastChild=document.querySelector(".list-group-item:nth-child(4)")
const card=document.querySelector(".card");

const row=document.querySelector(".row")
;

const container=document.querySelector(".container");

   // anneden çocuklara erişmek
// let value;

// value=todoList;
// value=todoList.children[0];
// value=todoList.children[1];
// value=todoList.children[todoList.children.length-1];
// value=todoList.children[3].textContent="Değişti";

// value=Array.from(todoList.children);

// value.forEach(function(todo)    {
//     console.log(todo.textContent);
// })

// console.log(value);

// çocuktan anneye erişmek

// value=todo;
// value=todo.parentElement.parentElement.parentElement;
// value=value.parentElement;

// console.log(value); 

// kardeşler arasında gezinmek

//value=todo;

// value=todo.nextElementSibling.nextElementSibling;

// value=lastChild;

// value=lastChild.previousElementSibling;


// value=row.children[0].children[3].children[0].textContent="sa";

value=row.children[0].children[3].children[2].children[2].nextElementSibling.textContent="5";

value=row.children[0].children[3].children[3].textContent="Beni değiştirdin";

console.log(value);