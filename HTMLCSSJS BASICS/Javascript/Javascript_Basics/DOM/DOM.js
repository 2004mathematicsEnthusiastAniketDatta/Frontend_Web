"use strict";
//Document Object Model
//DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

//Accessing html elements
//document.getElementById('')
//document.getElementByClassName(')

let h1 = document.createElement('h1');
let btn = document.querySelector('#btn');
h1.classList.add('makethatmonumnent');
document.querySelector("#main").appendChild(h1)
btn.addEventListener('click',function(){
btn.textContent = 'starting';
btn.style.color = '#ffffff';
h1.textContent = "Javascript lovers";
btn.style.fontstyle = 'monument';
btn.style.transform ='scale(1.1000)';
})
btn.classList.add('glow-on-hover');

h1.classList.add('makethatmonumnent');


