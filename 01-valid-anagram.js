console.log("Did stuff!")

// Question: Valid Anagram
// Problem Statement
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Definition
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all original letters exactly once.

// Constraints
// s and t consist of lowercase English letters only.
// 0 ≤ s.length, t.length ≤ 10⁵

// Input: s = "listen", t = "silent"
// Output: true
// Explanation: Both words have the same letters in a different order.

// Input: s = "hello", t = "helloo"
// Output: false
// Explanation: `t` has an extra 'o', so it can't be an anagram.

// Brute Force

// function bruteForceValidAnagram(s, t) {
//     if(s.split("").sort().join() == t.split("").sort().join()) {
//         return true;
//     }
//     return false;
// }

// console.log(bruteForceValidAnagram("liste", "silent"));

function optimalValidAnagram(s, t) {
    if (s.lenght !== t.lenght) return false
    
    charCount = {};

    for (char of s) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (char of t) {
        if (!charCount[char]) return false
        charCount[char]--
    }

    return true;
}

console.log(optimalValidAnagram("silent", "listen"));
console.log(optimalValidAnagram("hello", "helloo"));