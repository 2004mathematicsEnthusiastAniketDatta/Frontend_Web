let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let number = document.querySelector('#number');
var int;
start.addEventListener('click', function(){
    let count = 0;
    int = setInterval(function(){
        // console.log(count);
        number.textContent = count;
        count++;
    },1000);
})
stop.addEventListener('click', function(){
clearInterval(int);
})
