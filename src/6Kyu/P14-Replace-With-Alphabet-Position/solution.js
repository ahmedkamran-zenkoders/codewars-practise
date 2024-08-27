/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

// Time Complexity O(n)
function alphabetPosition(text) {
    let map = new Map()
    let array = []
    let value = 1
    text = text.toLowerCase()
    
    for(let i = 97; i <= 122; i++){
      map.set(String.fromCharCode(i), value)
      value++
    }
    
    for(let i = 0; i < text.length; i++){
      if(map.has(text[i])) array.push(map.get(text[i]))
    }
    
    return array.join(" ")
    
  }