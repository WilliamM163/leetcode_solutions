/*  TWO SUM II - INPUT ARRAY IS SORTED
    Given a 1-indexed array of integers numbers that is already sorted
    in non-decreasing order, find two numbers such that they add up to
    a specific target number. Let these two numbers be numbers[index1]
    and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
    
    Return the indices of the two numbers, index1 and index2, added by
    one as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution.
    You may not use the same element twice.

    Your solution must use only constant extra space.

    IDEA
    We use two pointers, one at the start of the array, and one at the end of the array
    We check whether the start pointer + end pointer >= target ...
*/

const twoSum = function (numbers, target) {
    let startPointer = 0
    let endPointer = numbers.length - 1

    while (startPointer < endPointer) {
        const total = numbers[startPointer] + numbers[endPointer]
        if (total > target) {
            endPointer--
        } else if (total < target) {
            startPointer++
        } else {
            return [startPointer+1, endPointer+1]
        }
    }
    return false
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
