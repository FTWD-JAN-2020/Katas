/**
 * 1/23/2020
 * Get the Middle Character
 * https://www.codewars.com/kata/56747fd5cb988479af000028 
 */
// Solution 1
function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 == 0) { // if the string is even
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else { // if the string is odd
    return string.charAt(middleIndex);
  }
}

// Solution 2
function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2) { // if its odd you will always get a remainder of 1
    return string.charAt(middleIndex);
  } else { // otherwise the string is even
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
}

// Solution 3
function getMiddle(s) {
  let position;
  let length;
  if(s.length % 2){
    position = s.length / 2;
    length = 1;
  }
  else {
    position = s.length / 2 - 1;
    length = 2;
  }
  return s.substring(position, position + length)
}

// Solution 4
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}