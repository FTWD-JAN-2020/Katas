/**
 * 1/22/2020
 * Ordered Count of Characters
 * https://www.codewars.com/kata/57a6633153ba33189e000074/javascript 
 */
// Solution 1
var orderedCount = function (text) {
  let op = {}
  let values = []
  for(let i=0;i<text.length;i++){
    op[text[i]] = op[text[i]] || 0
    !op[text[i]] && values.push(text[i])
    op[text[i]]++
  }
  return values.map((e,i)=>([e,op[e]]))
}

// Solution 2
const orderedCount = function (text) {
  const result = [];
  const letters = {};
  
  for (let i = 0, l = text.length; i < l; i++) {
    const char = text[i];
    const index = letters[char];
    
    if (index === undefined) {
      letters[char] = i;
      result.push([char, 1]);
    } else {
      result[index][1]++;
    }
  }
  
  return result;
}