/*
Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// Time Complexity O(n^2)
function high(x){
    let newScore = 0;
    let highestScore = 0;
    let scoredText = ""
    let map = new Map()
    let array = x.split(" ")
    const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"
                       ,"v","w","x","y","z"]
    for(let i = 0; i < characters.length; i++){
      map.set(characters[i], i+1)
    }
    
    for(let i = 0; i < array.length; i++){
      let text = array[i]
      for(let j = 0; j < text.length; j++){
        newScore += map.get(text[j])
      }
      if(newScore > highestScore){
        highestScore = newScore
        scoredText = text
      }
      newScore = 0
    }
    return scoredText
  }