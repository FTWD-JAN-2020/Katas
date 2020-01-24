/**
 * 1/22/2020
 * Absent Vowel
 * https://www.codewars.com/kata/56414fdc6488ee99db00002c/javascript 
 */
// Solution 1
function absentVowel(x){
  let arr = x.split("")   // make string x into an array

  for(let i = 0; i < arr.length; i++){  // loop through the array
  if(!arr.includes("a"))                // if "a" is not found then return 0 and do the same for each else if statement
    return 0;
  else if(!arr.includes("e"))
    return 1;
  else if(!arr.includes("i"))
    return 2;
  else if(!arr.includes("o"))
    return 3;
  else if(!arr.includes("u"))
    return 4;
  }
}

// Solution 2
function absentVowel(x){
  switch(-1) // check which case matches the expression (i.e. -1), if the case matches then return the corresponding number
  {
    case x.split('').indexOf('a'): return 0;
    case x.split('').indexOf('e'): return 1;
    case x.split('').indexOf('i'): return 2;
    case x.split('').indexOf('o'): return 3;
    case x.split('').indexOf('u'): return 4;
  }
}

// Solution 3
function absentVowel(x){
  if(x.indexOf('a') == -1) return 0
  else if (x.indexOf('e') == -1) return 1
  else if(x.indexOf('i') == -1)return 2
  else if(x.indexOf('o') == -1)return 3
  else if(x.indexOf('u') == -1) return 4
}