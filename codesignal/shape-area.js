//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
//
//
//
// Example
//
// For n = 2, the output should be
// solution(n) = 5;
// For n = 3, the output should be
// solution(n) = 13.

//Solution

function solution(n) {
    //n = 1, a = 1, 4
    //n = 2, a = 5, 8
    //n = 3, a = 13, 12
    //n = 4, a = 12, 16
    //area = area + 4
    let area = 1;
    for(var i = 1; i <= n; i++){
        const area2 = (4 * i) - 4;
        area += + area2;
    }
    return area;
}
