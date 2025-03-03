

// callback : bir fonksiyonu bir fonksiyona parametre geçerek
// asenkron yapıyı senkrona çeviririz.
// function getName(callback){    // callback getsurnameye eşit oldu çünkü alacağı değeri aynı yere yazdık.

//     setTimeout(()=>{
    
//             console.log("Duhan");
//             callback();
            
//     },1000)
// }

// function getSurname() {
//     setTimeout(()=>{
//             console.log("İlgün");
            
//     },500)
// }

// getName(getSurname);



// function getName(callback){    

//     setTimeout(()=>{
    
//             let name="Duhan";
//             callback(name);
            
//     },1000)
// }   

// function getSurname(ali) {
//     setTimeout(()=>{
//         let surname="İlgün";
//             console.log(ali,surname);
            
//     },500)
// }

// getName(getSurname);


// function getName(callback){    

//     setTimeout(()=>{
    
//             let name="Duhan";
//             callback(name);
            
//     },1000)
// }   

// function getSurname(name,callback) {
//     setTimeout(()=>{
//         let surname="İlgün";
//          callback(surname);
            
//     },500)
// }

// getName((name)=>{

//     getSurname(name ,(surname)=>{

//               console.log(name,surname);
//     })
// })



// Asenkron Problemi çözümü



const users = [
    {
        userId:5,
        post:"Enes Post 1"
    },
    {
        userId:5,
        post:"Enes Post 2"
    },
    {
        userId:5,
        post:"Enes Post 3"
    },
    {
        userId:6,
        post:"Ali Post 1"
    },
    {
        userId:7,
        post:"Betül Post 1"
    }
    
    
]

// user id
// post by user id 

// senkrona çevireceğiz
// callback - promise - async
function getUserId(callback){
    setTimeout(()=>{
        // servise gittik ve cevabı aldık
        let gelsin=5;
        callback(gelsin);
    },1000)
}

function getPostByUserId(userId){

    setTimeout(()=>{
    users.forEach((user)=>{
        if(user.userId==userId){
               console.log(user.post);
        }

    })
       
    },500) 
}

getUserId(getPostByUserId);
