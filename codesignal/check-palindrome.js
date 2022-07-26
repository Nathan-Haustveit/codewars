//Given the string, check if it is a palindrome.
//
// Example
//
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

//Solution

function solution(inputString) {
    if(inputString === inputString.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}