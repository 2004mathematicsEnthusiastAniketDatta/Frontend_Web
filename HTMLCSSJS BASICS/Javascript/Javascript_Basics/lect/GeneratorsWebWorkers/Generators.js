//aap execution ko pause kar sakte ho and bol sakte ho ki ab agla step karo aur fir agla step jab bhi chahiye wo step kar skte ho

function* numbersGen(){
    console.log('Function started');
    let result = 1 + 1;
    yield 1;
    console.log('Function resumed');
    result += yield;
    return result;
}
let ans=numbersGen();
console.log( ans.next().value);
console.log( ans.next().value);


//print all primme numbers with generator function
function* generatePrimes(range) {
    for (let num = 2; num <= range; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) yield num;
    }
  }
  
  // Example usage:
  const primes = generatePrimes(20);
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 
 console.log(primes.next().value); 

//  const primes = generatePrimes(20);
// for (const prime of primes) {
//   console.log(prime);
// }