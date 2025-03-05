
// async wait promise zincirlerini kolay yönetmemizi sağlar

// 
// async function hello(){
//     return "hello world";
// }

// console.log(hello());

// document.querySelector("#button").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>{
//         return response.json()
//     })
//     .then((post)=>{
//         console.log(post)
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then ((response)=> response.json())
//         .then ((comments)=>console.log(comments))
//     })
// })

//async awit ile yapılışı
// document.querySelector("#button").addEventListener("click", async ()=>{
//      const responsePost= await fetch("https://jsonplaceholder.typicode.com/posts/1")
//      const post= await responsePost.json();

//      const responseComments= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//      const comments= await responseComments.json();

//      console.log(post,comments);
    
// })

document.querySelector("#button").addEventListener("click", async ()=>{
    const post= await  (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
 
    const comments=  await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
   

    console.log(post,comments);
   
})