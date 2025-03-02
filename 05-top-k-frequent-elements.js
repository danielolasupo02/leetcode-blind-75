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
// 	// create an empty hashmap
// 	const freqMap = new Map();

// 	// get the corresponding array element's frequency map
// 	for (let num of nums) {
// 		freqMap.set(num, ((freqMap.get(num) || 0) + 1))
// 	}

// 	// sort the frequency map in descending order - highest to lowest
// 	const sorted = [...freqMap.entries()].sort( (a,b) => b[1] - a[1])
	
// 	// get the top K frequent elements in the sorted array
// 	const topK = sorted.slice(0, k).map((entry) => entry[0])
	
// 	// return the result
// 	return topK
// }

// console.log(topKFrequentBruteForce([1,1,1,2,2,3], 2))

// console.log(topKFrequentBruteForce([1], 2))


// // Time-Complexity => O(N log N)
// // Space-Complexity => O(N)


function topKFrequentOptimal(nums, k) {
    // Step 1: Build a frequency Map
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    // Step 2: Create buckets based on frequency
    let buckets = Array.from({length: nums.length + 1}, () => ([]))
    for (const [num,freq] of freqMap.entries()) {
        buckets[freq].push(num)
    }
    
    // Step 3: Fetch Only Top K Elements
    const result = [];
    for (let i = buckets.length -1; i>=0 && result.length < k; i--) {
        if(buckets[i]) {
            result.push(...buckets[i])
        }
    }
    return result.slice(0, k)
    
}

console.log(topKFrequentOptimal([1,1,1,2,2,3], 2))

// // Time-Complexity => O(N)
// // Space-Complexity => O(N + K)
