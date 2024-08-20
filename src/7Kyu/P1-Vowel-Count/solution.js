/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


// Time Complexity O(n)
function getCount(str) {
    let counter = 0
    for(let i = 0; i < str.length; i++){
      if(str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u")){
        counter++
      }
    }
    return counter;
  }