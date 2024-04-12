let add = document .querySelector('#add');
let remove = document .querySelector('#remove');
let inp = document .querySelector('input');
let li ;
let ul = document.querySelector('#list-container');
add.addEventListener("click",function(){
   if (inp.value.trim() == '')
   {

   }
   else{
    li = document.createElement('li');
     li.textContent = inp.value;
     console.log(li);
     ul.appendChild(li);
     inp.value = '';
   }
})
remove.addEventListener("click",function(){
   li = document.querySelector('li:last-child');
   ul.removeChild(li);
   })