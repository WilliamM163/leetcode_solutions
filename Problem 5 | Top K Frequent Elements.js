/*  Top K Frequent Elements

    Given an integer array nums and an integer k,
    return the k most frequent elements.
    You may return the answer in any order.
*/

/*  IDEA
    
    Insert elements insuccession into hash map and
    increment value each time.
    Convert hash map to array, sort array by value,
    return k highest values.
*/
const topKFrequent = function (nums, k) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!hashMap[num]) { hashMap[num] = 1 }
        else { hashMap[num] += 1 }
    }
    const entries = Object.entries(hashMap)
    const sortedEntries = sort(entries)
    const returnArray = []
    for (let i = 0; i < k; i++) {
        returnArray.push(+sortedEntries[i][0])
    }
    return returnArray
}

const sort = function(entries) {
    // quicksort algo (desc.)
    if (entries.length <= 1) { return entries }
    const pivot = entries[0]
    let left = []
    let right = []
    for (let i = 1; i < entries.length; i++) {
        const currentPair = entries[i]
        if (currentPair[1] >= pivot[1]) {
            left.push(currentPair)
        } else {
            right.push(currentPair)
        }
    }
    left = sort(left)
    right = sort(right)
    return [...left, pivot, ...right]
}
