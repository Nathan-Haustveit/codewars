//Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.
//
// Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000

//Solution

function past(h, m, s){
    const hoursToMilliseconds = h * 60 * 60 * 1000;
    const minutesToMilliseconds = m * 60 * 1000;
    const secondsToMilliseconds = s * 1000;
    return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
}