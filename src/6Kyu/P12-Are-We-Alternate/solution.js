/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

// Time Complexity O(n^2)
function isAlt(word) {
    // happy codinggg
    let array = ["a","e","i","o","u"]
    let check = array.includes(word[0]) ? "vowel" : "consonant"
    
    for(let i = 0; i < word.length; i++){
      if(check === "consonant" && !array.includes(word[i])){
          check = "vowel"
      }
      
      else if(check === "vowel" && array.includes(word[i])){
        check = "consonant"
      }
      
      else{
        return false
      }
    }
    return true
  }