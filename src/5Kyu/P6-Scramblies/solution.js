/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// Time Complexity O(n)
function scramble(str1, str2) {
    const map1 = new Map()
    const map2 = new Map()
    
    for(let i = 0; i < str1.length; i++){
      if(map1.has(str1[i])){
        let count = map1.get(str1[i])
        map1.set(str1[i], ++count)
      }
      else{
        map1.set(str1[i], 1)
      }
    }
    
      for(let i = 0; i < str2.length; i++){
        if(map2.has(str2[i])){
        let count = map2.get(str2[i])
        map2.set(str2[i], ++count)
      }
      else{
        map2.set(str2[i], 1)
      }
    }
    
    
    for(let [key, value] of map2.entries()){
        if(!map1.has(key)) return false
        if(map1.get(key) < map2.get(key)){
            return false
        }
    }
    
    return true
  }