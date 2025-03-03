
// Asenkron Problemi

//http istekleri

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
function getUserId(){
    setTimeout(()=>{
        // servise gittik ve cevabı aldık
        return 5;
    },1000)
}

function getPostByUserId(userId){
    console.log(userId); //undefined döner
    setTimeout(()=>{
    users.forEach((user)=>{
        if(user.userId==userId){
               console.log(user.post);
        }

    })
       
    },500) 
}

let userId=getUserId();
getPostByUserId(userId);