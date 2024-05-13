function CalculateBill (price:number, quantity:number ):number {
    // formula to calculate total amount
    let total = price * quantity;

    // answer after applying the formula
    return total;
}

// lets assume that in a store I've bought 5 candies, each costs 10 
// let this funtion do calculations for us.

// NOTE: try adding numbers of your choice including decimals :)

let price:number = 20.5;
let quantity :number = 5;

// storing the function's result in a variable

const total = CalculateBill(price,quantity);

console.log("Your total bill is:", total);

// for these numbers the total will be 102.5.
