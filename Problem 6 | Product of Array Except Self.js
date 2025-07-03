/*  PRODUCT OF ARRAY EXCEPT SELF
    Given an integer array nums, return an array answer such that
    answer[i] is equal to the product of all the elements of nums
    except nums[i].


    IDEA
    [a, b, c, d] -> [bcd, acd, abd, abc]
    If we look closer at a single index in both, we can find
    a mix of prefix and suffix
    [a, b, c, d] (index 1) -> [bcd, ...] (suffix of bcd)
    [a, b, c, d] (index 2) -> [bcd, acd, ...] (prefix of a, suffix of cd)
    We can use our findings to create a prefix and suffix list
    suffix: ['bcd', 'cd', 'd', '']
    prefix: ['', 'a', 'ab', 'abc']
    We then multiply each associated index with eachother to get our product
    desired outcome: [bcd, acd, abd, abc]
*/

const productExceptSelf = function (nums) {
    const suffixes = [...nums]
    for (let i = nums.length-1; i >= 0; i--) {
        if (i === nums.length-1) { suffixes[i] = 1; continue; }
        suffixes[i] = suffixes[i+1] * nums[i+1]
    }

    const prefixes = []
    for (let i = -1; i < nums.length -1; i++) {
        if (i == -1) { prefixes.push(1); continue; }
        prefixes.push(prefixes[i] * nums[i])
    }

    const result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(prefixes[i] * suffixes[i])
    }
    return result
}
