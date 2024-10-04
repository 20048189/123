Array
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


function sumMultiples(a, b, l) {
    return l.reduce((sum, current) => {
        if (current % a === 0 || current % b === 0) {
            return sum + current;
        } else {
            return sum;
        }
    }, 0);
}

const a = 3;
const b = 5;
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumMultiples(a, b, l));