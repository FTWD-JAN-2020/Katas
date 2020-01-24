/**
 * Tuesday 1/21/2020
 * Sum of Positive
 * https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript 
 */
// Solution 1
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}