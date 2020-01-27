/**
 * 1/27/2020
 * Vowel Count
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript  
 */
// Solution 1
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"];
  for(let i = 0;i < str.length;i++){
    for(let j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

// Solution 2
function getCount(str) {
  // match - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match 
  // regular expressions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
  let count = 0;
  count = str.match(/[aeiou]/gi);
  
  if(count)
    return count.length;
  else
    return 0;
  // return count ? count.length : 0;
}

// Solution 3
function getCount(str) {
  let arr = str.split('');
  let filteredArr = arr.filter(character => {
    return "aeiouAEIOU".includes(character);
  })

  return filteredArr.length;

  // short version
  // return str.split('').filter(character => "aeiouAEIOU".includes(character)).length;
 }

 // Solution 4
 function getCount(str) {
  let vowelCount = 0;
  let vowelList = "aeiou";
  
  for(let i = 0; i< str.length; i++){
    if(vowelList.indexOf(str[i]) !== -1)
      vowelCount++;
  }
  return vowelCount;  
 }

 // Solution 5
 function getCount(str) {
  let vowelCount = 0;
  
  for(let i = 0; i < str.length; i++){
    if(str[i] == 'a'|| str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u' ){
      vowelCount+=1}}
  
  return vowelCount;  
 }