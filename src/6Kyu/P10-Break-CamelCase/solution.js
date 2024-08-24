/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// Time Complexity o(n)
function solution(string) {
    const array = string.split(/(?=[A-Z])/);
    return array.join(" ")
  }