// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big". 
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makebig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr
}

var big = makebig([-1, 3, 5, -5]);
console.log(big);

//Print Low, Return High - Create a function that takes in an array of numbers. 
//The function should print the lowest value in the array, and return the highest value in the array.

function highlow(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (low > arr[i]) {
            low = arr[i];
        }
        if (high < arr[i]) {
            high = arr[i];
        }
    }
    console.log(low);
    return high
}

var hello = highlow([4, -3, 3, 1])
console.log(hello);

//Print One, Return Another - Build a function that takes in an array of numbers. 
//The function should print the second-to-last value in the array, and return the first odd value in the array.

function printvalues(arr) {
    value = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            value = arr[i]
            break;
        }
    }

    console.log(arr[arr.length - 2]);
    return value
}

var result = printvalues([2, 3, 7, 9]);
console.log(result);


//Double vision -- given an array (similar to saying "takes in an array') create a function that returns a new array wehre each value in the original array has been doubled. 


function dubarr(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i] * 2)
    }
    return newarr
}

var hello = dubarr([2, 3, 4])
console.log(hello)

//Negative - given an array, create and return a new one containing all the values of the original array, bt make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1, -3,-5].

function negatives(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newarr.push(arr[i] * -1)
        }
        else {
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
    return
}

negatives([2, 4, 6])
