"use strict";
function getSearchProducts0<T>(products: T[]): T {
   //do some database operations
    const myIndex = 3;
    return products [myIndex];
}

const getSearchProducts1= <T,> (products : T[]): T =>{
    //do some database operations
    const myIndex = 4;
    return products [myIndex];
}
getSearchProducts0([1,2,3,4,5,6]);
getSearchProducts1([1,2,3,4,5,6]);
