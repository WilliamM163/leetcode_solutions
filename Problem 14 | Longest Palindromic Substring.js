
/**
 * @param {string} string 
 * @returns {boolean}
 */
const isPalindrome = (string) => {
    let startIndex = 0
    let endIndex = string.length - 1

    while (startIndex < endIndex) {
        const startChar = string[startIndex]
        const endChar = string[endIndex]
        if (startChar !== endChar) {
            return false
        }
        startIndex++
        endIndex--
    }
    return true
}

/**
 * Starts checking for longest substrings if they are palindromes and returns early
 * @param {string} string
 * @returns {string} longest palindrome
 */
const longestPalindrome = (string) => { 
    // Length is length of the substring we are aiming for
    for (let combinations = 1; combinations <= string.length; combinations++) {
        // We are now going to try substrings of certain length
        let startIndex = 0
        let endIndex = string.length - combinations + 1
        while (endIndex <= string.length) {
            const substring = string.substring(startIndex, endIndex)
            console.log({startIndex, endIndex, substring})
            if (isPalindrome(substring)) {
                return substring
            }
            startIndex++
            endIndex++
        }
    }

    // Base condition: length = 1
    return string
}

