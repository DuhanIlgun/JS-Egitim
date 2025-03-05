
// let check= false;

// const promise1=new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise başarılı");
//     }else{
//         reject("Promise başarısız");
//     }
// })

// console.log(promise1);

// let check=true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promiste sorun yok");
//         }
//         else{
//             reject("promiste sorun var");
//         }
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>console.log("Her zaman çalışır"))


// function readStudent(url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();

//         try {
//              xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//              })  

//         } catch (error) {
//             reject(error)
//         }

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudent("students.json")
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })


function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();

        try {
             xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
             })  

        } catch (error) {
            reject(error)
        }

        xhr.open("GET",url);
        xhr.send();
    })
}

function getCommentsByUserID(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();

        try {
             xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
             })  

        } catch (error) {
            reject(error)
        }

        xhr.open("GET",url);
        xhr.send();
    })
}

// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data)=>{
//    console.log(data);
//     return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
    
// })
// .then((res)=>console.log(res))
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     // mail atma kodları
// })

const p1=Promise.resolve("birinci promis başarılı")
const p2=Promise.resolve("ikinci promis başarılı")
const p3=new Promise((resolve,reject)=>{
    resolve("Üçüncü promise başarılı")
})
const p4=Promise.reject("Hata var");

Promise.all([p1,p2,p3,p4])   // promis all= hepsi doğruysa resolve en az bir tanesi  yanlışsa reject döner
.then((res)=>{
   
    // for(let value of res){
    //     console.log(value)
    // }
    console.log(res);
})

.catch((error)=>console.log(error))