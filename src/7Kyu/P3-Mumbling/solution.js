/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Time Complexity O(n^2)
function accum(s) {
	// your code
  const array = []
  let tempString = ""
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j <= i; j++){
      if(j === 0) {
        tempString += s[i].toUpperCase()
      }
      else{
        tempString += s[i].toLowerCase()
      }
    }
    array.push(tempString)
    tempString = ""
  }
  return array.join("-")
}