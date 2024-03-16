let value=3
let negValue=-value
console.log(negValue); //-3
console.log(Infinity*0); //NaN
console.log(Infinity/0); //Infinity
console.log((Infinity)/(Infinity)); //NaN
console.log(Infinity ** 0); //1
console.log(Infinity**Infinity); //Infinity
console.log(Infinity**-Infinity); //0
console.log((-Infinity)**(Infinity)) //Infinity
console.log(Infinity**Infinity**Infinity); //Infinity for nth power of Infinity
console.log(0*Infinity) //NaN
console.log(negValue**Infinity) //Infinity
console.log(Infinity**negValue) //0
console.log(negValue*Infinity) // -Infinity
console.log(Infinity*negValue) // -Infinity
console.log(Infinity*value) //Infinity
console.log(value*Infinity) //Infinity
console.log(negValue*value) //-9
console.log(0%Infinity) //0
console.log(Infinity%0) //NaN
console.log((Infinity)/(Infinity*0)) //NaN
console.log((Infinity)-Infinity) //NaN
console.log(Infinity-0)//Infinity
console.log(Infinity-(-Infinity)) //Infinity
console.log(value-negValue) //6
console.log(negValue-value)  //-6
console.log(value+negValue) //0
console.log(negValue+value) //0
console.log(value**negValue) //0.037037037037037035
console.log(negValue**value) //-27
console.log(value/negValue)  //-1
console.log(negValue/value); //-1
console.log(value%negValue); //0
console.log(negValue%value); //-0

let str1="Hello"
let str2=" World"
let str3=str1+str2
console.log(str3); //Hello World

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log("1"+ (2 + 2)) //14
console.log((1+2)+"2") //32
console.log(1+(2+"2")) //122
console.log("1"+(2*3)) //14
// console.log(1+"2"*2) //5 : First brackets can be used
console.log((3+4)*5%3); //2
// console.log(+true); //1   for concepts //not for projects
// console.log(+""); //0  for concepts //not for projects
// num1=num2=num3=2+2 //4 is assigned to num1,num2,num3  and this is not a good practice

let gameCounter=100
++gameCounter //101

let gameCounter1=100
gameCounter1++ //100
res=gameCounter1//101
console.log(gameCounter); //101
console.log(gameCounter1); //101
console.log(res); //101
