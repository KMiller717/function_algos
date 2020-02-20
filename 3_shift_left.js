// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    for (var i=0; i< arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    arr.push(0);
    return arr;
    // YOUR CODE HERE
}
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);