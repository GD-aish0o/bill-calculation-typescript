function CalculateBill(price, quantity) {
    // formula to calculate total amount
    var total = price * quantity;
    // answer after applying the formula
    return total;
}
// lets assume that in a store I've bought 5 candies, each costs 10 
// let this funtion do calculations for us.
var price = 20.5;
var quantity = 5;
// storing the function's result in a variable
var total = CalculateBill(price, quantity);
console.log("Your total bill is:", total);
