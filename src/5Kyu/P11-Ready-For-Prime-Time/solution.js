/*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11]
*/

// Time Complexity O(n^2)
function prime(num) {
    // Generate an array containing every prime number between 0 and the num specified (inclusive)
    const array = []
    const set = new Set()
    let primeNum = true
    
    for(let i = 0; i <= num; i++){
      primeNum = true
      if(i === 0 || i === 1) continue
      else if(i === 2 || i === 3 || i === 5 ) array.push(i)
      else{
          for(let j = 2, s = Math.sqrt(i); j <= s; j++) {
            if(i % j === 0){
              primeNum = false;
              break;
            } 
          }
        if(primeNum){
          array.push(i)
        } 
      }
    }
    
    return array
  }