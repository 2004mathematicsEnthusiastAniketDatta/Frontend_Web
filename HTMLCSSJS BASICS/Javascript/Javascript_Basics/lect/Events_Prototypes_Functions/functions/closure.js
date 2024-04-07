// "use strict";
// var i;
// for(i=0; i<5; i++){
//     console.log(i);
// }
// console.log(i);
// "use strict";
// let i;
// for(i=0; i<5; i++){
//     console.log(i);
// }
// console.log(i);

// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let fnc=counter();
// console.log(fnc());
// console.log(fnc());
// console.log(fnc());
// console.log(fnc());
"use strict";
// function abcd(){
//     let a =12;
//     return function xyz(){
//         console.log(a);
//     }
//       xyz();
//      console.log(a);
// }

// let b=abcd();
// console.log(b);

function timer(){
    return setTimeout(function(){
        console.log(12);
    },2000);
}
timer();

