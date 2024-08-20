/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


// Time Complexity O(n)
function solution(str, ending){
    // TODO: complete
    let j = 1
    for(let i = ending.length - 1; i >= 0; i--){
      if(ending[i] !== str[str.length - j]) return false
      j++
    }
    return true
  }