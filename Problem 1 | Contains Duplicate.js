// Contains Duplicate
/*  
    Given an integer array nums, return true if any
    value appears at least twice in the array, and
    return false if every element is distinct.
*/

const containsDuplicate = function(nums) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if ( hashMap[num] ) { return true }
        else { hashMap[num] = true }
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))