//Given an integer n, return the largest number that contains exactly n digits.
//
// Example
//
// For n = 2, the output should be
// solution(n) = 99.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// Guaranteed constraints:
// 1 ≤ n ≤ 9.
//
// [output] integer
//
// The largest integer of length n.

//Solution

function solution(n) {
    // 10 to the power of n gets you one number of above the largest number that contains the exact amount of digets.

    // Subtracting by one will give you the correct answer.
    return Math.pow(10, n) -1;
}