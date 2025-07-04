/*  VALID PALINDROME
    A phrase is a palindrome if, after converting all uppercase letters into
    lowercase letters and removing all non-alphanumeric characters, it reads
    the same forward and backward. Alphanumeric characters include letters
    and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

    IDEA
    We use two pointers, one at the start of the string, and one at the end.
    We check whether the characters at the pointers are equal.
        If so, we move our pointers closer to the center.
        If we get to the center, we return true.
        Else, we return false
    Note: We ignore non-alphanumeric characters
*/

const isPalindrome = function(s) {
    let pointer1 = 0
    let pointer2 = s.length - 1

    while (pointer1 < pointer2) {
        let charCode1 = s.charCodeAt(pointer1)
        let charCode2 = s.charCodeAt(pointer2)
        
        if (!isAlpha(charCode1) || !isAlpha(charCode2)) {
            if (!isAlpha(charCode1)) { pointer1++ }
            if (!isAlpha(charCode2)) { pointer2-- }
            continue
        }
        
        charCode1 = lower(charCode1)
        charCode2 = lower(charCode2)

        if (charCode1 != charCode2) {
            return false
        }

        pointer1++
        pointer2--
    }
    return true
}

const isAlpha = function(charCode) {
    const condition1 = charCode >= 65 && charCode <= 90 // Capital Letter
    const condition2 = charCode >= 97 && charCode <= 122 // Lowercase Letter
    const condition3 = charCode >= 48 && charCode <= 57 // Digits
    return condition1 || condition2 || condition3
}

const lower = function(charCode) {
    if (charCode >= 65 && charCode <= 90) { return charCode + 32 }
    else { return charCode }
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome(" "))
// console.log(isPalindrome("0P"))