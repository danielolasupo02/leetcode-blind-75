// Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.

// Constraints
// 1 ≤ nums.length ≤ 10⁵
// -10⁹ ≤ nums[i] ≤ 10⁹

// Input: nums = [1, 2, 3, 1]
// Output: true
// Explanation: The number 1 appears twice.

// Input: nums = [1, 2, 3, 4, 5]
// Output: false
// Explanation: All elements are unique.

// Input: nums = [1000000, -1000000, 500, 0, 999999, -1000000]
// Output: true
// Explanation: -1000000 appears twice.

// function bruteForceContainsDuplicate(nums) {
//     const numLength = nums.length

//     for (let i=0; i<numLength; i++) {
//         for (let j=i+1; j<numLength; j++) {
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
    
//     return false;
// }

// console.log(bruteForceContainsDuplicate([1, 2, 3, 1, 2]))
// console.log(bruteForceContainsDuplicate([1, 2, 3, 4, 5]))
// console.log(bruteForceContainsDuplicate([1000000, -1000000, 500, 0, 999999, -1000000]))

function optimalContainsDuplicate(nums){ 
    const set = new Set();

    for (char of nums) {
        if (set.has(char)) {
            return true;
        }
        set.add(char)
    }
    return false;
}

console.log(optimalContainsDuplicate(['a', 'b', 'c', 'd']));
console.log(optimalContainsDuplicate([1, 2, 3, 1]));
console.log(optimalContainsDuplicate([1000000, -1000000, 500, 0, 999999, -1000000]));
