/**
 * Tuesday 1/21/2020
 * Count the Divisors of a Number 
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e
 */
// Solution 1
function getDivisorsCnt(n){
  let divisor = 0;     // keeps count of the amount of divisors 
  
  for(let i = 0; i <= n; i++){
    /**
     * == vs === (read more here == vs ===)
     * == converts the variable values to the same type before performing 
     *    comparison. In other words, it just compares the values and not the types.
     * === does NOT convert the variable values to the same type before 
     *     comparing. Returns true only if BOTH values and types are identical 
     *     for the two variables being compared.
     */
    
    // Example
    // let elevenStr = '11'
    // let elevenNum = 11
    // console.log(elevenStr == elevenNum) this will return true
    // console.log(elevenStr === elevenNum) this will return false 
    
    if(n % i === 0){          // checks if i is a divisor of n
      divisor = divisor + 1;  // other ways to write this line: divisor += 1 or divisor++
    } 
  }

  return divisor;
  }
  
