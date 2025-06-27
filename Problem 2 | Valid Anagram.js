// Valid Anagram
/*
    Given two strings s and t, return true if t
    is an anagram of s, and false otherwise.
*/

// Approach
const isAnagram = function (s, t) {
    if (s.length !== t.length) { return false }

    /*
        Logic:
        If s is an anagram of t they must contain the
        exact same amount of letters.
        So I will make a hash table, I will insert items
        character by character for s, then remove character
        by character for t. If the hash table is empty we have
        an anagram.
        This should be O(n)
    */
    const hashTable = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (hashTable[char]) { hashTable[char] += 1 }
        else { hashTable[char] = 1 }
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (hashTable[char] > 1) { hashTable[char] -= 1 }
        else { delete hashTable[char] }
    }
    if (Object.keys(hashTable).length === 0) { return true }
    else { return false }
};

// Testing
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("aacc", "ccac"))