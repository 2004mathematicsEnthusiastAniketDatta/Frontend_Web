"use strict";
var url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url);
console.log(url.includes('hitesh'));
console.log("the keywords of the url are : ".concat(url.trim().split('/')));
