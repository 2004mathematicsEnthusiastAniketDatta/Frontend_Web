//Web Workers, according to MDN, are a means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. Additionally, they can make network requests using the fetch() or XMLHttpRequest APIs. Workers operate in a global context that’s different from the current window, which means they can’t directly manipulate the DOM or use some default methods and properties of the window object. However, they can use many items available under window, like WebSockets and IndexedDB.
// Data is sent between workers and the main thread via messages — both sides send messages using the postMessage() method and respond to messages via the onmessage event handler. The data is copied, not shared. Workers can also spawn new workers, provided they’re hosted within the same origin as the parent page

let nums=Array.from({length: 1000000}, () => Math.floor(Math.random() * 1000000));
let num2=Array.from({length: 1000000}, (a,b) => b+1);
// console.log(num2)
const worker = new Worker("./Worker.js");
worker.postMessage({nums,num2});
worker.onmessage=(function(data){
    console.log(data.data);
})