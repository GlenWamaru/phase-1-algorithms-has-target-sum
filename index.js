function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();

  for (let num of array) {
    const difference = target - num;
    if (seen.has(difference)) {
      return true;
    }
    seen.add(num);
  }

  return false;

}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the number of elements in the input array.
  Space complexity: O(n) for the Set data structure.
*/

/* 
  Add your pseudocode here
  - Initialize an empty set called "seen" to keep track of seen numbers.
  - Iterate through each element "num" in the input "array."
    - Calculate "difference" as the target minus the current "num."
    - Check if "difference" is in the "seen" set.
      - If it is, return true (a pair that adds up to the target was found).
    - Otherwise, add the current "num" to the "seen" set.
  - If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  This function takes an array of integers and a target integer as input. It uses a Set data structure to keep track of numbers that have been seen while iterating 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5))
}

module.exports = hasTargetSum;
