
console.log(2>=1)  //true
console.log(2<=1) //false
console.log(2==1) //false
console.log(2!=1) //true
console.log((Infinity)>=Infinity) //true
console.log((Infinity)>Infinity) //false
// console.log(2<3<4) //true  
// console.log(4>3>2) //false
// console.log(0==Number("0")==false) //false
console.log(2<3 && 3<4) //true
console.log(2<3 && 3>4) //false
console.log(2<3 || 3>4) //true
console.log(4>3 && 3>2) //true
console.log(null==0) //false
console.log(false==null) //false
console.log(false==0) //true

// strictly equal comparison
console.log(!(false===undefined)) //true
console.log(!("0"=== 0))  //true
console.log(!!(false===undefined)) //false

console.log("2">1); //true
console.log("02">1); //true
 
console.log(null>0); //false
console.log(null>=0); //true
// The reason is that  an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating this as 0. That's why null >=0 is true and null > 0 is false. 

//=== is strictly equals and == is equals to
console.log(null == 0); //false
console.log(Number(null)===0) //false 
console.log(Number(null)==0) //true

console.log(+0===-0) //true
console.log(Infinity===(2**(Infinity))) //true
console.log(NaN===Infinity) //false
console.log(NaN===NaN) //false
console.log(Number(undefined)==NaN) //true
console.log(Number(undefined)===NaN) //false
// Avoid  == ,>,<,<=,>= comparisons with undefined
// console.log(null>0);  //false
// console.log(null==0); //false
// console.log(null==0); //false
// console.log(null>=0); //true
// console.log(undefined==0); //false
// console.log(undefined>=0); //false
// console.log(undefined<0);  //false
// console.log(undefined>0); //false

//BITWISE OPERATIONS
//1=00000001
//2=00000010
//3=00000011
//4=00000100
//5=00000101

console.log(1|2); //00000001|00000010=00000011=3 //Bitwise OR => if either of the bits is 1, the result is 1
console.log(1&2); //00000001&00000010=00000000=0 //Bitwise AND => if both bits are 1, the result is 1
console.log(1^2); //00000001^00000010=00000011=3 //Bitwise XOR => if both bits are different, the result is 1
console.log(~1); //~00000001=11111110=-2 //Bitwise NOT => inverts the bits
console.log(1<<2); //00000001<<2=00000100=4 //Bitwise left shift => shifts the bits to the left
console.log(4>>1); //00000100>>1=00000010=2 //Bitwise right shift => shifts the bits to the right
console.log(5>>>1); //00000101>>>1=00000010=2 //Bitwise right shift with zero fill => shifts the bits to the right and fills the left with 0
console.log("5"|"2"); //5
console.log("5"&"2"); //0
console.log("5"<<"2"); //20
console.log("5">>"2"); //1