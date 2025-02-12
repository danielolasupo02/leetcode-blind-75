// Problem Statement
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// You may assume that each input has exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9


// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Explanation: nums[1] + nums[2] = 2 + 4 = 6

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 10⁴
// -10⁹ <= nums[i] <= 10⁹
// -10⁹ <= target <= 10⁹
// Exactly one valid answer exists.


// function bruteForceTwoSum(nums, target) {
//     const numLength = nums.length;

//     for (let i = 0; i<numLength; i++) {
//         for (let j=1; j<numLength; j++) {
//             if (nums[i] + nums[j] === target) return (i + ", " + j)
//         }
//     }
//     return false
// }

// console.log(bruteForceTwoSum([2,7,11,15], 9));
// console.log(bruteForceTwoSum([3,2,4], 6));

function optimalTwoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i<nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)) 
            return [map.get(complement), i]

        map.set(nums[i], i)
    }

    console.log(map)
    return 'No two sum found in the array'
}


console.log(optimalTwoSum([2,7,11,15], 9))