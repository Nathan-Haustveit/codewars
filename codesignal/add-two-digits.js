//You are given a two-digit integer n. Return the sum of its digits.
//
// Example
//
// For n = 29, the output should be
// solution(n) = 11.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// A positive two-digit integer.
//
// Guaranteed constraints:
// 10 ≤ n ≤ 99.
//
// [output] integer
//
// The sum of the first and second digits of the input number.

//Solution

function solution(n) {
    // convert number to string, split string into two
    n = n.toString().split('');
    // variable to set sum
    let sum = 0;

    for (let i = 0; i < n.length; i++){
        //convert array back to num to add and get total
        sum += parseInt(n[i]);
    }
    return sum;
}