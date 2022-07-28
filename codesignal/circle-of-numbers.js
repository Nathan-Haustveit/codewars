//Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
//
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
//
// Example
//
// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.

//Solution

function solution(n, firstNumber) {
    // gives you the ammount of numbers between first number and radially opposite number
    let radius = n / 2;
    console.log(radius)
    // gives answer only if it doesn't pass 0
    let distance = firstNumber + radius;
    console.log(distance, 'distance')
    // gives answer if it does pass 0
    if (distance >= n){
        return distance = distance - n;
    } else {
        return distance;
    }


}