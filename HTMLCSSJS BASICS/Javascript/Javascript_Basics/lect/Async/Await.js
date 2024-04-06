
async function abcd(){
    let b = await fetch(`https://randomuser.me/api/`);
    b=await b.json();
    console.log(b);
}
abcd();
// Async Await function  The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

// You can also define async functions using the async function expression.

// Try it

// Syntax
// JS
// Copy to Clipboard
// async function name(param0) {
//   statements
// }
// async function name(param0, param1) {
//   statements
// }
// async function name(param0, param1, /* …, */ paramN) {
//   statements
// }
// Note: There cannot be a line terminator between async and function, otherwise a semicolon is automatically inserted, causing async to become an identifier and the rest to become a function declaration.

// Parameters
// name
// The function's name.

// param Optional
// The name of a formal parameter for the function. For the parameters' syntax, see the Functions reference.

// statements Optional
// The statements comprising the body of the function. The await mechanism may be used.

// Description
// An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

// Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

// Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError.

// await can be used on its own with JavaScript modules.

// Note: The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises.

// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

// For example, consider the following code:

// JS
// Copy to Clipboard
// async function foo() {
//   return 1;
// }
// It is similar to:

// JS
// Copy to Clipboard
// function foo() {
//   return Promise.resolve(1);
// }
// Note:

// Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

// An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

// It can be a problem when you want to check the equality of a promise and a return value of an async function.

// JS
// Copy to Clipboard
// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//   return p;
// }

// function basicReturn() {
//   return Promise.resolve(p);
// }

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false
// The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously.

// For example:

// JS
// Copy to Clipboard
// async function foo() {
//   await 1;
// }
// It is also equivalent to:

// JS
// Copy to Clipboard
// function foo() {
//   return Promise.resolve(1).then(() => undefined);
// }
// Code after each await expression can be thought of as existing in a .then callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.

// In the following example, we successively await two promises. Progress moves through function foo in three stages.

// The first line of the body of function foo is executed synchronously, with the await expression configured with the pending promise. Progress through foo is then suspended and control is yielded back to the function that called foo.
// Some time later, when the first promise has either been fulfilled or rejected, control moves back into foo. The result of the first promise fulfillment (if it was not rejected) is returned from the await expression. Here 1 is assigned to result1. Progress continues, and the second await expression is evaluated. Again, progress through foo is suspended and control is yielded.
// Some time later, when the second promise has either been fulfilled or rejected, control re-enters foo. The result of the second promise resolution is returned from the second await expression. Here 2 is assigned to result2. Control moves to the return expression (if any). The default return value of undefined is returned as the resolution value of the current promise.
// JS
// Copy to Clipboard
// async function foo() {
//   const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve("1")),
//   );
//   const result2 = await new Promise((resolve) =>
//     setTimeout(() => resolve("2")),
//   );
// }
// foo();
// Note how the promise chain is not built-up in one go. Instead, the promise chain is constructed in stages as control is successively yielded from and returned to the async function. As a result, we must be mindful of error handling behavior when dealing with concurrent asynchronous operations.

// For example, in the following code an unhandled promise rejection error will be thrown, even if a .catch handler has been configured further along the promise chain. This is because p2 will not be "wired into" the promise chain until control returns from p1.

// JS
// Copy to Clipboard
// async function foo() {
//   const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
//   const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
//   const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
// }
// foo().catch(() => {}); // Attempt to swallow all errors...
// async function declarations behave similar to function declarations — they are hoisted to the top of their scope and can be called anywhere in their scope, and they can be redeclared only in certain contexts.

// Examples
// Async functions and execution order
// JS
// Copy to Clipboard
// function resolveAfter2Seconds() {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// }

// function resolveAfter1Second() {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// }

// async function sequentialStart() {
//   console.log("== sequentialStart starts ==");

//   // 1. Start a timer, log after it's done
//   const slow = resolveAfter2Seconds();
//   console.log(await slow);

//   // 2. Start the next timer after waiting for the previous one
//   const fast = resolveAfter1Second();
//   console.log(await fast);

//   console.log("== sequentialStart done ==");
// }

// async function sequentialWait() {
//   console.log("== sequentialWait starts ==");

//   // 1. Start two timers without waiting for each other
//   const slow = resolveAfter2Seconds();
//   const fast = resolveAfter1Second();

//   // 2. Wait for the slow timer to complete, and then log the result
//   console.log(await slow);
//   // 3. Wait for the fast timer to complete, and then log the result
//   console.log(await fast);

//   console.log("== sequentialWait done ==");
// }

// async function concurrent1() {
//   console.log("== concurrent1 starts ==");

//   // 1. Start two timers concurrently and wait for both to complete
//   const results = await Promise.all([
//     resolveAfter2Seconds(),
//     resolveAfter1Second(),
//   ]);
//   // 2. Log the results together
//   console.log(results[0]);
//   console.log(results[1]);

//   console.log("== concurrent1 done ==");
// }

// async function concurrent2() {
//   console.log("== concurrent2 starts ==");

//   // 1. Start two timers concurrently, log immediately after each one is done
//   await Promise.all([
//     (async () => console.log(await resolveAfter2Seconds()))(),
//     (async () => console.log(await resolveAfter1Second()))(),
//   ]);
//   console.log("== concurrent2 done ==");
// }

// sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // wait above to finish
// setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrent1, 7000); // same as sequentialWait

// // wait again
// setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
// await and concurrency
// In sequentialStart, execution suspends 2 seconds for the first await, and then another second for the second await. The second timer is not created until the first has already fired, so the code finishes after 3 seconds.

