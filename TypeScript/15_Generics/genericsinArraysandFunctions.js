"use strict";
function getSearchProducts0(products) {
    //do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getSearchProducts1 = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
getSearchProducts0([1, 2, 3, 4, 5, 6]);
getSearchProducts1([1, 2, 3, 4, 5, 6]);
