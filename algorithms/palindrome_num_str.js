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
    const str_validated = str.toString().trim();
    const clean_str = str_validated.toLowerCase().replace(/\W/g, '');
    const str_rev = clean_str.split('').reverse().join('').trim();
    return clean_str === str_rev;
}

console.log(checkPalindrome(12321));
console.log(checkPalindrome(123214));
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('race car'));