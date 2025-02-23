// Question
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= number of unique elements in the array

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]


// function topKFrequentBruteForce(nums, k) {
// 	const freqMap = new Map();

// 	for (let num of nums) {
// 		freqMap.set(num, (freqMap.get(num) || 0) + 1)
// 	}

// 	const sorted = [...freqMap.entries()].sort((a,b) => b[1] - a[1])

// 	const topK = sorted.slice(0, k).map(entry => entry[0])

// 	return topK;
// }


function topKFrequentBruteForce(nums, k) {
	const freqMap = new Map();

	for (let num of nums) {
		freqMap.set(num, ((freqMap.get(num) || 0) + 1))
	}

	const sorted = [...freqMap.entries()].sort( (a,b) => b[1] - a[1])
	
	const topK = sorted.slice(0, k).map((entry) => entry[0])
	
	return topK
}


console.log(topKFrequentBruteForce([1,1,1,2,2,3], 2))

console.log(topKFrequentBruteForce([1], 2))
