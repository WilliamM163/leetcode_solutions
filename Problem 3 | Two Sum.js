function twoSum(nums, target) {
    const table = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num
        if (table[complement] !== undefined) {
            return [table[complement], i]
        } else {
            table[num] = i
        }
    }
}