/*if we list all the natural numbers below 10 that are multiple of 3 and 5 we get 
3, 5, 6, and 9.
the sum of these multiple is 23
find the sum of all the multipes of 3 or 5 below 1000. */

sum = 0;
for (let i = 1; i<1000; i++){
    if (i % 3 == 0 || i % 5 == 0){
        sum +=i;
    }
}
alert (sum);

sumOfNum = (a, b, n) => {
    sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i;
        }
    }
    return sum;
}

alert("This is function... " + sumOfNum(3, 5, 1000));


