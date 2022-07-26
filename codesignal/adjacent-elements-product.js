//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
// Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
//
// 7 and 3 produce the largest product.

//Solution

function solution(inputArray) {
    let sum = -Infinity;
    for(var i = 1; i < inputArray.length; i++){
        sum = Math.max(inputArray[i] * inputArray[i - 1], sum);
    }
    return sum;
}
