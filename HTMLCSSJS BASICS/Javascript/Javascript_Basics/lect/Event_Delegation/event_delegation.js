"use strict";
//event bubbling
let parent = document.querySelector("#parent");
parent.addEventListener("click",function(event){
   console.log(event);
   if(event.target.id == 'play'){
    console.log("Play");
   }
   else if(event.target.id == 'pause'){
    console.log('Pause');
   }
});
