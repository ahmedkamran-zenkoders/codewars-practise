/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


// Time Complexity O(n)
var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    const uniqueArray = []
    let count = 0
    
    for(let i = 0; i < iterable.length; i++){
        if(uniqueArray.length === 0) uniqueArray.push(iterable[i])
        if(uniqueArray[count] !== iterable[i]){
           uniqueArray.push(iterable[i])
           ++count
        } 
    }
    
    return uniqueArray
  }