// In sequentialWait, both timers are created and then awaited. The timers run concurrently, which means the code finishes in 2 rather than 3 seconds, i.e. the slowest timer. However, the await calls still run in series, which means the second await will wait for the first one to finish. In this case, the result of the fastest timer is processed after the slowest.

// If you wish to safely perform other jobs after two or more jobs run concurrently and are complete, you must await a call to Promise.all() or Promise.allSettled() before that job.

// Warning: The functions sequentialWait and concurrent1 are not functionally equivalent.

// In sequentialWait, if promise fast rejects before promise slow is fulfilled, then an unhandled promise rejection error will be raised, regardless of whether the caller has configured a catch clause.

// In concurrent1, Promise.all wires up the promise chain in one go, meaning that the operation will fail-fast regardless of the order of rejection of the promises, and the error will always occur within the configured promise chain, enabling it to be caught in the normal way.

// Rewriting a Promise chain with an async function
// An API that returns a Promise will result in a promise chain, and it splits the function into many parts. Consider the following code:

// JS
// Copy to Clipboard
// function getProcessedData(url) {
//   return downloadData(url) // returns a promise
//     .catch((e) => downloadFallbackData(url)) // returns a promise
//     .then((v) => processDataInWorker(v)); // returns a promise
// }
// it can be rewritten with a single async function as follows:

// JS
// Copy to Clipboard
// async function getProcessedData(url) {
//   let v;
//   try {
//     v = await downloadData(url);
//   } catch (e) {
//     v = await downloadFallbackData(url);
//   }
//   return processDataInWorker(v);
// }
// Alternatively, you can chain the promise with catch():

// JS
// Copy to Clipboard
// async function getProcessedData(url) {
//   const v = await downloadData(url).catch((e) => downloadFallbackData(url));
//   return processDataInWorker(v);
// }
// In the two rewritten versions, notice there is no await statement after the return keyword, although that would be valid too: The return value of an async function is imp Async/await
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// Async functions
// Let’s start with the async keyword. It can be placed before a function, like this:

// async function f() {
//   return 1;
// }
// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

// For instance, this function returns a resolved promise with the result of 1; let’s test it:

// async function f() {
//   return 1;
// }

// f().then(alert); // 1
// …We could explicitly return a promise, which would be the same:

// async function f() {
//   return Promise.resolve(1);
// }

// f().then(alert); // 1
// So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool.

// Await
// The syntax:

// // works only inside async functions
// let value = await promise;
// The keyword await makes JavaScript wait until that promise settles and returns its result.

// Here’s an example with a promise that resolves in 1 second:

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// f();
// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

// Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.

// Can’t use await in regular functions
// If we try to use await in a non-async function, there would be a syntax error:

// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // Syntax error
// }
// We may get this error if we forget to put async before a function. As stated earlier, await only works inside an async function.

// Let’s take the showAvatar() example from the chapter Promises chaining and rewrite it using async/await:

// We’ll need to replace .then calls with await.
// Also we should make the function async for them to work.
// async function showAvatar() {

//   // read our JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();
// Pretty clean and easy to read, right? Much better than before.

// Modern browsers allow top-level await in modules
// In modern browsers, await on top level works just fine, when we’re inside a module. We’ll cover modules in article Modules, introduction.

// For instance:

// // we assume this code runs at top level, inside a module
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();

// console.log(user);
// If we’re not using modules, or older browsers must be supported, there’s a universal recipe: wrapping into an anonymous async function.

// Like this:

// (async () => {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   ...
// })();
// await accepts “thenables”
// Like promise.then, await allows us to use thenable objects (those with a callable then method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use it with await.

// Here’s a demo Thenable class; the await below accepts its instances:

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   alert(result);
// }

// f();
// If await gets a non-promise object with .then, it calls that method providing the built-in functions resolve and reject as arguments (just as it does for a regular Promise executor). Then await waits until one of them is called (in the example above it happens in the line (*)) and then proceeds with the result.

// Async class methods
// To declare an async class method, just prepend it with async:

// class Waiter {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }

// new Waiter()
//   .wait()
//   .then(alert); // 1 (this is the same as (result => alert(result)))
// The meaning is the same: it ensures that the returned value is a promise and enables await.

// Error handling
// If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.

// This code:

// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }
// …is the same as this:

// async function f() {
//   throw new Error("Whoops!");
// }
// In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

// We can catch that error using try..catch, the same way as a regular throw:

// async function f() {

//   try {
//     let response = await fetch('http://no-such-url');
//   } catch(err) {
//     alert(err); // TypeError: failed to fetch
//   }
// }

// f();
// In the case of an error, the control jumps to the catch block. We can also wrap multiple lines:

// async function f() {

//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }
// }

// f();
// If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it:

// async function f() {
//   let response = await fetch('http://no-such-url');
// }

// // f() becomes a rejected promise
// f().catch(alert); // TypeError: failed to fetch // (*)
// If we forget to add .catch there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global unhandledrejection event handler as described in the chapter Error handling with promises.

// async/await and promise.then/catch
// When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

// But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.

// async/await works well with Promise.all
// When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

// // wait for the array of results
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);
// In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.

// Summary
// The async keyword before a function has two effects:

// Makes it always return a promise.
// Allows await to be used in it.
// The await keyword before a promise makes JavaScript wait until that promise settles, and then:

// If it’s an error, an exception is generated — same as if throw error were called at that very place.
// Otherwise, it returns the result.
// Together they provide a great framework to write asynchronous code that is easy to both read and write.

// With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.

// Tasks
// Rewrite using async/await
// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404licitly wrapped in Promise.resolve - if it's not already a promise itself (as in the examples).
