/*
    THREE SUM
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

    Note: This is two sum in disguise
    Lets first sort our list
    We iterate through our list to get the first number. The negated form of this is our target
    a + b + c = 0   =>  b + c = -a
    We run two sum on the remaining list to get b and c

    We return a set of solutions { [a, b, c], ... }
*/

// Three Sum Algorithm
const threeSum = function (nums) {
  const solutionSet = [];

  // 1. Sort the input array. This is crucial for the two-pointer approach
  // and for easily handling duplicates.
  nums.sort((a, b) => a - b);

  // Iterate through the array to pick the first number 'a'
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for 'a' to avoid duplicate triplets.
    // If the current number is the same as the previous one,
    // it will form the same triplets, so we skip it.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Define 'a', and calculate the target for 'b' and 'c'
    const a = nums[i];
    const target = -a;

    // Use two pointers for the remaining subarray
    let left = i + 1; // Pointer for 'b'
    let right = nums.length - 1; // Pointer for 'c'

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        // Found a triplet: [a, nums[left], nums[right]]
        solutionSet.push([a, nums[left], nums[right]]);

        // Move both pointers to find other potential triplets.
        left++;
        right--;

        // Skip duplicate values for 'b'
        // If nums[left] is the same as the previous nums[left-1],
        // it will form a duplicate triplet with 'a' and 'c'.
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicate values for 'c'
        // If nums[right] is the same as the next nums[right+1],
        // it will form a duplicate triplet with 'a' and 'b'.
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < target) {
        // Sum is too small, need a larger 'b'
        left++;
      } else {
        // Sum is too large, need a smaller 'c'
        right--;
      }
    }
  }

  return solutionSet;
};