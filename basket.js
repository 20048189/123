/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/


function calculateTotalCost(basket, prices) {
    let totalcost = 0;

    for (let product in basket) {
        if (prices.hasOwnProperty(product)) {
            totalcost += basket[product] * prices[product];
        }
    }

    return totalcost;
}
const basket = {
    "apple": 3,
    "banana": 2,
    "orange": 1
};

const prices = {
    "apple": 1.5,
    "banana": 0.5,
    "orange": 0.75
};

alert(calculateTotalCost(basket, prices));