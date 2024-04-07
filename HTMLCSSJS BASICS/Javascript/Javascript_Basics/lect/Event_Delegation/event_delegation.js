"use strict";
//event bubbling
let parent = document.querySelector("#parent");
parent.addEventListener("click",function(event){
   console.log(event);

});
