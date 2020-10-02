// You will be given a list of stock prices for a given day and your goal is to return the maximumprofit that could have been made by buying a stock at the given price and then selling the stocklater on.

// For example if the input is:
// [45, 24, 35, 31, 40, 38, 11] 

// Then your program should return 16 because if you bought the stock at $24 and sold it at $40, aprofit of $16 was made and this is the largest profit that could be made.

// If no profit could have been made, return -1.

//////////////////////////////////

//ALGORITHM
// loop through all of the prices set the selling price as the next price in list
// if the next number isn't lower than the current price, don't sell 
// if it is lower, get the profit
// once a stock price is found that is cheaper than the current price, set this as the new price and continue looping through and comparing prices
// if not, keep changing the sell price and keep the buying price

//CODE
function Stocks(arr) {
    let lowestPrice = arr[0]
    let profit = -1
    for (let i = 1; i < arr.length; i++) {
        if( arr[i] > lowestPrice) {
        profit = Math.max(profit, arr[i] - lowestPrice)
        }
        else {
            lowestPrice = arr[i]
        }
}
    return profit 
}
console.log(Stocks([45, 24, 35, 31, 40, 38, 11]));
