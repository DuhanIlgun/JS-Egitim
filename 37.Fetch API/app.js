

// function getStudents(url){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then ((data) =>console.log(data))
//     .catch((err)=> console.log(err))

// }

// getStudents("studenst.json");

function getData(url){
   return  fetch(url)
    // .then((response)=>{
    //      return response.json();
    // })

    // .then((data)=>{
    //     console.log(data);
    // })

    // .catch((err)=>{
    //     console.log(err);
    // })
    
}

getData("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=> console.log(data))
.catch ((err)=>console.log(err))     //fetch promise döner o yüzden 1.then kullandık json da promise döndüğü için 1 tane daha then kullandık