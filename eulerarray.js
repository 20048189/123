
//  1. Create a function which takes parameters a,b,l
// l is a list of integers, Find the sum of all the multiples of a or b in l.

// 2.Create a function which takes parameters a,l
// a is a list of two integers
// l is a list of integers
// Find the sum of all the multiples of a or b in l.

// 3.Create a function which takes parameters a,l
// a is a list of integers
// l is a list of integers
// Find the sum of all the multiples of a or b in l.


function sumMultiple(a, b, l) {
    return l.reduce((plus, present) => {
        if (present % a === 0 || present % b === 0) {
            return plus + present;
        } else {
            return plus;
        }
    }, 0);
}

const a = 2;
const b = 7;
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(sumMultiple(a, b, l));