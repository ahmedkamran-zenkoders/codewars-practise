/*
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

// Time Complexity O(n^2)
function mix(s1, s2) {
    // your code
    const map1 = new Map();
    const map2 = new Map();
    const map3 = new Map();
    
    let str = ""
    
    for(let i = 0; i < s1.length; i++){
        if((s1.charCodeAt(i) >= 97 && s1.charCodeAt(i) <= 122) && map1.has(s1[i])){
            let count = map1.get(s1[i])
            map1.set(s1[i],++count)
    }
        else if(s1.charCodeAt(i) >= 97 && s1.charCodeAt(i) <= 122){
              map1.set(s1[i],1)
          }
   
      }
      
        for(let i = 0; i < s2.length; i++){
        if((s2.charCodeAt(i) >= 97 && s2.charCodeAt(i) <= 122) && map2.has(s2[i])){
            let count = map2.get(s2[i])
            map2.set(s2[i],++count)
    }
        else if(s2.charCodeAt(i) >= 97 && s2.charCodeAt(i) <= 122){
              map2.set(s2[i],1)
          }
   
      }
      
      for (let [key,value] of map1.entries()){
          if(map3.has(key) && (map3.get(key).value < value)){
              map3.set(key,{value:value, equal:false, string: "1:"})
          }
          else if(map3.has(key) && (map3.get(key).value === value)){
              map3.set(key,{value:value, equal:true, string: "=:"})
          }
          else if(!map3.has(key)){
             map3.set(key,{value:value, equal:false, string: "1:"})
          }
      }
      
      for (let [key,value] of map2.entries()){
          if(map3.has(key) && (map3.get(key).value < value)){
              map3.set(key,{value:value, equal:false, string: "2:"})
          }
          else if(map3.has(key) && (map3.get(key).value === value)){
              map3.set(key,{value:value, equal:true, string: "=:"})
          }
          else if(!map3.has(key)){
              map3.set(key, {value:value, equal:false, string: "2:"})
          }
      }
      
      const entriesArray = Array.from(map3.entries());
  
       entriesArray.sort((a, b) => {
      const [keyA, valueA] = a;
      const [keyB, valueB] = b;
      
      // Compare by value in descending order
      if (valueB.value !== valueA.value) {
        return valueB.value - valueA.value;
      }
      
      const priority = { '1:': 1, '2:': 2, '=:' : 3 };
      if (priority[valueA.string] !== priority[valueB.string]) {
        return priority[valueA.string] - priority[valueB.string];
      }
      
      return keyA.localeCompare(keyB);
    });
      
      
      const sortedMap = new Map(entriesArray);
       
       for(let[key, value] of sortedMap.entries()){
           if(value.value < 2) continue
           str += `${value.string}`
           for(let i = 0; i < value.value; i++){
               str+=`${key}`
           }
           str+="/"
       }
       
       return str.slice(0, str.length-1)
  }