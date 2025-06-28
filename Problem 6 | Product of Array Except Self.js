/*  Product of Array Except Self

    Given an integer array nums, return an array answer such that
    answer[i] is equal to the product of all the elements of nums
    except nums[i].
*/

productExceptSelf = function (nums) {
    const array = []
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        nums.forEach((element, index) => {
            if (index != i) { product *= element }
        });
        array.push(product);
    }
    return array
}