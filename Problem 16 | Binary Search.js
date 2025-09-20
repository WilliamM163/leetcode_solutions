/*
    IDEA:
    We are going to a simple loop, keeping track of left, middle, and right indexes.
    The simple loop keeps our algorithm memory efficient, and still time efficient
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} - returns index
 */
const search = function (nums, target) {
    let middle_index
    let left_index = 0
    let right_index = nums.length - 1

    while (left_index <= right_index) {
        middle_index = Math.floor((left_index + right_index) / 2)
        if (nums[middle_index] === target) {
            return middle_index
        } else if (nums[middle_index] < target) {
            // We move our search to the right sub array
            left_index = middle_index + 1
        } else if (nums[middle_index] > target) {
            // We move our search to the left sub array
            right_index = middle_index - 1
        }
    }
    return -1 // Indicating our target is not in our array
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
console.log(search([-1, 0, 3, 5, 9, 12], 1))
console.log(search([-1, 0, 3, 5, 9, 12], -1)) // Testing Lower Bound
console.log(search([-1, 0, 3, 5, 9, 12], 12)) // Testing Upper Bound
console.log(search([-1, 0, 3, 5, 9, 12], -10)) // Testing Outside Lower Bound
console.log(search([-1, 0, 3, 5, 9, 12], 20)) // Testing Outside Upper Bound