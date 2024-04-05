//ASYNC JS: by default , in JS, code requiring some time to execute which is present in call back queue until the event loop finds the call stack empty and then the first code to have been executed in least time is sent to the call stack via event loop.
// setTimeout: settimeout is a function which is used to delay the execution of the code by the time specified in the function.
console.log("hey 1")
console.log("hey 2")
setTimeout(()=>{console.log("hey 3")},1000)// this will print hey 3 after 1 sec
setTimeout(function(){console.log("Asynchronous")},500) // this will print the string within after 1/2 sec
console.log("hey 4")
// setInterval: setInterval is a function which is used to execute the code after the specified time interval. This keeps on executing the code till we stop this.
// setInterval(()=>{console.log("hey 5")},1000)
// this will print hey 5 after 1 sec and every 1 sec thereafter until you stop  this...
//stop interval
let count=0;
let interval=setInterval(()=>{console.log("hey 6")
count++;
console.log(count); 
if(count>=5)
{clearInterval(interval)};
},1000)
// let counttwo=0;
// let intervaltwo=setInterval(()=>{console.log(counttwo)
// counttwo++; 
// if(counttwo<=5)
// {clearInterval(intervaltwo)};
// },1000)
// this will print hey 6 after 1 sec and every 1 sec thereafter until you stop  this...
// this will stop the interval
//Fetch API  this will bring data from an API or will send data to another API
fetch(`https://randomuser.me/api/`)
// fetch will return a promise which will be resolved by then method of that promise
.then((response)=>{
    console.log(response)
    return response.json()
} ).then((data)=>{console.log(data.gender)})

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((response)=>{
    console.log(response)
    return response.json()
} ).then((data)=>{console.log(data)})
// this will return the response in json format
//brings data from the API in json format this requires time to execute so this is asynchronous
// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

// Concepts and usage
// The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

// For making a request and fetching a resource, use the fetch() method. It is a global method in both Window and Worker contexts. This makes it available in pretty much any context you might want to fetch resources in.

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

// Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
// You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, FetchEvent.respondWith() from service workers).
// Find out more about using the Fetch API features in Using Fetch, and study concepts in Fetch basic concepts.
// Fetch Interfaces
// fetch()
// The fetch() method used to fetch a resource.
// Headers
// Represents response/request headers, allowing you to query them and take different actions depending on the results.
// Request
// Represents a resource request.
// Response
// Represents the response to a request. 
// fetch(`https://randomuser.me/api/`).then() .then works when fetch is resolved




//Axios (or other HTTP Libraries) : Axios is a promise based HTTP client for the browser and node.js. Axios makes this easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. This  can be required in plain JavaScript or with a library such as Vue or React.

//axios
// import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs'); // browser commonJS bundle (ES2017)
// const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)
// axios.get(`https://randomuser.me/api/`).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});


//Callback: 







//Promises: Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. Promises are one way to deal with asynchronous code, without writing too many callbacks.s are used when we don't know how much time it will take to execute the code.s are used when we don't know how much time it will take to execute the code.
// the above are required when time is required 
















//Async/Await
//Event Loop
//Callbacks vs Promises vs Async/Await
//Generators
//Error handling in Asynchronous Javascript
//Web Workers
//AJAX

