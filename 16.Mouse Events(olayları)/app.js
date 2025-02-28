//MOUSE EVENTLARI

//DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave


// window.addEventListener("load",run);  // dom ise document ile çalışır 

// function run(){
//     console.log("Sayfa Yüklendi");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);    // mouseover ile farklı cardbody içerisndeki elementlerin üzerine gelince algılamaz 
// sadece cardbody ilgilendirir mouseoverda içindeki elementler de bütün olarak sayılır.

cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}