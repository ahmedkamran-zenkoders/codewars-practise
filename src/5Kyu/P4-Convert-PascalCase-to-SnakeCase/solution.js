/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

// Time Complexity O(n)
function toUnderscore(string) {
    // TODO: complete 
    if(string.toString().length === 1) return string.toString()
    
    const array = string.toString().match(/([A-Z][a-z]*\d*)/g)
    for(let i = 0; i < array.length; i++){
      let text = array[i]
      text = text.charAt(0).toLowerCase() + text.slice(1)
      array[i] = text
    }
    return array.join("_")
  }