function isPalindrome(str){
    let i = 0; // start from the first character
    let j = str.length - 1; // start from the last character
    str = str.toLowerCase(); // convert to lowercase
    while (i < j) { // loop until the middle
        if (str[i] !== str[j]) { // if the characters are not equal
            return false; // it is not a palindrome
        }
        i++; // move to the next character from the left
        j--; // move to the previous character from the right
    }
    return true; // it is a palindrome
}
console.log(isPalindrome("tenet")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false