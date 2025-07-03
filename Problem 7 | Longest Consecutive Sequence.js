/*  LONGEST CONSECUTIVE SEQUENCE
    Given an unsorted array of integers nums, return the length
    of the longest consecutive elements sequence.

    IDEA
    Put elements into hash map
    Iterate through elements and check whether n-1 exists
        If n-1 doesn't exist we have the start of a consecutive sequence
    
*/

const longestConsecutive = function (nums) {
    // Initializing hash map with nums for keys for instant access
    const elements = new Map()
    nums.forEach(element => {
        elements.set(element)
    })

    // Checking if n-1 exists
    const sequences = new Map()
    nums.forEach(element => {
        if (!elements.has(element - 1)) {
            sequences.set(element)
        }
    })

    // Finding Sequence Length
    let maxLength = 0
    sequences.forEach((_, startElement) => {
        const sequenceLength = findSequenceLength(elements, startElement)
        if (sequenceLength > maxLength) { maxLength = sequenceLength }
    })

    // Returning Max Length
    return maxLength
}

// Finding Sequence Length
const findSequenceLength = function (elements, startElement) {
    let length = 1
    let currentElement = startElement
    while (elements.has(currentElement + 1)) {
        length++
        currentElement++
    }
    return length
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// console.log(longestConsecutive([1, 0, 1, 2]))