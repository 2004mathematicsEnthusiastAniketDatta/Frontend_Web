function dataFetcher(url , url2,callback){
    fetch(url)
   .then(response => response.json()).then(result=>{
    callback(result);
   })
}
dataFetcher(`https://jsonplaceholder.typicode.com/posts`, `https://jsonplaceholder.typicode.com/users`,(result)=>{
    console.log(result);
})

async function dataFetcher2(url) {
   let d=await fetch(url)    
}