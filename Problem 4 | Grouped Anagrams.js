// Grouped Anagrams
/* 
    Given an array of strings strs, group the
    anagrams together. You can return the
    answer in any order.
*/

// IDEA
/*
    We sort each string. This gives us a unique hash
    which identifies a group of anagrams.
    We then push the unorded string into a slot in
    our hash map. This slot is determined by our
    ordered string.
    Efficiency:
        let m be length of list
        let n be length of string
        O(mnlogn)
*/
const groupAnagrams = function (strs) {
    const hashMap = {}
    for (let i = 0; i < strs.length; i++) {
        const currentString = strs[i]
        const key = orderString(currentString)
        if (!hashMap[key]) { hashMap[key] = [ currentString ] }
        else { hashMap[key].push(currentString) }
    }
    return Object.values(hashMap);
}

const orderString = function (str) {
    // quicksort algo
    if (str.length <= 1) { return str }
    const pivot = str[0]
    let left = ""
    let right = ""
    for (let i = 1; i < str.length; i++) {
        const char = str[i]
        if (pivot <= char) { right += char }
        else { left += char }
    }
    return orderString(left) + pivot + orderString(right)
}
