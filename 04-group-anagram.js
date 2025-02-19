// Group Anagrams (LeetCode 49 - Medium)
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.






function groupAnagramBruteForce(strs) {
    const length = strs.length;

    let result = [];
    let visited = Array(length).fill(false);

    for (let i=0; i<length; i++) {
      if (visited[i]) continue //skips visited element

      visited[i] = true;
      let group = [strs[i]]

      for (let j=i+1; j<length; j++) {
        if(!visited[j]  &&  isAnagram(strs[i], strs[j])) {
            visited[j] = true
            group.push(strs[j])
        }
      } 
      
      result.push(group);
    }

    return result;
}

function isAnagram(s1, s2) {
    if(s1.length !== s2.length) return false
    return (s1.split('').sort().join() === s2.split('').sort().join())
}

console.log(groupAnagramBruteForce(["eat", "tea", "tan", "ate", "nat", "bat"]))

// Time Complexity => O(n² × k log k)
// Space Complexity => O(n)