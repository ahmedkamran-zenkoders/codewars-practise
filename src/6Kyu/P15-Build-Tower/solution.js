/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// Time Complexity O(n^2)
function towerBuilder(nFloors) {
    // build here
    let str = ""
    const array = []
    let count = 1
    
    while(count <= nFloors){
       for(let i = count; i < ((nFloors*2)-1)/2; i++){
      str += " "
    }
    
    for(let i = 0; i < (count*2) - 1; i++){
      str += "*"
    }
    
      for(let i = count; i < ((nFloors*2)-1)/2; i++){
      str += " "
    }
    array.push(str)
    str = ""
    count++ 
    }
   return array
  }