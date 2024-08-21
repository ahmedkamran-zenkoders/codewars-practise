/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// Time Complexity O(n)
function generateHashtag (str) {
    const array = str.split(" ")
    
    if(str.trim().length === 0) return false 
    
    for(let i = 0; i < array.length; i++){
      let text = array[i]
      text = text.charAt(0).toUpperCase() + text.slice(1)
      array[i] = text
    }
    const result = `#${array.join("")}`
    
    if(result.length > 140) return false
    
    return result
    
  }