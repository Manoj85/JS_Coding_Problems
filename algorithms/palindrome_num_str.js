/**
 * @param {number \ string} str
 * @return {boolean}
 */
const isPalindrome = (str) => {
    let strArr = str.toString().split("");
    const len = strArr.length;

    for (let i = 0; i < len/2; i++) {
        if (strArr[i] !== strArr[len-1-i]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(12321));

/*
 * Simplified
 */

const checkPalindrome = (str) => {
    // Convert the `input` to `string` and `trim`
    const str_validated = str.toString().trim();

    // Clean the `input (validated above)` and remove any spaces
    // Example: 'race car'; it's a palindrome removing the space
    const clean_str = str_validated.toLowerCase().replace(/\W/g, '');

    // create a reverse string from the `cleaned input string` above
    const str_rev = clean_str.split('').reverse().join('').trim();

    // Return a boolean - comparing `reverse string` to the `cleaned string`
    return clean_str === str_rev;
}

console.log(checkPalindrome(12321));
console.log(checkPalindrome(123214));
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('race car'));